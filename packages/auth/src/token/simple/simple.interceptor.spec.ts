import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';
import { TestBed, TestBedStatic } from '@angular/core/testing';
import { DefaultUrlSerializer, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { DelonAuthConfig } from '../../auth.config';
import { DelonAuthModule } from '../../auth.module';
import { DA_SERVICE_TOKEN, ITokenModel, ITokenService } from '../interface';
import { SimpleInterceptor } from './simple.interceptor';
import { SimpleTokenModel } from './simple.model';

function genModel(token: string = `123`) {
  const model = new SimpleTokenModel();
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
}

describe('auth: simple.interceptor', () => {
  let injector: TestBedStatic;
  let http: HttpClient;
  let httpBed: HttpTestingController;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate'),
    parseUrl: jasmine.createSpy('parseUrl').and.callFake((value: any) => {
      return new DefaultUrlSerializer().parse(value);
    }),
  };

  function genModule(options: DelonAuthConfig, tokenData?: SimpleTokenModel) {
    injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([]), DelonAuthModule],
      providers: [
        { provide: DelonAuthConfig, useValue: options },
        { provide: Router, useValue: mockRouter },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: SimpleInterceptor,
          multi: true,
        },
        { provide: DA_SERVICE_TOKEN, useClass: MockTokenService },
      ],
    });
    if (tokenData) injector.get(DA_SERVICE_TOKEN).set(tokenData);

    http = injector.get(HttpClient);
    httpBed = injector.get(HttpTestingController);
  }

  describe('[token position]', () => {
    it(`in headers`, (done: () => void) => {
      const basicModel = genModel();
      genModule({}, basicModel);
      http.get('/test', { responseType: 'text' }).subscribe(value => {
        done();
      });
      const req = httpBed.expectOne('/test') as TestRequest;
      expect(req.request.headers.get('token')).toBe(basicModel.token);
      req.flush('ok!');
    });
    it(`in body`, (done: () => void) => {
      genModule(
        {
          token_send_place: 'body',
        },
        genModel('123'),
      );
      http.get('/test', { responseType: 'text' }).subscribe(value => {
        done();
      });
      const req = httpBed.expectOne('/test') as TestRequest;
      expect(req.request.body.token).toBe('123');
      req.flush('ok!');
    });
    it(`in url`, (done: () => void) => {
      genModule(
        {
          token_send_place: 'url',
        },
        genModel('123'),
      );
      http.get('/test', { responseType: 'text' }).subscribe(value => {
        done();
      });
      const req = httpBed.expectOne(() => true) as TestRequest;
      expect(req.request.params.has('token')).toBe(true);
      expect(req.request.params.get('token')).toBe('123');
      req.flush('ok!');
    });
    it(`in url via full-domain`, (done: () => void) => {
      genModule(
        {
          token_send_place: 'url',
        },
        genModel('123'),
      );
      http.get('https://ng-alain.com/test', { responseType: 'text' }).subscribe(value => {
        done();
      });
      const req = httpBed.expectOne(() => true) as TestRequest;
      expect(req.request.params.has('token')).toBe(true);
      expect(req.request.params.get('token')).toBe('123');
      req.flush('ok!');
    });
  });

  describe('[token template]', () => {
    const basicModel = genModel();

    // tslint:disable-next-line:no-invalid-template-strings
    it('should be [Bearer ${token}]', (done: () => void) => {
      genModule(
        {
          token_send_place: 'header',
          token_send_key: 'Authorization',
          // tslint:disable-next-line:no-invalid-template-strings
          token_send_template: 'Bearer ${token}',
        },
        basicModel,
      );

      http.get('/test', { responseType: 'text' }).subscribe(value => {
        done();
      });
      const ret = httpBed.expectOne(
        r => r.method === 'GET' && (r.url as string).startsWith('/test'),
      ) as TestRequest;
      expect(ret.request.headers.get('Authorization')).toBe(`Bearer ${basicModel.token}`);
      ret.flush('ok!');
    });

    // tslint:disable-next-line:no-invalid-template-strings
    it('should be [Bearer ${uid}-${token}]', (done: () => void) => {
      genModule(
        {
          token_send_place: 'header',
          token_send_key: 'Authorization',
          // tslint:disable-next-line:no-invalid-template-strings
          token_send_template: 'Bearer ${uid}-${token}',
        },
        basicModel,
      );

      http.get('/test', { responseType: 'text' }).subscribe(value => {
        done();
      });
      const ret = httpBed.expectOne(
        r => r.method === 'GET' && (r.url as string).startsWith('/test'),
      ) as TestRequest;
      expect(ret.request.headers.get('Authorization')).toBe(
        `Bearer ${basicModel.uid}-${basicModel.token}`,
      );
      ret.flush('ok!');
    });
  });
});
