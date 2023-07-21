import { CookieService } from '@delon/util/browser';

import { IStore } from './interface';
import { ITokenModel } from '../token/interface';

/**
 * `cookie` storage
 *
 * ```ts
 * // global-config.module.ts
 * { provide: DA_STORE_TOKEN, useClass: CookieStorageStore, deps: [CookieService] }
 * ```
 */
export class CookieStorageStore implements IStore {
  constructor(private srv: CookieService) {}

  get(key: string): ITokenModel {
    try {
      return JSON.parse(this.srv.get(key) || '{}');
    } catch (ex) {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        console.error(`CookieStorageStore: Invalid key-value format ${key}`, ex);
      }
      return {} as ITokenModel;
    }
  }

  set(key: string, value: ITokenModel | null | undefined): boolean {
    this.srv.put(key, value != null ? JSON.stringify(value) : '{}');
    return true;
  }

  remove(key: string): void {
    this.srv.remove(key);
  }
}
