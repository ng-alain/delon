import { HttpContextToken } from '@angular/common/http';

export interface CacheOptions {
  /**
   * Whether to enable it, if `Cache-control: max-age=xxx` is found when the request returns, it will be automatically cached, and the next request will be forced to obtain data from the cache unless `enabled: false` is specified; default `true`
   *
   * 是否启用，当启用后若请求返回时发现 `Cache-control: max-age=xxx` 时自动缓存，下一次请求时除非指定 `enabled: false` 否则强制从缓存中获取数据；默认 `true`
   */
  enabled?: boolean;
  /**
   * Specify the cache unique key, which is used to distinguish cache entries, and the default is based on the requested URL
   *
   * 指定缓存唯一键，用于区分缓存条目，默认以请求的 URL 为准
   */
  key?: string;
  /**
   * Specify the storage method, `m` means memory, `s` means persistence; default: `m`
   *
   * 指定存储方式，`m` 表示内存，`s` 表示持久化；默认：`m`
   */
  saveType?: 'm' | 's';
  /**
   * Expire time, the highest priority when returning `Cache-control: max-age=xxx`, unit `second`
   *
   * 过期时间，当返回 `Cache-control: max-age=xxx` 时优先级最高，单位 `秒`
   */
  expire?: number;
  /**
   * Whether to trigger a notification, default: `true`
   *
   * 是否触发通知，默认：`true`
   */
  emitNotify?: boolean;
}

/**
 * Cache options (Don't forget to register `CacheInterceptor`)
 *
 * 缓存配置项（不要忘记注册 `CacheInterceptor`）
 *
 * @example
 * this.http.get(`my`, {
 *  context: new HttpContext().set(CACHE, { key: 'user-data' })
 * })
 */
export const CACHE = new HttpContextToken<CacheOptions>(() => ({}));
