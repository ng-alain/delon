import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { migrationCollection } from '../../../test-setup/test-app';
import { createAlainApp, FILE_PREFIX } from '../../../utils/testing';

describe('Schematic: ng-update: v11Rule', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(async () => {
    ({ runner, tree } = await createAlainApp());
  });

  async function runMigration(): Promise<void> {
    runner = new SchematicTestRunner('schematics', migrationCollection);
    await runner.runSchematicAsync('migration-v11', {}, tree).toPromise();
  }

  it(`should be can't migrate when 'hmr.ts' not found`, async () => {
    const hmrTsPath = `${FILE_PREFIX}/src/hmr.ts`;
    expect(tree.exists(hmrTsPath)).toBe(false);
    await runMigration();
    expect(tree.exists(hmrTsPath)).toBe(false);
  });

  describe('', () => {
    beforeEach(() => {
      tree.create(`${FILE_PREFIX}/src/hmr.ts`, '');
      tree.overwrite(
        `${FILE_PREFIX}/src/environments/environment.prod.ts`,
        `
      // This file can be replaced during build b

export const environment = {
  SERVER_URL: '/',
  production: false,
  hmr: false,
  useHash: true,
};

// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      `,
      );
    });
    it('should working', async () => {
      await runMigration();
      const content = tree.readContent(`${FILE_PREFIX}/src/environments/environment.prod.ts`);
      expect(content.includes('hmr: false')).toBe(false);
    });
  });
});
