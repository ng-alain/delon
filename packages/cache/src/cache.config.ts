import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DelonCacheConfig {
  /**
   * 缓存模式，默认：`promise`
   * - `promise` 约定模式，允许 `key` 作为 http 获取数据
   * - `none` 正常模式
   */
  mode?: 'promise' | 'none' = 'promise';
  /**
   * 重命名返回参数，例如：
   * - `null` 返回体为内容
   * - `list` 返回体应 `{ list: [] }`
   * - `result.list` 返回体应 `{ result: { list: [] } }`
   */
  reName?: string | string[] = '';
  /**
   * 持久化数据键值前缀
   */
  prefix?: string = '';
  /**
   * 持久化数据元数据存储键名
   */
  meta_key?: string = '__cache_meta';
}
