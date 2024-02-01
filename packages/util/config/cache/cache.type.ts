import { Observable } from 'rxjs';

export interface AlainCacheConfig {
  /**
   * Cache mode, default: `promise`
   * - `promise` Convention mode, allowing `key` to get data as http
   * - `none` Normal mode
   */
  mode?: 'promise' | 'none';
  /**
   * Rename the return parameters, default: ``, for example:
   * - `null` The response body is content
   * - `list` The response body should be `{ list: [] }`
   * - `result.list` The response body should be `{ result: { list: [] } }`
   */
  reName?: string | string[];
  /**
   * Set the default storage type
   * - `m` Storage via memory
   * - `s` Storage via `localStorage`
   */
  type?: 'm' | 's';
  /**
   * Set the default expire time (Unit: second)
   */
  expire?: number;
  /**
   * Key prefix of persistent data, default: ``
   */
  prefix?: string;
  /**
   * Key name of persistent data metadata storage, default: `__cache_meta`
   */
  meta_key?: string;
  /**
   * 自定义请求体
   *
   * Custom request
   */
  request?: (key: string) => Observable<unknown>;
  /**
   * Default configuration of interceptor
   *
   * 拦截器默认配置项
   */
  interceptor?: AlainCacheInterceptor;
}

export interface AlainCacheInterceptor {
  /**
   * Whether to enable, default `true`
   *
   * 是否启用，默认 `true`
   */
  enabled?: boolean;
  /**
   * Specify the storage method, `m` means memory, `s` means persistence; default: `m`
   *
   * 指定存储方式，`m` 表示内存，`s` 表示持久化；默认：`m`
   */
  saveType?: 'm' | 's';
  /**
   * Whether to trigger a notification, default: `true`
   *
   * 是否触发通知，默认：`true`
   */
  emitNotify?: boolean;
}
