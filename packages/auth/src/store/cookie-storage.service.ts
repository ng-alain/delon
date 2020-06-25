import { ITokenModel } from '../token/interface';
import { IStore } from './interface';

declare var Cookies: any;

/**
 * `cookie` storage, muse be install [js-cookie](https://github.com/js-cookie/js-cookie) libary and import `"node_modules/js-cookie/dist/js.cookie.js"` in `angular.json`
 *
 * ```ts
 * // global-config.module.ts
 * { provide: DA_STORE_TOKEN, useClass: CookieStorageStore }
 * ```
 */
export class CookieStorageStore implements IStore {
  get(key: string): ITokenModel {
    return JSON.parse(Cookies.get(key) || '{}') || {};
  }

  set(key: string, value: ITokenModel | null): boolean {
    Cookies.set(key, JSON.stringify(value));
    return true;
  }

  remove(key: string) {
    Cookies.remove(key);
  }
}
