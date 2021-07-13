import { HttpParams, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { Type } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { AlainThemeHttpClientConfig, ALAIN_CONFIG } from '@delon/util/config';
import { deepCopy } from '@delon/util/other';

import { _HttpClient } from './http.client';

describe('theme: http.client', () => {
  let http: _HttpClient;
  let backend: HttpTestingController;
  let res: any;
  const time = new Date();
  const URL = '/user';
  const OK = 'ok!';
  const PARAMS: { [key: string]: string } = { a: `1` };
  const BODY = 'body data';

  function createModule(config?: AlainThemeHttpClientConfig): void {
    const providers: any[] = [_HttpClient];
    if (config) {
      providers.push({ provide: ALAIN_CONFIG, useValue: { themeHttp: config } });
    }
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers
    });

    http = TestBed.inject<_HttpClient>(_HttpClient);
    backend = TestBed.inject(HttpTestingController as Type<HttpTestingController>);
    res = null;
  }

  describe('[property]', () => {
    beforeEach(() => createModule());

    describe('#loading', () => {
      it('should be working', fakeAsync(() => {
        http.get(URL).subscribe(() => {});
        tick();
        expect(http.loading).toBeTruthy();
        backend.expectOne(() => true).flush(OK);
        expect(http.loading).toBeFalsy();
      }));

      it('should be loading is true when multiple requests are not over', fakeAsync(() => {
        http.get('/1').subscribe();
        http.get('/2').subscribe();
        tick();
        backend.expectOne(req => req.url === '/1').flush(OK);
        expect(http.loadingCount).toBe(1);
        backend.expectOne(req => req.url === '/2').flush(OK);
        expect(http.loadingCount).toBe(0);
      }));

      it('should be loading is false when request throw error', fakeAsync(() => {
        http
          .get('/error-url')
          .pipe(catchError(_err => of(null)))
          .subscribe();
        tick();
        backend.expectOne(() => true).error(new ErrorEvent('404'));
        expect(http.loading).toBe(false);
      }));

      it('#cleanLoading', fakeAsync(() => {
        http.get(URL).subscribe(() => {});
        tick();
        expect(http.loading).toBeTruthy();
        http.cleanLoading();
        tick();
        expect(http.loading).toBeFalsy();
      }));
    });

    describe('#params', () => {
      it(`specified params`, fakeAsync(() => {
        http.get(URL, PARAMS).subscribe(_ => (res = _));
        tick();
        const ret = backend.expectOne(() => true) as TestRequest;
        for (const key in PARAMS)
          expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
        expect(res).toBe(OK);
      }));
      it(`should be unix timestamp when is date param`, fakeAsync(() => {
        const p = Object.assign(deepCopy(PARAMS), { time, date: new Date() });
        http.get(URL, p).subscribe(_ => (res = _));
        tick();
        const ret = backend.expectOne(() => true) as TestRequest;
        for (const key in p) {
          let v = p[key] as any;
          if (v instanceof Date) v = v.valueOf();
          expect(ret.request.params.get(key)).toBe(v, `param "${key}" muse be "${v}"`);
        }
        ret.flush(OK);
        expect(res).toBe(OK);
      }));
      it('should be ingore process when params is HttpParams', fakeAsync(() => {
        http.get(URL, new HttpParams({ fromObject: { a: 'aa' } })).subscribe(_ => (res = _));
        tick();
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.params.get('a')).toBe('aa');
        ret.flush(OK);
        expect(res).toBe(OK);
      }));
    });

    describe('[get]', () => {
      it(`return a any`, fakeAsync(() => {
        http.get(URL).subscribe(_ => (res = _));
        tick();
        backend.expectOne(() => true).flush(OK);
        expect(res).toBe(OK);
      }));

      it(`return a string`, fakeAsync(() => {
        http.get(URL, PARAMS, { responseType: 'text' }).subscribe(_ => (res = _));
        tick();
        const ret = backend.expectOne(() => true) as TestRequest;
        for (const key in PARAMS)
          expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
        expect(typeof res).toBe('string');
        expect(res).toBe(OK);
      }));

      it(`return a HttpResponse<any>`, fakeAsync(() => {
        http.get(URL, PARAMS, { observe: 'response' }).subscribe(_ => (res = _));
        tick();
        const ret = backend.expectOne(() => true) as TestRequest;
        for (const key in PARAMS)
          expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
        expect(res.status).toBe(200);
        expect(res.body).toBe(OK);
      }));

      it(`return a HttpResponse<Blob>`, fakeAsync(() => {
        http.get<Blob>(URL, PARAMS, { observe: 'response', responseType: 'blob' }).subscribe(_ => (res = _));
        tick();

        backend.expectOne(() => true).flush(new Blob());
        expect(res.status).toBe(200);
        expect(res.body instanceof Blob).toBe(true);
      }));

      describe('Generic', () => {
        it('with string', fakeAsync(() => {
          http.get<string>(URL).subscribe(_ => (res = _));
          tick();
          backend.expectOne(() => true).flush(OK);
          expect(typeof res).toBe('string');
          expect(res).toBe(OK);
        }));
        it('with number', fakeAsync(() => {
          http.get<number>(URL).subscribe(_ => (res = _));
          tick();
          backend.expectOne(() => true).event(new HttpResponse<number>({ body: 1 }));
          expect(typeof res).toBe('number');
          expect(res).toBe(1);
        }));
        it('with boolean', fakeAsync(() => {
          http.get<boolean>(URL).subscribe(_ => (res = _));
          tick();
          backend.expectOne(() => true).event(new HttpResponse<boolean>({ body: true }));
          expect(typeof res).toBe('boolean');
          expect(res).toBe(true);
        }));
        it('with object', fakeAsync(() => {
          http.get<NzSafeAny>(URL).subscribe(_ => (res = _));
          tick();
          backend.expectOne(() => true).flush({});
          expect(typeof res).toBe('object');
        }));
        it('with HttpEvent', fakeAsync(() => {
          http.get<NzSafeAny>(URL, PARAMS, { observe: 'events' }).subscribe(_ => (res = _));
          tick();
          backend.expectOne(() => true).flush({});
          expect(typeof res).toBe('object');
          expect(typeof res.type).toBe('number');
        }));
        it('with response', fakeAsync(() => {
          http.get<NzSafeAny>(URL, PARAMS, { observe: 'response' }).subscribe(_ => (res = _));
          tick();
          backend.expectOne(() => true).flush({});
          expect(res instanceof HttpResponse).toBe(true);
        }));
      });

      it('should be catch error', fakeAsync(() => {
        http.get(URL).subscribe(
          () => (res = false),
          () => (res = true)
        );
        tick();
        backend.expectOne(() => true).flush(null, { status: 500, statusText: 'Server Error' });
        expect(res).toBe(true);
      }));
    });

    describe('[post]', () => {
      it(`basic`, fakeAsync(() => {
        http.post(URL).subscribe(_ => (res = _));
        tick();
        backend.expectOne(() => true).flush(OK);
        expect(res).toBe(OK);
      }));

      it(`has body`, fakeAsync(() => {
        http.post(URL, BODY).subscribe(_ => (res = _));
        tick();
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        ret.flush(OK);
        expect(res).toBe(OK);
      }));

      it(`specified params`, fakeAsync(() => {
        http.post(URL, BODY, PARAMS).subscribe(_ => (res = _));
        tick();
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS)
          expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
        expect(res).toBe(OK);
      }));

      it(`return a string`, fakeAsync(() => {
        http.post(URL, BODY, PARAMS, { responseType: 'text' }).subscribe(_ => (res = _));
        tick();
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS)
          expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
        expect(typeof res).toBe('string');
        expect(res).toBe(OK);
      }));

      it('return generic with string type', fakeAsync(() => {
        http.post<string>(URL).subscribe(_ => (res = _));
        tick();
        backend.expectOne(() => true).flush(OK);
        expect(typeof res).toBe('string');
        expect(res).toBe(OK);
      }));

      it(`return a generic with number type`, fakeAsync(() => {
        http.post<number>(URL).subscribe(_ => (res = _));
        tick();
        backend.expectOne(() => true).flush(1);
        expect(typeof res).toBe('number');
        expect(res).toBe(1);
      }));

      it('return a HttpEvent', fakeAsync(() => {
        http.post<NzSafeAny>(URL, BODY, PARAMS, { observe: 'events' }).subscribe(_ => (res = _));
        tick();
        backend.expectOne(() => true).flush({});
        expect(typeof res).toBe('object');
        expect(typeof res.type).toBe('number');
      }));

      it(`return a HttpResponse<Object>`, fakeAsync(() => {
        http
          .post(URL, BODY, PARAMS, {
            observe: 'response',
            responseType: 'json'
          })
          .subscribe(_ => (res = _));
        tick();
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS)
          expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
        expect(res.status).toBe(200);
        expect(res.body).toBe(OK);
      }));
    });

    describe('[delete]', () => {
      it(`basic`, fakeAsync(() => {
        http.delete(URL).subscribe(_ => (res = _));
        tick();
        backend.expectOne(() => true).flush(OK);
        expect(res).toBe(OK);
      }));

      it(`specified params`, fakeAsync(() => {
        http.delete(URL, PARAMS).subscribe(_ => (res = _));
        tick();
        const ret = backend.expectOne(() => true) as TestRequest;
        for (const key in PARAMS)
          expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
        expect(res).toBe(OK);
      }));

      it(`return a string`, fakeAsync(() => {
        http.delete(URL, PARAMS, { responseType: 'text' }).subscribe(_ => (res = _));
        tick();
        const ret = backend.expectOne(() => true) as TestRequest;
        for (const key in PARAMS)
          expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
        expect(typeof res).toBe('string');
        expect(res).toBe(OK);
      }));

      it(`return a HttpResponse<Object>`, fakeAsync(() => {
        http.delete(URL, PARAMS, { observe: 'response', responseType: 'json' }).subscribe(_ => (res = _));
        tick();
        const ret = backend.expectOne(() => true) as TestRequest;
        for (const key in PARAMS)
          expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
        expect(res.status).toBe(200);
        expect(res.body).toBe(OK);
      }));

      it(`return a generic`, fakeAsync(() => {
        http.delete<number>(URL).subscribe(_ => (res = _));
        tick();
        backend.expectOne(() => true).flush(1);
        expect(typeof res).toBe('number');
        expect(res).toBe(1);
      }));
    });

    describe('[jsonp]', () => {
      it(`basic`, fakeAsync(() => {
        http.jsonp(URL).subscribe(_ => (res = _));
        tick();
        backend.expectOne(() => true).flush(OK);
        expect(res).toBe(OK);
      }));

      it(`specified params`, fakeAsync(() => {
        http.jsonp(URL, PARAMS).subscribe(_ => (res = _));
        tick();
        const ret = backend.expectOne(() => true) as TestRequest;
        const newURL = http.appliedUrl(URL, PARAMS);
        expect(ret.request.url).toBe(newURL);
        ret.flush(OK);
        expect(res).toBe(OK);
      }));

      it(`specified params and url include ?`, fakeAsync(() => {
        const u = `${URL}?b=1`;
        http.jsonp(u, PARAMS).subscribe(_ => (res = _));
        tick();
        const ret = backend.expectOne(() => true) as TestRequest;
        const newURL = http.appliedUrl(u, PARAMS);
        expect(ret.request.url).toBe(newURL);
        ret.flush(OK);
        expect(res).toBe(OK);
      }));

      it(`specified params & callback`, fakeAsync(() => {
        const callbackParam = 'CB';
        http.jsonp(URL, PARAMS, callbackParam).subscribe(_ => (res = _));
        tick();
        const ret = backend.expectOne(() => true) as TestRequest;
        const newURL = `${URL}?a=1`;
        expect(ret.request.url).toBe(newURL);
        expect(ret.request.urlWithParams).toBe(`${newURL}&${callbackParam}=JSONP_CALLBACK`);
        ret.flush(OK);
        expect(res).toBe(OK);
      }));

      it('should be catch error', fakeAsync(() => {
        http.jsonp(URL).subscribe(
          () => (res = false),
          () => (res = true)
        );
        tick();
        backend.expectOne(() => true).flush(null, { status: 500, statusText: 'Server Error' });
        expect(true).toBe(true);
      }));
    });

    describe('[patch]', () => {
      it(`basic`, fakeAsync(() => {
        http.patch(URL).subscribe(_ => (res = _));
        tick();
        backend.expectOne(() => true).flush(OK);
        expect(res).toBe(OK);
      }));

      it(`has body`, fakeAsync(() => {
        http.patch(URL, BODY).subscribe(_ => (res = _));
        tick();
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        ret.flush(OK);
        expect(res).toBe(OK);
      }));

      it(`specified params`, fakeAsync(() => {
        http.patch(URL, BODY, PARAMS).subscribe(_ => (res = _));
        tick();
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS)
          expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
        expect(res).toBe(OK);
      }));

      it(`return a string`, fakeAsync(() => {
        http.patch(URL, BODY, PARAMS, { responseType: 'text' }).subscribe(_ => (res = _));
        tick();
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS)
          expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
        expect(typeof res).toBe('string');
        expect(res).toBe(OK);
      }));

      it('return generic with string type', fakeAsync(() => {
        http.patch<string>(URL).subscribe(_ => (res = _));
        tick();
        backend.expectOne(() => true).flush(OK);
        expect(typeof res).toBe('string');
        expect(res).toBe(OK);
      }));

      it('return generic with number type', fakeAsync(() => {
        http.patch<number>(URL).subscribe(_ => (res = _));
        tick();
        backend.expectOne(() => true).flush(1);
        expect(typeof res).toBe('number');
        expect(res).toBe(1);
      }));

      it(`return a HttpResponse<Object>`, fakeAsync(() => {
        http
          .patch(URL, BODY, PARAMS, {
            observe: 'response',
            responseType: 'json'
          })
          .subscribe(_ => (res = _));
        tick();
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS)
          expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
        expect(res.status).toBe(200);
        expect(res.body).toBe(OK);
      }));
    });

    describe('[put]', () => {
      it(`basic`, fakeAsync(() => {
        http.put(URL).subscribe(_ => (res = _));
        tick();
        backend.expectOne(() => true).flush(OK);
        expect(res).toBe(OK);
      }));

      it(`has body`, fakeAsync(() => {
        http.put(URL, BODY).subscribe(_ => (res = _));
        tick();
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        ret.flush(OK);
        expect(res).toBe(OK);
      }));

      it(`specified params`, fakeAsync(() => {
        http.put(URL, BODY, PARAMS).subscribe(_ => (res = _));
        tick();
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS)
          expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
        expect(res).toBe(OK);
      }));

      it(`return a string`, fakeAsync(() => {
        http.put(URL, BODY, PARAMS, { responseType: 'text' }).subscribe(_ => (res = _));
        tick();
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS)
          expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
        expect(typeof res).toBe('string');
        expect(res).toBe(OK);
      }));

      it('return generic with string type', fakeAsync(() => {
        http.put<string>(URL).subscribe(_ => (res = _));
        tick();
        backend.expectOne(() => true).flush(OK);
        expect(typeof res).toBe('string');
        expect(res).toBe(OK);
      }));

      it('return generic with number type', fakeAsync(() => {
        http.put<number>(URL).subscribe(_ => (res = _));
        tick();
        backend.expectOne(() => true).flush(1);
        expect(typeof res).toBe('number');
        expect(res).toBe(1);
      }));

      it(`return a HttpResponse<Object>`, fakeAsync(() => {
        http
          .put(URL, BODY, PARAMS, {
            observe: 'response',
            responseType: 'json'
          })
          .subscribe(_ => (res = _));
        tick();
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS)
          expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
        expect(res.status).toBe(200);
        expect(res.body).toBe(OK);
      }));
    });

    describe('[form]', () => {
      it(`should be re`, fakeAsync(() => {
        http.form(URL).subscribe(_ => (res = _));
        tick();
        backend.expectOne(() => true).flush(OK);
        expect(res).toBe(OK);
      }));

      it(`has body`, fakeAsync(() => {
        http.form(URL, BODY).subscribe(_ => (res = _));
        tick();
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        ret.flush(OK);
        expect(res).toBe(OK);
      }));

      it(`specified params`, fakeAsync(() => {
        http.form(URL, BODY, PARAMS).subscribe(_ => (res = _));
        tick();
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS)
          expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
        expect(res).toBe(OK);
      }));

      it(`return a string`, fakeAsync(() => {
        http.form(URL, BODY, PARAMS, { responseType: 'text' }).subscribe(_ => (res = _));
        tick();
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS)
          expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
        expect(typeof res).toBe('string');
        expect(res).toBe(OK);
      }));

      it('return generic with string type', fakeAsync(() => {
        http.form<string>(URL).subscribe(_ => (res = _));
        tick();
        backend.expectOne(() => true).flush(OK);
        expect(typeof res).toBe('string');
        expect(res).toBe(OK);
      }));

      it(`return a generic with number type`, fakeAsync(() => {
        http.form<number>(URL).subscribe(_ => (res = _));
        tick();
        backend.expectOne(() => true).flush(1);
        expect(typeof res).toBe('number');
        expect(res).toBe(1);
      }));

      it('return a HttpEvent', fakeAsync(() => {
        http.form<NzSafeAny>(URL, BODY, PARAMS, { observe: 'events' }).subscribe(_ => (res = _));
        tick();
        backend.expectOne(() => true).flush({});
        expect(typeof res).toBe('object');
        expect(typeof res.type).toBe('number');
      }));

      it(`return a HttpResponse<Object>`, fakeAsync(() => {
        http
          .form(URL, BODY, PARAMS, {
            observe: 'response',
            responseType: 'json'
          })
          .subscribe(_ => (res = _));
        tick();
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        expect(ret.request.headers.get('content-type')).toBe(`application/x-www-form-urlencoded`);
        for (const key in PARAMS)
          expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
        expect(res.status).toBe(200);
        expect(res.body).toBe(OK);
      }));
    });

    describe('[request]', () => {
      it(`method: get`, fakeAsync(() => {
        http.request('GET', URL).subscribe(_ => (res = _));
        tick();
        backend.expectOne(() => true).flush(OK);
        expect(res).toBe(OK);
      }));

      it(`method: get, should be return Observable<ArrayBuffer>`, fakeAsync(() => {
        http
          .request('GET', URL, {
            responseType: 'arraybuffer'
          })
          .subscribe(_ => (res = _));
        tick();
        backend.expectOne(() => true).flush(new ArrayBuffer(1));
        expect(res.byteLength).toBe(1);
      }));

      it(`method: get, should be return Observable<Blob>`, fakeAsync(() => {
        const content = JSON.stringify({ hello: `world` }, null, 2);
        http
          .request('GET', URL, {
            responseType: 'blob'
          })
          .subscribe(_ => (res = _));
        tick();
        const blob = new Blob([content], { type: 'application/json' });
        backend.expectOne(() => true).flush(blob);
        expect(res.size).toBe(content.length);
        expect(res.type).toBe('application/json');
      }));

      it(`method: get, should be return Observable<String>`, fakeAsync(() => {
        http
          .request('GET', URL, {
            responseType: 'text'
          })
          .subscribe(_ => (res = _));
        tick();
        backend.expectOne(() => true).flush(OK);
        expect(res).toBe(OK);
      }));

      it(`method: post`, fakeAsync(() => {
        http.request('POST', URL).subscribe(_ => (res = _));
        tick();
        backend.expectOne(() => true).flush(OK);
        expect(res).toBe(OK);
      }));
    });
  });

  describe('[config]', () => {
    it('should be none processed date values', fakeAsync(() => {
      createModule({ dateValueHandling: 'ignore' });
      http.get(URL, { a: new Date() }).subscribe();
      tick();
      const ret = backend.expectOne(() => true) as TestRequest;
      expect(ret.request.urlWithParams.length).toBeGreaterThan(URL.length + 15);
    }));
    it('should be ingore null values', fakeAsync(() => {
      createModule({ nullValueHandling: 'ignore' });
      http.get(URL, { a: 1, b: null, c: undefined }).subscribe();
      tick();
      const ret = backend.expectOne(() => true) as TestRequest;
      expect(ret.request.urlWithParams).toBe(`${URL}?a=1`);
    }));
  });
});
