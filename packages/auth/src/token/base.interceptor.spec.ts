import { Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  HttpTestingController,
  HttpClientTestingModule,
  TestRequest,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, DefaultUrlSerializer } from '@angular/router';
import { _HttpClient } from '@delon/theme';

import { DelonAuthModule } from '../auth.module';
import { DelonAuthConfig } from '../auth.config';
import { SimpleTokenModel } from './simple/simple.model';
import { ITokenModel, DA_SERVICE_TOKEN, ITokenService } from './interface';
import { SimpleInterceptor } from './simple/simple.interceptor';
import { DOCUMENT } from '@angular/common';

function genModel<T extends ITokenModel>(
  modelType: { new(): T },
  token: string = `123`,
) {
  const model = new modelType();
  model.token = token;
  model.uid = 1;
  return model;
}

class MockTokenService implements ITokenService {
  [key: string]: any;
  _data: any;
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
  clear() {
    this._data = null;
  }
  get login_url() {
    return '/login';
  }
  redirect: string;
}

describe('auth: base.interceptor', () => {
  let injector: Injector;
  let http: HttpClient;
  let httpBed: HttpTestingController;
  const MockRouter = {
    navigate: jasmine.createSpy('navigate'),
    parseUrl: jasmine.createSpy('parseUrl').and.callFake((value: any) => {
      return new DefaultUrlSerializer().parse(value);
    }),
  };
  const MockDoc = {
    location: {
      href: '',
    },
  };

  function genModule(
    options: DelonAuthConfig,
    tokenData?: ITokenModel,
    provider: any[] = [],
  ) {
    injector = TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        DelonAuthModule,
      ],
      providers: [
        { provide: DOCUMENT, useValue: MockDoc },
        { provide: DelonAuthConfig, useValue: options },
        { provide: Router, useValue: MockRouter },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: SimpleInterceptor,
          multi: true,
        },
        { provide: DA_SERVICE_TOKEN, useClass: MockTokenService },
      ].concat(provider),
    });
    if (tokenData) injector.get(DA_SERVICE_TOKEN).set(tokenData);

    http = injector.get(HttpClient);
    httpBed = injector.get(HttpTestingController);
  }

  describe('[ignores]', () => {
    describe('#with config', () => {
      const basicModel = genModel(SimpleTokenModel);

      it(`should be ignore /login`, (done: () => void) => {
        genModule({ ignores: [/assets\//, /\/login/] }, basicModel);

        http.get('/login', { responseType: 'text' }).subscribe(value => {
          done();
        });
        const req = httpBed.expectOne('/login') as TestRequest;
        expect(req.request.headers.get('token')).toBeNull();
        req.flush('ok!');
      });

      it('should be non-ignore', (done: () => void) => {
        genModule({ ignores: null }, basicModel);
        http.get('/login', { responseType: 'text' }).subscribe(value => {
          done();
        });
        const req = httpBed.expectOne('/login') as TestRequest;
        expect(req.request.headers.get('token')).toBe('123');
        req.flush('ok!');
      });
    });

    describe('#with allow_anonymous_key', () => {
      it(`in params`, (done: () => void) => {
        genModule({}, genModel(SimpleTokenModel, null));
        http
          .get('/user', {
            responseType: 'text',
            params: { _allow_anonymous: '' },
          })
          .subscribe(value => {
            done();
          });
        const ret = httpBed.expectOne(
          req => req.method === 'GET' && req.url === '/user',
        ) as TestRequest;
        expect(ret.request.headers.get('Authorization')).toBeNull();
        ret.flush('ok!');
      });
      it(`in url`, (done: () => void) => {
        genModule({}, genModel(SimpleTokenModel, null));
        http
          .get('/user?_allow_anonymous=1', {
            responseType: 'text',
          })
          .subscribe(value => {
            done();
          });
        const ret = httpBed.expectOne(
          req => req.method === 'GET',
        ) as TestRequest;
        expect(ret.request.headers.get('Authorization')).toBeNull();
        ret.flush('ok!');
      });
    });
  });

  describe('[invalid token]', () => {
    describe('should be navigate to login', () => {
      it('with navigate', (done: () => void) => {
        genModule({}, genModel(SimpleTokenModel, null));
        http.get('/test', { responseType: 'text' }).subscribe(
          () => {
            expect(false).toBe(true);
            done();
          },
          (err: any) => {
            expect(err.status).toBe(401);
            setTimeout(() => {
              expect(injector.get(Router).navigate).toHaveBeenCalled();
              done();
            }, 20);
          },
        );
      });
      it('with location', (done: () => void) => {
        const login_url = 'https://ng-alain.com/login';
        genModule(
          {
            login_url,
          },
          genModel(SimpleTokenModel, null),
        );
        http.get('/test', { responseType: 'text' }).subscribe(
          () => {
            expect(false).toBe(true);
            done();
          },
          (err: any) => {
            expect(err.status).toBe(401);
            setTimeout(() => {
              expect(injector.get(DOCUMENT).location.href).toBe(login_url);
              done();
            }, 20);
          },
        );
      });
    });

    it('should be not navigate to login when token_invalid_redirect: false', (done: () => void) => {
      genModule(
        { token_invalid_redirect: false },
        genModel(SimpleTokenModel, null),
      );
      http.get('/test', { responseType: 'text' }).subscribe(
        () => {
          expect(false).toBe(true);
          done();
        },
        (err: any) => {
          expect(err.status).toBe(401);
          done();
        },
      );
    });

    it('should be call _HttpClient.end', (done: () => void) => {
      genModule(
        { token_invalid_redirect: false },
        genModel(SimpleTokenModel, null),
        [{ provide: _HttpClient, useValue: { end: () => { } } }],
      );
      http.get('/test', { responseType: 'text' }).subscribe(
        () => {
          expect(false).toBe(true);
          done();
        },
        (err: any) => {
          expect(err.status).toBe(401);
          done();
        },
      );
    });
    it(`can import _HttpClient`, (done: () => void) => {
      genModule(
        { token_invalid_redirect: false },
        genModel(SimpleTokenModel, null),
        [{ provide: _HttpClient, useValue: null }],
      );
      http.get('/test', { responseType: 'text' }).subscribe(
        () => {
          expect(false).toBe(true);
          done();
        },
        (err: any) => {
          expect(err.status).toBe(401);
          done();
        },
      );
    });
  });
});
