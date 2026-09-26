import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpContext, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, TestRequest, provideHttpClientTesting } from '@angular/common/http/testing';
import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { Observable, firstValueFrom } from 'rxjs';

import { AlainAuthConfig, provideAlainConfig } from '@delon/util/config';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { provideAuth } from '../provide';
import { ALLOW_ANONYMOUS } from '../token';
import { AuthReferrer, DA_SERVICE_TOKEN, ITokenModel, ITokenService } from './interface';
import { authSimpleInterceptor } from './simple';
import { SimpleTokenModel } from './simple/simple.model';

function genModel<T extends ITokenModel>(modelType: new () => T, token: string | null = `123`): any {
  const model: any = new modelType();
  model.token = token;
  model.uid = 1;
  return model;
}

class MockTokenService implements ITokenService {
  [key: string]: any;
  _data: any;
  options: any;
  referrer: AuthReferrer = {};
  refresh!: Observable<ITokenModel>;
  set(data: ITokenModel): boolean {
    this._data = data;
    return true;
  }
  get(): ITokenModel {
    return this._data;
  }
  change(): any {
    return null;
  }
  clear(): void {
    this._data = null;
  }
  readonly login_url = '/login';
}

describe('auth: base.interceptor', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  let http: HttpClient;
  let httpBed: HttpTestingController;
  let router: Router;
  const MockDoc = {
    location: {
      href: '',
      search: ''
    },
    querySelectorAll(): any {
      return {};
    }
  };

  function genModule(options: AlainAuthConfig, tokenData?: ITokenModel, provider: any[] = []): void {
    MockDoc.location.href = '';
    MockDoc.location.search = '';
    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        { provide: DOCUMENT, useValue: MockDoc },
        provideHttpClient(withInterceptors([authSimpleInterceptor])),
        provideHttpClientTesting(),
        provideAlainConfig({ auth: options }),
        provideAuth(),
        { provide: DA_SERVICE_TOKEN, useClass: MockTokenService }
      ].concat(provider)
    });
    if (tokenData) TestBed.inject(DA_SERVICE_TOKEN).set(tokenData);

    router = TestBed.inject<Router>(Router);
    vi.spyOn(router, 'navigateByUrl').mockReturnValue(undefined as NzSafeAny);
    http = TestBed.inject<HttpClient>(HttpClient);
    httpBed = TestBed.inject(HttpTestingController as Type<HttpTestingController>);
  }

  describe('[ignores]', () => {
    describe('#with config', () => {
      const basicModel = genModel(SimpleTokenModel);

      it(`should be ignore /login`, async () => {
        genModule({ ignores: [/assets\//, /\/login/] }, basicModel);

        http.get('/login', { responseType: 'text' }).subscribe(() => {});
        const req = httpBed.expectOne('/login') as TestRequest;
        expect(req.request.headers.get('token')).toBeNull();
        req.flush('ok!');
      });

      it('should be empty ignore', async () => {
        genModule({ ignores: [] }, basicModel);
        http.get('/login', { responseType: 'text' }).subscribe(() => {});
        const req = httpBed.expectOne('/login') as TestRequest;
        expect(req.request.headers.get('token')).toBe('123');
        req.flush('ok!');
      });

      it('should be undefined', async () => {
        genModule({ ignores: undefined }, basicModel);
        http.get('/login', { responseType: 'text' }).subscribe(() => {});
        const req = httpBed.expectOne('/login') as TestRequest;
        expect(req.request.headers.get('token')).toBe('123');
        req.flush('ok!');
      });
    });

    describe('#ALLOW_ANONYMOUS', () => {
      it('in get', () => {
        genModule({}, genModel(SimpleTokenModel, null));
        http.get('/user', { context: new HttpContext().set(ALLOW_ANONYMOUS, true) }).subscribe();
        const ret = httpBed.expectOne(() => true);
        expect(ret.request.headers.get('Authorization')).toBeNull();
        ret.flush('ok!');
      });
      it('in post', () => {
        genModule({}, genModel(SimpleTokenModel, null));
        http.post('/user', {}, { context: new HttpContext().set(ALLOW_ANONYMOUS, true) }).subscribe();
        const ret = httpBed.expectOne(() => true);
        expect(ret.request.headers.get('Authorization')).toBeNull();
        ret.flush('ok!');
      });
    });
  });

  describe('[invalid token]', () => {
    describe('should be navigate to login', () => {
      it('with navigateByUrl', async () => {
        genModule({}, genModel(SimpleTokenModel, null));
        await expect(firstValueFrom(http.get('/test', { responseType: 'text' }))).rejects.toMatchObject({
          status: 401
        });
        await vi.advanceTimersByTimeAsync(20);
        expect(router.navigateByUrl).toHaveBeenCalledWith('/login');
      });
      it('with location', async () => {
        const login_url = 'https://ng-alain.com/login';
        genModule({ login_url }, genModel(SimpleTokenModel, null));
        await expect(firstValueFrom(http.get('/test', { responseType: 'text' }))).rejects.toMatchObject({
          status: 401
        });
        await vi.advanceTimersByTimeAsync(20);
        expect(TestBed.inject(DOCUMENT).location.href).toBe(login_url);
      });
      it('with navigateByUrl should be carry search', async () => {
        genModule({}, genModel(SimpleTokenModel, null));
        MockDoc.location.search = '?a=1&b=2';
        await expect(firstValueFrom(http.get('/test', { responseType: 'text' }))).rejects.toMatchObject({
          status: 401
        });
        await vi.advanceTimersByTimeAsync(20);
        expect(router.navigateByUrl).toHaveBeenCalledWith('/login?a=1&b=2');
      });
      it('with navigateByUrl should be append search when login_url has query', async () => {
        genModule({ login_url: '/login?from=app' }, genModel(SimpleTokenModel, null));
        MockDoc.location.search = '?a=1';
        await expect(firstValueFrom(http.get('/test', { responseType: 'text' }))).rejects.toMatchObject({
          status: 401
        });
        await vi.advanceTimersByTimeAsync(20);
        expect(router.navigateByUrl).toHaveBeenCalledWith('/login?from=app&a=1');
      });
      it('with location should be carry search', async () => {
        const login_url = 'https://ng-alain.com/login';
        genModule({ login_url }, genModel(SimpleTokenModel, null));
        MockDoc.location.search = '?a=1&b=2';
        await expect(firstValueFrom(http.get('/test', { responseType: 'text' }))).rejects.toMatchObject({
          status: 401
        });
        await vi.advanceTimersByTimeAsync(20);
        expect(TestBed.inject(DOCUMENT).location.href).toBe(`${login_url}?a=1&b=2`);
      });
      it('with location should be append search when login_url has query', async () => {
        const login_url = 'https://ng-alain.com/login?from=app';
        genModule({ login_url }, genModel(SimpleTokenModel, null));
        MockDoc.location.search = '?a=1';
        await expect(firstValueFrom(http.get('/test', { responseType: 'text' }))).rejects.toMatchObject({
          status: 401
        });
        await vi.advanceTimersByTimeAsync(20);
        expect(TestBed.inject(DOCUMENT).location.href).toBe(`${login_url}&a=1`);
      });
    });

    it('should be not navigate to login when token_invalid_redirect: false', async () => {
      genModule({ token_invalid_redirect: false }, genModel(SimpleTokenModel, null));
      await expect(firstValueFrom(http.get('/test', { responseType: 'text' }))).rejects.toMatchObject({ status: 401 });
      expect(router.navigateByUrl).not.toHaveBeenCalled();
    });
  });

  describe('[referrer]', () => {
    it('should be always router url', async () => {
      genModule({}, genModel(SimpleTokenModel, null));
      await expect(firstValueFrom(http.get('/to-test', { responseType: 'text' }))).rejects.toMatchObject({
        status: 401
      });
      const tokenSrv = TestBed.inject(DA_SERVICE_TOKEN) as MockTokenService;
      expect(tokenSrv.referrer).not.toBeNull();
      expect(tokenSrv.referrer.url).toBe('/');
    });
  });
});
