import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AlainAuthConfig, ALAIN_CONFIG } from '@delon/util';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DelonAuthModule } from '../auth.module';
import { AuthReferrer, DA_SERVICE_TOKEN, ITokenModel, ITokenService } from './interface';
import { SimpleInterceptor } from './simple/simple.interceptor';
import { SimpleTokenModel } from './simple/simple.model';

function genModel<T extends ITokenModel>(modelType: new () => T, token: string | null = `123`) {
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
  refresh: Observable<ITokenModel>;
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
}

let otherRes = new HttpResponse();
class OtherInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req.clone()).pipe(
      catchError(() => {
        return throwError(otherRes);
      }),
    );
  }
}

describe('auth: base.interceptor', () => {
  let http: HttpClient;
  let httpBed: HttpTestingController;
  let router: Router;
  const MockDoc = {
    location: {
      href: '',
    },
  };

  function genModule(options: AlainAuthConfig, tokenData?: ITokenModel, provider: any[] = []) {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([]), DelonAuthModule],
      providers: [
        { provide: DOCUMENT, useValue: MockDoc },
        { provide: ALAIN_CONFIG, useValue: { auth: options } },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: SimpleInterceptor,
          multi: true,
        },
        { provide: DA_SERVICE_TOKEN, useClass: MockTokenService },
      ].concat(provider),
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

        http.get('/login', { responseType: 'text' }).subscribe(done);
        const req = httpBed.expectOne('/login') as TestRequest;
        expect(req.request.headers.get('token')).toBeNull();
        req.flush('ok!');
      });

      it('should be empty ignore', done => {
        genModule({ ignores: [] }, basicModel);
        http.get('/login', { responseType: 'text' }).subscribe(done);
        const req = httpBed.expectOne('/login') as TestRequest;
        expect(req.request.headers.get('token')).toBe('123');
        req.flush('ok!');
      });

      it('should be undefined', done => {
        genModule({ ignores: undefined }, basicModel);
        http.get('/login', { responseType: 'text' }).subscribe(done);
        const req = httpBed.expectOne('/login') as TestRequest;
        expect(req.request.headers.get('token')).toBe('123');
        req.flush('ok!');
      });
    });

    describe('#with allow_anonymous_key', () => {
      describe('in params', () => {
        it(`should working`, done => {
          genModule({}, genModel(SimpleTokenModel, null));
          http.get('/user', { responseType: 'text', params: { _allow_anonymous: '' } }).subscribe(done);
          const ret = httpBed.expectOne(() => true);
          expect(ret.request.params.has('_allow_anonymous')).toBe(false);
          expect(ret.request.headers.get('Authorization')).toBeNull();
          ret.flush('ok!');
        });
        it(`(full url)`, done => {
          genModule({}, genModel(SimpleTokenModel, null));
          http
            .get('https://ng-alain.com/api/user', {
              responseType: 'text',
              params: { _allow_anonymous: '' },
            })
            .subscribe(done);
          const ret = httpBed.expectOne(() => true);
          expect(ret.request.headers.get('Authorization')).toBeNull();
          ret.flush('ok!');
        });
      });
      describe('in url', () => {
        it(`should working`, done => {
          genModule({}, genModel(SimpleTokenModel, null));
          http.get('/user?_allow_anonymous=1', { responseType: 'text' }).subscribe(done);
          const ret = httpBed.expectOne(() => true);
          expect(ret.request.url).toBe(`/user`);
          expect(ret.request.headers.get('Authorization')).toBeNull();
          ret.flush('ok!');
        });
        it(`(full url)`, done => {
          genModule({}, genModel(SimpleTokenModel, null));
          http.get('https://ng-alain.com/api/user?a=1&_allow_anonymous=1&other=a&cn=中文', { responseType: 'text' }).subscribe(done);
          const ret = httpBed.expectOne(() => true);
          expect(ret.request.url).toBe(`https://ng-alain.com/api/user?a=1&other=a&cn=%E4%B8%AD%E6%96%87`);
          expect(ret.request.headers.get('Authorization')).toBeNull();
          ret.flush('ok!');
        });
      });
    });
  });

  describe('[invalid token]', () => {
    describe('should be navigate to login', () => {
      it('with navigate', done => {
        genModule({}, genModel(SimpleTokenModel, null));
        http.get('/test', { responseType: 'text' }).subscribe(
          () => {
            expect(false).toBe(true);
            done();
          },
          (err: any) => {
            expect(err.status).toBe(401);
            setTimeout(() => {
              expect(TestBed.inject<Router>(Router).navigate).toHaveBeenCalled();
              done();
            }, 20);
          },
        );
      });
      it('with location', done => {
        const login_url = 'https://ng-alain.com/login';
        genModule({ login_url }, genModel(SimpleTokenModel, null));
        http.get('/test', { responseType: 'text' }).subscribe(
          () => {
            expect(false).toBe(true);
            done();
          },
          (err: any) => {
            expect(err.status).toBe(401);
            setTimeout(() => {
              expect(TestBed.inject(DOCUMENT).location.href).toBe(login_url);
              done();
            }, 20);
          },
        );
      });
    });

    it('should be not navigate to login when token_invalid_redirect: false', done => {
      genModule({ token_invalid_redirect: false }, genModel(SimpleTokenModel, null));
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

  describe('[referrer]', () => {
    it('should be always router url', done => {
      genModule({ executeOtherInterceptors: false }, genModel(SimpleTokenModel, null));
      http.get('/to-test', { responseType: 'text' }).subscribe(
        () => {
          expect(false).toBe(true);
          done();
        },
        () => {
          const tokenSrv = TestBed.inject(DA_SERVICE_TOKEN) as MockTokenService;
          expect(tokenSrv.referrer).not.toBeNull();
          expect(tokenSrv.referrer.url).toBe('/');
          done();
        },
      );
    });
  });

  describe('[executeOtherInterceptors]', () => {
    beforeEach(() => {
      genModule({ executeOtherInterceptors: true }, genModel(SimpleTokenModel, null), [
        { provide: HTTP_INTERCEPTORS, useClass: OtherInterceptor, multi: true },
      ]);
    });

    it('shoul working', done => {
      otherRes = new HttpResponse({ body: { a: 1 } });
      const url = '/to-test?a=1';
      http.get(url, { responseType: 'text' }).subscribe(
        () => {
          expect(false).toBe(true);
          done();
        },
        err => {
          expect(err.body.a).toBe(1);
          done();
        },
      );
    });
  });
});
