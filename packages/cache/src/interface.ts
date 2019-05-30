// tslint:disable-next-line: interface-name
export interface ICache {
  v: any;
  /** 过期时间戳，`0` 表示不过期 */
  e: number;
}

// tslint:disable-next-line: interface-name
export interface ICacheStore {
  get(key: string): ICache;

  set(key: string, value: ICache): boolean;

  remove(key: string);
}

export type CacheNotifyType = 'set' | 'remove' | 'expire';

export interface CacheNotifyResult {
  type: CacheNotifyType;
  value?: any;
}
