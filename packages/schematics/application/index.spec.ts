import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import * as LANG from '../core/lang.config';
import { createAlainApp, createAlainRunner, createNgRunner, APPNAME } from '../utils/testing';

describe('NgAlainSchematic: application', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  describe(`update package.json`, () => {
    beforeEach(() => ({ runner, tree } = createAlainApp()));
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
  });

  describe('#i18n', () => {
    describe('with true', () => {
      beforeEach(() => ({ runner, tree } = createAlainApp({ i18n: true })));
      it(`can add i18n related`, () => {
        const specTs = tree.readContent('/foo/src/app/app.module.ts');
        expect(specTs).toContain(`@core/i18n/`);
      });
    });
    describe('with false', () => {
      beforeEach(() => ({ runner, tree } = createAlainApp({ i18n: false })));
      it(`can't add i18n related`, () => {
        const specTs = tree.readContent('/foo/src/app/app.module.ts');
        expect(specTs).not.toContain(`@core/i18n/`);
      });
    });
    describe('default language', () => {
      it(`with use zh`, () => {
        spyOn(LANG, 'getLangData').and.returnValue(
          JSON.stringify({
            key1: 'Key1',
            key2: 'KEY2',
          }),
        );
        const baseRunner = createNgRunner();
        const workspaceTree = baseRunner.runSchematic('workspace', {
          name: 'workspace',
          newProjectRoot: '',
          version: '6.0.0',
        });
        const appTree = baseRunner.runSchematic(
          'application',
          {
            name: APPNAME,
            inlineStyle: false,
            inlineTemplate: false,
            routing: false,
            style: 'css',
            skipTests: false,
            skipPackageJson: false,
          },
          workspaceTree,
        );
        appTree.create(
          '/demo.html',
          `
        {{(status ? 'key1' : 'key2') | translate }}
        [placeholder]="'key1' | translate">
        <nz-tab [nzTitle]="'key1' | translate">
        {{ 'Please enter mobile number!' | translate }}
        <button>{{ count ? count + 's' : 'key1' | translate }}</button>
        `,
        );

        const alainRunner = createAlainRunner();
        // tslint:disable-next-line:no-shadowed-variable
        const tree = alainRunner.runSchematic(
          'ng-add',
          {
            skipPackageJson: false,
            defaultLanguage: 'zh',
          },
          appTree,
        );

        const res = tree.readContent('/demo.html');
        expect(res).toBe(`
        {{ status ? 'key1' : 'key2' }}
        [placeholder]="'key1'">
        <nz-tab [nzTitle]="'key1'">
        Please enter mobile number!
        <button>{{ count ? count + 's' : 'key1'}}</button>
        `);
      });
    });
  });
});
