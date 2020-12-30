import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { createAlainApp } from '../utils/testing';

describe('NgAlainSchematic: plugin: rtl', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(async () => {
    ({ runner, tree } = await createAlainApp());
    tree = await runner.runSchematicAsync('plugin', { name: 'rtl', type: 'add' }, tree).toPromise();
  });

  it(`should be working`, () => {
    expect(tree.exists(`/projects/foo/src/app/layout/basic/widgets/rtl.component.ts`)).toBe(true);
  });
});
