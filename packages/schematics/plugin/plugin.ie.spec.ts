import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { createAlainApp } from '../utils/testing';

describe('NgAlainSchematic: plugin: ie', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(async () => {
    ({ runner, tree } = await createAlainApp());
    tree = await runner.runSchematicAsync('plugin', { name: 'ie', type: 'add' }, tree).toPromise();
  });

  function test(result: boolean): void {
    expect(tree.exists('/tsconfig-es5.app.json')).toBe(result);
    expect(tree.exists('/tsconfig-es5.spec.json')).toBe(result);
    expect(tree.readContent('/browserslist').includes(`not IE 9-10`)).toBe(result);
  }

  describe('when add', () => {
    it(`should be working`, () => test(true));
  });

  describe('when remove', () => {
    beforeEach(async () => (tree = await runner.runSchematicAsync('plugin', { name: 'ie', type: 'remove' }, tree).toPromise()));
    it(`should be working`, () => test(false));
  });
});
