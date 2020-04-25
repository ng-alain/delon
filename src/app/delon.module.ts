import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { DelonACLModule } from '@delon/acl';
// mock
import { DelonMockModule } from '@delon/mock';
import { AlainThemeModule } from '@delon/theme';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as MOCKDATA from '../../_mock';
import { throwIfAlreadyLoaded } from './core/module-import-guard';

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
// import { RouteReuseStrategy } from '@angular/router';
// import { ReuseTabService, ReuseTabStrategy } from '@delon/abc/reuse-tab';
const REUSETAB_PROVIDES: NzSafeAny[] = [
  // {
  //   provide: RouteReuseStrategy,
  //   useClass: ReuseTabStrategy,
  //   deps: [ReuseTabService],
  // },
];
// #endregion

import { AlainConfig, ALAIN_CONFIG } from '@delon/util';
const alainConfig: AlainConfig = {
  st: { ps: 3 },
  lodop: {
    license: `A59B099A586B3851E0F0D7FDBF37B603`,
    licenseA: `C94CEE276DB2187AE6B65D56B3FC2848`,
  },
};

@NgModule({
  imports: [AlainThemeModule.forRoot(), DelonACLModule.forRoot(), DelonMockModule.forRoot({ data: MOCKDATA })],
})
export class DelonModule {
  constructor(@Optional() @SkipSelf() parentModule: DelonModule) {
    throwIfAlreadyLoaded(parentModule, 'DelonModule');
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [{ provide: ALAIN_CONFIG, useValue: alainConfig }, ...REUSETAB_PROVIDES],
    };
  }
}
