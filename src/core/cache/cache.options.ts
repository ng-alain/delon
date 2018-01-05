import { InjectionToken } from '@angular/core';

export const DC_OPTIONS_TOKEN = new InjectionToken<CacheOptions>('DC_OPTIONS_TOKEN');
export const DC_USER_OPTIONS_TOKEN = new InjectionToken<CacheOptions>('DC_USER_OPTIONS_TOKEN');

export interface CacheOptions {
    /**
     * 缓存模式，默认：`promise`
     * - `promise` 约定模式，允许 `key` 作为 http 获取数据
     * - `none` 正常模式
     */
    mode?: 'promise' | 'none';
    /**
     * 重命名返回参数，例如：
     * - `null` 返回体为内容
     * - `list` 返回体应 `{ list: [] }`
     * - `result.list` 返回体应 `{ result: { list: [] } }`
     */
    reName?: string | string[];
    /**
     * 持久化数据键值前缀
     */
    prefix?: string;
    /**
     * 持久化数据元数据存储键名
     */
    meta_key?: string;
}

export const DEFAULT = {
    mode: 'promise',
    reName: '',
    prefix: '',
    meta_key: '__cache_meta'
};
