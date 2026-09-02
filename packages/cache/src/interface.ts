export interface ICache {
  v: any;
  /** 过期时间戳，`0` 表示不过期 */
  e: number;
}

export interface ICacheStore {
  get(key: string): ICache | PromiseLike<ICache> | null;

  set(key: string, value: ICache): boolean | PromiseLike<boolean>;

  remove(key: string): boolean | PromiseLike<boolean>;
}

export type CacheNotifyType = 'set' | 'remove' | 'expire';

export interface CacheNotifyResult {
  type: CacheNotifyType;
  value?: any;
}
