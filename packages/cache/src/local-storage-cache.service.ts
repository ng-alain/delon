import { InjectionToken } from '@angular/core';
import { ICache, ICacheStore } from './interface';

export const DC_STORE_STORAGE_TOKEN = new InjectionToken<ICacheStore>('DC_STORE_STORAGE_TOKEN', {
  providedIn: 'root',
  factory: DC_STORE_STORAGE_TOKEN_FACTORY,
});

export function DC_STORE_STORAGE_TOKEN_FACTORY() {
  return new LocalStorageCacheService();
}

export class LocalStorageCacheService implements ICacheStore {
  get(key: string): ICache {
    return JSON.parse(localStorage.getItem(key) || 'null') || null;
  }

  set(key: string, value: ICache): boolean {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}
