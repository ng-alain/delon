import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Component, NgModule, NgModuleFactoryLoader } from '@angular/core';
import { fakeAsync, inject, tick, TestBed, TestBedStatic } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule, SpyNgModuleFactoryLoader } from '@angular/router/testing';

import * as Mock from 'mockjs';
import { Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { MockRequest } from './interface';
import { DelonMockConfig } from './mock.config';
import { DelonMockModule } from './mock.module';
import { MockService } from './mock.service';
import { MockStatusError } from './status.error';

const DATA = {
  USERS: {
    'GET /users': { users: [1, 2] },
    '/users/1': Mock.mock({ id: 1, 'rank|3': '★★★' }),
    '/users/:id': (req: MockRequest) => req.params,
    '/array': [1, 2],
    '/fn/queryString': (req: MockRequest) => req.queryString,
    '/fn/header': (req: MockRequest) => req.headers,
    '/HttpResponse': () =>
      new HttpResponse({ body: 'Body', headers: new HttpHeaders({ token: '1' }) }),
    'POST /fn/body': (req: MockRequest) => req.body,
    'POST /users/1': { uid: 1, action: 'add' },
    '/404': () => {
      throw new MockStatusError(404);
    },
    '/500': () => {
      throw new Error('500');
    },
  },
};

let otherRes = new HttpResponse();
class OtherInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req.clone()).pipe(mapTo(otherRes));
  }
}

describe('mock: interceptor', () => {
  let injector: TestBedStatic;
  let srv: MockService = null;
  let http: HttpClient;
  let httpMock: HttpTestingController;

  function genModule(
    options: DelonMockConfig,
    imports: any[] = [],
    spyConsole = true,
    providers?: any[],
  ) {
    options = Object.assign(new DelonMockConfig(), options);
    injector = TestBed.configureTestingModule({
      declarations: [RootCmp],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          {
            path: 'lazy',
            loadChildren: 'expected',
          },
        ]),
        DelonMockModule.forRoot(options),
      ].concat(imports),
      providers: [].concat(providers || []),
    });
    srv = injector.get(MockService);
    http = injector.get(HttpClient);
    httpMock = injector.get(HttpTestingController);
    if (spyConsole) {
      spyOn(console, 'log');
      spyOn(console, 'warn');
    }
  }

  describe('[default]', () => {
    beforeEach(() => genModule({ executeOtherInterceptors: false, data: DATA, delay: 1 }));
    it('should be init', (done: () => void) => {
      http.get('/users').subscribe((res: any) => {
        expect(res).not.toBeNull();
        expect(res.users).not.toBeNull();
        expect(res.users.length).toBe(DATA.USERS['GET /users'].users.length);
        done();
      });
    });
    it('should response array', (done: () => void) => {
      http.get('/array').subscribe((res: any[]) => {
        expect(res).not.toBeNull();
        expect(Array.isArray(res)).toBe(true);
        done();
      });
    });
    it('should response via callback', (done: () => void) => {
      const key = '/fn/queryString';
      http.get(key, { params: { pi: '1' } }).subscribe((res: any) => {
        expect(res).not.toBeNull();
        expect(res.pi).toBe('1');
        done();
      });
    });
    it('should be get the default querystring', (done: () => void) => {
      const key = '/fn/queryString?a=1';
      http.get(key).subscribe((res: any) => {
        expect(res.a).toBe('1');
        done();
      });
    });
    it('should return route params', (done: () => void) => {
      const key = '/users/2';
      http.get(key).subscribe((res: any) => {
        expect(res).not.toBeNull();
        expect(res.id).toBe('2');
        done();
      });
    });
    it('should return body', (done: () => void) => {
      const key = '/fn/body';
      http.post(key, { token: 'asdf' }).subscribe((res: any) => {
        expect(res).not.toBeNull();
        expect(res.token).toBe('asdf');
        done();
      });
    });
    it('should return header', (done: () => void) => {
      const key = '/fn/header';
      http.get(key, { headers: { token: 'asdf' } }).subscribe((res: any) => {
        expect(res).not.toBeNull();
        expect(res.token).toBe('asdf');
        done();
      });
    });
    it('should return HttpResponse', (done: () => void) => {
      const key = '/HttpResponse';
      http.get(key, { observe: 'response' }).subscribe((res: HttpResponse<any>) => {
        expect(res).not.toBeNull();
        expect(res.body).toBe('Body');
        expect(res.headers.get('token')).toBe('1');
        done();
      });
    });
    it('should response HttpStatus: 404', (done: () => void) => {
      http.get('/404').subscribe(
        () => {
          expect(false).toBe(true);
          done();
        },
        () => {
          expect(true).toBe(true);
          done();
        },
      );
    });
    it('muse be use MockStatusError to throw status error', (done: () => void) => {
      http.get('/500').subscribe(
        () => {
          expect(false).toBe(true);
          done();
        },
        () => {
          expect(true).toBe(true);
          done();
        },
      );
    });
    it('should request POST', (done: () => void) => {
      http
        .post('/users/1', { data: true }, { observe: 'response' })
        .subscribe((res: HttpResponse<any>) => {
          expect(res.body).not.toBeNull();
          expect(res.body.uid).toBe(1);
          expect(res.body.action).toBe('add');
          done();
        });
    });
    it('should normal request if non-mock url', (done: () => void) => {
      http.get('/non-mock', { responseType: 'text' }).subscribe(value => {
        expect(value).toBe('ok!');
        done();
      });
      httpMock.expectOne('/non-mock').flush('ok!');
    });
    it('should be array of queryString', (done: () => void) => {
      const key = '/fn/queryString?a=1&b=1&b=2&b=3';
      http.get(key).subscribe((res: any) => {
        expect(Array.isArray(res.b)).toBe(true);
        expect(+res.b[0]).toBe(1);
        expect(+res.b[1]).toBe(2);
        done();
      });
    });
  });
  describe('[disabled log]', () => {
    it('with request', (done: () => void) => {
      genModule({ data: DATA, delay: 1, log: false });
      http.get('/users').subscribe((res: any) => {
        expect(console.log).not.toHaveBeenCalled();
        done();
      });
    });
    it('with error request', (done: () => void) => {
      genModule({ data: DATA, delay: 1, log: false });
      http.get('/404').subscribe(
        () => {
          expect(false).toBe(true);
          done();
        },
        () => {
          expect(console.log).not.toHaveBeenCalled();
          expect(true).toBe(true);
          done();
        },
      );
    });
  });
  describe('[lazy module]', () => {
    beforeEach(() => genModule({ data: DATA, delay: 1 }));

    it('should work', fakeAsync(
      inject(
        [Router, NgModuleFactoryLoader],
        (router: Router, loader: SpyNgModuleFactoryLoader) => {
          @Component({
            selector: 'lazy',
            template: '<router-outlet></router-outlet>',
          })
          class LayoutComponent {}

          @Component({
            selector: 'child',
            template: 'length-{{res.users.length}}',
          })
          class ChildComponent {
            res: any = {};
            constructor(HTTP: HttpClient) {
              HTTP.get('/users').subscribe(res => (this.res = res));
            }
          }

          @NgModule({
            declarations: [LayoutComponent, ChildComponent],
            imports: [
              DelonMockModule.forChild(),
              RouterModule.forChild([{ path: 'child', component: ChildComponent }]),
            ],
          })
          class LazyModule {}

          loader.stubbedModules = { expected: LazyModule };
          const fixture = TestBed.createComponent(RootCmp);
          fixture.detectChanges();
          router.navigateByUrl(`/lazy/child`);
          tick(500);
          fixture.detectChanges();
          const text = (fixture.nativeElement as HTMLElement).textContent;
          expect(text).toContain('length-2');
        },
      ),
    ));
  });
  describe('[executeOtherInterceptors]', () => {
    beforeEach(() => {
      genModule({ data: DATA, delay: 1, executeOtherInterceptors: true }, [], true, [
        { provide: HTTP_INTERCEPTORS, useClass: OtherInterceptor, multi: true },
      ]);
    });

    it('shoul working', done => {
      otherRes = new HttpResponse({ body: { a: 1 } });
      http.get('/users').subscribe((res: any) => {
        expect(res).not.toBeNull();
        expect(res.a).toBe(1);
        done();
      });
    });
  });
});

@Component({
  selector: 'root-cmp',
  template: `
    <router-outlet></router-outlet>
  `,
})
class RootCmp {}
