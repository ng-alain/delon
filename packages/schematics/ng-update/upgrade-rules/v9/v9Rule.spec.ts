import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { createAlainApp } from '../../../utils/testing';
import { migrationCollection } from '../../test-cases/index.spec';

describe('Schematic: ng-update: v9Rule', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(async () => {
    ({ runner, tree } = await createAlainApp());
  });

  async function runMigration() {
    runner = new SchematicTestRunner('schematics', migrationCollection);
    await runner.runSchematicAsync('migration-v9', {}, tree).toPromise();
  }

  it('should dependencies @delon of an application', async () => {
    expect(tree.exists('/projects/foo/src/app/global-config.module.ts')).toBe(false);
    expect(tree.exists('/projects/foo/src/app/shared/st-widget/st-widget.module.ts')).toBe(false);
    await runMigration();
    expect(tree.exists('/projects/foo/src/app/global-config.module.ts')).toBe(true);
    expect(tree.exists('/projects/foo/src/app/shared/st-widget/st-widget.module.ts')).toBe(true);
  });
});
