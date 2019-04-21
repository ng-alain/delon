import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { createAlainApp, APPNAME } from '../utils/testing';

describe('NgAlainSchematic: plugin: docker', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(() => {
    ({ runner, tree } = createAlainApp());
    tree = runner.runSchematic('plugin', { name: 'docker', type: 'add' }, tree);
  });

  describe('when add', () => {
    it(`should add fiels`, () => {
      expect(tree.exists(`/projects/${APPNAME}/.dockerignore`)).toBe(true);
      expect(tree.exists(`/projects/${APPNAME}/docker-compose.yml`)).toBe(true);
      expect(tree.exists(`/projects/${APPNAME}/Dockerfile`)).toBe(true);
      expect(tree.exists(`/projects/${APPNAME}/_nginx/default.conf`)).toBe(true);
    });
  });

  describe('when remove', () => {
    beforeEach(() => (tree = runner.runSchematic('plugin', { name: 'docker', type: 'remove' }, tree)));
    it(`should add fiels`, () => {
      expect(tree.exists(`/projects/${APPNAME}/.dockerignore`)).toBe(false);
      expect(tree.exists(`/projects/${APPNAME}/docker-compose.yml`)).toBe(false);
      expect(tree.exists(`/projects/${APPNAME}/Dockerfile`)).toBe(false);
      expect(tree.exists(`/projects/${APPNAME}/_nginx/default.conf`)).toBe(true);
    });
  });
});
