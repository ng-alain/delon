import { registerLocaleData } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import localeZh from '@angular/common/locales/zh';
import { APP_ID, APP_INITIALIZER, ApplicationConfig, ErrorHandler, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { provideNuMonacoEditorConfig } from '@ng-util/monaco-editor';
import { zhCN as dateLang } from 'date-fns/locale';
import { provideTinymce } from 'ngx-tinymce';

import { DelonFormModule } from '@delon/form';
import { mockInterceptor, provideDelonMockConfig } from '@delon/mock';
import { ALAIN_I18N_TOKEN, provideAlain } from '@delon/theme';
import { AlainConfig } from '@delon/util/config';
import { NzConfig, provideNzConfig } from 'ng-zorro-antd/core/config';
import { NZ_DATE_LOCALE } from 'ng-zorro-antd/i18n';

import { I18NService, StartupService } from '@core';

import { CustomErrorHandler } from './core/error-handler';
import { routes } from './routes/routes';
import * as MOCKDATA from '../../_mock';
import { environment } from '../environments/environment';

registerLocaleData(localeZh);
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
  qr: {
    lib: '/assets/qrious/qrious.min.js'
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

export function StartupServiceFactory(startupService: StartupService): () => Promise<void> {
  return () => startupService.load();
}

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: APP_ID, useValue: 'serverApp' },
    provideHttpClient(withInterceptors([mockInterceptor])),
    provideAnimations(),
    provideRouter(routes, withComponentInputBinding()),
    provideAlain(alainConfig),
    provideNzConfig(ngZorroConfig),
    provideDelonMockConfig({ data: MOCKDATA }),
    provideNuMonacoEditorConfig({ defaultOptions: { scrollBeyondLastLine: false } }),
    provideTinymce({
      baseURL: 'https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.9.2/'
    }),
    importProvidersFrom(
      DelonFormModule.forRoot(),
      ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ),
    StartupService,
    {
      provide: APP_INITIALIZER,
      useFactory: StartupServiceFactory,
      deps: [StartupService],
      multi: true
    },
    { provide: ALAIN_I18N_TOKEN, useClass: I18NService, multi: false },
    { provide: NZ_DATE_LOCALE, useValue: dateLang },
    { provide: ErrorHandler, useClass: CustomErrorHandler }
  ]
};
