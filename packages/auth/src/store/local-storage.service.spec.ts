import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { ITokenModel } from '../token/interface';
import { LocalStorageStore } from './local-storage.service';

describe('auth: local-storage', () => {
  const store = new LocalStorageStore();
  const KEY = 'token';
  const VALUE: ITokenModel = {
    token: 'token data',
  } as ITokenModel;

  beforeEach(() => {
    let data: { [key: string]: NzSafeAny } = {};

    spyOn(localStorage, 'getItem').and.callFake((key: string): string => {
      return data[key] || null;
    });
    spyOn(localStorage, 'removeItem').and.callFake((key: string): void => {
      delete data[key];
    });
    spyOn(localStorage, 'setItem').and.callFake((key: string, value: string): string => {
      return (data[key] = value as string);
    });
    spyOn(localStorage, 'clear').and.callFake(() => {
      data = {};
    });
  });

  it('should be never return null', () => {
    store.set(KEY, null);
    const ret = store.get(KEY);
    expect(ret).not.toBeNull();
  });

  describe('[property]', () => {
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
});
