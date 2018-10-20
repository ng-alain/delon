import {
  NgModule,
  Optional,
  SkipSelf,
  ModuleWithProviders,
} from '@angular/core';
import { throwIfAlreadyLoaded } from './core/module-import-guard';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AlainThemeModule } from '@delon/theme';
import { DelonFormModule } from '@delon/form';
import { DelonUtilModule } from '@delon/util';
import { DelonChartModule } from '@delon/chart';
import { DelonCacheModule } from '@delon/cache';
// mock
import { DelonMockModule } from '@delon/mock';
import * as MOCKDATA from '../../_mock';

// #region global config functions

import { LodopConfig, STConfig, DelonABCModule } from '@delon/abc';

export function fnSTConfig(): STConfig {
  return Object.assign(new STConfig(), {
    ps: 3,
  });
}

export function fnLodopConfig(): LodopConfig {
  return Object.assign(new LodopConfig(), {
    license: `A59B099A586B3851E0F0D7FDBF37B603`,
    licenseA: `C94CEE276DB2187AE6B65D56B3FC2848`,
  });
}

// #endregion

@NgModule({
  imports: [
    NgZorroAntdModule.forRoot(),
    AlainThemeModule.forRoot(),
    DelonABCModule.forRoot(),
    DelonChartModule.forRoot(),
    DelonFormModule.forRoot(),
    DelonCacheModule.forRoot(),
    DelonUtilModule.forRoot(),
    DelonMockModule.forRoot({ data: MOCKDATA }),
  ],
})
export class DelonModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: DelonModule,
  ) {
    throwIfAlreadyLoaded(parentModule, 'DelonModule');
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [
        { provide: STConfig, useFactory: fnSTConfig },
        { provide: LodopConfig, useFactory: fnLodopConfig },
      ],
    };
  }
}
