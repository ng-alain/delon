import { IStore } from './interface';
import { ITokenModel } from '../token/interface';

export class SessionStorageStore implements IStore {
  get(key: string): ITokenModel {
    return JSON.parse(sessionStorage.getItem(key) || '{}') || {};
  }

  set(key: string, value: ITokenModel): boolean {
    sessionStorage.setItem(key, JSON.stringify(value));
    return true;
  }

  remove(key: string) {
    sessionStorage.removeItem(key);
  }
}
