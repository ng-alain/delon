import { TestBed } from '@angular/core/testing';
import { filter, firstValueFrom } from 'rxjs';

import { AlainAuthConfig } from '@delon/util/config';

import { DA_SERVICE_TOKEN, ITokenModel, ITokenService } from './interface';
import { JWTTokenModel } from './jwt/jwt.model';

describe('auth: token.service', () => {
  let service: ITokenService;
  const VALUE: ITokenModel = {
    token: 'token data'
  } as ITokenModel;
  const JWTVALUE: ITokenModel = {
    token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ`
  } as ITokenModel;

  beforeEach(() => {
    let data: Record<string, any> = {};

    vi.spyOn(localStorage, 'getItem').mockImplementation((key: string): string => {
      return data[key] ?? null;
    });
    vi.spyOn(localStorage, 'removeItem').mockImplementation((key: string): void => {
      delete data[key];
    });
    vi.spyOn(localStorage, 'setItem').mockImplementation((key: string, value: string): string => {
      return (data[key] = value as string);
    });
    vi.spyOn(localStorage, 'clear').mockImplementation(() => {
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

  it('#change', async () => {
    const change = firstValueFrom(service.change().pipe(filter((res): res is ITokenModel => res != null)));
    service.set(VALUE);
    const res = await change;
    expect(res).not.toBeNull();
    expect(res.token).toBe(VALUE.token);
    expect(service.get()?.token).toBe(VALUE.token);
  });

  describe('#refresh', () => {
    function updateConfig(config?: AlainAuthConfig): void {
      const srvAny: any = service;
      srvAny._options = { ...srvAny._options, enabledRefresh: true, ...config } as AlainAuthConfig;
    }

    beforeEach(() => vi.useFakeTimers());
    beforeEach(() => updateConfig());

    afterEach(() => (service as any).ngOnDestroy());

    it('should be working', async () => {
      updateConfig({ refreshTime: 1, refreshOffset: 1 });
      const refresh = firstValueFrom(service.refresh);
      const expired = +new Date() + 20;
      service.set({ token: 'a', expired });
      await vi.advanceTimersByTimeAsync(20);
      expect((await refresh).token).toBe('a');
    });

    it('should be working of jwt', async () => {
      updateConfig({ refreshTime: 1, refreshOffset: 1 });
      const refresh = firstValueFrom(service.refresh);
      const exp = +new Date() + 20;
      service.set({ token: 'a', exp } as JWTTokenModel);
      await vi.advanceTimersByTimeAsync(20);
      expect((await refresh).token).toBe('a');
    });

    it('should be can not trigger refresh when expired is not present', async () => {
      updateConfig({ refreshTime: 1, refreshOffset: 1 });
      const refresh = vi.fn();
      service.refresh.subscribe(refresh);
      service.set({ token: 'a', expired: 0 });
      await vi.advanceTimersByTimeAsync(20);
      expect(refresh).not.toHaveBeenCalled();
    });
  });
});
