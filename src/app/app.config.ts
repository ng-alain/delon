import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import ngLang from '@angular/common/locales/zh';
import { APP_ID, ApplicationConfig, ErrorHandler, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { provideNuMonacoEditorConfig } from '@ng-util/monaco-editor';
import { zhCN as dateLang } from 'date-fns/locale';
import { provideTinymce } from 'ngx-tinymce';

import { provideCellWidgets } from '@delon/abc/cell';
import { ReuseTabMatchMode, provideReuseTabConfig } from '@delon/abc/reuse-tab';
import { provideSTWidgets } from '@delon/abc/st';
import { provideSFConfig } from '@delon/form';
import { withAutoCompleteWidget } from '@delon/form/widgets/autocomplete';
import { withCascaderWidget } from '@delon/form/widgets/cascader';
import { withColorWidget } from '@delon/form/widgets/color';
import { withMentionWidget } from '@delon/form/widgets/mention';
import { withQrCodeWidget } from '@delon/form/widgets/qr-code';
import { withRateWidget } from '@delon/form/widgets/rate';
import { withSegmentedWidget } from '@delon/form/widgets/segmented';
import { withSliderWidget } from '@delon/form/widgets/slider';
import { withTagWidget } from '@delon/form/widgets/tag';
import { withTimeWidget } from '@delon/form/widgets/time';
import { withTransferWidget } from '@delon/form/widgets/transfer';
import { withTreeSelectWidget } from '@delon/form/widgets/tree-select';
import { withUploadWidget } from '@delon/form/widgets/upload';
import { withMonacoEditorWidget } from '@delon/form/widgets-third/monaco-editor';
import { withTinymceWidget } from '@delon/form/widgets-third/tinymce';
import { mockInterceptor, provideMockConfig } from '@delon/mock';
import { zh_CN as delonLang, AlainProvideLang, provideAlain } from '@delon/theme';
import { AlainConfig } from '@delon/util/config';
import { NzConfig, provideNzConfig } from 'ng-zorro-antd/core/config';
import { zh_CN as zorroLang } from 'ng-zorro-antd/i18n';

import { I18NService, provideStartup } from '@core';

import * as MOCKDATA from '../../_mock';
import { environment } from '../environments/environment';
import { provideElements } from './core/elements';
import { CustomErrorHandler } from './core/error-handler';
import { routes } from './routes/routes';
import { CELL_WIDGETS } from './shared/cell-widget';
import { ST_WIDGETS } from './shared/st-widget';

const defaultLang: AlainProvideLang = {
  abbr: 'zh-CN',
  ng: ngLang,
  zorro: zorroLang,
  date: dateLang,
  delon: delonLang
};

const alainConfig: AlainConfig = {
  st: { ps: 3 },
  lodop: {
    license: `A59B099A586B3851E0F0D7FDBF37B603`,
    licenseA: `C94CEE276DB2187AE6B65D56B3FC2848`
  },
  chart: {
    echartsExtensions: ['https://cdnjs.cloudflare.com/ajax/libs/echarts/5.1.0/theme/dark.min.js']
  },
  themeI18n: {
    paramNameOfUrlGuard: 'lang'
  },
  xlsx: {
    url: '/assets/xlsx/xlsx.full.min.js',
    modules: [`/assets/xlsx/cpexcel.js`]
  },
  zip: {
    url: '/assets/jszip/jszip.min.js'
  },
  // pdf: {
  //   lib: '/assets/pdfjs/'
  // },
  media: {
    urls: ['assets/plyr/plyr.min.js', 'assets/plyr/plyr.css'],
    options: {
      iconUrl: 'assets/plyr/plyr.svg',
      blankVideo: 'https://cdn.plyr.io/static/blank.mp4'
    }
  }
};

const ngZorroConfig: NzConfig = {};

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: APP_ID, useValue: 'ngAlainDoc' },
    provideHttpClient(withFetch(), withInterceptors([mockInterceptor])),
    provideAnimations(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withViewTransitions(),
      withInMemoryScrolling({ scrollPositionRestoration: 'top' })
    ),
    // provideClientHydration(), // 暂时不开启水合，除了编译时间长，还有就是对DOM要求比较高
    provideAlain({ config: alainConfig, defaultLang, i18nClass: I18NService }),
    provideNzConfig(ngZorroConfig),
    provideMockConfig({ data: MOCKDATA }),
    provideCellWidgets(...CELL_WIDGETS),
    provideSTWidgets(...ST_WIDGETS),
    provideSFConfig({
      widgets: [
        withAutoCompleteWidget(),
        withCascaderWidget(),
        withColorWidget(),
        withMentionWidget(),
        withQrCodeWidget(),
        withRateWidget(),
        withSegmentedWidget(),
        withSliderWidget(),
        withTagWidget(),
        withTimeWidget(),
        withTransferWidget(),
        withTreeSelectWidget(),
        withUploadWidget(),
        // third
        withMonacoEditorWidget(),
        withTinymceWidget()
      ]
    }),
    // provideAuth(withLocalStorage()),
    // Thirds
    provideNuMonacoEditorConfig({ defaultOptions: { scrollBeyondLastLine: false } }),
    provideTinymce({
      baseURL: 'https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.9.2/'
    }),
    // Startup
    provideStartup(),
    // Error
    { provide: ErrorHandler, useClass: CustomErrorHandler },
    // Elements
    importProvidersFrom(ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })),
    provideElements(),
    provideReuseTabConfig({ max: 2, mode: ReuseTabMatchMode.MenuForce })
  ]
};
