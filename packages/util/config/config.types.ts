import { EnvironmentProviders, InjectionToken, makeEnvironmentProviders } from '@angular/core';

import {
  AlainCellConfig,
  AlainDateRangePickerConfig,
  AlainErrorCollectConfig,
  AlainExceptionType,
  AlainLoadingConfig,
  AlainLodopConfig,
  AlainMediaConfig,
  AlainOnboardingConfig,
  AlainPageHeaderConfig,
  AlainPdfConfig,
  AlainSEConfig,
  AlainSGConfig,
  AlainSTConfig,
  AlainSVConfig,
  AlainXlsxConfig,
  AlainZipConfig
} from './abc/index';
import { AlainACLConfig } from './acl/acl.type';
import { AlainAuthConfig } from './auth/auth.type';
import { AlainCacheConfig } from './cache/cache.type';
import { AlainChartConfig } from './chart/chart.type';
import { AlainMockConfig } from './mock/mock.type';
import { AlainSFConfig } from './sf/sf.type';
import { AlainThemeHttpClientConfig, AlainThemeResponsiveConfig, AlainThemeI18nConfig } from './theme/index';
import { AlainThemePipeConfig } from './theme/pipe.type';
import { AlainUtilArrayConfig } from './util/array.type';
import { AlainUtilCurrencyConfig } from './util/currency.type';

export interface AlainConfig {
  dataRange?: AlainDateRangePickerConfig;
  exception?: AlainExceptionType;
  errorCollect?: AlainErrorCollectConfig;
  loading?: AlainLoadingConfig;
  onboarding?: AlainOnboardingConfig;
  lodop?: AlainLodopConfig;
  pageHeader?: AlainPageHeaderConfig;
  se?: AlainSEConfig;
  sg?: AlainSGConfig;
  sv?: AlainSVConfig;
  st?: AlainSTConfig;
  sf?: AlainSFConfig;
  cell?: AlainCellConfig;
  xlsx?: AlainXlsxConfig;
  zip?: AlainZipConfig;
  pdf?: AlainPdfConfig;
  media?: AlainMediaConfig;
  acl?: AlainACLConfig;
  auth?: AlainAuthConfig;
  cache?: AlainCacheConfig;
  chart?: AlainChartConfig;
  mock?: AlainMockConfig;
  utilArray?: AlainUtilArrayConfig;
  utilCurrency?: AlainUtilCurrencyConfig;
  themeHttp?: AlainThemeHttpClientConfig;
  themeResponsive?: AlainThemeResponsiveConfig;
  themeI18n?: AlainThemeI18nConfig;
  themePipe?: AlainThemePipeConfig;
}

export type AlainConfigKey = keyof AlainConfig;

export const ALAIN_CONFIG = new InjectionToken<AlainConfig>('alain-config', {
  providedIn: 'root',
  factory: ALAIN_CONFIG_FACTORY
});

export function ALAIN_CONFIG_FACTORY(): AlainConfig {
  return {};
}

export function provideAlainConfig(config: AlainConfig): EnvironmentProviders {
  return makeEnvironmentProviders([{ provide: ALAIN_CONFIG, useValue: config }]);
}
