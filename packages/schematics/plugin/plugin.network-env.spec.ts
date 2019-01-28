import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { createAlainApp } from '../utils/testing';

describe('NgAlainSchematic: plugin: networkEnv', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  describe(`[npm]`, () => {
    const npmrc = '/.npmrc';

    beforeEach(() => ({ runner, tree } = createAlainApp({ npm: true })));

    describe('when add', () => {
      it(`should add .npmrc`, () => {
        expect(tree.exists(npmrc)).toBe(true);
        expect(tree.readContent(npmrc)).toContain(`registry=https://registry.npm.taobao.org`);
      });
    });

    describe('when remove', () => {
      beforeEach(() =>
        runner.runSchematic(
          'plugin',
          { name: 'networkEnv', type: 'remove', packageManager: 'npm' },
          tree,
        ),
      );

      it(`should remove .npmrc`, () => {
        expect(tree.exists(npmrc)).toBe(false);
      });
    });
  });

  describe(`[yarn]`, () => {
    const yarnrc = '/.yarnrc';

    beforeEach(() => ({ runner, tree } = createAlainApp({ yarn: true })));

    describe('when add', () => {
      it(`should add .yarnrc`, () => {
        expect(tree.exists(yarnrc)).toBe(true);
        expect(tree.readContent(yarnrc)).toContain(`registry "https://registry.npm.taobao.org"`);
      });
    });

    describe('when remove', () => {
      beforeEach(() =>
        runner.runSchematic(
          'plugin',
          { name: 'networkEnv', type: 'remove', packageManager: 'yarn' },
          tree,
        ),
      );

      it(`should remove .yarnrc`, () => {
        expect(tree.exists(yarnrc)).toBe(false);
      });
    });
  });
});
