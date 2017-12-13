import { IStore } from './interface';
import { ITokenModel } from '../token/interface';

export class LocalStorageStore implements IStore {

    get(key: string): ITokenModel {
        return JSON.parse(localStorage.getItem(key) || '{}') || null;
    }

    set(key: string, value: ITokenModel): boolean {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    }

    remove(key: string) {
        localStorage.removeItem(key);
    }
}
