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

  describe(`[g2]`, () => {
    beforeEach(() => ({ runner, tree } = createAlainApp({ g2: true })));

    describe('when add', () => {
      it(`should add dependencies`, () => {
        const json = JSON.parse(tree.readContent('package.json'));
        expect(json.dependencies['@antv/g2']).toBeDefined();
      });

      it(`should add scripts`, () => {
        const json = JSON.parse(tree.readContent('angular.json'));
        const scripts: string[] = json.projects.foo.architect.build.options.scripts || [];
        expect(scripts.filter(w => w.includes('g2')).length).toBeGreaterThan(0);
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
        const scripts: string[] = json.projects.foo.architect.build.options.scripts || [];
        expect(scripts.filter(w => w.includes('g2')).length).toBe(0);
      });
    });
  });

  describe(`[codeStyle]`, () => {
    beforeEach(() => ({ runner, tree } = createAlainApp({ codeStyle: true })));

    describe('when add', () => {
      it(`should add precommit`, () => {
        const json = JSON.parse(tree.readContent('package.json'));
        expect(json.scripts.precommit).not.toBeUndefined();
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
        expect(json.scripts.precommit).toBeUndefined();
      });
    });
  });

  describe(`[npm]`, () => {
    const npmrc = '/.npmrc';

    beforeEach(() => ({ runner, tree } = createAlainApp({ npm: true })));

    describe('when add', () => {
      it(`should add .npmrc`, () => {
        expect(tree.exists(npmrc)).toBe(true);
        expect(tree.readContent(npmrc)).toContain('taobao.org');
      });
    });

    describe('when remove', () => {
      beforeEach(() =>
        runner.runSchematic(
          'plugin',
          { name: 'npm', type: 'remove' },
          tree,
        ));

      it(`should remove .npmrc`, () => {
        expect(tree.exists(npmrc)).toBe(false);
      });
    });
  });

  describe(`[yarn]`, () => {
    beforeEach(() => ({ runner, tree } = createAlainApp({ yarn: true })));

    describe('when add', () => {
      it(`should add devDependencies`, () => {
        const json = JSON.parse(tree.readContent('package.json'));
        expect(json.devDependencies['less']).not.toBeUndefined();
        expect(json.devDependencies['less-loader']).not.toBeUndefined();
      });
    });

    describe('when remove', () => {
      beforeEach(() =>
        runner.runSchematic(
          'plugin',
          { name: 'yarn', type: 'remove' },
          tree,
        ));

      it(`should remove devDependencies`, () => {
        const json = JSON.parse(tree.readContent('package.json'));
        expect(json.devDependencies['less']).toBeUndefined();
        expect(json.devDependencies['less-loader']).toBeUndefined();
      });
    });
  });
});
