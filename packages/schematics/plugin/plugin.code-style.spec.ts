import {
  SchematicTestRunner,
  UnitTestTree,
} from '@angular-devkit/schematics/testing';
import { createAlainApp } from '../utils/testing';

describe('NgAlainSchematic: plugin: codeStyle', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(() => ({ runner, tree } = createAlainApp({ codeStyle: true })));

  describe('when add', () => {
    it(`should add precommit`, () => {
      const json = JSON.parse(tree.readContent('package.json'));
      expect(json.husky).not.toBeUndefined();
    });
  });

  describe('when remove', () => {
    beforeEach(() =>
      runner.runSchematic(
        'plugin',
        { name: 'codeStyle', type: 'remove' },
        tree,
      ));

    it(`should remove precommit`, () => {
      const json = JSON.parse(tree.readContent('package.json'));
      expect(json.husky).toBeUndefined();
    });
  });
});
