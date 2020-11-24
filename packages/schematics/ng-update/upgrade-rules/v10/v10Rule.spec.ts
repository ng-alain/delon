import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { migrationCollection } from '../../../test-setup/test-app';
import { createAlainApp } from '../../../utils/testing';

describe('Schematic: ng-update: v10Rule', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(async () => {
    ({ runner, tree } = await createAlainApp());
  });

  async function runMigration(): Promise<void> {
    runner = new SchematicTestRunner('schematics', migrationCollection);
    await runner.runSchematicAsync('migration-v10', {}, tree).toPromise();
  }

  it('should working', async () => {
    await runMigration();
    const content = tree.readContent('angular.json');
    expect(content.includes('allowedCommonJsDependencies')).toBe(true);
  });
});
