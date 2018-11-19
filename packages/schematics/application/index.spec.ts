import {
  SchematicTestRunner,
  UnitTestTree,
} from '@angular-devkit/schematics/testing';
import { createAlainApp, createNgRunner, APPNAME, createAlainRunner } from '../utils/testing';

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
        const specTs = tree.readContent('/foo/src/testing/common.spec.ts');
        expect(specTs).toContain(`@core/i18n/`);
      });
    });
    describe('with false', () => {
      beforeEach(() => ({ runner, tree } = createAlainApp({ i18n: false })));
      it(`can't add i18n related`, () => {
        const specTs = tree.readContent('/foo/src/testing/common.spec.ts');
        expect(specTs).not.toContain(`@core/i18n/`);
      });
    });
    describe('default language', () => {
      it(`with use zh`, () => {
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
        appTree.create('/demo.html', `
        {{(status ? 'menu.fullscreen.exit' : 'menu.fullscreen') | translate }}
        [placeholder]="'menu.search.placeholder' | translate">
        <nz-tab [nzTitle]="'app.login.tab-login-credentials' | translate">
        {{ 'Please enter mobile number!' | translate }}
        <button>{{ count ? count + 's' : 'app.register.get-verification-code' | translate }}</button>
        `);

        const alainRunner = createAlainRunner();
        const tree = alainRunner.runSchematic(
          'ng-add',
          Object.assign(
            {
              skipPackageJson: false,
              defaultLanguage: 'zh',
            },
          ),
          appTree,
        );

        expect(tree.readContent('/demo.html')).toBe(`
        {{ status ? '退出全屏' : '全屏' }}
        [placeholder]="'搜索：员工、文件、照片等'">
        <nz-tab [nzTitle]="'账户密码登录'">
        Please enter mobile number!
        <button>{{ count ? count + 's' : '获取验证码'}}</button>
        `);
      });
    });
  });
});
