import { HttpClient, HttpHeaders, HttpResponse, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Component, Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, RouterModule } from '@angular/router';
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
            loadChildren: vi.fn()
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
      vi.spyOn(console, 'log');
      vi.spyOn(console, 'warn');
    }
  }

  describe('[default]', () => {
    beforeEach(() => genModule(DATA, { delay: 1 }));
    it('should be init', async () => {
      const res = await lastValueFrom(http.get('/users'));
      expect(res).not.toBeNull();
      expect((res as any).users).not.toBeNull();
      expect((res as any).users.length).toBe(DATA.USERS['GET /users'].users.length);
    });
    it('should response array', async () => {
      const res = await lastValueFrom(http.get('/array'));
      expect(res).not.toBeNull();
      expect(Array.isArray(res)).toBe(true);
    });
    it('should response via callback', async () => {
      const key = '/fn/queryString';
      const res = await lastValueFrom(http.get(key, { params: { pi: '1' } }));
      expect(res).not.toBeNull();
      expect((res as any).pi).toBe('1');
    });
    it('should be get the default querystring', async () => {
      const key = '/fn/queryString?a=1';
      const res = await lastValueFrom(http.get(key));
      expect((res as any).a).toBe('1');
    });
    it('should return route params', async () => {
      const key = '/users/2';
      const res = await lastValueFrom(http.get(key));
      expect(res).not.toBeNull();
      expect((res as any).id).toBe('2');
    });
    it('should return body', async () => {
      const key = '/fn/body';
      const res = await lastValueFrom(http.post(key, { token: 'asdf' }));
      expect(res).not.toBeNull();
      expect((res as any).token).toBe('asdf');
    });
    it('should return header', async () => {
      const key = '/fn/header';
      const res = await lastValueFrom(http.get(key, { headers: { token: 'asdf' } }));
      expect(res).not.toBeNull();
      expect((res as any).token).toBe('asdf');
    });
    it('should return HttpResponse', async () => {
      const key = '/HttpResponse';
      const res = await lastValueFrom(http.get(key, { observe: 'response' }));
      expect(res).not.toBeNull();
      expect((res as HttpResponse<any>).body).toBe('Body');
      expect((res as HttpResponse<any>).headers.get('token')).toBe('1');
    });
    it('should response HttpStatus: 404', async () => {
      await expect(lastValueFrom(http.get('/404'))).rejects.toBeTruthy();
    });
    it('muse be use MockStatusError to throw status error', async () => {
      await expect(lastValueFrom(http.get('/500'))).rejects.toBeTruthy();
    });
    it('should request POST', async () => {
      const res = await lastValueFrom(http.post('/users/1', { data: true }, { observe: 'response' }));
      expect((res as HttpResponse<any>).body).not.toBeNull();
      expect((res as HttpResponse<any>).body.uid).toBe(1);
      expect((res as HttpResponse<any>).body.action).toBe('add');
    });
    it('should normal request if non-mock url', async () => {
      const promise = lastValueFrom(http.get('/non-mock', { responseType: 'text' }));
      httpMock.expectOne('/non-mock').flush('ok!');
      const value = await promise;
      expect(value).toBe('ok!');
    });
    it('should be array of queryString', async () => {
      const key = '/fn/queryString?a=1&b=1&b=2&b=3';
      const res = await lastValueFrom(http.get(key));
      expect(Array.isArray((res as any).b)).toBe(true);
      expect(+(res as any).b[0]).toBe(1);
      expect(+(res as any).b[1]).toBe(2);
    });
    it('should be return a observable', async () => {
      const res = await lastValueFrom(http.get('/obs'));
      expect(res).toBe(1);
    });
    it('should be return a promise', async () => {
      const res = await lastValueFrom(http.get('/promise'));
      expect(res).toBe('a');
    });
  });

  describe('[disabled log]', () => {
    it('with request', async () => {
      // Setup spy first
      vi.spyOn(console, 'log');
      vi.spyOn(console, 'warn');
      genModule(DATA, { delay: 1, log: false }, false);
      await lastValueFrom(http.get('/users'));
      expect(console.log).not.toHaveBeenCalled();
    });
    it('with error request', async () => {
      // Setup spy first
      vi.spyOn(console, 'log');
      vi.spyOn(console, 'warn');
      genModule(DATA, { delay: 1, log: false }, false);
      await expect(lastValueFrom(http.get('/404'))).rejects.toBeTruthy();
      expect(console.log).not.toHaveBeenCalled();
    });
  });
});

@Component({
  selector: 'root-cmp',
  template: ` <router-outlet />`,
  imports: [RouterModule]
})
class RootComponent {}
