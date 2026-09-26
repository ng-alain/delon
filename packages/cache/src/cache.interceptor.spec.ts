import { HttpClient, HttpContext, HttpResponse, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

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
    const logSpy = vi.spyOn(console, 'log').mockReturnValue(undefined);
    http.get('/test', { responseType: 'text', context: new HttpContext().set(CACHE, { key: 'a' }) }).subscribe();
    expect(logSpy).toHaveBeenCalled();
    expect(vi.mocked(logSpy).mock.calls[0]![0]).toBe(`%c👽GET->/test->from cache(onle in development)`);
  });

  it('should be truth request and cache data of response when is not cache', async () => {
    const key = 'b';
    const res = 'ok';
    const res$ = firstValueFrom(
      http.get('/test', { responseType: 'text', context: new HttpContext().set(CACHE, { key, expire: 60 }) })
    );
    httpBed.expectOne('/test').flush(res);
    expect(await res$).toBe(res);
    expect((cacheSrv.getNone(key) as HttpResponse<string>)?.body).toBe(res);
  });

  it('should be support cache-control', async () => {
    const key = 'b';
    const res = 'ok';
    const res$ = firstValueFrom(
      http.get('/test', { responseType: 'text', context: new HttpContext().set(CACHE, { key }) })
    );
    httpBed.expectOne('/test').flush(res, { headers: { 'cache-control': 'max-age=60' } });
    expect(await res$).toBe(res);
    expect((cacheSrv.getNone(key) as HttpResponse<string>)?.body).toBe(res);
  });

  it('should be support POST data', async () => {
    const key = 'b';
    const res = 'ok';
    const res$ = firstValueFrom(
      http.post(key, { responseType: 'text', context: new HttpContext().set(CACHE, { key }) })
    );
    httpBed.expectOne(key).flush(res, { headers: { 'cache-control': 'max-age=60' } });
    await res$;
    expect((cacheSrv.getNone(key) as HttpResponse<string>)?.body).toBe(res);
  });

  describe('Ignore cache', () => {
    it('when response cache-control', async () => {
      const key = 'b';
      const res = 'ok';
      const res$ = firstValueFrom(http.get(key, { responseType: 'text' }));
      httpBed.expectOne(key).flush(res, { headers: { 'cache-control': 'max-age=60' } });
      expect(await res$).toBe(res);
      expect((cacheSrv.getNone(key) as HttpResponse<string>)?.body).toBe(res);
    });

    it('when is not set CACHE', async () => {
      const key = 'b';
      const res = 'ok';
      const res$ = firstValueFrom(http.get('/test', { responseType: 'text' }));
      httpBed.expectOne('/test').flush(res);
      expect(await res$).toBe(res);
      expect(cacheSrv.has(key)).toBe(false);
    });

    it('when enabled is false', async () => {
      const key = 'b';
      const res = 'ok';
      const res$ = firstValueFrom(
        http.get(key, { responseType: 'text', context: new HttpContext().set(CACHE, { enabled: false }) })
      );
      httpBed.expectOne(key).flush(res, { headers: { 'cache-control': 'max-age=60' } });
      expect(await res$).toBe(res);
      expect(cacheSrv.has(key)).toBe(false);
    });

    it('when expire is 0', async () => {
      const key = 'b';
      const res = 'ok';
      const res$ = firstValueFrom(
        http.get('/test', { responseType: 'text', context: new HttpContext().set(CACHE, { expire: 0 }) })
      );
      httpBed.expectOne('/test').flush(res);
      expect(await res$).toBe(res);
      expect(cacheSrv.has(key)).toBe(false);
    });
  });
});
