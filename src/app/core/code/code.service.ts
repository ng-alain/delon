import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import sdk from '@stackblitz/sdk';
import { getParameters } from 'codesandbox/lib/api/define';
import * as pkg from '../../../../package.json';
import angularJSON from './files/angular.json';
import appModuleTS from './files/app.module';
import delonABCModuleTS from './files/delon-abc.module';
import delonChartModuleTS from './files/delon-chart.module';
import mainTS from './files/main';
import nzZorroAntdModuleTS from './files/ng-zorro-antd.module';
import polyfillTS from './files/polyfill';
import startupServiceTS from './files/startup.service';

@Injectable({ providedIn: 'root' })
export class CodeService {
  private document: Document;

  private get dependencies() {
    const NGALAIN_VERSION = `~${pkg.version}`;
    return {
      '@angular/animations': '^9.0.0',
      '@angular/cdk': '9.2.1',
      '@angular/common': '^9.0.0',
      '@angular/compiler': '^9.0.0',
      '@angular/core': '^9.0.0',
      '@angular/forms': '^9.0.0',
      '@angular/platform-browser': '^9.0.0',
      '@angular/platform-browser-dynamic': '^9.0.0',
      '@angular/router': '^9.0.0',
      '@ant-design/icons-angular': '9.0.1',
      'core-js': '3.6.4',
      '@antv/g2': '*',
      '@antv/data-set': '*',
      'date-fns': '*',
      'file-saver': '^1.3.3',
      'ngx-countdown': '*',
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
      extend: '*',
      qrious: '*',
    };
  }

  constructor(@Inject(DOCUMENT) document: any) {
    this.document = document;
  }

  private get genStartupService(): string {
    return startupServiceTS({ ajvVersion: pkg.dependencies.ajv.substr(1) });
  }

  private get genMock(): {} {
    return { '_mock/user.ts': require('!!raw-loader!../../../../_mock/user.ts').default, '_mock/index.ts': `export * from './user';` };
  }

  private parseCode(code: string) {
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
      html: `<${selector}>loading</${selector}><div id="VERSION" style="position: fixed; bottom: 8px; right: 8px; z-index: 8888;"></div>`,
    };
  }

  openOnStackBlitz(appComponentCode: string) {
    const res = this.parseCode(appComponentCode);
    console.log(this.dependencies);
    sdk.openProject(
      {
        title: 'NG-ALAIN',
        description: 'NG-ZORRO  admin panel front-end framework',
        tags: ['ng-alain', '@delon', 'NG-ZORRO', 'ng-zorro-antd', 'Ant Design', 'Angular', 'ng'],
        dependencies: this.dependencies,
        files: {
          'angular.json': `${JSON.stringify(angularJSON)}`,
          'src/index.html': res.html,
          'src/main.ts': mainTS,
          'src/polyfills.ts': polyfillTS,
          'src/app/app.component.ts': appComponentCode,
          'src/app/app.module.ts': appModuleTS(res.componentName),
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

  openOnCodeSandbox(appComponentCode: string) {
    const res = this.parseCode(appComponentCode);
    console.log(res);
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
      },
    });

    const form = this.document.createElement('form');
    const parametersInput = this.document.createElement('input');
    form.method = 'POST';
    form.action = 'https://codesandbox.io/api/v1/sandboxes/define?module=/src/app/app.component.ts';
    form.target = '_blank';
    parametersInput.name = 'parameters';
    parametersInput.value = parameters;
    form.appendChild(parametersInput);
    this.document.body.append(form);
    form.submit();
    this.document.body.removeChild(form);
  }
}
