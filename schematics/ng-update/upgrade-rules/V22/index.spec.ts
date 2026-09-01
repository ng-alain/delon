import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'fs';
import { join } from 'path';

import { readJSON } from '../../../utils';
import { createAlainApp, migrationCollection } from '../../../utils/testing';

/**
 * The real template is copied from the ng-alain repo by `scripts/ci/build-schematics.sh`
 * (see the `eslint.config.mjs` entry of `copyFiles`), so it's not committed to git and
 * only exists in the built `dist/`. The migration rule reads it via
 * `getFileContentInApplicationFiles('root/eslint.config.mjs')`, so this fixture stands in
 * for the built artifact during tests. It only needs to cover the assertions below, not
 * the full upstream config.
 */
const ESLINT_CONFIG_FIXTURE = `// @ts-check
import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import markdown from '@eslint/markdown';
import importPlugin from 'eslint-plugin-import-x';
import prettier from 'eslint-plugin-prettier';

export default defineConfig([
  eslint.configs.recommended,
  {
    files: ['**/*.ts'],
    plugins: { 'import-x': importPlugin, prettier }
  },
  {
    files: ['**/*.md'],
    plugins: { markdown }
  }
]);
`;

describe('Schematic: ng-update: v22Rule', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeAll(() => {
    const filesDir = join(__dirname, '../../../application/files/root');
    mkdirSync(filesDir, { recursive: true });
    writeFileSync(join(filesDir, 'eslint.config.mjs'), ESLINT_CONFIG_FIXTURE);
  });

  beforeEach(async () => {
    ({ runner, tree } = await createAlainApp());
    // Simulate a v21 project
    tree.create('/.nvmrc', '22.21.1\n');
    // The `old eslint config` marker lets tests assert the migration really replaced the user's config
    const oldEslintConfig = `// old eslint config\nimport eslint from '@eslint/js';\nexport default [];\n`;
    if (tree.exists('/eslint.config.mjs')) {
      tree.overwrite('/eslint.config.mjs', oldEslintConfig);
    } else {
      tree.create('/eslint.config.mjs', oldEslintConfig);
    }
    const tsconfig = readJSON(tree, 'tsconfig.json');
    tsconfig.compilerOptions.baseUrl = './';
    tsconfig.compilerOptions.paths['@shared'] = ['projects/foo/src/app/shared/index'];
    tsconfig.compilerOptions.paths['@core'] = ['projects/foo/src/app/core/index'];
    tree.overwrite('tsconfig.json', JSON.stringify(tsconfig, null, 2));
  });

  async function runMigration(): Promise<void> {
    runner = new SchematicTestRunner('schematics', migrationCollection);
    await runner.runSchematic('migration-v22', {}, tree);
  }

  it(`should update .nvmrc`, async () => {
    await runMigration();
    expect(tree.readContent('/.nvmrc')).toBe(`24.20.0`);
  });

  it(`should create .nvmrc when not exists`, async () => {
    tree.delete('/.nvmrc');
    await runMigration();
    expect(tree.readContent('/.nvmrc')).toBe(`24.20.0`);
  });

  it(`should overwrite eslint.config.mjs`, async () => {
    await runMigration();
    // The fixture asserts the rule replaces the user's config with the template
    expect(tree.readContent('/eslint.config.mjs')).not.toContain(`old eslint config`);
    expect(tree.readContent('/eslint.config.mjs').length).toBeGreaterThan(0);
  });

  it(`should remove deprecated eslint plugins`, async () => {
    const pkg = JSON.parse(tree.readContent('package.json'));
    pkg.devDependencies['eslint-plugin-import'] = '~2.32.0';
    pkg.devDependencies['eslint-config-prettier'] = '^10.1.8';
    pkg.devDependencies['eslint-plugin-prefer-arrow'] = '~1.2.3';
    tree.overwrite('package.json', JSON.stringify(pkg, null, 2));
    await runMigration();
    const res = JSON.parse(tree.readContent('package.json'));
    expect(res.devDependencies['eslint-plugin-import']).toBeUndefined();
    expect(res.devDependencies['eslint-config-prettier']).toBeUndefined();
    expect(res.devDependencies['eslint-plugin-prefer-arrow']).toBeUndefined();
    expect(res.devDependencies['eslint-plugin-import-x']).toBeDefined();
  });

  it(`should delete eslint.config.js`, async () => {
    tree.create('/eslint.config.js', `// old js config\n`);
    await runMigration();
    expect(tree.exists('/eslint.config.js')).toBe(false);
    expect(tree.readContent('/eslint.config.mjs').length).toBeGreaterThan(0);
  });

  it(`should keep eslint.config.js when the template is missing`, async () => {
    const fixturePath = join(__dirname, '../../../application/files/root/eslint.config.mjs');
    const backup = readFileSync(fixturePath, 'utf-8');
    try {
      rmSync(fixturePath);
      tree.create('/eslint.config.js', `// user js config\n`);
      await runMigration();
      expect(tree.exists('/eslint.config.js')).toBe(true);
      expect(tree.readContent('/eslint.config.mjs')).toContain(`old eslint config`);
    } finally {
      writeFileSync(fixturePath, backup);
    }
  });

  it(`should keep working without ng-alain path aliases`, async () => {
    const tsconfig = readJSON(tree, 'tsconfig.json');
    delete tsconfig.compilerOptions.paths;
    tree.overwrite('tsconfig.json', JSON.stringify(tsconfig, null, 2));
    await runMigration();
    expect(tree.exists('tsconfig.json')).toBe(true);
  });

  it(`should keep the existing ./ prefix`, async () => {
    const tsconfig = readJSON(tree, 'tsconfig.json');
    tsconfig.compilerOptions.paths['@env/*'] = ['./projects/foo/src/environments/*'];
    tree.overwrite('tsconfig.json', JSON.stringify(tsconfig, null, 2));
    await runMigration();
    const res = readJSON(tree, 'tsconfig.json');
    expect(res.compilerOptions.paths['@env/*']).toEqual(['./projects/foo/src/environments/*']);
  });

  it(`should remove baseUrl and add ./ prefix to paths`, async () => {
    await runMigration();
    const tsconfig = readJSON(tree, 'tsconfig.json');
    expect(tsconfig.compilerOptions.baseUrl).toBeUndefined();
    expect(tsconfig.compilerOptions.paths['@shared']).toEqual(['./projects/foo/src/app/shared/index']);
    expect(tsconfig.compilerOptions.paths['@core']).toEqual(['./projects/foo/src/app/core/index']);
  });

  it(`should prefix custom aliases and keep absolute paths`, async () => {
    const tsconfig = readJSON(tree, 'tsconfig.json');
    tsconfig.compilerOptions.paths['@app/*'] = ['projects/foo/src/app/*'];
    tsconfig.compilerOptions.paths['@abs/*'] = ['/abs/*'];
    tree.overwrite('tsconfig.json', JSON.stringify(tsconfig, null, 2));
    await runMigration();
    const res = readJSON(tree, 'tsconfig.json');
    expect(res.compilerOptions.paths['@app/*']).toEqual(['./projects/foo/src/app/*']);
    expect(res.compilerOptions.paths['@abs/*']).toEqual(['/abs/*']);
  });

  it(`should keep a custom baseUrl`, async () => {
    const tsconfig = readJSON(tree, 'tsconfig.json');
    tsconfig.compilerOptions.baseUrl = 'src';
    tree.overwrite('tsconfig.json', JSON.stringify(tsconfig, null, 2));
    await runMigration();
    const res = readJSON(tree, 'tsconfig.json');
    expect(res.compilerOptions.baseUrl).toBe('src');
    expect(res.compilerOptions.paths['@shared']).toEqual(['./projects/foo/src/app/shared/index']);
  });

  it(`should work with a single-line tsconfig.json`, async () => {
    tree.overwrite(
      'tsconfig.json',
      `{"compilerOptions":{"baseUrl":"./","paths":{"@shared":["projects/foo/src/app/shared/index"],"@core":["projects/foo/src/app/core/index"]}}}`
    );
    await runMigration();
    const res = readJSON(tree, 'tsconfig.json');
    expect(res.compilerOptions.baseUrl).toBeUndefined();
    expect(res.compilerOptions.paths['@shared']).toEqual(['./projects/foo/src/app/shared/index']);
  });
});
