import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import * as LANG from '../core/lang.config';
import { APPNAME, createAlainApp, createAlainRunner, createNgRunner } from '../utils/testing';

describe('NgAlainSchematic: application', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  describe(``, () => {
    beforeEach(async () => ({ runner, tree } = await createAlainApp()));
    it(`should add @delon to dependencies`, () => {
      const packageJson = JSON.parse(tree.readContent('package.json'));
      expect(packageJson.dependencies['@delon/theme']).toBeDefined();
      expect(packageJson.dependencies['@delon/abc']).toBeDefined();
      expect(packageJson.dependencies['@delon/util']).toBeDefined();
      expect(packageJson.dependencies['@delon/acl']).toBeDefined();
      expect(packageJson.dependencies['@delon/auth']).toBeDefined();
      expect(packageJson.dependencies['@delon/cache']).toBeDefined();
      expect(packageJson.dependencies['@delon/mock']).toBeDefined();
    });
    it('should be add vscode extensions config', () => {
      const filePath = '.vscode/extensions.json';
      // eslint-disable-next-line deprecation/deprecation
      expect(tree.exists(filePath)).toBe(true, `Not found [${filePath}]`);
      const json = JSON.parse(tree.readContent(filePath));
      expect(json != null).toBe(true);
      expect(json.recommendations[0]).toBe('cipchk.ng-alain-extension-pack');
    });
    it('should be add addFileReplacements', () => {
      const angualrJson = tree.readContent('angular.json');
      expect(angualrJson).toContain(`fileReplacements`);
    });
  });

  describe('#i18n', () => {
    describe('with true', () => {
      beforeEach(async () => ({ runner, tree } = await createAlainApp({ i18n: true })));
      it(`can add i18n related`, () => {
        const specTs = tree.readContent('/projects/foo/src/app/app.module.ts');
        expect(specTs).toContain(`import { I18NService } from '@core'`);
      });
    });
    describe('with false', () => {
      beforeEach(async () => ({ runner, tree } = await createAlainApp({ i18n: false })));
      it(`can't add i18n related`, () => {
        const specTs = tree.readContent('/projects/foo/src/app/app.module.ts');
        expect(specTs).not.toContain(`@core/i18n/`);
      });
    });
    describe('default language', () => {
      it(`with use zh`, async () => {
        spyOn(LANG, 'getLangData').and.returnValue({
          key1: 'Key1',
          key2: 'KEY2'
        });
        const baseRunner = createNgRunner();
        const workspaceTree = await baseRunner.runSchematic('workspace', {
          name: 'workspace',
          newProjectRoot: 'projects',
          version: '6.0.0'
        });
        const appTree = await baseRunner.runSchematic(
          'application',
          {
            name: APPNAME,
            inlineStyle: false,
            inlineTemplate: false,
            routing: false,
            style: 'css',
            skipTests: false,
            skipPackageJson: false
          },
          workspaceTree
        );
        appTree.create(
          '/demo.html',
          `
        {{(status ? 'key1' : 'key2') | i18n }}
        {{ (status ? 'menu.fullscreen.exit' : 'menu.fullscreen') | i18n }}
        [placeholder]="'key1' | i18n">
        <nz-tab [nzTitle]="'key1' | i18n">
        {{ 'Please enter mobile number!' | i18n }}
        <button>{{ count ? count + 's' : 'key1' | i18n }}</button>
        `
        );

        const alainRunner = createAlainRunner();
        const tree = await alainRunner.runSchematic(
          'ng-add',
          {
            skipPackageJson: false,
            defaultLanguage: 'zh'
          },
          appTree
        );

        const res = tree.readContent('/demo.html');
        expect(res).toBe(`
        {{ status ? 'Key1' : 'KEY2' }}
        {{ status ? 'menu.fullscreen.exit' : 'menu.fullscreen' }}
        [placeholder]="'Key1'">
        <nz-tab [nzTitle]="'Key1'">
        Please enter mobile number!
        <button>{{ count ? count + 's' : 'Key1'}}</button>
        `);
      });
    });
  });

  describe('#form', () => {
    it(`should be export json-schema.ts in shared/index.ts`, async () => {
      ({ runner, tree } = await createAlainApp({ form: false }));
      const content = tree.readContent('/projects/foo/src/app/shared/index.ts');
      expect(content).not.toContain(`json-schema`);
    });
  });

  describe('#multiple-projects', () => {
    let runner: SchematicTestRunner;
    let tree: UnitTestTree;
    let projectName = 'mgr';
    beforeEach(async () => {
      const baseRunner = createNgRunner();
      const workspaceTree = await baseRunner.runSchematic('workspace', {
        name: 'workspace',
        newProjectRoot: 'projects',
        version: '16.0.0'
      });
      await baseRunner.runSchematic(
        'application',
        {
          name: 'h5',
          inlineStyle: false,
          inlineTemplate: false,
          routing: false,
          style: 'css',
          skipTests: false,
          skipPackageJson: false
        },
        workspaceTree
      );
      tree = await baseRunner.runSchematic(
        'application',
        {
          name: projectName,
          inlineStyle: false,
          inlineTemplate: false,
          routing: false,
          style: 'css',
          skipTests: false,
          skipPackageJson: false
        },
        workspaceTree
      );
      runner = createAlainRunner();
    });
    it(`should be working`, async () => {
      tree = await runner.runSchematic(
        'ng-add',
        {
          skipPackageJson: false,
          project: projectName
        },
        tree
      );
      const content = tree.readContent(`/projects/${projectName}/src/app/shared/index.ts`);
      expect(content).toContain(`json-schema`);
      expect(tree.exists(`/projects/h5/src/app/shared/index.ts`)).toBe(false);
    });
    it(`should be throw error when not found project name`, async () => {
      try {
        tree = await runner.runSchematic(
          'ng-add',
          {
            skipPackageJson: false,
            project: `${projectName}invalid`
          },
          tree
        );
        expect(true).toBe(false);
      } catch (ex) {
        expect(ex.message).toContain(`Not found under the projects node of angular.json`);
      }
    });
  });
});
