export default `import { ModuleWithProviders, NgModule } from '@angular/core';
import { provideDelonMockConfig } from '@delon/mock';
import { AlainConfig, provideAlainConfig, AlainConfigService } from '@delon/util/config';

// Please refer to: https://ng-alain.com/docs/global-config
// #region NG-ALAIN Config

import * as MOCKDATA from '../../_mock';

const alainConfig: AlainConfig = { };

const alainProvides = [{ provide: ALAIN_CONFIG, useValue: alainConfig }, provideDelonMockConfig({ data: MOCKDATA })];

// #region reuse-tab

import { RouteReuseStrategy } from '@angular/router';
import { ReuseTabService, ReuseTabStrategy } from '@delon/abc/reuse-tab';
alainProvides.push({
  provide: RouteReuseStrategy,
  useClass: ReuseTabStrategy,
  deps: [ReuseTabService],
} as any);

// #endregion

// fix
alainProvides.push(AlainConfigService as any);

// #endregion

// Please refer to: https://ng.ant.design/docs/global-config/en#how-to-use
// #region NG-ZORRO Config

import { NzConfig, provideNzConfig } from 'ng-zorro-antd/core/config';

const ngZorroConfig: NzConfig = {};

const zorroProvides = [provideNzConfig(ngZorroConfig)];

// #endregion

@NgModule({
})
export class GlobalConfigModule {
  static forRoot(): ModuleWithProviders<GlobalConfigModule> {
    return {
      ngModule: GlobalConfigModule,
      providers: [...alainProvides, ...zorroProvides],
    };
  }
}
`;
