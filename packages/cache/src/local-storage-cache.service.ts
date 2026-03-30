import { Platform } from '@angular/cdk/platform';
import { inject, InjectionToken } from '@angular/core';

import { ICache, ICacheStore } from './interface';

export const DC_STORE_STORAGE_TOKEN = new InjectionToken<ICacheStore>('DC_STORE_STORAGE_TOKEN', {
  providedIn: 'root',
  factory: () => new LocalStorageCacheService()
});

export class LocalStorageCacheService implements ICacheStore {
  private readonly platform = inject(Platform);

  get(key: string): ICache | PromiseLike<ICache> | null {
    if (!this.platform.isBrowser) {
      return null;
    }
    return JSON.parse(localStorage.getItem(key) ?? 'null') ?? null;
  }

  set(key: string, value: ICache): boolean | PromiseLike<boolean> {
    if (!this.platform.isBrowser) {
      return true;
    }
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  }

  remove(key: string): boolean | PromiseLike<boolean> {
    if (!this.platform.isBrowser) {
      return true;
    }
    localStorage.removeItem(key);
    return true;
  }
}
