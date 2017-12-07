export const mainTS = `
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { Component, NgModule, VERSION } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgZorroAntdExtraModule } from 'ng-zorro-antd-extra';
import { AlainThemeModule } from '@delon/theme';
import { AlainABCModule } from '@delon/abc';
import { AlainACLModule } from '@delon/acl';

##import##

@NgModule({
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      NgZorroAntdModule.forRoot(),
      NgZorroAntdExtraModule.forRoot(),
      AlainThemeModule.forRoot(),
      AlainABCModule.forRoot(),
      AlainACLModule.forRoot(),
    ],
    declarations: [ ##name## ],
    bootstrap: [ ##name## ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
`;

export const indexHtml = `<!DOCTYPE html>
<html>

  <head>
    <script>document.write('<base href="' + document.location + '" />');</script>
    <meta charset="UTF-8">
    <title>angular playground</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://unpkg.com/core-js/client/shim.min.js"></script>
    <script src="https://unpkg.com/zone.js@0.7.4?main=browser"></script>
    <script src="https://unpkg.com/systemjs@0.19.39/dist/system.src.js"></script>
    <script src="https://gw.alipayobjects.com/os/antv/assets/g2/3.0.0/g2.min.js"></script>
    <script src="https://gw.alipayobjects.com/os/antv/assets/data-set/0.7.0/data-set.min.js"></script>
    <script src="https://gw.alipayobjects.com/os/antv/assets/g2-plugin-slider/2.0.0/g2-plugin-slider.js"></script>
    <script src="systemjs.config.js"></script>
    <script>
        System.import('main.js').catch(function(err){ console.error(err); });
    </script>
  </head>

  <body>
    <div style="margin: 24px">
        ##component##
    </div>
  </body>
</html>
`;

export const angularLoad = `
var templateUrlRegex = /templateUrl\\s*:(\\s*['"\`](.*?)['"\`]\\s*)/gm;
var stylesRegex = /styleUrls *:(\\s*\\[[^\\]]*?\\])/g;
var stringRegex = /(['\`"])((?:[^\\\\]\\\\\\1|.)*?)\\1/g;

module.exports.translate = function(load){
  if (load.source.indexOf('moduleId') != -1) return load;

  var url = document.createElement('a');
  url.href = load.address;

  var basePathParts = url.pathname.split('/');

  basePathParts.pop();
  var basePath = basePathParts.join('/');

  var baseHref = document.createElement('a');
  baseHref.href = this.baseURL;
  baseHref = baseHref.pathname;

  if (!baseHref.startsWith('/base/')) { // it is not karma
    basePath = basePath.replace(baseHref, '');
  }

  load.source = load.source
    .replace(templateUrlRegex, function(match, quote, url){
      var resolvedUrl = url;

      if (url.startsWith('.')) {
        resolvedUrl = basePath + url.substr(1);
      }

      return 'templateUrl: "' + resolvedUrl + '"';
    })
    .replace(stylesRegex, function(match, relativeUrls) {
      var urls = [];

      while ((match = stringRegex.exec(relativeUrls)) !== null) {
        if (match[2].startsWith('.')) {
          urls.push('"' + basePath + match[2].substr(1) + '"');
        } else {
          urls.push('"' + match[2] + '"');
        }
      }

      return "styleUrls: [" + urls.join(', ') + "]";
    });

  return load;
};
`;

export const configJs = `

/**
 * WEB ANGULAR VERSION
 * (based on systemjs.config.js in angular.io)
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
    transpiler: 'ts',
    typescriptOptions: {
      // Copy of compiler options in standard tsconfig.json
      "target": "es5",
      "module": "commonjs",
      "moduleResolution": "node",
      "sourceMap": true,
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "lib": ["es2015", "dom"],
      "noImplicitAny": true,
      "suppressImplicitAnyIndexErrors": true
    },
    meta: {
      'typescript': {
        "exports": "ts"
      }
    },
    paths: {
      // paths serve as alias
      'npm:': 'https://unpkg.com/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      'app': 'app',

      // angular bundles
      '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
      '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/common/http': 'npm:@angular/common/bundles/common-http.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/router/upgrade': 'npm:@angular/router/bundles/router-upgrade.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
      '@angular/upgrade/static': 'npm:@angular/upgrade/bundles/upgrade-static.umd.js',

      '@angular/cdk': 'npm:@angular/cdk/bundles/cdk.umd.js',
      '@angular/cdk/keycodes': 'npm:@angular/cdk/bundles/cdk-keycodes.umd.js',
      '@angular/cdk/bidi': 'npm:@angular/cdk/bundles/cdk-bidi.umd.js',
      '@angular/cdk/portal': 'npm:@angular/cdk/bundles/cdk-portal.umd.js',
      '@angular/cdk/observers': 'npm:@angular/cdk/bundles/cdk-observers.umd.js',
      '@angular/cdk/rxjs': 'npm:@angular/cdk/bundles/cdk-rxjs.umd.js',
      '@angular/cdk/a11y': 'npm:@angular/cdk/bundles/cdk-a11y.umd.js',
      '@angular/cdk/coercion': 'npm:@angular/cdk/bundles/cdk-coercion.umd.js',
      '@angular/cdk/collections': 'npm:@angular/cdk/bundles/cdk-collections.umd.js',
      '@angular/cdk/overlay': 'npm:@angular/cdk/bundles/cdk-overlay.umd.js',
      '@angular/cdk/platform': 'npm:@angular/cdk/bundles/cdk-platform.umd.js',
      '@angular/cdk/scrolling': 'npm:@angular/cdk/bundles/cdk-scrolling.umd.js',
      '@angular/cdk/stepper': 'npm:@angular/cdk/bundles/cdk-stepper.umd.js',
      '@angular/cdk/table': 'npm:@angular/cdk/bundles/cdk-table.umd.js',

      // other libraries
      'rxjs':                      'npm:rxjs@5.5.5',
      'rxjs/operators':            'npm:rxjs@5.5.5/operators',
      'tslib':                     'npm:tslib/tslib.js',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api@0.4/bundles/in-memory-web-api.umd.js',
      'ts':                        'npm:plugin-typescript@5.2.7/lib/plugin.js',
      'typescript':                'npm:typescript@2.4.2/lib/typescript.js',

      'moment': 'https://momentjs.com/downloads/moment-with-locales.js',
      'moment/locale/zh-cn': '@empty',
      'ng-zorro-antd': 'https://unpkg.com/ng-zorro-antd/bundles/antd.umd.js',

      'ng-zorro-antd-extra': 'https://unpkg.com/ng-zorro-antd-extra/bundles/ng-zorro-antd-extra.umd.js',
      '@delon/theme': 'https://unpkg.com/@delon/theme/bundles/theme.umd.js',
      '@delon/abc': 'https://unpkg.com/@delon/abc/bundles/abc.umd.js',
      '@delon/acl': 'https://unpkg.com/@delon/acl/bundles/acl.umd.js',

      'file-saver': 'npm:file-saver',
      'ngx-countdown': 'https://unpkg.com/ngx-countdown/bundles/ngx-countdown.umd.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.ts',
        defaultExtension: 'ts',
        meta: {
          './*.ts': {
            loader: 'systemjs-angular-loader.js'
          }
        }
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });

})(this);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

`;
