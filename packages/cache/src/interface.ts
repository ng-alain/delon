/* eslint-disable @typescript-eslint/no-explicit-any */

export interface ICache {
  v: any;
  /** 过期时间戳，`0` 表示不过期 */
  e: number;
}

export interface ICacheStore {
  get(key: string): ICache | null;

  set(key: string, value: ICache): boolean;

  remove(key: string): void;
}

export type CacheNotifyType = 'set' | 'remove' | 'expire';

export interface CacheNotifyResult {
  type: CacheNotifyType;
  value?: any;
}
