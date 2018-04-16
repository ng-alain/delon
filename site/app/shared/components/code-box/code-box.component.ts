import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { copy } from '@delon/abc';
import sdk from '@stackblitz/sdk';

import { I18NService } from './../../../core/i18n/service';

@Component({
    selector: 'code-box',
    templateUrl: './code-box.component.html',
    host: {
        '[class.code-box]': 'true',
        '[class.expand]': 'expand'
    }
})
export class CodeBoxComponent implements OnInit, OnDestroy {
    private _item: any;
    @Input()
    set item(value: any) {
        const ret: any = {
            meta: value.meta,
            code: value.code.trim(),
            title: this.i18n.get(value.meta.title),
            summary: this.i18n.get(value.summary),
            browser: +value.meta.browser > 0 ? +value.meta.browser : null,
            bg: value.meta.bg,
            urls: value.urls
        };
        this._item = ret;
    }
    get item() { return this._item; }

    @Input() expand: boolean = false;

    constructor(public i18n: I18NService, private msg: NzMessageService) {}

    handle() {
        this.expand = !this.expand;
    }

    private initHLJS() {
        setTimeout(() => {
            const elements = document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');
            for (let i = 0, element; element = elements[i++];) {
                hljs.highlightBlock(element);
            }
        }, 250);
    }

    /** bug here https://github.com/stackblitz/core/issues/311 **/
    openOnStackBlitz() {
        let selector = '', componentName = '';
        const selectorRe = /selector:[ ]?(['|"|`])([^'"`]+)/g.exec(this.item.code);
        if (selectorRe) {
            selector = selectorRe[2];
        }
        const componentNameRe = /export class ([^ {]+)/g.exec(this.item.code);
        if (componentNameRe) {
            componentName = componentNameRe[1];
        }

        const title = this.i18n.get(this.item.meta.title);
      sdk.openProject({
          title,
          description: `${title}-${ this.i18n.get(this.item.summary).replace(/<[^>]+>/g, '') }`,
          tags: [ 'ng-alain', '@delon'],
        files: {
          '.angular-cli.json'   : `{
    "apps": [{
      "styles": ["styles.less"]
    }]
  }`,
          'index.html'          : (~this.item.code.indexOf('<g2') ? `
<script type="text/javascript" src="https://gw.alipayobjects.com/os/antv/assets/g2/3.0.5-beta.5/g2.min.js"></script>
<script type="text/javascript" src="https://gw.alipayobjects.com/os/antv/assets/data-set/0.8.5/data-set.min.js"></script>
<script type="text/javascript" src="https://gw.alipayobjects.com/os/antv/assets/g2-plugin-slider/2.0.0/g2-plugin-slider.js"></script>
` : ``)
+ `<${selector}>loading</${selector}>`,
          'main.ts'             : `import './polyfills';
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
          'polyfills.ts'        : `/**
   * This file includes polyfills needed by Angular and is loaded before the app.
   * You can add your own extra polyfills to this file.
   *
   * This file is divided into 2 sections:
   *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
   *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
   *      file.
   *
   * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
   * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
   * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
   *
   * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
   */
  /***************************************************************************************************
   * BROWSER POLYFILLS
   */
  /** IE9, IE10 and IE11 requires all of the following polyfills. **/
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
  /** ALL Firefox browsers require the following to support \`@angular/animation\`. **/
  // import 'web-animations-js';  // Run \`npm install --save web-animations-js\`.
  /***************************************************************************************************
   * Zone JS is required by Angular itself.
   */
  import 'zone.js/dist/zone';  // Included with Angular CLI.
  /***************************************************************************************************
   * APPLICATION IMPORTS
   */
  /**
   * Date, currency, decimal and percent pipes.
   * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
   */
  // import 'intl';  // Run \`npm install --save intl\`.`,
          'app/app.component.ts': this.item.code,
          'app/app.module.ts'   : `import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AlainThemeModule } from '@delon/theme';
import { DelonABCModule } from '@delon/abc';
import { DelonAuthModule } from '@delon/auth';
import { DelonACLModule } from '@delon/acl';
import { DelonCacheModule } from '@delon/cache';

import { ${componentName} } from './app.component';

@NgModule({
imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    AlainThemeModule.forRoot(),
    DelonABCModule.forRoot(),
    DelonAuthModule.forRoot(),
    DelonACLModule.forRoot(),
    DelonCacheModule.forRoot()
],
declarations: [ ${componentName} ],
bootstrap:    [ ${componentName} ]
})
export class AppModule { }
  `,
          'styles.less'         : `@import "~ng-zorro-antd/src/ng-zorro-antd.less";
@import '~@delon/theme/styles/index';
@import '~@delon/abc/index';

// 例如：内容区域背景色为白色
// @content-bg:  #fff;`
        },
        template    : 'angular-cli',
        dependencies: {
          '@angular/cdk'                     : '^5.0.0',
          '@angular/core'                    : '^5.0.0',
          '@angular/forms'                   : '^5.0.0',
          '@angular/http'                    : '^5.0.0',
          '@angular/language-service'        : '^5.0.0',
          '@angular/platform-browser'        : '^5.0.0',
          '@angular/platform-browser-dynamic': '^5.0.0',
          '@angular/common'                  : '^5.0.0',
          '@angular/router'                  : '^5.0.0',
          '@angular/animations'              : '^5.0.0',
          'date-fns'                         : '^1.29.0',
          'file-saver'                       : '^1.3.3',
          'ngx-countdown'                    : '^2.0.0',
          'ng-zorro-antd'                    : 'next',
          '@delon/theme'                     : 'next',
          '@delon/abc'                       : 'next',
          '@delon/acl'                       : 'next',
          '@delon/auth'                      : 'next',
          '@delon/cache'                     : 'next',
          '@delon/mock'                      : 'next'
        }
      });
    }

    onCopy(value: string) {
        copy(value).then(() => this.msg.success(this.i18n.fanyi('app.demo.copied')));
    }

    i18NChange$: any;
    ngOnInit(): void {
        this.i18NChange$ = this.i18n.change.subscribe(() => {
            this.initHLJS();
        });
        this.initHLJS();
    }

    ngOnDestroy(): void {
        if (this.i18NChange$) this.i18NChange$.unsubscribe();
    }
}
