import { Injectable, OnDestroy, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as addSeconds from 'date-fns/add_seconds';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap, map } from 'rxjs/operators';

import { DC_STORE_STORAGE_TOKEN, ICacheStore, ICache } from './interface';
import { DelonCacheConfig } from '../cache.config';

@Injectable()
export class CacheService implements OnDestroy {
    private readonly memory: Map<string, ICache> = new Map<string, ICache>();
    private meta: Set<string> = new Set<string>();

    constructor(
        private options: DelonCacheConfig,
        @Inject(DC_STORE_STORAGE_TOKEN) private store: ICacheStore,
        private http: HttpClient
    ) {
        this.loadMeta();
    }

    _deepGet(obj: any, path: string[], defaultValue?: any) {
        if (!obj) return defaultValue;
        if (path.length <= 1) {
            const checkObj = path.length ? obj[path[0]] : obj;
            return typeof checkObj === 'undefined' ? defaultValue : checkObj;
        }
        return path.reduce((o, k) => o[k], obj) || defaultValue;
    }

    // region: meta

    private pushMeta(key: string) {
        if (this.meta.has(key)) return;
        this.meta.add(key);
        this.saveMeta();
    }

    private removeMeta(key: string) {
        if (!this.meta.has(key)) return;
        this.meta.delete(key);
        this.saveMeta();
    }

    private loadMeta() {
        const ret = this.store.get(this.options.meta_key);
        if (ret && ret.v) {
            (ret.v as string[]).forEach(key => this.meta.add(key));
        }
    }

    private saveMeta() {
        const metaData: string[] = [];
        this.meta.forEach(key => metaData.push(key));
        this.store.set(this.options.meta_key, { v: metaData, e: 0 });
    }

    getMeta() {
        return this.meta;
    }

    // endregion

    // region: set

    /**
     * 持久化缓存 `Observable` 对象，例如：
     * - `set('data/1', this.http.get('data/1')).subscribe()`
     * - `set('data/1', this.http.get('data/1'), { expire: 10 }).subscribe()`
     */
    set<T>(
        key: string,
        data: Observable<T>,
        options?: { type?: 's', expire?: number }
    ): Observable<T>;
    /**
     * 持久化缓存 `Observable` 对象，例如：
     * - `set('data/1', this.http.get('data/1')).subscribe()`
     * - `set('data/1', this.http.get('data/1'), { expire: 10 }).subscribe()`
     */
    set(
        key: string,
        data: Observable<any>,
        options?: { type?: 's', expire?: number }
    ): Observable<any>;
    /**
     * 持久化缓存基础对象，例如：
     * - `set('data/1', 1)`
     * - `set('data/1', 1, { expire: 10 })`
     */
    set(
        key: string,
        data: Object,
        options?: { type?: 's', expire?: number }
    ): void;
    /**
     * 指定缓存类型进行缓存对象，例如内存缓存：
     * - `set('data/1', 1, { type: 'm' })`
     * - `set('data/1', 1, { type: 'm', expire: 10 })`
     */
    set(
        key: string,
        data: Object,
        options: { type: 'm' | 's', expire?: number }
    ): void;
    /**
     * 缓存对象
     */
    set(
        key: string,
        data: any | Observable<any>,
        options: {
            /** 存储类型，'m' 表示内存，'s' 表示持久 */
            type?: 'm' | 's';
            /**
             * 过期时间，单位 `秒`
             */
            expire?: number;
        } = {}
    ): any {
        // expire
        let e = 0;
        if (options.expire) {
            e = addSeconds(new Date, options.expire).valueOf();
        }
        if (!(data instanceof Observable)) {
            this.save(options.type, key, { v: data, e });
            return;
        }
        return data.pipe(tap((v: any) => {
            this.save(options.type, key, { v, e });
        }));
    }

    private save(type: 'm' | 's', key: string, value: ICache) {
        if (type === 'm') {
            this.memory.set(key, value);
        } else {
            this.store.set(this.options.prefix + key, value);
            this.pushMeta(key);
        }
    }

    // endregion

    // region: get

    /** 获取缓存数据，若 `key` 不存在则 `key` 作为HTTP请求缓存后返回 */
    get<T>(
        key: string,
        options?: {
            mode: 'promise',
            type?: 'm' | 's',
            expire?: number
        }
    ): Observable<T>;
    /** 获取缓存数据，若 `key` 不存在则 `key` 作为HTTP请求缓存后返回 */
    get(
        key: string,
        options?: {
            mode: 'promise',
            type?: 'm' | 's',
            expire?: number
        }
    ): Observable<any>;
    /** 获取缓存数据，若 `key` 不存在或已过期则返回 null */
    get(
        key: string,
        options: {
            mode: 'none',
            type?: 'm' | 's',
            expire?: number
        }
    ): any;
    get(
        key: string,
        options: {
            mode?: 'promise' | 'none',
            type?: 'm' | 's',
            expire?: number
        } = {}
    ): Observable<any> | any {
        const isPromise = options.mode !== 'none' && this.options.mode === 'promise';
        const value: ICache = this.memory.has(key) ? this.memory.get(key) : this.store.get(this.options.prefix + key);
        if (!value || (value.e && value.e > 0 && value.e < (new Date).valueOf())) {
            if (isPromise) {
                return this.http.get(key).pipe(
                    map((ret: any) => this._deepGet(ret, this.options.reName as string[], null)),
                    tap(v => this.set(key, v))
                );
            }
            return null;
        }

        return isPromise ? of(value.v) : value.v;
    }

    /** 获取缓存数据，若 `key` 不存在或已过期则返回 null */
    getNone<T>(key: string): T;
    /** 获取缓存数据，若 `key` 不存在或已过期则返回 null */
    getNone(key: string): any {
        return this.get(key, { mode: 'none' });
    }

    /**
     * 获取缓存，若不存在则设置持久化缓存 `Observable` 对象
     */
    tryGet<T>(
        key: string,
        data: Observable<T>,
        options?: { type?: 's', expire?: number }
    ): Observable<T>;
    /**
     * 获取缓存，若不存在则设置持久化缓存 `Observable` 对象
     */
    tryGet(
        key: string,
        data: Observable<any>,
        options?: { type?: 's', expire?: number }
    ): Observable<any>;
    /**
     * 获取缓存，若不存在则设置持久化缓存基础对象
     */
    tryGet(
        key: string,
        data: Object,
        options?: { type?: 's', expire?: number }
    ): any;
    /**
     * 获取缓存，若不存在则设置指定缓存类型进行缓存对象
     */
    tryGet(
        key: string,
        data: Object,
        options: { type: 'm' | 's', expire?: number }
    ): any;

    /**
     * 获取缓存，若不存在则设置缓存对象
     */
    tryGet(
        key: string,
        data: any | Observable<any>,
        options: {
            /** 存储类型，'m' 表示内存，'s' 表示持久 */
            type?: 'm' | 's';
            /**
             * 过期时间，单位 `秒`
             */
            expire?: number;
        } = {}
    ): any {
        const ret = this.getNone(key);
        if (ret === null) {
            if (!(data instanceof Observable)) {
                this.set(key, data, <any>options);
                return data;
            }

            return this.set(key, data as Observable<any>, <any>options);
        }
        return of(ret);
    }

    // endregion

    // region: has

    /** 是否缓存 `key` */
    has(key: string): boolean {
        return this.memory.has(key) || this.meta.has(key);
    }

    // endregion

    // region: remove

    /** 移除缓存 */
    remove(key: string) {
        if (this.memory.has(key)) {
            this.memory.delete(key);
            return ;
        }
        this.store.remove(this.options.prefix + key);
        this.removeMeta(key);
    }

    /** 清空所有缓存 */
    clear() {
        this.memory.clear();
        this.meta.forEach(key => this.store.remove(this.options.prefix + key));
    }

    // endregion

    ngOnDestroy(): void {
        this.memory.clear();
    }

}
