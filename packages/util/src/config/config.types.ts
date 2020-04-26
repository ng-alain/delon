import { InjectionToken } from '@angular/core';
import {
  AlainDateRangePickerConfig,
  AlainErrorCollectConfig,
  AlainImageConfig,
  AlainLoadingConfig,
  AlainLodopConfig,
  AlainPageHeaderConfig,
  AlainQRConfig,
  AlainSEConfig,
  AlainSGConfig,
  AlainSTConfig,
  AlainSVConfig,
  AlainXlsxConfig,
  AlainZipConfig,
} from './abc/index';
import { AlainACLConfig } from './acl/acl.type';
import { AlainAuthConfig } from './auth/auth.type';
import { AlainCacheConfig } from './cache/cache.type';
import { AlainChartConfig } from './chart/chart.type';
import { AlainMockConfig } from './mock/mock.type';
import { AlainSFConfig } from './sf/sf.type';
import { AlainThemeHttpClientConfig, AlainThemeResponsiveConfig } from './theme/index';
import { AlainUtilArrayConfig } from './util/array.type';

export interface AlainConfig {
  dataRange?: AlainDateRangePickerConfig;
  errorCollect?: AlainErrorCollectConfig;
  image?: AlainImageConfig;
  loading?: AlainLoadingConfig;
  lodop?: AlainLodopConfig;
  pageHeader?: AlainPageHeaderConfig;
  qr?: AlainQRConfig;
  se?: AlainSEConfig;
  sg?: AlainSGConfig;
  sv?: AlainSVConfig;
  st?: AlainSTConfig;
  sf?: AlainSFConfig;
  xlsx?: AlainXlsxConfig;
  zip?: AlainZipConfig;
  acl?: AlainACLConfig;
  auth?: AlainAuthConfig;
  cache?: AlainCacheConfig;
  chart?: AlainChartConfig;
  mock?: AlainMockConfig;
  utilArray?: AlainUtilArrayConfig;
  themeHttp?: AlainThemeHttpClientConfig;
  themeResponsive?: AlainThemeResponsiveConfig;
}

export type AlainConfigKey = keyof AlainConfig;

export const ALAIN_CONFIG = new InjectionToken<AlainConfig>('alain-config');
