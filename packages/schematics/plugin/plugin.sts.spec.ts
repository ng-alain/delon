import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { createAlainApp } from '../utils/testing';

describe('NgAlainSchematic: plugin: sts', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(() => {
    ({ runner, tree } = createAlainApp());
    tree = runner.runSchematic('plugin', { name: 'sts', type: 'add' }, tree);
  });

  describe('when add', () => {
    it(`should add fiels`, () => {
      const json = JSON.parse(tree.readContent('package.json'));
      expect(json.devDependencies['ng-alain-sts']).toBeDefined();
      expect(tree.exists(`/_cli-tpl/_fix.js`)).toBe(true);
      expect(
        tree.exists(`/_cli-tpl/swagger-edit/__path__/__name@dasherize@if-flat__/__name@dasherize__.component.html`),
      ).toBe(true);
      expect(
        tree.exists(`/_cli-tpl/swagger-list/__path__/__name@dasherize@if-flat__/__name@dasherize__.component.ts`),
      ).toBe(true);
    });
  });

  describe('when remove', () => {
    beforeEach(() => (tree = runner.runSchematic('plugin', { name: 'sts', type: 'remove' }, tree)));
    it(`should add fiels`, () => {
      const json = JSON.parse(tree.readContent('package.json'));
      expect(json.devDependencies['ng-alain-sts']).not.toBeDefined();
    });
  });
});
