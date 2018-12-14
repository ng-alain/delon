import { ITokenModel } from '../token/interface';
import { MemoryStore } from './memory.service';

describe('auth: memory', () => {
  const store = new MemoryStore();
  const KEY = 'token';
  const VALUE: ITokenModel = {
    token: 'token data',
  } as ITokenModel;

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
