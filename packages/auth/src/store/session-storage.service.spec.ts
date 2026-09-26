import { SessionStorageStore } from './session-storage.service';
import { ITokenModel } from '../token/interface';

describe('auth: session-storage', () => {
  const store = new SessionStorageStore();
  const KEY = 'token';
  const VALUE: ITokenModel = {
    token: 'token data'
  } as ITokenModel;

  beforeEach(() => {
    let data: Record<string, any> = {};

    vi.spyOn(sessionStorage, 'getItem').mockImplementation((key: string): string => {
      return data[key] ?? null;
    });
    vi.spyOn(sessionStorage, 'removeItem').mockImplementation((key: string): void => {
      delete data[key];
    });
    vi.spyOn(sessionStorage, 'setItem').mockImplementation((key: string, value: string): string => {
      return (data[key] = value as string);
    });
    vi.spyOn(sessionStorage, 'clear').mockImplementation(() => {
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
