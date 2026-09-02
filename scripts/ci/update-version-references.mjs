#!/usr/bin/env node
/**
 * update-version-references.mjs
 *
 * Replaces version placeholders in build output (schematics / delon dist).
 *
 * Replaces (single pass per file, tree walked only once):
 *   - "pkg": "@LIB-PLACEHOLDER"      -> "pkg": "<version>"      (schematics/package.json)
 *   - pkg@DEP-0.0.0-PLACEHOLDER      -> pkg@<version>           (TS/JS string literals)
 *   - ZORRO-0.0.0-PLACEHOLDER        -> <ng-zorro-antd version>
 *   - PEER-0.0.0-PLACEHOLDER         -> ^<delon version>
 *
 * Versions come from the root `package.json` (`dependencies` ?? `devDependencies`).
 *
 * Why this exists:
 *   The previous bash/perl implementation ran `grep -ril` + `perl -p -i` for every
 *   dependency (~60 deps x 4 recursive scans of the whole tree), which is very slow.
 *   Worse, when a package had no version in the root package.json it silently wrote
 *   the literal `undefined` into files (e.g. `@typescript-eslint/utils@undefined`).
 *
 * This script walks the tree ONCE, applies every replacement in a single regex pass
 * per file, and FAILS the build (exit 1) whenever a placeholder is used for a package
 * that has no version in `package.json`, instead of baking garbage into the output.
 *
 * Usage: node scripts/ci/update-version-references.mjs [distDir] [--version V] [--zorro Z]
 *   - distDir (default `dist/ng-alain`), resolved against the repo root (cwd).
 *   - --version / --zorro override the delon / ng-zorro-antd versions (used by the
 *     build scripts, e.g. `VERSION=latest` in integration mode).
 */

import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

const repoRoot = process.cwd();
const args = process.argv.slice(2);
const opt = (flag) => {
  const i = args.indexOf(flag);
  return i !== -1 ? args[i + 1] : undefined;
};
const targetDirArg = args.find((a) => !a.startsWith('--')) ?? 'dist/ng-alain';
// `resolve` keeps absolute paths as-is and resolves relative ones against the repo root.
const targetDir = resolve(repoRoot, targetDirArg);

const rootPkg = JSON.parse(readFileSync(resolve(repoRoot, 'package.json'), 'utf8'));

// Overrides come from the build scripts (e.g. `VERSION=latest` in integration mode).
const VERSION = opt('--version') ?? rootPkg.version;
const ZORROVERSION = opt('--zorro') ?? rootPkg.dependencies?.['ng-zorro-antd'];
const FIX_VERSION = VERSION === 'latest' ? 'latest' : `^${VERSION}`;

// Packages whose placeholders must be resolved from the root package.json.
// Keep in sync with what the schematics write (e.g. `x@DEP-0.0.0-PLACEHOLDER` /
// `"x": "@LIB-PLACEHOLDER"`). Reconciled with the Angular 22 upgrade
// (ng-alain/delon#2045): the explicit `@typescript-eslint/*` deps were dropped in
// favor of the `typescript-eslint` umbrella package.
const DEPENDENCIES = [
  // `"x": "@LIB-PLACEHOLDER"` in schematics/package.json
  '@angular/cdk',
  'swagger-typescript-api',
  'ng-alain-sts',
  'ng-alain-plugin-theme',
  // `x@DEP-0.0.0-PLACEHOLDER` in schematics (versions.ts / application / plugin)
  '@eslint/js',
  '@eslint/markdown',
  '@ng-util/monaco-editor',
  '@tailwindcss/postcss',
  'angular-eslint',
  'eslint',
  'eslint-plugin-import-x',
  'eslint-plugin-jsdoc',
  'eslint-plugin-prettier',
  'eslint-plugin-unused-imports',
  'husky',
  'lint-staged',
  'ng-zorro-antd',
  'ngx-tinymce',
  'postcss',
  'postcss-less',
  'prettier',
  'rxjs',
  'screenfull',
  'source-map-explorer',
  'stylelint',
  'stylelint-config-clean-order',
  'stylelint-config-standard',
  'stylelint-declaration-block-no-ignored-properties',
  'stylelint-order',
  'tailwindcss',
  'typescript',
  'typescript-eslint',
];

const versionOf = (name) => rootPkg.dependencies?.[name] ?? rootPkg.devDependencies?.[name];

// ---------------------------------------------------------------------------
// 1. Build the placeholder -> replacement map (most specific patterns first so
//    e.g. `pkg@DEP-0.0.0-PLACEHOLDER` wins over a bare `0.0.0-PLACEHOLDER`).
// ---------------------------------------------------------------------------
const replacements = new Map();
const missing = [];
for (const name of DEPENDENCIES) {
  const v = versionOf(name);
  if (v == null) {
    missing.push(name);
    continue;
  }
  replacements.set(`"${name}": "@LIB-PLACEHOLDER"`, `"${name}": "${v}"`);
  replacements.set(`${name}@DEP-0.0.0-PLACEHOLDER`, `${name}@${v}`);
}
replacements.set('ZORRO-0.0.0-PLACEHOLDER', ZORROVERSION);
replacements.set('PEER-0.0.0-PLACEHOLDER', FIX_VERSION);
// Catch-all: a bare `0.0.0-PLACEHOLDER` (e.g. the `version` field of
// schematics/package.json) is replaced with the delon version. The more specific
// patterns above always win because the combined regex is ordered longest-first.
replacements.set('0.0.0-PLACEHOLDER', VERSION);

const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const combined = new RegExp(
  [...replacements.keys()].sort((a, b) => b.length - a.length).map(escapeRegExp).join('|'),
  'g',
);

const HAS_PLACEHOLDER = /PLACEHOLDER/;

// Placeholders only matter in active code: commented-out ones (e.g. the disabled
// `@playwright/test@DEP-...` lines in versions.ts) must not fail the build.
const isCommentLine = (line) => {
  const t = line.trimStart();
  return t.startsWith('//') || t.startsWith('*');
};
const hasActivePlaceholder = (content) =>
  content.split('\n').some((line) => !isCommentLine(line) && line.includes('PLACEHOLDER'));
const tokensUsedInActiveCode = (content, tokens) =>
  content.split('\n').some((line) => !isCommentLine(line) && tokens.some((t) => line.includes(t)));

// ---------------------------------------------------------------------------
// 2. Walk the tree once, keeping only text files that may contain placeholders.
// ---------------------------------------------------------------------------
const SKIP_EXT = new Set([
  '.map',
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.webp',
  '.ico',
  '.woff',
  '.woff2',
  '.ttf',
  '.eot',
  '.otf',
  '.pdf',
  '.zip',
  '.gz',
]);

const candidates = [];
const walk = (dir) => {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const st = statSync(p);
    if (st.isDirectory()) {
      walk(p);
    } else if (!SKIP_EXT.has(entry.slice(entry.lastIndexOf('.')))) {
      candidates.push(p);
    }
  }
};
walk(targetDir);

const placeholderFiles = []; // { file, content } that mention "PLACEHOLDER"
for (const file of candidates) {
  const content = readFileSync(file, 'utf8');
  if (content.includes('\0') || !HAS_PLACEHOLDER.test(content)) continue;
  placeholderFiles.push({ file, content });
}

// ---------------------------------------------------------------------------
// 3. Apply replacements.
// ---------------------------------------------------------------------------
let changed = 0;
const resolved = new Set(); // replacement keys that actually matched
const leftoverFiles = [];   // files still containing a placeholder afterwards
for (const { file, content } of placeholderFiles) {
  const newContent = content.replace(combined, (m) => {
    resolved.add(m);
    return replacements.get(m) ?? m;
  });
  if (newContent !== content) {
    writeFileSync(file, newContent);
    changed++;
  }
  if (hasActivePlaceholder(newContent)) {
    leftoverFiles.push(relative(targetDir, file));
  }
}

// ---------------------------------------------------------------------------
// 4. Validation: never ship a placeholder or a literal `undefined`.
// ---------------------------------------------------------------------------
let failed = false;

// Deps whose placeholder is actually used but has no version in package.json.
const usedMissing = missing.filter((name) => {
  const tokens = [`${name}@DEP-0.0.0-PLACEHOLDER`, `"${name}": "@LIB-PLACEHOLDER"`];
  return placeholderFiles.some(({ content }) => tokensUsedInActiveCode(content, tokens));
});

if (usedMissing.length > 0) {
  failed = true;
  console.error(
    '[update-version-references] ERROR: placeholders used for packages missing a version in package.json:',
  );
  for (const name of usedMissing) console.error(`  - ${name}`);
  console.error(
    '  Add them to package.json (dependencies/devDependencies) or remove their placeholders.',
  );
}

if (leftoverFiles.length > 0) {
  failed = true;
  console.error('[update-version-references] ERROR: unresolved placeholders remain in:');
  for (const f of leftoverFiles) console.error(`  - ${f}`);
}

console.log(
  `[update-version-references] ${candidates.length} files scanned, ${changed} updated, ` +
    `${resolved.size} placeholder patterns resolved`,
);
if (failed) process.exit(1);
