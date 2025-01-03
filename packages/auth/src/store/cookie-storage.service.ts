import { inject } from '@angular/core';

import { CookieService } from '@delon/util/browser';

import { IStore } from './interface';
import { ITokenModel } from '../token/interface';

/**
 * `cookie` storage
 *
 * ```ts
  provideHttpClient(withInterceptors([...(environment.interceptorFns ?? []), authJWTInterceptor, defaultInterceptor])),
  provideAuth(withCookie()),
 * ```
 */
export class CookieStorageStore implements IStore {
  private readonly srv = inject(CookieService);

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
    const expires = (value?.expired ?? 0) / 1e3;
    this.srv.put(key, JSON.stringify(value ?? {}), { expires });
    return true;
  }

  remove(key: string): void {
    this.srv.remove(key);
  }
}
