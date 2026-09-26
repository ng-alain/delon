import { HttpParams, HttpResponse, provideHttpClient } from '@angular/common/http';
import { HttpTestingController, TestRequest, provideHttpClientTesting } from '@angular/common/http/testing';
import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { of, catchError } from 'rxjs';

import { AlainThemeHttpClientConfig, provideAlainConfig } from '@delon/util/config';
import { deepCopy } from '@delon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { _HttpClient } from './http.client';

describe('theme: http.client', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  let http: _HttpClient;
  let backend: HttpTestingController;
  let res: any;
  const time = new Date();
  const URL = '/user';
  const OK = 'ok!';
  const PARAMS: Record<string, string> = { a: `1` };
  const BODY = 'body data';

  function createModule(config?: AlainThemeHttpClientConfig): void {
    const providers: any[] = [provideHttpClient(), provideHttpClientTesting(), _HttpClient];
    if (config) {
      providers.push(provideAlainConfig({ themeHttp: config }));
    }
    TestBed.configureTestingModule({
      providers
    });

    http = TestBed.inject<_HttpClient>(_HttpClient);
    backend = TestBed.inject(HttpTestingController as Type<HttpTestingController>);
    res = null;
  }

  describe('[property]', () => {
    beforeEach(() => createModule());

    describe('#loading', () => {
      it('should be working', async () => {
        http.get(URL).subscribe(() => {});
        await vi.advanceTimersByTimeAsync(0);
        expect(http.loading).toBeTruthy();
        backend.expectOne(() => true).flush(OK);
        expect(http.loading).toBeFalsy();
      });

      it('should be loading is true when multiple requests are not over', async () => {
        http.get('/1').subscribe();
        http.get('/2').subscribe();
        await vi.advanceTimersByTimeAsync(0);
        backend.expectOne(req => req.url === '/1').flush(OK);
        expect(http.loadingCount).toBe(1);
        backend.expectOne(req => req.url === '/2').flush(OK);
        expect(http.loadingCount).toBe(0);
      });

      it('should be loading is false when request throw error', async () => {
        http
          .get('/error-url')
          .pipe(catchError(() => of(null)))
          .subscribe();
        await vi.advanceTimersByTimeAsync(0);
        backend.expectOne(() => true).error(new ProgressEvent('404'));
        expect(http.loading).toBe(false);
      });

      it('#cleanLoading', async () => {
        http.get(URL).subscribe(() => {});
        await vi.advanceTimersByTimeAsync(0);
        expect(http.loading).toBeTruthy();
        http.cleanLoading();
        await vi.advanceTimersByTimeAsync(0);
        expect(http.loading).toBeFalsy();
      });
    });

    describe('#params', () => {
      it(`specified params`, async () => {
        http.get(URL, PARAMS).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        const ret = backend.expectOne(() => true) as TestRequest;
        for (const key in PARAMS)
          expect(ret.request.params.get(key), `param "${key}" muse be "${PARAMS[key]}"`).toBe(PARAMS[key]);
        ret.flush(OK);
        expect(res).toBe(OK);
      });
      it(`should be unix timestamp when is date param`, async () => {
        const p = Object.assign(deepCopy(PARAMS), { time, date: new Date() });
        http.get(URL, p).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        const ret = backend.expectOne(() => true) as TestRequest;
        for (const key in p) {
          let v = p[key] as any;
          if (v instanceof Date) v = v.valueOf().toString();
          expect(ret.request.params.get(key), `param "${key}" muse be "${v}"`).toBe(v);
        }
        ret.flush(OK);
        expect(res).toBe(OK);
      });
      it('should be ingore process when params is HttpParams', async () => {
        http.get(URL, new HttpParams({ fromObject: { a: 'aa' } })).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.params.get('a')).toBe('aa');
        ret.flush(OK);
        expect(res).toBe(OK);
      });
    });

    describe('[get]', () => {
      it(`return a any`, async () => {
        http.get(URL).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        backend.expectOne(() => true).flush(OK);
        expect(res).toBe(OK);
      });

      it(`return a string`, async () => {
        http.get(URL, PARAMS, { responseType: 'text' }).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        const ret = backend.expectOne(() => true) as TestRequest;
        for (const key in PARAMS)
          expect(ret.request.params.get(key), `param "${key}" muse be "${PARAMS[key]}"`).toBe(PARAMS[key]);
        ret.flush(OK);
        expect(typeof res).toBe('string');
        expect(res).toBe(OK);
      });

      it(`return a HttpResponse<any>`, async () => {
        http.get(URL, PARAMS, { observe: 'response' }).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        const ret = backend.expectOne(() => true) as TestRequest;
        for (const key in PARAMS)
          expect(ret.request.params.get(key), `param "${key}" muse be "${PARAMS[key]}"`).toBe(PARAMS[key]);
        ret.flush(OK);
        expect(res.status).toBe(200);
        expect(res.body).toBe(OK);
      });

      it(`return a HttpResponse<Blob>`, async () => {
        http.get<Blob>(URL, PARAMS, { observe: 'response', responseType: 'blob' }).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);

        backend.expectOne(() => true).flush(new Blob());
        expect(res.status).toBe(200);
        expect(res.body instanceof Blob).toBe(true);
      });

      describe('Generic', () => {
        it('with string', async () => {
          http.get<string>(URL).subscribe(_ => (res = _));
          await vi.advanceTimersByTimeAsync(0);
          backend.expectOne(() => true).flush(OK);
          expect(typeof res).toBe('string');
          expect(res).toBe(OK);
        });
        it('with number', async () => {
          http.get<number>(URL).subscribe(_ => (res = _));
          await vi.advanceTimersByTimeAsync(0);
          backend.expectOne(() => true).event(new HttpResponse<number>({ body: 1 }));
          expect(typeof res).toBe('number');
          expect(res).toBe(1);
        });
        it('with boolean', async () => {
          http.get<boolean>(URL).subscribe(_ => (res = _));
          await vi.advanceTimersByTimeAsync(0);
          backend.expectOne(() => true).event(new HttpResponse<boolean>({ body: true }));
          expect(typeof res).toBe('boolean');
          expect(res).toBe(true);
        });
        it('with object', async () => {
          http.get<NzSafeAny>(URL).subscribe(_ => (res = _));
          await vi.advanceTimersByTimeAsync(0);
          backend.expectOne(() => true).flush({});
          expect(typeof res).toBe('object');
        });
        it('with HttpEvent', async () => {
          http.get<NzSafeAny>(URL, PARAMS, { observe: 'events' }).subscribe(_ => (res = _));
          await vi.advanceTimersByTimeAsync(0);
          backend.expectOne(() => true).flush({});
          expect(typeof res).toBe('object');
          expect(typeof res.type).toBe('number');
        });
        it('with response', async () => {
          http.get<NzSafeAny>(URL, PARAMS, { observe: 'response' }).subscribe(_ => (res = _));
          await vi.advanceTimersByTimeAsync(0);
          backend.expectOne(() => true).flush({});
          expect(res instanceof HttpResponse).toBe(true);
        });
      });

      it('should be catch error', async () => {
        http.get(URL).subscribe({
          next: () => (res = false),
          error: () => (res = true)
        });
        await vi.advanceTimersByTimeAsync(0);
        backend.expectOne(() => true).flush(null, { status: 500, statusText: 'Server Error' });
        expect(res).toBe(true);
      });
    });

    describe('[post]', () => {
      it(`basic`, async () => {
        http.post(URL).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        backend.expectOne(() => true).flush(OK);
        expect(res).toBe(OK);
      });

      it(`has body`, async () => {
        http.post(URL, BODY).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        ret.flush(OK);
        expect(res).toBe(OK);
      });

      it(`specified params`, async () => {
        http.post(URL, BODY, PARAMS).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS)
          expect(ret.request.params.get(key), `param "${key}" muse be "${PARAMS[key]}"`).toBe(PARAMS[key]);
        ret.flush(OK);
        expect(res).toBe(OK);
      });

      it(`return a string`, async () => {
        http.post(URL, BODY, PARAMS, { responseType: 'text' }).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS)
          expect(ret.request.params.get(key), `param "${key}" muse be "${PARAMS[key]}"`).toBe(PARAMS[key]);
        ret.flush(OK);
        expect(typeof res).toBe('string');
        expect(res).toBe(OK);
      });

      it('return generic with string type', async () => {
        http.post<string>(URL).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        backend.expectOne(() => true).flush(OK);
        expect(typeof res).toBe('string');
        expect(res).toBe(OK);
      });

      it(`return a generic with number type`, async () => {
        http.post<number>(URL).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        backend.expectOne(() => true).flush(1);
        expect(typeof res).toBe('number');
        expect(res).toBe(1);
      });

      it('return a HttpEvent', async () => {
        http.post<NzSafeAny>(URL, BODY, PARAMS, { observe: 'events' }).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        backend.expectOne(() => true).flush({});
        expect(typeof res).toBe('object');
        expect(typeof res.type).toBe('number');
      });

      it(`return a HttpResponse<Object>`, async () => {
        http
          .post(URL, BODY, PARAMS, {
            observe: 'response',
            responseType: 'json'
          })
          .subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS)
          expect(ret.request.params.get(key), `param "${key}" muse be "${PARAMS[key]}"`).toBe(PARAMS[key]);
        ret.flush(OK);
        expect(res.status).toBe(200);
        expect(res.body).toBe(OK);
      });
    });

    describe('[delete]', () => {
      it(`basic`, async () => {
        http.delete(URL).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        backend.expectOne(() => true).flush(OK);
        expect(res).toBe(OK);
      });

      it(`specified params`, async () => {
        http.delete(URL, PARAMS).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        const ret = backend.expectOne(() => true) as TestRequest;
        for (const key in PARAMS)
          expect(ret.request.params.get(key), `param "${key}" muse be "${PARAMS[key]}"`).toBe(PARAMS[key]);
        ret.flush(OK);
        expect(res).toBe(OK);
      });

      it(`return a string`, async () => {
        http.delete(URL, PARAMS, { responseType: 'text' }).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        const ret = backend.expectOne(() => true) as TestRequest;
        for (const key in PARAMS)
          expect(ret.request.params.get(key), `param "${key}" muse be "${PARAMS[key]}"`).toBe(PARAMS[key]);
        ret.flush(OK);
        expect(typeof res).toBe('string');
        expect(res).toBe(OK);
      });

      it(`return a HttpResponse<Object>`, async () => {
        http.delete(URL, PARAMS, { observe: 'response', responseType: 'json' }).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        const ret = backend.expectOne(() => true) as TestRequest;
        for (const key in PARAMS)
          expect(ret.request.params.get(key), `param "${key}" muse be "${PARAMS[key]}"`).toBe(PARAMS[key]);
        ret.flush(OK);
        expect(res.status).toBe(200);
        expect(res.body).toBe(OK);
      });

      it(`return a generic`, async () => {
        http.delete<number>(URL).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        backend.expectOne(() => true).flush(1);
        expect(typeof res).toBe('number');
        expect(res).toBe(1);
      });

      it(`allow body request`, async () => {
        http.delete(URL, null, { body: BODY }).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        ret.flush(OK);
        expect(res).toBe(OK);
      });
    });

    describe('[jsonp]', () => {
      it(`basic`, async () => {
        http.jsonp(URL).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        backend.expectOne(() => true).flush(OK);
        expect(res).toBe(OK);
      });

      it(`specified params`, async () => {
        http.jsonp(URL, PARAMS).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        const ret = backend.expectOne(() => true) as TestRequest;
        const newURL = http.appliedUrl(URL, PARAMS);
        expect(ret.request.url).toBe(newURL);
        ret.flush(OK);
        expect(res).toBe(OK);
      });

      it(`specified params and url include ?`, async () => {
        const u = `${URL}?b=1`;
        http.jsonp(u, PARAMS).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        const ret = backend.expectOne(() => true) as TestRequest;
        const newURL = http.appliedUrl(u, PARAMS);
        expect(ret.request.url).toBe(newURL);
        ret.flush(OK);
        expect(res).toBe(OK);
      });

      it(`specified params & callback`, async () => {
        const callbackParam = 'CB';
        http.jsonp(URL, PARAMS, callbackParam).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        const ret = backend.expectOne(() => true) as TestRequest;
        const newURL = `${URL}?a=1`;
        expect(ret.request.url).toBe(newURL);
        expect(ret.request.urlWithParams).toBe(`${newURL}&${callbackParam}=JSONP_CALLBACK`);
        ret.flush(OK);
        expect(res).toBe(OK);
      });

      it('should be catch error', async () => {
        http.jsonp(URL).subscribe({
          next: () => (res = false),
          error: () => (res = true)
        });
        await vi.advanceTimersByTimeAsync(0);
        backend.expectOne(() => true).flush(null, { status: 500, statusText: 'Server Error' });
        expect(true).toBe(true);
      });
    });

    describe('[patch]', () => {
      it(`basic`, async () => {
        http.patch(URL).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        backend.expectOne(() => true).flush(OK);
        expect(res).toBe(OK);
      });

      it(`has body`, async () => {
        http.patch(URL, BODY).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        ret.flush(OK);
        expect(res).toBe(OK);
      });

      it(`specified params`, async () => {
        http.patch(URL, BODY, PARAMS).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS)
          expect(ret.request.params.get(key), `param "${key}" muse be "${PARAMS[key]}"`).toBe(PARAMS[key]);
        ret.flush(OK);
        expect(res).toBe(OK);
      });

      it(`return a string`, async () => {
        http.patch(URL, BODY, PARAMS, { responseType: 'text' }).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS)
          expect(ret.request.params.get(key), `param "${key}" muse be "${PARAMS[key]}"`).toBe(PARAMS[key]);
        ret.flush(OK);
        expect(typeof res).toBe('string');
        expect(res).toBe(OK);
      });

      it('return generic with string type', async () => {
        http.patch<string>(URL).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        backend.expectOne(() => true).flush(OK);
        expect(typeof res).toBe('string');
        expect(res).toBe(OK);
      });

      it('return generic with number type', async () => {
        http.patch<number>(URL).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        backend.expectOne(() => true).flush(1);
        expect(typeof res).toBe('number');
        expect(res).toBe(1);
      });

      it(`return a HttpResponse<Object>`, async () => {
        http
          .patch(URL, BODY, PARAMS, {
            observe: 'response',
            responseType: 'json'
          })
          .subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS)
          expect(ret.request.params.get(key), `param "${key}" muse be "${PARAMS[key]}"`).toBe(PARAMS[key]);
        ret.flush(OK);
        expect(res.status).toBe(200);
        expect(res.body).toBe(OK);
      });
    });

    describe('[put]', () => {
      it(`basic`, async () => {
        http.put(URL).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        backend.expectOne(() => true).flush(OK);
        expect(res).toBe(OK);
      });

      it(`has body`, async () => {
        http.put(URL, BODY).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        ret.flush(OK);
        expect(res).toBe(OK);
      });

      it(`specified params`, async () => {
        http.put(URL, BODY, PARAMS).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS)
          expect(ret.request.params.get(key), `param "${key}" muse be "${PARAMS[key]}"`).toBe(PARAMS[key]);
        ret.flush(OK);
        expect(res).toBe(OK);
      });

      it(`return a string`, async () => {
        http.put(URL, BODY, PARAMS, { responseType: 'text' }).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS)
          expect(ret.request.params.get(key), `param "${key}" muse be "${PARAMS[key]}"`).toBe(PARAMS[key]);
        ret.flush(OK);
        expect(typeof res).toBe('string');
        expect(res).toBe(OK);
      });

      it('return generic with string type', async () => {
        http.put<string>(URL).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        backend.expectOne(() => true).flush(OK);
        expect(typeof res).toBe('string');
        expect(res).toBe(OK);
      });

      it('return generic with number type', async () => {
        http.put<number>(URL).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        backend.expectOne(() => true).flush(1);
        expect(typeof res).toBe('number');
        expect(res).toBe(1);
      });

      it(`return a HttpResponse<Object>`, async () => {
        http
          .put(URL, BODY, PARAMS, {
            observe: 'response',
            responseType: 'json'
          })
          .subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS)
          expect(ret.request.params.get(key), `param "${key}" muse be "${PARAMS[key]}"`).toBe(PARAMS[key]);
        ret.flush(OK);
        expect(res.status).toBe(200);
        expect(res.body).toBe(OK);
      });
    });

    describe('[form]', () => {
      it(`should be re`, async () => {
        http.form(URL).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        backend.expectOne(() => true).flush(OK);
        expect(res).toBe(OK);
      });

      it(`has body`, async () => {
        http.form(URL, BODY).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        ret.flush(OK);
        expect(res).toBe(OK);
      });

      it(`specified params`, async () => {
        http.form(URL, BODY, PARAMS).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS)
          expect(ret.request.params.get(key), `param "${key}" muse be "${PARAMS[key]}"`).toBe(PARAMS[key]);
        ret.flush(OK);
        expect(res).toBe(OK);
      });

      it(`return a string`, async () => {
        http.form(URL, BODY, PARAMS, { responseType: 'text' }).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS)
          expect(ret.request.params.get(key), `param "${key}" muse be "${PARAMS[key]}"`).toBe(PARAMS[key]);
        ret.flush(OK);
        expect(typeof res).toBe('string');
        expect(res).toBe(OK);
      });

      it('return generic with string type', async () => {
        http.form<string>(URL).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        backend.expectOne(() => true).flush(OK);
        expect(typeof res).toBe('string');
        expect(res).toBe(OK);
      });

      it(`return a generic with number type`, async () => {
        http.form<number>(URL).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        backend.expectOne(() => true).flush(1);
        expect(typeof res).toBe('number');
        expect(res).toBe(1);
      });

      it('return a HttpEvent', async () => {
        http.form<NzSafeAny>(URL, BODY, PARAMS, { observe: 'events' }).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        backend.expectOne(() => true).flush({});
        expect(typeof res).toBe('object');
        expect(typeof res.type).toBe('number');
      });

      it(`return a HttpResponse<Object>`, async () => {
        http
          .form(URL, BODY, PARAMS, {
            observe: 'response',
            responseType: 'json'
          })
          .subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        expect(ret.request.headers.get('content-type')).toBe(`application/x-www-form-urlencoded`);
        for (const key in PARAMS)
          expect(ret.request.params.get(key), `param "${key}" muse be "${PARAMS[key]}"`).toBe(PARAMS[key]);
        ret.flush(OK);
        expect(res.status).toBe(200);
        expect(res.body).toBe(OK);
      });
    });

    describe('[request]', () => {
      it(`method: get`, async () => {
        http.request('GET', URL).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        backend.expectOne(() => true).flush(OK);
        expect(res).toBe(OK);
      });

      it(`method: get, should be return Observable<ArrayBuffer>`, async () => {
        http
          .request('GET', URL, {
            responseType: 'arraybuffer'
          })
          .subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        backend.expectOne(() => true).flush(new ArrayBuffer(1));
        expect(res.byteLength).toBe(1);
      });

      it(`method: get, should be return Observable<Blob>`, async () => {
        const content = JSON.stringify({ hello: `world` }, null, 2);
        http
          .request('GET', URL, {
            responseType: 'blob'
          })
          .subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        const blob = new Blob([content], { type: 'application/json' });
        backend.expectOne(() => true).flush(blob);
        expect(res.size).toBe(content.length);
        expect(res.type).toBe('application/json');
      });

      it(`method: get, should be return Observable<String>`, async () => {
        http
          .request('GET', URL, {
            responseType: 'text'
          })
          .subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        backend.expectOne(() => true).flush(OK);
        expect(res).toBe(OK);
      });

      it(`method: post`, async () => {
        http.request('POST', URL).subscribe(_ => (res = _));
        await vi.advanceTimersByTimeAsync(0);
        backend.expectOne(() => true).flush(OK);
        expect(res).toBe(OK);
      });
    });
  });

  describe('[config]', () => {
    it('should be none processed date values', async () => {
      createModule({ dateValueHandling: 'ignore' });
      http.get(URL, { a: new Date() }).subscribe();
      await vi.advanceTimersByTimeAsync(0);
      const ret = backend.expectOne(() => true) as TestRequest;
      expect(ret.request.urlWithParams.length).toBeGreaterThan(URL.length + 15);
    });
    it('should be working second-level timestamps', async () => {
      createModule({ dateValueHandling: 'timestampSecond' });
      const now = new Date();
      http.get(URL, { a: now }).subscribe();
      await vi.advanceTimersByTimeAsync(0);
      const ret = backend.expectOne(() => true) as TestRequest;
      expect(ret.request.urlWithParams).toContain(`${Math.trunc(+now / 1000)}`);
    });
    it('should be ingore null values', async () => {
      createModule({ nullValueHandling: 'ignore' });
      http.get(URL, { a: 1, b: null, c: undefined }).subscribe();
      await vi.advanceTimersByTimeAsync(0);
      const ret = backend.expectOne(() => true) as TestRequest;
      expect(ret.request.urlWithParams).toBe(`${URL}?a=1`);
    });
  });
});
