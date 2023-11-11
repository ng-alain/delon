import { EnvironmentProviders, importProvidersFrom, makeEnvironmentProviders } from '@angular/core';

import { ALAIN_CONFIG, AlainConfig } from '@delon/util/config';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { DELON_LOCALE, DELON_LOCALE_SERVICE_PROVIDER } from './locale';
import zhCN from './locale/languages/zh-CN';
import { ALAIN_SETTING_DEFAULT } from './services/settings/settings.service';

export function provideAlain(config?: AlainConfig): EnvironmentProviders {
  return makeEnvironmentProviders([
    { provide: ALAIN_CONFIG, useValue: config },
    { provide: DELON_LOCALE, useValue: zhCN },
    DELON_LOCALE_SERVICE_PROVIDER,
    importProvidersFrom([NzDrawerModule, NzModalModule]),
    ALAIN_SETTING_DEFAULT
  ]);
}
