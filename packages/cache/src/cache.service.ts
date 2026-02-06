import { Platform } from '@angular/cdk/platform';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, inject } from '@angular/core';
import { BehaviorSubject, Observable, of, tap, from, switchMap, map } from 'rxjs';

import { addSeconds } from 'date-fns';

import { AlainCacheConfig, AlainConfigService } from '@delon/util/config';
import { deepGet } from '@delon/util/other';

import { CacheNotifyResult, CacheNotifyType, ICache } from './interface';
import { DC_STORE_STORAGE_TOKEN } from './local-storage-cache.service';

@Injectable({ providedIn: 'root' })
export class CacheService implements OnDestroy {
  private readonly store = inject(DC_STORE_STORAGE_TOKEN);
  private readonly http = inject(HttpClient);
  private readonly platform = inject(Platform);

  private readonly memory: Map<string, ICache> = new Map<string, ICache>();
  private readonly notifyBuffer: Map<string, BehaviorSubject<CacheNotifyResult>> = new Map<
    string,
    BehaviorSubject<CacheNotifyResult>
  >();
  private meta: Set<string> = new Set<string>();
  private freqTick = 3000;
  private freqTime: any;
  private cog: AlainCacheConfig = inject(AlainConfigService).merge('cache', {
    mode: 'promise',
    reName: '',
    prefix: '',
    meta_key: '__cache_meta'
  })!;

  constructor() {
    if (!this.platform.isBrowser) return;
    this.loadMeta();
    this.startExpireNotify();
  }

  // #region meta

  private pushMeta(key: string): void {
    if (this.meta.has(key)) return;
    this.meta.add(key);
    this.saveMeta();
  }

  private removeMeta(key: string): void {
    if (!this.meta.has(key)) return;
    this.meta.delete(key);
    this.saveMeta();
  }

  private async loadMeta(): Promise<void> {
    const fn = this.store.get(this.cog.meta_key!);
    const ret = fn instanceof Promise ? await fn : fn;
    if (ret && ret.v) {
      (ret.v as string[]).forEach(key => this.meta.add(key));
    }
  }

  private saveMeta(): void {
    const metaData: string[] = [];
    this.meta.forEach(key => metaData.push(key));
    this.store.set(this.cog.meta_key!, { v: metaData, e: 0 });
  }

  getMeta(): Set<string> {
    return this.meta;
  }

  // #endregion

  // #region set

  /**
   * Persistent cached `Observable` object, for example:
   * - `set('data/1', this.http.get('data/1')).subscribe()`
   * - `set('data/1', this.http.get('data/1'), { expire: 10 }).subscribe()`
   */
  set<T>(
    key: string,
    data: Observable<T>,
    options?: { type?: 's'; expire?: number; emitNotify?: boolean }
  ): Observable<T>;
  /**
   * Persistent cached `Observable` object, for example:
   * - `set('data/1', this.http.get('data/1')).subscribe()`
   * - `set('data/1', this.http.get('data/1'), { expire: 10 }).subscribe()`
   */
  set(
    key: string,
    data: Observable<any>,
    options?: { type?: 's'; expire?: number; emitNotify?: boolean }
  ): Observable<any>;
  /**
   * Persistent cached simple object, for example:
   * - `set('data/1', 1)`
   * - `set('data/1', 1, { expire: 10 })`
   */
  set(key: string, data: unknown, options?: { type?: 's'; expire?: number; emitNotify?: boolean }): void;
  /**
   * Persistent cached simple object and specify storage type, for example caching in memory:
   * - `set('data/1', 1, { type: 'm' })`
   * - `set('data/1', 1, { type: 'm', expire: 10 })`
   */
  set(key: string, data: unknown, options: { type: 'm' | 's'; expire?: number; emitNotify?: boolean }): void;
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
      /**
       * 是否触发通知，默认：`true`
       */
      emitNotify?: boolean;
    } = {}
  ): any {
    if (!this.platform.isBrowser) return;

    let e = 0;
    const { type, expire } = this.cog;
    options = {
      type,
      expire,
      ...options
    };
    if (options.expire) {
      e = addSeconds(new Date(), options.expire).valueOf();
    }
    const emitNotify = options.emitNotify !== false;
    if (!(data instanceof Observable)) {
      this.save(options.type!, key, { v: data, e }, emitNotify);
      return;
    }
    return data.pipe(
      tap((v: any) => {
        this.save(options.type!, key, { v, e }, emitNotify);
      })
    );
  }

  private save(type: 'm' | 's', key: string, value: ICache, emitNotify: boolean = true): void {
    if (type === 'm') {
      this.memory.set(key, value);
    } else {
      this.store.set(this.cog.prefix + key, value);
      this.pushMeta(key);
    }
    if (emitNotify) {
      this.runNotify(key, 'set');
    }
  }

  // #endregion

  // #region get

  /** 获取缓存数据，若 `key` 不存在则 `key` 作为HTTP请求缓存后返回 */
  get<T>(
    key: string,
    options?: {
      mode: 'promise';
      type?: 'm' | 's';
      expire?: number;
      emitNotify?: boolean;
    }
  ): Observable<T>;
  /** 获取缓存数据，若 `key` 不存在则 `key` 作为HTTP请求缓存后返回 */
  get(
    key: string,
    options?: {
      mode: 'promise';
      type?: 'm' | 's';
      expire?: number;
      emitNotify?: boolean;
    }
  ): Observable<any>;
  /** 获取缓存数据，若 `key` 不存在或已过期则返回 null */
  get(
    key: string,
    options: {
      mode: 'none';
      type?: 'm' | 's';
      expire?: number;
      emitNotify?: boolean;
    }
  ): any;
  get(
    key: string,
    options: {
      mode?: 'promise' | 'none';
      type?: 'm' | 's';
      expire?: number;
      emitNotify?: boolean;
    } = {}
  ): Observable<any> | any {
    if (!this.platform.isBrowser) return null;

    const ret = this.memory.has(key) ? (this.memory.get(key) as ICache) : this.store.get(this.cog.prefix + key);
    const isValid = (value?: ICache): boolean =>
      value != null && (value.e == 0 || (value.e > 0 && value.e > new Date().valueOf()));
    const isPromise = options.mode !== 'none' && this.cog.mode === 'promise';
    if (!isPromise) {
      const retObj = ret as ICache;
      return isValid(retObj) ? retObj.v : null;
    }

    return (ret instanceof Promise ? from(ret) : of(ret)).pipe(
      switchMap((data: ICache) => {
        if (isValid(data)) return of(data.v);
        return this.cog.request ? this.cog.request(key) : this.http.get(key);
      }),
      map(data => {
        const v = deepGet(data, this.cog.reName as string[], data);
        this.set(key, v, {
          type: options.type as any,
          expire: options.expire,
          emitNotify: options.emitNotify
        });
        return v;
      })
    );
  }

  /**
   * 获取缓存数据，若 `key` 不存在或已过期则返回 null
   */
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
    options?: { type?: 's'; expire?: number; emitNotify?: boolean }
  ): Observable<T>;
  /**
   * 获取缓存，若不存在则设置持久化缓存 `Observable` 对象
   */
  tryGet(
    key: string,
    data: Observable<any>,
    options?: { type?: 's'; expire?: number; emitNotify?: boolean }
  ): Observable<any>;
  /**
   * 获取缓存，若不存在则设置持久化缓存基础对象
   */
  tryGet(key: string, data: unknown, options?: { type?: 's'; expire?: number; emitNotify?: boolean }): any;
  /**
   * 获取缓存，若不存在则设置指定缓存类型进行缓存对象
   */
  tryGet(key: string, data: unknown, options: { type: 'm' | 's'; expire?: number; emitNotify?: boolean }): any;

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
      /**
       * 是否触发通知，默认：`true`
       */
      emitNotify?: boolean;
    } = {}
  ): any {
    if (!this.platform.isBrowser) return null;

    const ret = this.getNone(key);
    if (ret === null) {
      if (!(data instanceof Observable)) {
        this.set(key, data, options as any);
        return data;
      }

      return this.set(key, data as Observable<any>, options as any);
    }
    return of(ret);
  }

  // #endregion

  // #region has

  /** 是否缓存 `key` */
  has(key: string): boolean {
    return this.memory.has(key) || this.meta.has(key);
  }

  // #endregion

  // #region remove

  private _remove(key: string, needNotify: boolean): void {
    if (needNotify) this.runNotify(key, 'remove');
    if (this.memory.has(key)) {
      this.memory.delete(key);
      return;
    }
    this.store.remove(this.cog.prefix + key);
    this.removeMeta(key);
  }

  /** 移除缓存 */
  remove(key: string): void {
    if (!this.platform.isBrowser) return;

    this._remove(key, true);
  }

  /** 清空所有缓存 */
  clear(): void {
    if (!this.platform.isBrowser) return;

    this.notifyBuffer.forEach((_v, k) => this.runNotify(k, 'remove'));
    this.memory.clear();
    this.meta.forEach(key => this.store.remove(this.cog.prefix + key));
  }

  // #endregion

  // #region notify

  /**
   * 设置监听频率，单位：毫秒且最低 `20ms`，默认：`3000ms`
   */
  set freq(value: number) {
    this.freqTick = Math.max(20, value);
    this.abortExpireNotify();
    this.startExpireNotify();
  }

  private startExpireNotify(): void {
    this.checkExpireNotify();
    this.runExpireNotify();
  }

  private runExpireNotify(): void {
    this.freqTime = setTimeout(() => {
      this.checkExpireNotify();
      this.runExpireNotify();
    }, this.freqTick);
  }

  private checkExpireNotify(): void {
    const removed: string[] = [];
    this.notifyBuffer.forEach((_v, key) => {
      if (this.has(key) && this.getNone(key) === null) removed.push(key);
    });
    removed.forEach(key => {
      this.runNotify(key, 'expire');
      this._remove(key, false);
    });
  }

  private abortExpireNotify(): void {
    clearTimeout(this.freqTime);
  }

  private runNotify(key: string, type: CacheNotifyType): void {
    if (!this.notifyBuffer.has(key)) return;
    this.notifyBuffer.get(key)!.next({ type, value: this.getNone(key) });
  }

  /**
   * `key` 监听，当 `key` 变更、过期、移除时通知，注意以下若干细节：
   *
   * - 调用后除再次调用 `cancelNotify` 否则永远不过期
   * - 监听器每 `freq` (默认：3秒) 执行一次过期检查
   */
  notify(key: string): Observable<CacheNotifyResult> {
    if (!this.notifyBuffer.has(key)) {
      const change$ = new BehaviorSubject<CacheNotifyResult>(this.getNone(key));
      this.notifyBuffer.set(key, change$);
    }
    return this.notifyBuffer.get(key)!.asObservable();
  }

  /**
   * 取消 `key` 监听
   */
  cancelNotify(key: string): void {
    if (!this.notifyBuffer.has(key)) return;
    this.notifyBuffer.get(key)!.unsubscribe();
    this.notifyBuffer.delete(key);
  }

  /** `key` 是否已经监听 */
  hasNotify(key: string): boolean {
    return this.notifyBuffer.has(key);
  }

  /** 清空所有 `key` 的监听 */
  clearNotify(): void {
    this.notifyBuffer.forEach(v => v.unsubscribe());
    this.notifyBuffer.clear();
  }

  // #endregion

  ngOnDestroy(): void {
    this.memory.clear();
    this.abortExpireNotify();
    this.clearNotify();
  }
}
