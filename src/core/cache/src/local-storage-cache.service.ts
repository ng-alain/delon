import { ICacheStore, ICache } from './interface';

export class LocalStorageCacheService implements ICacheStore {
    get(key: string): ICache {
        return JSON.parse(localStorage.getItem(key) || 'null') || null;
    }

    set(key: string, value: ICache): boolean {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    }

    remove(key: string) {
        localStorage.removeItem(key);
    }

}
