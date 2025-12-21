import { IStore } from './interface';
import { ITokenModel } from '../token/interface';

export function DA_STORE_TOKEN_LOCAL_FACTORY(): IStore {
  return new LocalStorageStore();
}

/**
 * `localStorage` storage, **not lost after closing the browser**.
 *
 * ```ts
  provideHttpClient(withInterceptors([...(environment.interceptorFns ?? []), authJWTInterceptor, defaultInterceptor])),
  provideAuth(withLocalStorage()),
 * ```
 */
export class LocalStorageStore implements IStore {
  get(key: string): ITokenModel {
    return JSON.parse(localStorage.getItem(key) ?? '{}') ?? {};
  }

  set(key: string, value: ITokenModel | null): boolean {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }
}
