import type { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface ICache {
  v: NzSafeAny;
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
  value?: NzSafeAny;
}
