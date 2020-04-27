import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { APPNAME, createAlainApp } from '../utils/testing';

describe('NgAlainSchematic: plugin: ie', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(async () => {
    ({ runner, tree } = await createAlainApp());
    tree = await runner.runSchematicAsync('plugin', { name: 'ie', type: 'add' }, tree).toPromise();
  });

  describe('when add', () => {
    it(`should be working`, () => {
      expect(tree.exists(`/projects/${APPNAME}/tsconfig-es5.app.json`)).toBe(true);
      expect(tree.exists(`/projects/${APPNAME}/tsconfig-es5.spec.json`)).toBe(true);
      expect(tree.readContent(`/projects/${APPNAME}/browserslist`).includes(`not IE 9-10`)).toBe(true);
    });
  });

  describe('when remove', () => {
    beforeEach(async () => (tree = await runner.runSchematicAsync('plugin', { name: 'ie', type: 'remove' }, tree).toPromise()));
    it(`should be working`, () => {
      expect(tree.exists(`/projects/${APPNAME}/tsconfig-es5.app.json`)).toBe(false);
      expect(tree.exists(`/projects/${APPNAME}/tsconfig-es5.spec.json`)).toBe(false);
      expect(tree.readContent(`/projects/${APPNAME}/browserslist`).includes(`not IE 9-11`)).toBe(true);
    });
  });
});
