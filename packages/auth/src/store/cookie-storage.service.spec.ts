import { ITokenModel } from '../token/interface';
import { CookieStorageStore } from './cookie-storage.service';
import { CookieService } from 'ngx-cookie-service';
import { TestBedStatic, TestBed } from '@angular/core/testing';
import { DelonAuthModule } from '@delon/auth';

describe('auth: cookie-storage', () => {
  let injector: TestBedStatic;
  let store: CookieStorageStore;
  function genModule() {
    injector = TestBed.configureTestingModule({
      imports: [DelonAuthModule],
      providers: [{ provide: CookieService, useClass: CookieService }, CookieStorageStore],
    });
    store = injector.get<CookieStorageStore>(CookieStorageStore);
  }
  beforeEach(() => {
    genModule();
  });

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
