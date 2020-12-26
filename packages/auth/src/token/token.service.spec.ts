import { TestBed } from '@angular/core/testing';
import { AlainAuthConfig } from '@delon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { DA_SERVICE_TOKEN, ITokenModel, ITokenService } from './interface';
import { JWTTokenModel } from './jwt/jwt.model';

describe('auth: token.service', () => {
  let service: ITokenService;
  const VALUE: ITokenModel = {
    token: 'token data',
  } as ITokenModel;
  const JWTVALUE: ITokenModel = {
    token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ`,
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

    TestBed.configureTestingModule({});

    service = TestBed.inject(DA_SERVICE_TOKEN);
  });

  it('#login_url', () => {
    expect(service.login_url).toBe('/login');
  });

  it('#set', () => {
    service.set(VALUE);
    expect(service.get()).not.toBeNull();
    expect(service.get()!.token).toBe(VALUE.token);
  });

  it('#get', () => {
    service.set(VALUE);
    expect(service.get()).not.toBeNull();
    expect(service.get()!.token).toBe(VALUE.token);
  });

  it('#get, should be return JWTTokenModel', () => {
    service.set(JWTVALUE);
    const ret = service.get<JWTTokenModel>(JWTTokenModel);
    expect(ret).not.toBeNull();
    expect(ret.payload).not.toBeUndefined();
  });

  describe('#clear', () => {
    it('should be working', () => {
      service.clear();
      expect(service.get()).not.toBeNull();
      expect(service.get()!.token).toBeUndefined();
    });
    it('should be only clear token data', () => {
      service.set({ token: '1', a: 2 });
      expect(service.get()).not.toBeNull();
      expect(service.get()!.token).toBe(`1`);
      expect(service.get()!.a).toBe(2);
      service.clear({ onlyToken: true });
      expect(service.get()).not.toBeNull();
      expect(service.get()!.token).toBe(``);
      expect(service.get()!.a).toBe(2);
    });
  });

  it('#change', (done: () => void) => {
    service.change().subscribe(res => {
      if (!res) return;
      expect(res).not.toBeNull();
      expect(res.token).toBe(VALUE.token);
      done();
    });
    service.set(VALUE);
  });

  describe('#refresh', () => {
    function updateConfig(config?: AlainAuthConfig): void {
      const srvAny: NzSafeAny = service;
      srvAny._options = { ...srvAny._options, enabledRefresh: true, ...config } as AlainAuthConfig;
    }

    beforeEach(() => updateConfig());

    afterEach(() => (service as NzSafeAny).ngOnDestroy());

    it('should be working', done => {
      updateConfig({ refreshTime: 1, refreshOffset: 1 });
      service.refresh.subscribe(() => {
        expect(true).toBe(true);
        done();
      });
      const expired = +new Date() + 20;
      service.set({ token: 'a', expired });
    });

    it('should be working of jwt', done => {
      updateConfig({ refreshTime: 1, refreshOffset: 1 });
      service.refresh.subscribe(() => {
        expect(true).toBe(true);
        done();
      });
      const exp = +new Date() + 20;
      service.set({ token: 'a', exp } as JWTTokenModel);
    });
  });
});
