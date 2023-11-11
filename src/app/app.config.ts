import { isPlatformBrowser, registerLocaleData } from '@angular/common';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import localeZh from '@angular/common/locales/zh';
import {
  APP_ID,
  APP_INITIALIZER,
  ApplicationConfig,
  ENVIRONMENT_INITIALIZER,
  ErrorHandler,
  Injector,
  PLATFORM_ID,
  importProvidersFrom,
  inject
} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { provideNuMonacoEditorConfig } from '@ng-util/monaco-editor';
import { zhCN as dateLang } from 'date-fns/locale';
import { provideTinymce } from 'ngx-tinymce';

import { mockInterceptor, provideDelonMockConfig } from '@delon/mock';
import { ALAIN_I18N_TOKEN, provideAlain } from '@delon/theme';
import { AlainConfig } from '@delon/util/config';
import { NzConfig, provideNzConfig } from 'ng-zorro-antd/core/config';
import { NZ_DATE_LOCALE } from 'ng-zorro-antd/i18n';

import { I18NService, StartupService } from '@core';

import { CustomErrorHandler } from './core/error-handler';
import { EXAMPLE_COMPONENTS } from './routes/gen/examples';
import { routes } from './routes/routes';
import { CellWidgetModule } from './shared/cell-widget/module';
import { IconComponent } from './shared/components/icon/icon.component';
import { JsonSchemaModule } from './shared/json-schema/json-schema.module';
import { STWidgetModule } from './shared/st-widget/st-widget.module';
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

function registerElements(injector: Injector, platformId: {}): void {
  // issues: https://github.com/angular/angular/issues/24551#issuecomment-397862707
  if (!isPlatformBrowser(platformId) || customElements.get('nz-icon')) {
    return;
  }
  Object.keys(EXAMPLE_COMPONENTS).forEach(key => {
    const element = createCustomElement(EXAMPLE_COMPONENTS[key].component, {
      injector
    });
    customElements.define(key, element);
  });
  // icon
  customElements.define('nz-icon', createCustomElement(IconComponent, { injector }));
}

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: APP_ID, useValue: 'serverApp' },
    provideHttpClient(withInterceptors([mockInterceptor]), withFetch()),
    provideAnimations(),
    provideRouter(routes, withComponentInputBinding()),
    // provideClientHydration(),
    provideAlain(alainConfig),
    provideNzConfig(ngZorroConfig),
    provideDelonMockConfig({ data: MOCKDATA }),
    provideNuMonacoEditorConfig({ defaultOptions: { scrollBeyondLastLine: false } }),
    provideTinymce({
      baseURL: 'https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.9.2/'
    }),
    importProvidersFrom(
      CellWidgetModule,
      JsonSchemaModule,
      STWidgetModule,
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
    { provide: ErrorHandler, useClass: CustomErrorHandler },
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue: () => {
        registerElements(inject(Injector), inject(PLATFORM_ID));
      }
    }
  ]
};
