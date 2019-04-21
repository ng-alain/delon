import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { createAlainApp } from '../utils/testing';

describe('NgAlainSchematic: plugin: g2', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(() => ({ runner, tree } = createAlainApp({ g2: true })));

  describe('when add', () => {
    it(`should add dependencies`, () => {
      const json = JSON.parse(tree.readContent('package.json'));
      expect(json.dependencies['@antv/g2']).toBeDefined();
    });

    it(`should add scripts`, () => {
      const json = JSON.parse(tree.readContent('angular.json'));
      const scripts: string[] = (json.projects.foo.targets || json.projects.foo.architect).build.options.scripts || [];
      expect(scripts.filter(w => w.includes('g2')).length).toBeGreaterThan(0);
    });
  });

  describe('when remove', () => {
    beforeEach(() => runner.runSchematic('plugin', { name: 'g2', type: 'remove' }, tree));

    it(`should add dependencies`, () => {
      const json = JSON.parse(tree.readContent('package.json'));
      expect(json.dependencies['@antv/g2']).not.toBeDefined();
    });

    it(`should add scripts`, () => {
      const json = JSON.parse(tree.readContent('angular.json'));
      const scripts: string[] = (json.projects.foo.targets || json.projects.foo.architect).build.options.scripts || [];
      expect(scripts.filter(w => w.includes('g2')).length).toBe(0);
    });
  });
});
