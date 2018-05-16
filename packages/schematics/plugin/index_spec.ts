import {
  SchematicTestRunner,
  UnitTestTree,
} from '@angular-devkit/schematics/testing';
import { getFileContent } from '@schematics/angular/utility/test';
import { join } from 'path';
import { Schema as NgAddOptions } from './schema';
import { createAlainApp } from '../utils/testing';

describe('NgAlainSchematic: plugin', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;
  beforeEach(() => ({ runner, tree } = createAlainApp()));

  describe(`[g2]`, () => {
    beforeEach(() =>
      runner.runSchematic('plugin', { name: 'g2', type: 'add' }, tree));

    describe('when add', () => {
      it(`should add dependencies`, () => {
        const json = JSON.parse(tree.readContent('package.json'));
        expect(json.dependencies['@antv/g2']).toBeDefined();
      });

      it(`should add scripts`, () => {
        const json = JSON.parse(tree.readContent('angular.json'));
        expect(
          json.projects.foo.architect.build.options.scripts.length,
        ).toBeGreaterThan(0);
      });
    });

    describe('when remove', () => {
      beforeEach(() =>
        runner.runSchematic('plugin', { name: 'g2', type: 'remove' }, tree));

      it(`should add dependencies`, () => {
        const json = JSON.parse(tree.readContent('package.json'));
        expect(json.dependencies['@antv/g2']).not.toBeDefined();
      });

      it(`should add scripts`, () => {
        const json = JSON.parse(tree.readContent('angular.json'));
        expect(
          json.projects.foo.architect.build.options.scripts.length,
        ).toBe(0);
      });
    });
  });
});
