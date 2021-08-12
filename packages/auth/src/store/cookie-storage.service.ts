import { CookieService } from '@delon/util/browser';

import { ITokenModel } from '../token/interface';
import { IStore } from './interface';

/**
 * `cookie` storage
 *
 * ```ts
 * // global-config.module.ts
 * { provide: DA_STORE_TOKEN, useClass: CookieStorageStore }
 * ```
 */
export class CookieStorageStore implements IStore {
  constructor(private srv: CookieService) {}

  get(key: string): ITokenModel {
    return JSON.parse(this.srv.get(key) || '{}') || {};
  }

  set(key: string, value: ITokenModel | null | undefined): boolean {
    this.srv.put(key, value != null ? JSON.stringify(value) : '{}');
    return true;
  }

  remove(key: string): void {
    this.srv.remove(key);
  }
}
