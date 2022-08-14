import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { createAlainApp, migrationCollection } from '../../../utils/testing';

describe('Schematic: ng-update: v14Rule', () => {
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
    await runner.runSchematicAsync('migration-v14', {}, tree).toPromise();
  }

  it(`should be working`, async () => {
    await runMigration();
    const content = tree.readContent('angular.json');
    expect(content).toContain(`schematicCollections`);
  });
});
