import {
  SchematicTestRunner,
  UnitTestTree,
} from '@angular-devkit/schematics/testing';
import { createAlainApp } from '../utils/testing';

describe('NgAlainSchematic: plugin: hmr', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(() => ({ runner, tree } = createAlainApp({ hmr: true })));

  describe('when add', () => {
    it(`should add devDependencies`, () => {
      const json = JSON.parse(tree.readContent('package.json'));
      expect(json.devDependencies['@angularclass/hmr']).toBeDefined();
    });
  });
});
