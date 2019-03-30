import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { throwIfAlreadyLoaded } from './core/module-import-guard';

import { DelonFormModule } from '@delon/form';
// mock
import { DelonMockModule } from '@delon/mock';
import { AlainThemeModule } from '@delon/theme';
import * as MOCKDATA from '../../_mock';

// #region reuse-tab
/**
 * 若需要[路由复用](https://ng-alain.com/components/reuse-tab)需要：
 * 1、增加 `REUSETAB_PROVIDES`
 * 2、在 `src/app/layout/default/default.component.html` 修改：
 *  ```html
 *  <section class="alain-default__content">
 *    <reuse-tab></reuse-tab>
 *    <router-outlet></router-outlet>
 *  </section>
 *  ```
 */
import { RouteReuseStrategy } from '@angular/router';
import { ReuseTabService, ReuseTabStrategy } from '@delon/abc/reuse-tab';
const REUSETAB_PROVIDES = [
  // {
  //   provide: RouteReuseStrategy,
  //   useClass: ReuseTabStrategy,
  //   deps: [ReuseTabService],
  // },
];
// #endregion

// #region global config functions

import { LodopConfig, STConfig } from '@delon/abc';

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
    AlainThemeModule.forRoot(),
    DelonFormModule.forRoot(),
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
        ...REUSETAB_PROVIDES,
        { provide: STConfig, useFactory: fnSTConfig },
        { provide: LodopConfig, useFactory: fnLodopConfig },
      ],
    };
  }
}
