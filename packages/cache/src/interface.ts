export interface ICache {
  // tslint:disable-next-line:no-any
  v: any;
  /** 过期时间戳，`0` 表示不过期 */
  e: number;
}

export interface ICacheStore {
  get(key: string): ICache;

  set(key: string, value: ICache): boolean;

  remove(key: string);
}

export type CacheNotifyType = 'set' | 'remove' | 'expire';

export interface CacheNotifyResult {
  type: CacheNotifyType;
  // tslint:disable-next-line:no-any
  value?: any;
}
