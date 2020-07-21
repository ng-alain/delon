import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { createAlainApp } from '../../../utils/testing';
import { migrationCollection } from '../../test-cases/index.spec';

describe('Schematic: ng-update: v10Rule', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(async () => {
    ({ runner, tree } = await createAlainApp());
  });

  async function runMigration() {
    runner = new SchematicTestRunner('schematics', migrationCollection);
    await runner.runSchematicAsync('migration-v10', {}, tree).toPromise();
  }

  it('should dependencies @delon of an application', async () => {
    let content = tree.readContent('angular.json');
    expect(content.includes('allowedCommonJsDependencies')).toBe(false);
    await runMigration();
    content = tree.readContent('angular.json');
    expect(content.includes('allowedCommonJsDependencies')).toBe(true);
  });
});
