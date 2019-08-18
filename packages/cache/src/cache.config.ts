import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DelonCacheConfig {
  /**
   * Cache mode, default: `promise`
   * - `promise` Convention mode, allowing `key` to get data as http
   * - `none` Normal mode
   */
  mode?: 'promise' | 'none' = 'promise';
  /**
   * Rename the return parameters, for example:
   * - `null` The response body is content
   * - `list` The response body should be `{ list: [] }`
   * - `result.list` The response body should be `{ result: { list: [] } }`
   */
  reName?: string | string[] = '';
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
   * Key prefix of persistent data
   */
  prefix?: string = '';
  /**
   * Key name of persistent data metadata storage
   */
  meta_key?: string = '__cache_meta';
}
