/* eslint-disable import/order */
import { ModuleWithProviders, NgModule } from '@angular/core';

import { DelonACLModule } from '@delon/acl';
import { DelonMockModule } from '@delon/mock';
import { AlainConfig, ALAIN_CONFIG } from '@delon/util/config';

// Please refer to: https://ng-alain.com/docs/global-config
// #region NG-ALAIN Config

import * as MOCKDATA from '../../_mock';

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

const alainProvides = [{ provide: ALAIN_CONFIG, useValue: alainConfig }];

// #endregion

// Please refer to: https://ng.ant.design/docs/global-config/en#how-to-use
// #region NG-ZORRO Config

import { NzConfig, provideNzConfig } from 'ng-zorro-antd/core/config';

const ngZorroConfig: NzConfig = {};

const zorroProvides = [provideNzConfig(ngZorroConfig)];

// #endregion

// #region reuse-tab

// import { RouteReuseStrategy } from '@angular/router';
// import { ReuseTabService, ReuseTabStrategy } from '@delon/abc/reuse-tab';
// alainProvides.push({
//   provide: RouteReuseStrategy,
//   useClass: ReuseTabStrategy,
//   deps: [ReuseTabService],
// } as any);

// #endregion

@NgModule({
  imports: [DelonACLModule.forRoot(), DelonMockModule.forRoot({ data: MOCKDATA })]
})
export class GlobalConfigModule {
  static forRoot(): ModuleWithProviders<GlobalConfigModule> {
    return {
      ngModule: GlobalConfigModule,
      providers: [...alainProvides, ...zorroProvides]
    };
  }
}
