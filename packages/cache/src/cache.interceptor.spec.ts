import { HttpClient, HttpContext, HttpResponse, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { httpCacheInterceptor } from './cache.interceptor';
import { CacheService } from './cache.service';
import { CACHE } from './token';

describe('cache: interceptor', () => {
  let http: HttpClient;
  let httpBed: HttpTestingController;
  let cacheSrv: CacheService;

  function genModule(): void {
    TestBed.configureTestingModule({
      imports: [],
      providers: [provideHttpClient(withInterceptors([httpCacheInterceptor])), provideHttpClientTesting()]
    });
    http = TestBed.inject(HttpClient);
    httpBed = TestBed.inject(HttpTestingController as Type<HttpTestingController>);
    cacheSrv = TestBed.inject(CacheService);
    cacheSrv.set('a', 'a', { type: 'm' });
  }

  beforeEach(genModule);

  it('should be working', () => {
    const logSpy = spyOn(console, 'log');
    http.get('/test', { responseType: 'text', context: new HttpContext().set(CACHE, { key: 'a' }) }).subscribe();
    expect(logSpy).toHaveBeenCalled();
    expect(logSpy.calls.first().args[0]).toBe(`%c👽GET->/test->from cache(onle in development)`);
  });

  it('should be truth request and cache data of response when is not cache', done => {
    const key = 'b';
    const res = 'ok';
    http
      .get('/test', { responseType: 'text', context: new HttpContext().set(CACHE, { key, expire: 60 }) })
      .subscribe(res => {
        expect(res).toBe(res);
        expect((cacheSrv.getNone(key) as HttpResponse<string>)?.body).toBe(res);
        done();
      });
    httpBed.expectOne('/test').flush(res);
  });

  it('should be support cache-control', done => {
    const key = 'b';
    const res = 'ok';
    http.get('/test', { responseType: 'text', context: new HttpContext().set(CACHE, { key }) }).subscribe(res => {
      expect(res).toBe(res);
      expect((cacheSrv.getNone(key) as HttpResponse<string>)?.body).toBe(res);
      done();
    });
    httpBed.expectOne('/test').flush(res, { headers: { 'cache-control': 'max-age=60' } });
  });

  it('should be support POST data', done => {
    const key = 'b';
    const res = 'ok';
    http.post(key, { responseType: 'text', context: new HttpContext().set(CACHE, { key }) }).subscribe(() => {
      expect((cacheSrv.getNone(key) as HttpResponse<string>)?.body).toBe(res);
      done();
    });
    httpBed.expectOne(key).flush(res, { headers: { 'cache-control': 'max-age=60' } });
  });

  describe('Ignore cache', () => {
    it('when response cache-control', done => {
      const key = 'b';
      const res = 'ok';
      http.get(key, { responseType: 'text' }).subscribe(res => {
        expect(res).toBe(res);
        expect((cacheSrv.getNone(key) as HttpResponse<string>)?.body).toBe(res);
        done();
      });
      httpBed.expectOne(key).flush(res, { headers: { 'cache-control': 'max-age=60' } });
    });

    it('when is not set CACHE', done => {
      const key = 'b';
      const res = 'ok';
      http.get('/test', { responseType: 'text' }).subscribe(res => {
        expect(res).toBe(res);
        expect(cacheSrv.has(key)).toBe(false);
        done();
      });
      httpBed.expectOne('/test').flush(res);
    });

    it('when enabled is false', done => {
      const key = 'b';
      const res = 'ok';
      http
        .get(key, { responseType: 'text', context: new HttpContext().set(CACHE, { enabled: false }) })
        .subscribe(res => {
          expect(res).toBe(res);
          expect(cacheSrv.has(key)).toBe(false);
          done();
        });
      httpBed.expectOne(key).flush(res, { headers: { 'cache-control': 'max-age=60' } });
    });

    it('when expire is 0', done => {
      const key = 'b';
      const res = 'ok';
      http
        .get('/test', { responseType: 'text', context: new HttpContext().set(CACHE, { expire: 0 }) })
        .subscribe(res => {
          expect(res).toBe(res);
          expect(cacheSrv.has(key)).toBe(false);
          done();
        });
      httpBed.expectOne('/test').flush(res);
    });
  });
});
