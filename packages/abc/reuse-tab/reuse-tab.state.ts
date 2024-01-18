import { InjectionToken } from '@angular/core';

import type { ReuseItem } from './reuse-tab.interfaces';

export const REUSE_TAB_STORAGE_KEY_DEFAULT = '_reuse-tab-state';
export const REUSE_TAB_STORAGE_KEY = new InjectionToken<string>('REUSE_TAB_STORAGE_KEY', {
  providedIn: 'root',
  factory: () => REUSE_TAB_STORAGE_KEY_DEFAULT
});

export const REUSE_TAB_STORAGE_STATE = new InjectionToken<ReuseTabStorageState>('REUSE_TAB_STORAGE_STATE', {
  providedIn: 'root',
  factory: () => new ReuseTabLocalStorageState()
});

export interface ReuseTabStorageState {
  get(key: string): ReuseItem[];

  update(key: string, value: ReuseItem[]): boolean;

  remove(key: string): void;
}

export class ReuseTabLocalStorageState implements ReuseTabStorageState {
  get(key: string): ReuseItem[] {
    return JSON.parse(localStorage.getItem(key) || '[]') || [];
  }

  update(key: string, value: ReuseItem[]): boolean {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }
}
