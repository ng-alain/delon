import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import * as LANG from '../core/lang.config';
import { APPNAME, createAlainApp, createAlainRunner, createNgRunner } from '../utils/testing';

describe('NgAlainSchematic: application', () => {
  let tree: UnitTestTree;

  describe(``, () => {
    beforeEach(async () => ({ tree } = await createAlainApp()));
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
    it('should be add addFileReplacements', () => {
      const angualrJson = tree.readContent('angular.json');
      expect(angualrJson).toContain(`fileReplacements`);
    });
    it('should be add src/assets', () => {
      const angualrJson = tree.readContent('angular.json');
      expect(angualrJson).toContain(`"src/assets"`);
    });
    it('should be add vitest config', () => {
      const angualrJson = tree.readContent('angular.json');
      expect(angualrJson).toContain(`"runnerConfig": "vitest.config.ts"`);
      const packageJson = tree.readContent('package.json');
      expect(packageJson).toContain(`"@playwright/test":`);
    });
  });

  describe('#i18n', () => {
    describe('with true', () => {
      beforeEach(async () => ({ tree } = await createAlainApp({ i18n: true })));
      it(`can add i18n related`, () => {
        const specTs = tree.readContent('/projects/foo/src/app/app.config.ts');
        expect(specTs).toContain(`I18NService`);
      });
    });
    describe('with false', () => {
      beforeEach(async () => ({ tree } = await createAlainApp({ i18n: false })));
      it(`can't add i18n related`, () => {
        const specTs = tree.readContent('/projects/foo/src/app/app.config.ts');
        expect(specTs).not.toContain(`I18NService`);
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
      ({ tree } = await createAlainApp({ form: false }));
      const content = tree.readContent('/projects/foo/src/app/shared/index.ts');
      expect(content).not.toContain(`json-schema`);
    });
  });

  describe('#reuse-tab', () => {
    it(`should be working`, async () => {
      ({ tree } = await createAlainApp({ reuseTab: true }));
      const appConfig = tree.readContent('/projects/foo/src/app/app.config.ts');
      expect(appConfig).toContain(`provideReuseTabConfig(),`);
      const baseComp = tree.readContent('/projects/foo/src/app/layout/basic/basic.ts');
      expect(baseComp).toContain(`<reuse-tab #reuseTab />`);
    });
  });

  describe('#tailwindcss', () => {
    describe('with false', () => {
      beforeEach(async () => ({ tree } = await createAlainApp()));
      it(`should not add tailwind related files`, () => {
        expect(tree.exists('.postcssrc.json')).toBe(false);
        expect(tree.exists(`/projects/${APPNAME}/src/tailwind.css`)).toBe(false);
        const angularJson = JSON.parse(tree.readContent('angular.json'));
        const styles = angularJson.projects[APPNAME].architect.build.options.styles;
        expect(styles.some((s: string) => s.includes('tailwind.css'))).toBe(false);
        const packageJson = JSON.parse(tree.readContent('package.json'));
        expect(packageJson.devDependencies['tailwindcss']).toBeUndefined();
      });
    });
    describe('with true', () => {
      beforeEach(async () => {
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
        const alainRunner = createAlainRunner();
        tree = await alainRunner.runSchematic(
          'ng-add',
          {
            skipPackageJson: false,
            tailwindcss: true
          },
          appTree
        );
      });

      it(`should add tailwindcss as devDependencies`, () => {
        const packageJson = JSON.parse(tree.readContent('package.json'));
        expect(packageJson.devDependencies['tailwindcss']).toBeDefined();
        expect(packageJson.devDependencies['@tailwindcss/postcss']).toBeDefined();
        expect(packageJson.devDependencies['postcss']).toBeDefined();
      });

      it(`should generate .postcssrc.json`, () => {
        expect(tree.exists('.postcssrc.json')).toBe(true);
        const postcssrc = JSON.parse(tree.readContent('.postcssrc.json'));
        expect(postcssrc.plugins['@tailwindcss/postcss']).toEqual({});
      });

      it(`should generate src/tailwind.css`, () => {
        expect(tree.exists(`/projects/${APPNAME}/src/tailwind.css`)).toBe(true);
        const content = tree.readContent(`/projects/${APPNAME}/src/tailwind.css`);
        expect(content).toContain(`@layer theme, base, ng-alain, utilities;`);
        expect(content).toContain(`@import 'tailwindcss'`);
      });

      it(`should handle styles.less gracefully when file does not exist (no crash)`, () => {
        // removeOrginalFiles deletes styles.less before addTailwindcss
        // In test env (--style css), styles.less never existed
        // The function should handle missing styles.less gracefully
        expect(tree.exists(`/projects/${APPNAME}/src/styles.less`)).toBe(false);
      });

      it(`should add src/tailwind.css to angular.json styles`, () => {
        const angularJson = JSON.parse(tree.readContent('angular.json'));
        const styles = angularJson.projects[APPNAME].architect.build.options.styles;
        expect(styles.some((s: string) => s.includes('tailwind.css'))).toBe(true);
      });

      it(`should update .vscode/extensions.json with tailwindcss recommendation`, () => {
        expect(tree.exists('.vscode/extensions.json')).toBe(true);
        const ext = JSON.parse(tree.readContent('.vscode/extensions.json'));
        expect(ext.recommendations).toContain('bradlc.vscode-tailwindcss');
      });
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
      const content = tree.readContent(`/projects/${projectName}/src/app/app.config.ts`);
      expect(content).toContain(`provideAlain`);
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
        expect((ex as { message: string }).message).toContain(`Not found under the projects node of angular.json`);
      }
    });
  });
});
