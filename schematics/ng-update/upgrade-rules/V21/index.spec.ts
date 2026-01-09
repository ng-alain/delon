import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { createAlainApp, migrationCollection } from '../../../utils/testing';

describe('Schematic: ng-update: v21Rule', () => {
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
    await runner.runSchematic('migration-v21', {}, tree);
  }

  it('#addStylelintOrderLib', async () => {
    const filePath = '/package.json';
    let content = tree.readContent(filePath);
    const lib = `"stylelint-order":`;
    tree.overwrite(filePath, content.replace(lib, ''));
    content = tree.readContent(filePath);
    expect(content).not.toContain(lib);
    await runMigration();
    content = tree.readContent(filePath);
    expect(content).toContain(lib);
  });
});
