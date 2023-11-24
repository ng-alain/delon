import { registerLocaleData } from '@angular/common';
import {
  ENVIRONMENT_INITIALIZER,
  EnvironmentProviders,
  LOCALE_ID,
  Provider,
  Type,
  importProvidersFrom,
  inject,
  makeEnvironmentProviders
} from '@angular/core';

import type { IconDefinition } from '@ant-design/icons-angular';
import {
  BellOutline,
  DeleteOutline,
  InboxOutline,
  PlusOutline,
  MenuFoldOutline,
  MenuUnfoldOutline
} from '@ant-design/icons-angular/icons';

import { ALAIN_CONFIG, AlainConfig } from '@delon/util/config';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NZ_DATE_LOCALE, provideNzI18n } from 'ng-zorro-antd/i18n';
import { NzIconService } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { DELON_LOCALE, DELON_LOCALE_SERVICE_PROVIDER } from './locale';
import zhCN from './locale/languages/zh-CN';
import { ALAIN_I18N_TOKEN } from './services';
import { ALAIN_SETTING_DEFAULT } from './services/settings/settings.service';

export interface AlainProvideOptions {
  config?: AlainConfig;
  /**
   * Initialize default language
   *
   * 初始化默认语言
   */
  defaultLang?: AlainProvideLang;
  i18nClass?: Type<NzSafeAny>;
  icons?: IconDefinition[];
}

export interface AlainProvideLang {
  abbr: string;
  ng: NzSafeAny;
  zorro: NzSafeAny;
  date: NzSafeAny;
  delon: NzSafeAny;
}

export function provideAlain(options: AlainProvideOptions): EnvironmentProviders {
  const lang = options?.defaultLang;
  const provides: Array<Provider | EnvironmentProviders> = [
    { provide: ALAIN_CONFIG, useValue: options?.config },
    { provide: DELON_LOCALE, useValue: lang?.delon ?? zhCN },
    DELON_LOCALE_SERVICE_PROVIDER,
    importProvidersFrom([NzDrawerModule, NzModalModule]),
    ALAIN_SETTING_DEFAULT
  ];
  if (lang) {
    registerLocaleData(lang.ng, lang.abbr);
    provides.push({ provide: LOCALE_ID, useValue: lang.abbr }, provideNzI18n(lang.zorro), {
      provide: NZ_DATE_LOCALE,
      useValue: lang.date
    });
  }

  const i18nCls = options?.i18nClass;
  if (i18nCls) {
    provides.push({ provide: ALAIN_I18N_TOKEN, useClass: i18nCls, multi: false });
  }

  const icons: IconDefinition[] = [
    BellOutline,
    DeleteOutline,
    PlusOutline,
    InboxOutline,
    MenuFoldOutline,
    MenuUnfoldOutline,
    ...(options.icons ?? [])
  ];
  provides.push({
    provide: ENVIRONMENT_INITIALIZER,
    multi: true,
    useValue: () => {
      inject(NzIconService, { optional: true })?.addIcon(...icons);
    }
  });
  return makeEnvironmentProviders(provides);
}
