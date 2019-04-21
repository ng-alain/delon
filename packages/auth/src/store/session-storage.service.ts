import { ITokenModel } from '../token/interface';
import { IStore } from './interface';

export class SessionStorageStore implements IStore {
  get(key: string): ITokenModel {
    return JSON.parse(sessionStorage.getItem(key) || '{}') || {};
  }

  set(key: string, value: ITokenModel | null): boolean {
    sessionStorage.setItem(key, JSON.stringify(value));
    return true;
  }

  remove(key: string) {
    sessionStorage.removeItem(key);
  }
}
