import { LocalStorageStore } from './local-storage.service';
import { ITokenModel } from '../token/interface';

describe('auth: local-storage', () => {
    const store = new LocalStorageStore();
    const KEY = 'token';
    const VALUE: ITokenModel = <ITokenModel> {
        token: 'token data'
    };

    beforeEach(() => {
        let data = {};

        spyOn(localStorage, 'getItem').and.callFake((key: string): string => {
            return data[key] || null;
        });
        spyOn(localStorage, 'removeItem').and.callFake((key: string): void =>  {
            delete data[key];
        });
        spyOn(localStorage, 'setItem').and.callFake((key: string, value: string): string =>  {
            return data[key] = <string>value;
        });
        spyOn(localStorage, 'clear').and.callFake(() =>  {
            data = {};
        });

    });

    it('#get', () => {
        store.set(KEY, VALUE);
        const ret = store.get(KEY);
        expect(ret).not.toBeNull();
        expect(ret.token).toBe(VALUE.token);
        const invalidRet = store.get('asdf');
        expect(invalidRet).not.toBeNull();
        expect(invalidRet.token).toBeUndefined();
    });

    it('#set', () => {
        store.set(KEY, VALUE);
        const ret = store.get(KEY);
        expect(ret).not.toBeNull();
        expect(ret.token).toBe(VALUE.token);
    });


    it('#remove', () => {
        store.set(KEY, VALUE);
        store.remove(KEY);
        const ret = store.get(KEY);
        expect(ret).not.toBeNull();
        expect(ret.token).toBeUndefined();
    });
});
