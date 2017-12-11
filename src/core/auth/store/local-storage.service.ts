import { IStore } from './interface';
import { ITokenModel } from '../token/interface';

export class LocalStorageStore implements IStore {

    get(key: string): ITokenModel {
        try {
            return JSON.parse(localStorage.getItem(key) || '{}') || null;
        } catch {
            return null;
        }
    }

    set(key: string, value: ITokenModel): boolean {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch {
            return false;
        }
    }

    remove(key: string) {
        localStorage.removeItem(key);
    }
}
