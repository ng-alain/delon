import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpContext, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, TestRequest, provideHttpClientTesting } from '@angular/common/http/testing';
import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { Observable } from 'rxjs';

import { AlainAuthConfig, provideAlainConfig } from '@delon/util/config';

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
  let http: HttpClient;
  let httpBed: HttpTestingController;
  let router: Router;
  const MockDoc = {
    location: {
      href: ''
    },
    querySelectorAll(): any {
      return {};
    }
  };

  function genModule(options: AlainAuthConfig, tokenData?: ITokenModel, provider: any[] = []): void {
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
    spyOn(router, 'navigate');
    http = TestBed.inject<HttpClient>(HttpClient);
    httpBed = TestBed.inject(HttpTestingController as Type<HttpTestingController>);
  }

  describe('[ignores]', () => {
    describe('#with config', () => {
      const basicModel = genModel(SimpleTokenModel);

      it(`should be ignore /login`, done => {
        genModule({ ignores: [/assets\//, /\/login/] }, basicModel);

        http.get('/login', { responseType: 'text' }).subscribe(() => done());
        const req = httpBed.expectOne('/login') as TestRequest;
        expect(req.request.headers.get('token')).toBeNull();
        req.flush('ok!');
      });

      it('should be empty ignore', done => {
        genModule({ ignores: [] }, basicModel);
        http.get('/login', { responseType: 'text' }).subscribe(() => done());
        const req = httpBed.expectOne('/login') as TestRequest;
        expect(req.request.headers.get('token')).toBe('123');
        req.flush('ok!');
      });

      it('should be undefined', done => {
        genModule({ ignores: undefined }, basicModel);
        http.get('/login', { responseType: 'text' }).subscribe(() => done());
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
      it('with navigate', done => {
        genModule({}, genModel(SimpleTokenModel, null));
        http.get('/test', { responseType: 'text' }).subscribe({
          next: () => {
            expect(false).toBe(true);
            done();
          },
          error: (err: any) => {
            expect(err.status).toBe(401);
            setTimeout(() => {
              expect(TestBed.inject<Router>(Router).navigate).toHaveBeenCalled();
              done();
            }, 20);
          }
        });
      });
      it('with location', done => {
        const login_url = 'https://ng-alain.com/login';
        genModule({ login_url }, genModel(SimpleTokenModel, null));
        http.get('/test', { responseType: 'text' }).subscribe({
          next: () => {
            expect(false).toBe(true);
            done();
          },
          error: (err: any) => {
            expect(err.status).toBe(401);
            setTimeout(() => {
              expect(TestBed.inject(DOCUMENT).location.href).toBe(login_url);
              done();
            }, 20);
          }
        });
      });
    });

    it('should be not navigate to login when token_invalid_redirect: false', done => {
      genModule({ token_invalid_redirect: false }, genModel(SimpleTokenModel, null));
      http.get('/test', { responseType: 'text' }).subscribe({
        next: () => {
          expect(false).toBe(true);
          done();
        },
        error: (err: any) => {
          expect(err.status).toBe(401);
          done();
        }
      });
    });
  });

  describe('[referrer]', () => {
    it('should be always router url', done => {
      genModule({}, genModel(SimpleTokenModel, null));
      http.get('/to-test', { responseType: 'text' }).subscribe({
        next: () => {
          expect(false).toBe(true);
          done();
        },
        error: () => {
          const tokenSrv = TestBed.inject(DA_SERVICE_TOKEN) as MockTokenService;
          expect(tokenSrv.referrer).not.toBeNull();
          expect(tokenSrv.referrer.url).toBe('/');
          done();
        }
      });
    });
  });
});
