import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { ITokenModel } from '../token/interface';
import { CookieStorageStore } from './cookie-storage.service';

describe('auth: cookie-storage', () => {
  let data: { [key: string]: NzSafeAny } = {};
  const store = new CookieStorageStore({
    put: jasmine.createSpy('put').and.callFake((key: string, value: string) => (data[key] = value as string)),
    get: jasmine.createSpy('get').and.callFake((key: string) => data[key] || null),
    remove: jasmine.createSpy('remove').and.callFake((key: string) => {
      delete data[key];
    })
  } as NzSafeAny);
  const KEY = 'token';
  const VALUE: ITokenModel = {
    token: 'token data'
  } as ITokenModel;

  beforeEach(() => {
    data = {};
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
