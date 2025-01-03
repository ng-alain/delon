/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient, HttpHeaders, HttpResponse, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Component, Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { lastValueFrom, of } from 'rxjs';

import * as Mock from 'mockjs';

import { AlainMockConfig, provideAlainConfig } from '@delon/util/config';

import { MockRequest } from './interface';
import { mockInterceptor } from './mock.interceptor';
import { provideMockConfig } from './provide';
import { MockStatusError } from './status.error';
import { delay, r } from './utils';

const USER_LIST = { users: [1, 2], a: 0 };
const DATA = {
  USERS: {
    'GET /users': USER_LIST,
    '/users/1': Mock.mock({ id: 1, 'rank|3': '★★★' }),
    '/users/:id': (req: MockRequest) => req.params,
    '/array': [1, 2],
    '/fn/queryString': (req: MockRequest) => req.queryString,
    '/fn/header': (req: MockRequest) => req.headers,
    '/HttpResponse': () => new HttpResponse({ body: 'Body', headers: new HttpHeaders({ token: '1' }) }),
    'POST /fn/body': (req: MockRequest) => req.body,
    'POST /users/1': { uid: 1, action: 'add' },
    '/404': () => {
      throw new MockStatusError(404);
    },
    '/500': () => {
      throw new Error('500');
    },
    '/obs': () => of(r(1, 1)),
    '/promise': async () => {
      await delay(10);
      return 'a';
    }
  }
};

describe('mock: interceptor', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;

  function genModule(data: any, options: AlainMockConfig, spyConsole: boolean = true): void {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([mockInterceptor])),
        provideHttpClientTesting(),
        provideRouter([
          {
            path: 'lazy',
            loadChildren: jasmine.createSpy('expected')
          }
        ]),
        provideAlainConfig({ mock: options }),
        provideMockConfig({ data })
      ]
    });
    TestBed.createComponent(RootComponent);
    http = TestBed.inject<HttpClient>(HttpClient);
    httpMock = TestBed.inject(HttpTestingController as Type<HttpTestingController>);
    if (spyConsole) {
      spyOn(console, 'log');
      spyOn(console, 'warn');
    }
  }

  describe('[default]', () => {
    beforeEach(() => genModule(DATA, { delay: 1 }));
    it('should be init', done => {
      http.get('/users').subscribe((res: any) => {
        expect(res).not.toBeNull();
        expect(res.users).not.toBeNull();
        expect(res.users.length).toBe(DATA.USERS['GET /users'].users.length);
        done();
      });
    });
    it('should response array', (done: () => void) => {
      http.get('/array').subscribe((res: any) => {
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
      http.get('/404').subscribe({
        next: () => {
          expect(false).toBe(true);
          done();
        },
        error: () => {
          expect(true).toBe(true);
          done();
        }
      });
    });
    it('muse be use MockStatusError to throw status error', (done: () => void) => {
      http.get('/500').subscribe({
        next: () => {
          expect(false).toBe(true);
          done();
        },
        error: () => {
          expect(true).toBe(true);
          done();
        }
      });
    });
    it('should request POST', (done: () => void) => {
      http.post('/users/1', { data: true }, { observe: 'response' }).subscribe((res: HttpResponse<any>) => {
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
    it('should be return a observable', () => {
      http.get('/obs').subscribe(res => {
        expect(res).toBe(1);
      });
    });
    it('should be return a promise', async () => {
      const res = await lastValueFrom(http.get('/promise'));
      expect(res).toBe('a');
    });
  });

  describe('[disabled log]', () => {
    it('with request', (done: () => void) => {
      genModule(DATA, { delay: 1, log: false });
      http.get('/users').subscribe(() => {
        expect(console.log).not.toHaveBeenCalled();
        done();
      });
    });
    it('with error request', (done: () => void) => {
      genModule(DATA, { delay: 1, log: false });
      http.get('/404').subscribe({
        next: () => {
          expect(false).toBe(true);
          done();
        },
        error: () => {
          expect(console.log).not.toHaveBeenCalled();
          expect(true).toBe(true);
          done();
        }
      });
    });
  });
});

@Component({
  selector: 'root-cmp',
  template: ` <router-outlet />`
})
class RootComponent {}
