import { Injectable } from '@angular/core';
import sdk from '@stackblitz/sdk';
import * as pkg from '../../../package.json';

@Injectable({ providedIn: 'root' })
export class CodeService {
  openOnStackBlitz(appComponentCode: string) {
    let selector = '';
    let componentName = '';
    const selectorRe = /selector:[ ]?(['|"|`])([^'"`]+)/g.exec(appComponentCode);
    if (selectorRe) {
      selector = selectorRe[2];
    }
    const componentNameRe = /export class ([^ {]+)/g.exec(appComponentCode);
    if (componentNameRe) {
      componentName = componentNameRe[1];
    }
    // https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/scripts/site/_site/doc/app/share/codebox/stack-blitz.ts#L124
    const demoNgZorroAntdModule = `
    import { NgModule } from '@angular/core';
    import { NzAffixModule } from 'ng-zorro-antd/affix';
    import { NzAlertModule } from 'ng-zorro-antd/alert';
    import { NzAnchorModule } from 'ng-zorro-antd/anchor';
    import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
    import { NzAvatarModule } from 'ng-zorro-antd/avatar';
    import { NzBackTopModule } from 'ng-zorro-antd/back-top';
    import { NzBadgeModule } from 'ng-zorro-antd/badge';
    import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
    import { NzButtonModule } from 'ng-zorro-antd/button';
    import { NzCalendarModule } from 'ng-zorro-antd/calendar';
    import { NzCardModule } from 'ng-zorro-antd/card';
    import { NzCarouselModule } from 'ng-zorro-antd/carousel';
    import { NzCascaderModule } from 'ng-zorro-antd/cascader';
    import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
    import { NzCollapseModule } from 'ng-zorro-antd/collapse';
    import { NzCommentModule } from 'ng-zorro-antd/comment';
    import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
    import { NzTransButtonModule } from 'ng-zorro-antd/core/trans-button';
    import { NzWaveModule } from 'ng-zorro-antd/core/wave';
    import { warnDeprecation } from 'ng-zorro-antd/core/logger';
    import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
    import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
    import { NzDividerModule } from 'ng-zorro-antd/divider';
    import { NzDrawerModule } from 'ng-zorro-antd/drawer';
    import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
    import { NzEmptyModule } from 'ng-zorro-antd/empty';
    import { NzFormModule } from 'ng-zorro-antd/form';
    import { NzGridModule } from 'ng-zorro-antd/grid';
    import { NzI18nModule } from 'ng-zorro-antd/i18n';
    import { NzIconModule } from 'ng-zorro-antd/icon';
    import { NzInputModule } from 'ng-zorro-antd/input';
    import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
    import { NzLayoutModule } from 'ng-zorro-antd/layout';
    import { NzListModule } from 'ng-zorro-antd/list';
    import { NzMentionModule } from 'ng-zorro-antd/mention';
    import { NzMenuModule } from 'ng-zorro-antd/menu';
    import { NzMessageModule } from 'ng-zorro-antd/message';
    import { NzModalModule } from 'ng-zorro-antd/modal';
    import { NzNotificationModule } from 'ng-zorro-antd/notification';
    import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
    import { NzPaginationModule } from 'ng-zorro-antd/pagination';
    import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
    import { NzPopoverModule } from 'ng-zorro-antd/popover';
    import { NzProgressModule } from 'ng-zorro-antd/progress';
    import { NzRadioModule } from 'ng-zorro-antd/radio';
    import { NzRateModule } from 'ng-zorro-antd/rate';
    import { NzResultModule } from 'ng-zorro-antd/result';
    import { NzSelectModule } from 'ng-zorro-antd/select';
    import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
    import { NzSliderModule } from 'ng-zorro-antd/slider';
    import { NzSpinModule } from 'ng-zorro-antd/spin';
    import { NzStatisticModule } from 'ng-zorro-antd/statistic';
    import { NzStepsModule } from 'ng-zorro-antd/steps';
    import { NzSwitchModule } from 'ng-zorro-antd/switch';
    import { NzTableModule } from 'ng-zorro-antd/table';
    import { NzTabsModule } from 'ng-zorro-antd/tabs';
    import { NzTagModule } from 'ng-zorro-antd/tag';
    import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
    import { NzTimelineModule } from 'ng-zorro-antd/timeline';
    import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
    import { NzTransferModule } from 'ng-zorro-antd/transfer';
    import { NzTreeModule } from 'ng-zorro-antd/tree';
    import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
    import { NzTypographyModule } from 'ng-zorro-antd/typography';
    import { NzUploadModule } from 'ng-zorro-antd/upload';
    import { NzResizableModule } from 'ng-zorro-antd/resizable';
    @NgModule({
      exports: [
        NzAffixModule,
        NzAlertModule,
        NzAnchorModule,
        NzAutocompleteModule,
        NzAvatarModule,
        NzBackTopModule,
        NzBadgeModule,
        NzButtonModule,
        NzBreadCrumbModule,
        NzCalendarModule,
        NzCardModule,
        NzCarouselModule,
        NzCascaderModule,
        NzCheckboxModule,
        NzCollapseModule,
        NzCommentModule,
        NzDatePickerModule,
        NzDescriptionsModule,
        NzDividerModule,
        NzDrawerModule,
        NzDropDownModule,
        NzEmptyModule,
        NzFormModule,
        NzGridModule,
        NzI18nModule,
        NzIconModule,
        NzInputModule,
        NzInputNumberModule,
        NzLayoutModule,
        NzListModule,
        NzMentionModule,
        NzMenuModule,
        NzMessageModule,
        NzModalModule,
        NzNoAnimationModule,
        NzNotificationModule,
        NzPageHeaderModule,
        NzPaginationModule,
        NzPopconfirmModule,
        NzPopoverModule,
        NzProgressModule,
        NzRadioModule,
        NzRateModule,
        NzResultModule,
        NzSelectModule,
        NzSkeletonModule,
        NzSliderModule,
        NzSpinModule,
        NzStatisticModule,
        NzStepsModule,
        NzSwitchModule,
        NzTableModule,
        NzTabsModule,
        NzTagModule,
        NzTimePickerModule,
        NzTimelineModule,
        NzToolTipModule,
        NzTransButtonModule,
        NzTransferModule,
        NzTreeModule,
        NzTreeSelectModule,
        NzTypographyModule,
        NzUploadModule,
        NzWaveModule,
        NzResizableModule
      ]
    })
    export class DemoNgZorroAntdModule {
    }
      `;
    const demoDelonABCModule = `import { NgModule } from '@angular/core';

    // #region all modules
    import { AvatarListModule } from '@delon/abc/avatar-list';
    import { CountDownModule } from '@delon/abc/count-down';
    import { DatePickerModule } from '@delon/abc/date-picker';
    import { DownFileModule } from '@delon/abc/down-file';
    import { EllipsisModule } from '@delon/abc/ellipsis';
    import { ErrorCollectModule } from '@delon/abc/error-collect';
    import { ExceptionModule } from '@delon/abc/exception';
    import { FooterToolbarModule } from '@delon/abc/footer-toolbar';
    import { FullContentModule } from '@delon/abc/full-content';
    import { GlobalFooterModule } from '@delon/abc/global-footer';
    import { ImageModule } from '@delon/abc/image';
    import { LoadingModule } from '@delon/abc/loading';
    import { LodopModule } from '@delon/abc/lodop';
    import { NoticeIconModule } from '@delon/abc/notice-icon';
    import { NumberToChineseModule } from '@delon/abc/number-to-chinese';
    import { PageHeaderModule } from '@delon/abc/page-header';
    import { QRModule } from '@delon/abc/qr';
    import { QuickMenuModule } from '@delon/abc/quick-menu';
    import { ResultModule } from '@delon/abc/result';
    import { ReuseTabModule } from '@delon/abc/reuse-tab';
    import { SEModule } from '@delon/abc/se';
    import { SGModule } from '@delon/abc/sg';
    import { SidebarNavModule } from '@delon/abc/sidebar-nav';
    import { STModule } from '@delon/abc/st';
    import { SVModule } from '@delon/abc/sv';
    import { TagSelectModule } from '@delon/abc/tag-select';
    import { XlsxModule } from '@delon/abc/xlsx';
    import { ZipModule } from '@delon/abc/zip';

    const MODULES = [
      ErrorCollectModule,
      FooterToolbarModule,
      SidebarNavModule,
      DownFileModule,
      ImageModule,
      AvatarListModule,
      EllipsisModule,
      GlobalFooterModule,
      ExceptionModule,
      NoticeIconModule,
      PageHeaderModule,
      ResultModule,
      TagSelectModule,
      CountDownModule,
      STModule,
      ReuseTabModule,
      FullContentModule,
      XlsxModule,
      ZipModule,
      NumberToChineseModule,
      LodopModule,
      QuickMenuModule,
      QRModule,
      SVModule,
      SEModule,
      SGModule,
      DatePickerModule,
      LoadingModule,
    ];

    @NgModule({ exports: MODULES })
    export class DemoDelonABCModule {}
    `;
    const demoDelonChartModule = `import { NgModule } from '@angular/core';

    // #region all modules

    import { G2BarModule } from '@delon/chart/bar';
    import { G2CardModule } from '@delon/chart/card';
    import { G2CustomModule } from '@delon/chart/custom';
    import { G2GaugeModule } from '@delon/chart/gauge';
    import { G2MiniAreaModule } from '@delon/chart/mini-area';
    import { G2MiniBarModule } from '@delon/chart/mini-bar';
    import { G2MiniProgressModule } from '@delon/chart/mini-progress';
    import { NumberInfoModule } from '@delon/chart/number-info';
    import { G2PieModule } from '@delon/chart/pie';
    import { G2RadarModule } from '@delon/chart/radar';
    import { G2SingleBarModule } from '@delon/chart/single-bar';
    import { G2TagCloudModule } from '@delon/chart/tag-cloud';
    import { G2TimelineModule } from '@delon/chart/timeline';
    import { TrendModule } from '@delon/chart/trend';
    import { G2WaterWaveModule } from '@delon/chart/water-wave';

    const MODULES = [
      G2BarModule,
      G2CardModule,
      G2CustomModule,
      G2GaugeModule,
      G2MiniAreaModule,
      G2MiniBarModule,
      G2MiniProgressModule,
      G2PieModule,
      G2RadarModule,
      G2TagCloudModule,
      G2TimelineModule,
      G2WaterWaveModule,
      G2SingleBarModule,
      NumberInfoModule,
      TrendModule,
    ];

    // #endregion

    @NgModule({ exports: MODULES })
    export class DemoDelonChartModule {}
    `;
    const mainModule = `import './polyfills';
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
}).catch(err => console.error(err));`;
    const indexHtmlCode = `<${selector}>loading</${selector}>
<div id="VERSION" style="position: fixed; bottom: 8px; right: 8px; z-index: 8888;"></div>`;
    const appModuleCode = `import { NgModule, APP_INITIALIZER } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
    import { HttpClientModule } from '@angular/common/http';
    import { RouterModule } from '@angular/router';

    import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
    import { NZ_ICONS } from 'ng-zorro-antd/icon';
    import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
    import { IconDefinition } from '@ant-design/icons-angular';
    import * as AllIcons from '@ant-design/icons-angular/icons';

    import { registerLocaleData } from '@angular/common';
    import en from '@angular/common/locales/en';
    registerLocaleData(en);

    import { AlainThemeModule } from '@delon/theme';
    import { DemoDelonABCModule } from './delon-abc.module';
    import { DemoDelonChartModule } from './delon-chart.module';
    import { DelonFormModule } from '@delon/form';
    import { DelonAuthModule } from '@delon/auth';
    import { DelonACLModule } from '@delon/acl';
    import { DelonCacheModule } from '@delon/cache';
    import { DelonUtilModule } from '@delon/util';
    import { DelonMockModule } from '@delon/mock';
    import * as MOCKDATA from '../../_mock';
    import { StartupService, StartupServiceFactory } from './startup.service';

    const antDesignIcons = AllIcons as {
      [key: string]: IconDefinition;
    };
    const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

    import { VERSION as VERSION_ALAIN } from '@delon/theme';
    import { VERSION as VERSION_ZORRO } from 'ng-zorro-antd/version';
    import { ${componentName} } from './app.component';

    @NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([]),
        DemoNgZorroAntdModule,
        AlainThemeModule.forRoot(),
        DemoDelonABCModule,
        DemoDelonChartModule,
        DelonACLModule.forRoot(),
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
      },
      { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons }
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
      `;
    const angularJsonCode = `{
"$schema": "./node_modules/@angular/cli/lib/config/schema.json",
"version": 1,
"newProjectRoot": "projects",
"projects": {
  "demo": {
    "root": "",
    "sourceRoot": "src",
    "projectType": "application",
    "prefix": "app",
    "architect": {
      "build": {
        "builder": "@angular-devkit/build-angular:browser",
        "options": {
          "outputPath": "dist",
          "index": "src/index.html",
          "main": "src/main.ts",
          "tsConfig": "tsconfig.app.json",
          "polyfills": "src/polyfills.ts",
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
      }
    }
  }
},
"defaultProject": "demo"
}
`;
    const startupServiceCode = `import { Injectable } from '@angular/core';
import { LazyService } from '@delon/util';

@Injectable()
export class StartupService {
  constructor(private lazy: LazyService) { }
  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.lazy.load([
        'https://cdnjs.cloudflare.com/ajax/libs/ajv/${pkg.dependencies.ajv.substr(1)}/ajv.min.js',
      ])
        .then(() => resolve(null));
    });
  }
}

export function StartupServiceFactory(startupService: StartupService): Function {
  return () => startupService.load();
}`;

    const NGALAIN_VERSION = `~${pkg.version}`;
    sdk.openProject(
      {
        title: 'Dynamically Generated Project',
        description: 'Created with <3 by the StackBlitz SDK!',
        tags: ['ng-alain', '@delon'],
        files: {
          'angular.json': angularJsonCode,
          'src/index.html': indexHtmlCode,
          'src/main.ts': mainModule,
          'src/polyfills.ts': `import 'zone.js/dist/zone';`,
          'src/app/app.component.ts': appComponentCode,
          'src/app/app.module.ts': appModuleCode,
          'src/app/ng-zorro-antd.module.ts': demoNgZorroAntdModule,
          'src/app/delon-abc.module.ts': demoDelonABCModule,
          'src/app/delon-chart.module.ts': demoDelonChartModule,
          'src/app/startup.service.ts': startupServiceCode,
          'src/styles.less': ``,
          '_mock/user.ts': require('!!raw-loader!../../../_mock/user.ts').default,
          '_mock/index.ts': `export * from './user';`,
        },
        template: 'angular-cli',
        dependencies: {
          '@angular/cdk': '*',
          '@angular/core': '*',
          '@angular/forms': '*',
          '@angular/language-service': '*',
          '@angular/platform-browser': '*',
          '@angular/platform-browser-dynamic': '*',
          '@angular/common': '*',
          '@angular/router': '*',
          '@angular/animations': '*',
          '@ant-design/icons-angular': '*',
          'core-js': '2.x',
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
        },
      },
      {
        openFile: `src/app/app.component.ts`,
      },
    );
  }
}
