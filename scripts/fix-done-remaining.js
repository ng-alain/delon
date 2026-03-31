/**
 * Fix remaining done() callback issues in spec files
 */

const fs = require('fs');
const path = require('path');

const files = [
  'packages/abc/error-collect/error-collect.spec.ts',
  'packages/abc/lodop/lodop.spec.ts',
  'packages/abc/xlsx/xlsx.spec.ts',
  'packages/abc/zip/zip.spec.ts',
  'packages/acl/src/acl-guard.spec.ts',
  'packages/auth/src/token/jwt/jwt.guard.spec.ts',
  'packages/auth/src/token/jwt/jwt.interceptor.spec.ts',
  'packages/auth/src/token/simple/simple.guard.spec.ts',
  'packages/auth/src/token/simple/simple.interceptor.spec.ts',
  'packages/auth/src/token/token.service.spec.ts',
  'packages/cache/src/cache.spec.ts',
  'packages/mock/src/mock.interceptor.spec.ts',
  'packages/theme/src/services/menu/menu.service.spec.ts',
  'packages/util/browser/copy.spec.ts'
];

const packagesDir = path.resolve(__dirname, '..');

function fixFile(filePath) {
  const fullPath = path.join(packagesDir, filePath);
  let content = fs.readFileSync(fullPath, 'utf-8');
  let modified = false;

  // Pattern: it('...', (done: () => void) => { ... })
  // -> it('...', () => new Promise<void>(done => { ... })
  const patterns = [
    // (done: () => void) => {
    {
      find: /\(done:\s*\(\)\s*=>\s*void\)\s*=>\s*\{/g,
      replace: '() => new Promise<void>(done => {'
    },
    // (done: DoneFn) => {
    {
      find: /\(done:\s*DoneFn\)\s*=>\s*\{/g,
      replace: '() => new Promise<void>(done => {'
    },
    // (done) => {
    {
      find: /\(done\)\s*=>\s*\{/g,
      replace: '() => new Promise<void>(done => {'
    },
    // async (done: () => void) => {
    {
      find: /async\s*\(done:\s*\(\)\s*=>\s*void\)\s*=>\s*\{/g,
      replace: 'async () => new Promise<void>(done => {'
    },
    // fakeAsync((done: () => void) => {
    {
      find: /fakeAsync\s*\(\s*\(done:\s*\(\)\s*=>\s*void\)\s*=>\s*\{/g,
      replace: 'fakeAsync(() => new Promise<void>(done => {'
    }
  ];

  for (const p of patterns) {
    if (p.find.test(content)) {
      // Reset lastIndex
      p.find.lastIndex = 0;
      content = content.replace(p.find, p.replace);
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(fullPath, content, 'utf-8');
    console.log(`✓ Fixed ${filePath}`);
    return true;
  }
  
  console.log(`  No changes needed for ${filePath}`);
  return false;
}

let fixed = 0;
for (const file of files) {
  try {
    if (fixFile(file)) fixed++;
  } catch (e) {
    console.log(`✗ Error fixing ${file}: ${e.message}`);
  }
}

console.log(`\nDone! Fixed ${fixed} files.`);
