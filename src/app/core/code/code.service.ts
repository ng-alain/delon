import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { deepCopy } from '@delon/util';
import sdk from '@stackblitz/sdk';
import { getParameters } from 'codesandbox/lib/api/define';
import * as pkg from '../../../../package.json';
import { AppService } from '../app.service';
import angularJSON from './files/angular.json';
import appModuleTS from './files/app.module';
import delonABCModuleTS from './files/delon-abc.module';
import delonChartModuleTS from './files/delon-chart.module';
import dotAngularCliJSON from './files/dot_angular-cli.json';
import environmentTS from './files/environment';
import globalConfigTS from './files/global-config.module';
import mainTS from './files/main';
import nzZorroAntdModuleTS from './files/ng-zorro-antd.module';
import polyfillTS from './files/polyfill';
import startupServiceTS from './files/startup.service';
import tsconfigJSON from './files/tsconfig.json';

@Injectable({ providedIn: 'root' })
export class CodeService {
  private document: Document;

  private get dependencies(): { [key: string]: string } {
    const NGALAIN_VERSION = `~${pkg.version}`;
    return {
      '@angular/animations': '^9.1.4',
      '@angular/compiler': '^9.1.4',
      '@angular/cdk': '^9.2.4',
      '@angular/common': '^9.1.4',
      '@angular/core': '^9.1.4',
      '@angular/forms': '^9.1.4',
      '@angular/platform-browser': '^9.1.4',
      '@angular/platform-browser-dynamic': '^9.1.4',
      '@angular/router': '^9.1.4',
      '@ant-design/icons-angular': '^9.0.1',
      'core-js': '^3.6.4',
      rxjs: '^6.5.5',
      tslib: '^1.11.1',
      'zone.js': '^0.10.3',
      '@antv/g2': '*',
      '@antv/data-set': '*',
      'date-fns': '*',
      'file-saver': '*',
      'ngx-countdown': '*',
      extend: '*',
      qrious: '*',
      'ng-zorro-antd': '*',
      '@delon/theme': NGALAIN_VERSION,
      '@delon/abc': NGALAIN_VERSION,
      '@delon/chart': NGALAIN_VERSION,
      '@delon/acl': NGALAIN_VERSION,
      '@delon/auth': NGALAIN_VERSION,
      '@delon/cache': NGALAIN_VERSION,
      '@delon/mock': NGALAIN_VERSION,
      '@delon/form': NGALAIN_VERSION,
      '@delon/util': NGALAIN_VERSION,
    };
  }

  private get themePath(): string {
    return `node_modules/@delon/theme/${this.appSrv.theme}.css`;
  }

  constructor(private appSrv: AppService, @Inject(DOCUMENT) document: any) {
    this.document = document;
  }

  private get genStartupService(): string {
    return startupServiceTS({ ajvVersion: pkg.dependencies.ajv.substr(1) });
  }

  private get genMock(): { [key: string]: string } {
    return { '_mock/user.ts': require('!!raw-loader!../../../../_mock/user.ts').default, '_mock/index.ts': `export * from './user';` };
  }

  private parseCode(code: string): { selector: string; componentName: string; html: string } {
    let selector = '';
    let componentName = '';
    const selectorRe = /selector:[ ]?(['|"|`])([^'"`]+)/g.exec(code);
    if (selectorRe) {
      selector = selectorRe[2];
    }
    const componentNameRe = /export class ([^ {]+)/g.exec(code);
    if (componentNameRe) {
      componentName = componentNameRe[1];
    }
    return {
      selector,
      componentName,
      html: [
        `<base href="/">`,
        `<${selector}>loading</${selector}>`,
        `<div id="VERSION" style="position: fixed; bottom: 8px; right: 8px; z-index: 8888;"></div>`,
      ].join('\n'),
    };
  }

  openOnStackBlitz(appComponentCode: string): void {
    const res = this.parseCode(appComponentCode);
    const json = deepCopy(angularJSON);
    json.projects.demo.architect.build.options.styles.splice(0, 0, this.themePath);
    sdk.openProject(
      {
        title: 'NG-ALAIN',
        description: 'NG-ZORRO  admin panel front-end framework',
        tags: ['ng-alain', '@delon', 'NG-ZORRO', 'ng-zorro-antd', 'Ant Design', 'Angular', 'ng'],
        dependencies: this.dependencies,
        files: {
          'angular.json': `${JSON.stringify(json, null, 2)}`,
          'tsconfig.json': `${JSON.stringify(tsconfigJSON, null, 2)}`,
          'src/environments/environment.ts': environmentTS,
          'src/index.html': res.html,
          'src/main.ts': mainTS,
          'src/polyfills.ts': polyfillTS,
          'src/app/app.component.ts': appComponentCode,
          'src/app/app.module.ts': appModuleTS(res.componentName),
          'src/app/global-config.module.ts': globalConfigTS,
          'src/app/ng-zorro-antd.module.ts': nzZorroAntdModuleTS,
          'src/app/delon-abc.module.ts': delonABCModuleTS,
          'src/app/delon-chart.module.ts': delonChartModuleTS,
          'src/app/startup.service.ts': this.genStartupService,
          'src/styles.css': ``,
          ...this.genMock,
        },
        template: 'angular-cli',
      },
      {
        openFile: `src/app/app.component.ts`,
      },
    );
  }

  openOnCodeSandbox(appComponentCode: string): void {
    const res = this.parseCode(appComponentCode);
    const mockObj = this.genMock;
    const json = deepCopy(dotAngularCliJSON);
    json.apps[0].styles.splice(0, 0, this.themePath);
    const parameters = getParameters({
      files: {
        'package.json': {
          content: JSON.stringify(
            {
              dependencies: this.dependencies,
            },
            null,
            2,
          ),
          isBinary: false,
        },
        '.angular-cli.json': {
          content: `${JSON.stringify(json, null, 2)}`,
          isBinary: false,
        },
        // 'tsconfig.json': {
        //   content: `${JSON.stringify(tsconfigJSON, null, 2)}`,
        //   isBinary: false,
        // },
        'src/environments/environment.ts': {
          content: environmentTS,
          isBinary: false,
        },
        'src/index.html': {
          content: res.html,
          isBinary: false,
        },
        'src/main.ts': {
          content: mainTS,
          isBinary: false,
        },
        'src/polyfills.ts': {
          content: polyfillTS,
          isBinary: false,
        },
        'src/app/app.module.ts': {
          content: appModuleTS(res.componentName),
          isBinary: false,
        },
        'src/app/global-config.module.ts': {
          content: globalConfigTS,
          isBinary: false,
        },
        'src/app/app.component.ts': {
          content: appComponentCode,
          isBinary: false,
        },
        'src/app/ng-zorro-antd.module.ts': {
          content: nzZorroAntdModuleTS,
          isBinary: false,
        },
        'src/app/delon-abc.module.ts': {
          content: delonABCModuleTS,
          isBinary: false,
        },
        'src/app/delon-chart.module.ts': {
          content: delonChartModuleTS,
          isBinary: false,
        },
        'src/app/startup.service.ts': {
          content: this.genStartupService,
          isBinary: false,
        },
        'src/styles.css': {
          content: ``,
          isBinary: false,
        },
        '_mock/user.ts': {
          content: mockObj['_mock/user.ts'],
          isBinary: false,
        },
        '_mock/index.ts': {
          content: mockObj['_mock/index.ts'],
          isBinary: false,
        },
      },
    });

    const form = this.document.createElement('form');
    const parametersInput = this.document.createElement('input');
    form.method = 'POST';
    form.action = 'https://codesandbox.io/api/v1/sandboxes/define';
    form.target = '_blank';
    parametersInput.name = 'parameters';
    parametersInput.value = parameters;
    form.appendChild(parametersInput);
    this.document.body.append(form);
    form.submit();
    this.document.body.removeChild(form);
  }
}
