import { ModuleWithProviders, Type } from '@angular/core';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface Environment {
  [key: string]: NzSafeAny;

  /**
   * Whether production environment
   *
   * 是否生产环境
   */
  production: boolean;
  /**
   * Whether uses the URL fragment instead of the history API.
   *
   * 是否启用 URL 片段（#）代替 history API
   */
  useHash: boolean;
  /**
   * API configuration
   *
   * API配置
   */
  api: ApiConfig;
  /**
   * Defined imported modules in `global-config.module.ts`
   *
   * 定义在 `global-config.module.ts` 导入的模块列表
   */
  modules?: Array<Type<NzSafeAny> | ModuleWithProviders<NzSafeAny> | NzSafeAny[]>;
}

export interface ApiConfig {
  [key: string]: NzSafeAny;

  /**
   * Specify API prefix
   *
   * 指定API前缀
   */
  baseUrl: string;
  /**
   * Whether to enable automatic refresh token
   *
   * 是否启用自动刷新Token
   */
  refreshTokenEnabled: boolean;
  /**
   * Token refresh type, `re-request` Trigger token refresh request when the detection time expires, and then re-send the original request, `auth-refresh` uses `@delon/auth` to periodically check whether it has expired
   *
   * 刷新Token方式，`re-request` 当检测过期时间到期时先发起刷新Token请求，再重新发起原请求，`auth-refresh` 利用 `@delon/auth` 来定期检测是否过期
   */
  refreshTokenType: 're-request' | 'auth-refresh';
}
