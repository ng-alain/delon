import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { TestBed, TestBedStatic } from '@angular/core/testing';
import { DefaultUrlSerializer, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { DelonAuthConfig } from '../auth.config';
import { DelonAuthModule } from '../auth.module';
import { AuthReferrer, DA_SERVICE_TOKEN, ITokenModel, ITokenService } from './interface';
import { SimpleInterceptor } from './simple/simple.interceptor';
import { SimpleTokenModel } from './simple/simple.model';

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
  referrer: AuthReferrer = {};
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
  let injector: TestBedStatic;
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

        http.get('/login', { responseType: 'text' }).subscribe(done);
        const req = httpBed.expectOne('/login') as TestRequest;
        expect(req.request.headers.get('token')).toBeNull();
        req.flush('ok!');
      });

      it('should be non-ignore', (done: () => void) => {
        genModule({ ignores: null }, basicModel);
        http.get('/login', { responseType: 'text' }).subscribe(done);
        const req = httpBed.expectOne('/login') as TestRequest;
        expect(req.request.headers.get('token')).toBe('123');
        req.flush('ok!');
      });
    });

    describe('#with allow_anonymous_key', () => {
      it(`in params`, (done: () => void) => {
        genModule({}, genModel(SimpleTokenModel, null));
        http.get('/user', { responseType: 'text', params: { _allow_anonymous: '' } }).subscribe(done);
        const ret = httpBed.expectOne(() => true);
        expect(ret.request.headers.get('Authorization')).toBeNull();
        ret.flush('ok!');
      });
      it(`in params (full url)`, (done: () => void) => {
        genModule({}, genModel(SimpleTokenModel, null));
        http.get('https://ng-alain.com/api/user', { responseType: 'text', params: { _allow_anonymous: '' } }).subscribe(done);
        const ret = httpBed.expectOne(() => true);
        expect(ret.request.headers.get('Authorization')).toBeNull();
        ret.flush('ok!');
      });
      it(`in url`, (done: () => void) => {
        genModule({}, genModel(SimpleTokenModel, null));
        http.get('/user?_allow_anonymous=1', { responseType: 'text' }).subscribe(done);
        const ret = httpBed.expectOne(() => true);
        expect(ret.request.headers.get('Authorization')).toBeNull();
        ret.flush('ok!');
      });
      it(`in url (full url)`, (done: () => void) => {
        genModule({}, genModel(SimpleTokenModel, null));
        http.get('https://ng-alain.com/api/user?_allow_anonymous=1', { responseType: 'text' }).subscribe(done);
        const ret = httpBed.expectOne(() => true);
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
        genModule({ login_url }, genModel(SimpleTokenModel, null));
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
    it('should working', (done: () => void) => {
      genModule({ executeOtherInterceptors: false }, genModel(SimpleTokenModel, null));
      const url = '/to-test';
      http.get(url, { responseType: 'text' }).subscribe(
        () => {
          expect(false).toBe(true);
          done();
        },
        () => {
          const tokenSrv = injector.get(DA_SERVICE_TOKEN, null) as MockTokenService;
          expect(tokenSrv.referrer).not.toBeNull();
          expect(tokenSrv.referrer.url).toBe(url);
          done();
        },
      );
    });
  });

  describe('[executeOtherInterceptors]', () => {
    beforeEach(() => {
      genModule(
        { executeOtherInterceptors: true },
        genModel(SimpleTokenModel, null),
        [
          { provide: HTTP_INTERCEPTORS, useClass: OtherInterceptor, multi: true },
        ],
      );
    });

    it('shoul working', (done) => {
      otherRes = new HttpResponse({ body: { a: 1 } });
      const url = '/to-test';
      http.get(url, { responseType: 'text' }).subscribe(
        () => {
          expect(false).toBe(true);
          done();
        },
        (err) => {
          expect(err.body.a).toBe(1);
          done();
        },
      );
    });
  });
});
