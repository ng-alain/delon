import { Injectable } from '@angular/core';
import sdk from '@stackblitz/sdk';

@Injectable({ providedIn: 'root' })
export class CodeService {
  openOnStackBlitz(code: string, title: string, summary: string) {
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
    const isG2 = ~code.indexOf('<g2');

    if (isG2) {
      code = `// G2
declare var G2: any;
declare var DataSet: any;
declare var Slider: any;

` + code;
    }

    sdk.openProject({
      title,
      description: `${title}-${summary.replace(/<[^>]+>/g, '')}`,
      tags: ['ng-alain', '@delon'],
      files: {
        'angular.json': `{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "demo": {
      "root": "",
      "sourceRoot": "src",
      "projectType": "application",
      "prefix": "app",
      "schematics": {},
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/demo",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "src/tsconfig.app.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "node_modules/@delon/theme/styles/ng-alain.css",
              "src/styles.less"
            ],
            "scripts": [
            ]
          },
          "configurations": {
            "production": {
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ],
              "optimization": true,
              "outputHashing": "all",
              "sourceMap": false,
              "extractCss": true,
              "namedChunks": false,
              "aot": true,
              "extractLicenses": true,
              "vendorChunk": false,
              "buildOptimizer": true
            }
          }
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "demo:build"
          },
          "configurations": {
            "production": {
              "browserTarget": "demo:build:production"
            }
          }
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "browserTarget": "demo:build"
          }
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "main": "src/test.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "src/tsconfig.spec.json",
            "karmaConfig": "src/karma.conf.js",
            "styles": [
              "src/styles.less"
            ],
            "scripts": [],
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ]
          }
        },
        "lint": {
          "builder": "@angular-devkit/build-angular:tslint",
          "options": {
            "tsConfig": [
              "src/tsconfig.app.json",
              "src/tsconfig.spec.json"
            ],
            "exclude": [
              "**/node_modules/**"
            ]
          }
        }
      }
    },
    "demo-e2e": {
      "root": "e2e/",
      "projectType": "application",
      "architect": {
        "e2e": {
          "builder": "@angular-devkit/build-angular:protractor",
          "options": {
            "protractorConfig": "e2e/protractor.conf.js",
            "devServerTarget": "demo:serve"
          }
        },
        "lint": {
          "builder": "@angular-devkit/build-angular:tslint",
          "options": {
            "tsConfig": "e2e/tsconfig.e2e.json",
            "exclude": [
              "**/node_modules/**"
            ]
          }
        }
      }
    }
  },
  "defaultProject": "demo"
}
`,
        'src/index.html': [
          ~isG2
            ? `
<script type="text/javascript" src="https://gw.alipayobjects.com/os/antv/pkg/_antv.g2-3.4.1/dist/g2.min.js"></script>
<script type="text/javascript" src="https://gw.alipayobjects.com/os/antv/pkg/_antv.data-set-0.10.1/dist/data-set.min.js"></script>
<script type="text/javascript" src="https://gw.alipayobjects.com/os/antv/assets/g2-plugin-slider/2.0.0/g2-plugin-slider.js"></script>
`
            : ``,

          `<${selector}>loading</${selector}>
<div id="VERSION" style="position: fixed; bottom: 8px; right: 8px; z-index: 8888;"></div>
          `,
        ].join(''),
        'src/main.ts': `import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;
  // Otherise, log the boot error
}).catch(err => console.error(err));`,
        'src/polyfills.ts': `/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run \`npm install --save classlist.js\`.
/** IE10 and IE11 requires the following to support \`@angular/animation\`. */
// import 'web-animations-js';  // Run \`npm install --save web-animations-js\`.
/** Evergreen browsers require these. **/
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
// import 'web-animations-js';
import 'zone.js/dist/zone';`,
        'src/app/app.component.ts': code,
        'src/app/app.module.ts': `import { NgModule, APP_INITIALIZER, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { registerLocaleData } from '@angular/common';
import localeZh from '@angular/common/locales/zh';
registerLocaleData(localeZh);

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AlainThemeModule } from '@delon/theme';
import { DelonABCModule } from '@delon/abc';
import { DelonChartModule } from '@delon/chart';
import { DelonFormModule } from '@delon/form';
import { DelonAuthModule } from '@delon/auth';
import { DelonACLModule } from '@delon/acl';
import { DelonCacheModule } from '@delon/cache';
import { DelonUtilModule, LazyService } from '@delon/util';
import { DelonMockModule } from '@delon/mock';
import * as MOCKDATA from '../../_mock';

@Injectable()
export class StartupService {
  constructor(private lazy: LazyService) { }
  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.lazy.load([
        'https://cdnjs.cloudflare.com/ajax/libs/ajv/6.6.2/ajv.min.js'
      ])
        .then(() => resolve(null));
    });
  }
}

export function StartupServiceFactory(startupService: StartupService): Function {
  return () => startupService.load();
}

import { VERSION as VERSION_ALAIN } from '@delon/theme';
import { VERSION as VERSION_ZORRO } from 'ng-zorro-antd';
import { ${componentName} } from './app.component';

@NgModule({
imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    NgZorroAntdModule,
    AlainThemeModule.forRoot(),
    DelonABCModule,
    DelonChartModule,
    DelonACLModule,
    DelonCacheModule,
    DelonUtilModule,
    DelonAuthModule,
    DelonFormModule.forRoot(),
    DelonMockModule.forRoot({ data: MOCKDATA }),
],
providers: [
  StartupService,
  {
    provide: APP_INITIALIZER,
    useFactory: StartupServiceFactory,
    deps: [StartupService],
    multi: true
  }
],
declarations: [ ${componentName} ],
bootstrap:    [ ${componentName} ]
})
export class AppModule {
  constructor() {
    setTimeout(() => {
      document.querySelector('#VERSION').innerHTML = \`
      VERSIONS: ng-zorro-antd(\${VERSION_ZORRO.full}), @delon(\${VERSION_ALAIN.full})
      \`;
    }, 1000);
  }
}
  `,
        'src/styles.less': ``,
        '_mock/user.ts': require('!!raw-loader!../../../_mock/user.ts'),
        '_mock/index.ts': `export * from './user';`,
      },
      template: 'angular-cli',
      dependencies: {
        '@angular/cdk': '*',
        '@angular/core': '*',
        '@angular/forms': '*',
        '@angular/http': '*',
        '@angular/language-service': '*',
        '@angular/platform-browser': '*',
        '@angular/platform-browser-dynamic': '*',
        '@angular/common': '*',
        '@angular/router': '*',
        '@angular/animations': '*',
        '@ant-design/icons-angular': '*',
        'date-fns': '*',
        'file-saver': '^1.3.3',
        'ngx-countdown': '*',
        'ng-zorro-antd': '^7.0.0-rc.1',
        '@delon/theme': 'latest',
        '@delon/abc': 'latest',
        '@delon/chart': 'latest',
        '@delon/acl': 'latest',
        '@delon/auth': 'latest',
        '@delon/cache': 'latest',
        '@delon/mock': 'latest',
        '@delon/form': 'latest',
        '@delon/util': 'latest',
        'extend': '*',
        'qrious': '*',
      },
    }, {
        openFile: `src/app/app.component.ts`,
      });
  }
}
