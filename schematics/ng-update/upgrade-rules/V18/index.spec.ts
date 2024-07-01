import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { tryAddFile } from '../../../utils';
import { createAlainApp, migrationCollection } from '../../../utils/testing';

describe('Schematic: ng-update: v18Rule', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;
  const logs: string[] = [];

  beforeEach(async () => {
    ({ runner, tree } = await createAlainApp());
  });

  async function runMigration(): Promise<void> {
    logs.length = 0;
    runner = new SchematicTestRunner('schematics', migrationCollection);
    runner.logger.subscribe(e => logs.push(e.message));
    await runner.runSchematic('migration-v18', {}, tree);
  }

  it('remove ng-less-javascript-enabled-patch', async () => {
    const packageJsonPath = '/package.json';
    tryAddFile(
      tree,
      packageJsonPath,
      `{
        "scripts": {
          "postinstall": "ng-less-javascript-enabled-patch"
        },
        "devDependencies": {
          "ng-less-javascript-enabled-patch": "17.0.2"
        }
      }`
    );
    await runMigration();
    const content = tree.readContent(packageJsonPath);
    expect(content).not.toContain(`"postinstall": "ng-less-javascript-enabled-patch"`);
    expect(content).toContain(`"postinstall": ""`);
    expect(content).not.toContain(`"ng-less-javascript-enabled-patch":`);
  });
});
