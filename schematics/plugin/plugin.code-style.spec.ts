import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { LINT_STAGED } from '../utils/code-style';
import { createAlainApp } from '../utils/testing';

describe('NgAlainSchematic: plugin: codeStyle', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(async () => ({ runner, tree } = await createAlainApp({ codeStyle: true })));

  describe('when add', () => {
    it(`should add precommit`, () => {
      const json = JSON.parse(tree.readContent('package.json'));
      expect(json[LINT_STAGED]).not.toBeUndefined();
    });
  });

  describe('when remove', () => {
    beforeEach(async () => runner.runSchematic('plugin', { name: 'codeStyle', type: 'remove' }, tree));

    it(`should remove precommit`, () => {
      const json = JSON.parse(tree.readContent('package.json'));
      expect(json[LINT_STAGED]).toBeUndefined();
    });
  });
});
