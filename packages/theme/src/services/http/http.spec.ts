import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { fakeAsync, tick, TestBed, TestBedStatic } from '@angular/core/testing';
import { deepCopy } from '@delon/util';
import { Type } from '@angular/core';

import { AlainThemeConfig } from '../../theme.config';
import { _HttpClient } from './http.client';
import { HttpClientConfig } from './http.config';

describe('theme: http.client', () => {
  let injector: TestBedStatic;
  let http: _HttpClient;
  let backend: HttpTestingController;
  const time = new Date();
  const URL = '/user';
  const OK = 'ok!';
  const PARAMS = { a: 1 };
  const BODY = 'body data';

  function createModule(config?: HttpClientConfig) {
    const providers: any[] = [_HttpClient];
    if (config) {
      providers.push({
        provide: AlainThemeConfig,
        useFactory: () => ({
          http: config,
        }),
      });
    }
    injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers,
    });

    http = injector.get<_HttpClient>(_HttpClient);
    backend = injector.get(HttpTestingController as Type<HttpTestingController>);
  }

  describe('[property]', () => {
    beforeEach(() => createModule());

    it('#loading', fakeAsync(() => {
      http.get(URL).subscribe(() => {});
      tick(11);
      expect(http.loading).toBeTruthy();
      backend.expectOne(() => true).flush(OK);
      tick(11);
      expect(http.loading).toBeFalsy();
    }));

    describe('#params', () => {
      it(`specified params`, done => {
        http.get(URL, PARAMS).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        const ret = backend.expectOne(() => true) as TestRequest;
        for (const key in PARAMS) expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
      });
      it(`should be unix timestamp when is date param`, done => {
        const p = Object.assign(deepCopy(PARAMS), { time, date: new Date() });
        http.get(URL, p).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        const ret = backend.expectOne(() => true) as TestRequest;
        // tslint:disable-next-line: forin
        for (const key in p) {
          let v = p[key];
          if (v instanceof Date) v = v.valueOf();
          expect(ret.request.params.get(key)).toBe(v, `param "${key}" muse be "${v}"`);
        }
        ret.flush(OK);
      });
    });

    describe('[get]', () => {
      it(`return a any`, done => {
        http.get(URL).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        backend.expectOne(() => true).flush(OK);
      });

      it(`return a string`, done => {
        http.get(URL, PARAMS, { responseType: 'text' }).subscribe(res => {
          expect(typeof res).toBe('string');
          expect(res).toBe(OK);
          done();
        });
        const ret = backend.expectOne(() => true) as TestRequest;
        for (const key in PARAMS) expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
      });

      it(`return a HttpResponse<any>`, done => {
        http.get(URL, PARAMS, { observe: 'response' }).subscribe(res => {
          expect(res.status).toBe(200);
          expect(res.body).toBe(OK);
          done();
        });
        const ret = backend.expectOne(() => true) as TestRequest;
        for (const key in PARAMS) expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
      });

      it(`return a HttpResponse<Blob>`, done => {
        http.get<Blob>(URL, PARAMS, { observe: 'response', responseType: 'blob' }).subscribe(res => {
          expect(res.status).toBe(200);
          expect(res.body instanceof Blob).toBe(true);
          done();
        });
        backend.expectOne(() => true).flush(new Blob());
      });

      describe('Generic', () => {
        it('with string', done => {
          http.get<string>(URL).subscribe(res => {
            expect(typeof res).toBe('string');
            expect(res).toBe(OK);
            done();
          });
          backend.expectOne(() => true).flush(OK);
        });
        it('with number', done => {
          http.get<number>(URL).subscribe(res => {
            expect(typeof res).toBe('number');
            expect(res).toBe(1);
            done();
          });
          backend.expectOne(() => true).event(new HttpResponse<number>({ body: 1 }));
        });
        it('with boolean', done => {
          http.get<boolean>(URL).subscribe(res => {
            expect(typeof res).toBe('boolean');
            expect(res).toBe(true);
            done();
          });
          backend.expectOne(() => true).event(new HttpResponse<boolean>({ body: true }));
        });
        it('with object', done => {
          http.get<object>(URL).subscribe(res => {
            expect(typeof res).toBe('object');
            done();
          });
          backend.expectOne(() => true).flush({});
        });
        it('with HttpEvent', done => {
          http.get<object>(URL, PARAMS, { observe: 'events' }).subscribe(res => {
            expect(typeof res).toBe('object');
            expect(typeof res.type).toBe('number');
            done();
          });
          backend.expectOne(() => true).flush({});
        });
        it('with response', done => {
          http.get<object>(URL, PARAMS, { observe: 'response' }).subscribe(res => {
            expect(res instanceof HttpResponse).toBe(true);
            done();
          });
          backend.expectOne(() => true).flush({});
        });
      });

      it('should be catch error', done => {
        http.get(URL).subscribe(
          () => {
            expect(false).toBe(true);
            done();
          },
          () => {
            expect(true).toBe(true);
            done();
          },
        );
        backend.expectOne(() => true).flush(null, { status: 500, statusText: 'Server Error' });
      });
    });

    describe('[post]', () => {
      it(`basic`, done => {
        http.post(URL).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        backend.expectOne(() => true).flush(OK);
      });

      it(`has body`, done => {
        http.post(URL, BODY).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        ret.flush(OK);
      });

      it(`specified params`, done => {
        http.post(URL, BODY, PARAMS).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS) expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
      });

      it(`return a string`, done => {
        http.post(URL, BODY, PARAMS, { responseType: 'text' }).subscribe(res => {
          expect(typeof res).toBe('string');
          expect(res).toBe(OK);
          done();
        });
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS) expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
      });

      it('return generic with string type', done => {
        http.post<string>(URL).subscribe(res => {
          expect(typeof res).toBe('string');
          expect(res).toBe(OK);
          done();
        });
        backend.expectOne(() => true).flush(OK);
      });

      it(`return a generic with number type`, done => {
        http.post<number>(URL).subscribe(res => {
          expect(typeof res).toBe('number');
          expect(res).toBe(1);
          done();
        });
        backend.expectOne(() => true).flush(1);
      });

      it('return a HttpEvent', done => {
        http.post<object>(URL, BODY, PARAMS, { observe: 'events' }).subscribe(res => {
          expect(typeof res).toBe('object');
          expect(typeof res.type).toBe('number');
          done();
        });
        backend.expectOne(() => true).flush({});
      });

      it(`return a HttpResponse<Object>`, done => {
        http
          .post(URL, BODY, PARAMS, {
            observe: 'response',
            responseType: 'json',
          })
          .subscribe(res => {
            expect(res.status).toBe(200);
            expect(res.body).toBe(OK);
            done();
          });
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS) expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
      });
    });

    describe('[delete]', () => {
      it(`basic`, done => {
        http.delete(URL).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        backend.expectOne(() => true).flush(OK);
      });

      it(`specified params`, done => {
        http.delete(URL, PARAMS).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        const ret = backend.expectOne(() => true) as TestRequest;
        for (const key in PARAMS) expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
      });

      it(`return a string`, done => {
        http.delete(URL, PARAMS, { responseType: 'text' }).subscribe(res => {
          expect(typeof res).toBe('string');
          expect(res).toBe(OK);
          done();
        });
        const ret = backend.expectOne(() => true) as TestRequest;
        for (const key in PARAMS) expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
      });

      it(`return a HttpResponse<Object>`, done => {
        http.delete(URL, PARAMS, { observe: 'response', responseType: 'json' }).subscribe(res => {
          expect(res.status).toBe(200);
          expect(res.body).toBe(OK);
          done();
        });
        const ret = backend.expectOne(() => true) as TestRequest;
        for (const key in PARAMS) expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
      });

      it(`return a generic`, done => {
        http.delete<number>(URL).subscribe(res => {
          expect(typeof res).toBe('number');
          expect(res).toBe(1);
          done();
        });
        backend.expectOne(() => true).flush(1);
      });
    });

    describe('[jsonp]', () => {
      it(`basic`, done => {
        http.jsonp(URL).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        backend.expectOne(() => true).flush(OK);
      });

      it(`specified params`, done => {
        http.jsonp(URL, PARAMS).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        const ret = backend.expectOne(() => true) as TestRequest;
        const newURL = http.appliedUrl(URL, PARAMS);
        expect(ret.request.url).toBe(newURL);
        ret.flush(OK);
      });

      it(`specified params and url include ?`, done => {
        const u = URL + '?b=1';
        http.jsonp(u, PARAMS).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        const ret = backend.expectOne(() => true) as TestRequest;
        const newURL = http.appliedUrl(u, PARAMS);
        expect(ret.request.url).toBe(newURL);
        ret.flush(OK);
      });

      it(`specified params & callback`, done => {
        const callbackParam = 'CB';
        http.jsonp(URL, PARAMS, callbackParam).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        const ret = backend.expectOne(() => true) as TestRequest;
        const newURL = `${URL}?a=1`;
        expect(ret.request.url).toBe(newURL);
        expect(ret.request.urlWithParams).toBe(`${newURL}&${callbackParam}=JSONP_CALLBACK`);
        ret.flush(OK);
      });

      it('should be catch error', done => {
        http.jsonp(URL).subscribe(
          () => {
            expect(false).toBe(true);
            done();
          },
          () => {
            expect(true).toBe(true);
            done();
          },
        );
        backend.expectOne(() => true).flush(null, { status: 500, statusText: 'Server Error' });
      });
    });

    describe('[patch]', () => {
      it(`basic`, done => {
        http.patch(URL).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        backend.expectOne(() => true).flush(OK);
      });

      it(`has body`, done => {
        http.patch(URL, BODY).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        ret.flush(OK);
      });

      it(`specified params`, done => {
        http.patch(URL, BODY, PARAMS).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS) expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
      });

      it(`return a string`, done => {
        http.patch(URL, BODY, PARAMS, { responseType: 'text' }).subscribe(res => {
          expect(typeof res).toBe('string');
          expect(res).toBe(OK);
          done();
        });
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS) expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
      });

      it('return generic with string type', done => {
        http.patch<string>(URL).subscribe(res => {
          expect(typeof res).toBe('string');
          expect(res).toBe(OK);
          done();
        });
        backend.expectOne(() => true).flush(OK);
      });

      it('return generic with number type', done => {
        http.patch<number>(URL).subscribe(res => {
          expect(typeof res).toBe('number');
          expect(res).toBe(1);
          done();
        });
        backend.expectOne(() => true).flush(1);
      });

      it(`return a HttpResponse<Object>`, done => {
        http
          .patch(URL, BODY, PARAMS, {
            observe: 'response',
            responseType: 'json',
          })
          .subscribe(res => {
            expect(res.status).toBe(200);
            expect(res.body).toBe(OK);
            done();
          });
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS) expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
      });
    });

    describe('[put]', () => {
      it(`basic`, done => {
        http.put(URL).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        backend.expectOne(() => true).flush(OK);
      });

      it(`has body`, done => {
        http.put(URL, BODY).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        ret.flush(OK);
      });

      it(`specified params`, done => {
        http.put(URL, BODY, PARAMS).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS) expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
      });

      it(`return a string`, done => {
        http.put(URL, BODY, PARAMS, { responseType: 'text' }).subscribe(res => {
          expect(typeof res).toBe('string');
          expect(res).toBe(OK);
          done();
        });
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS) expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
      });

      it('return generic with string type', done => {
        http.put<string>(URL).subscribe(res => {
          expect(typeof res).toBe('string');
          expect(res).toBe(OK);
          done();
        });
        backend.expectOne(() => true).flush(OK);
      });

      it('return generic with number type', done => {
        http.put<number>(URL).subscribe(res => {
          expect(typeof res).toBe('number');
          expect(res).toBe(1);
          done();
        });
        backend.expectOne(() => true).flush(1);
      });

      it(`return a HttpResponse<Object>`, done => {
        http
          .put(URL, BODY, PARAMS, {
            observe: 'response',
            responseType: 'json',
          })
          .subscribe(res => {
            expect(res.status).toBe(200);
            expect(res.body).toBe(OK);
            done();
          });
        const ret = backend.expectOne(() => true) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS) expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
        ret.flush(OK);
      });
    });

    describe('[request]', () => {
      it(`method: get`, done => {
        http.request('GET', URL).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        backend.expectOne(() => true).flush(OK);
      });

      it(`method: get, should be return Observable<ArrayBuffer>`, done => {
        http
          .request('GET', URL, {
            responseType: 'arraybuffer',
          })
          .subscribe((res: ArrayBuffer) => {
            expect(res.byteLength).toBe(1);
            done();
          });
        backend.expectOne(() => true).flush(new ArrayBuffer(1));
      });

      it(`method: get, should be return Observable<Blob>`, done => {
        const content = JSON.stringify({ hello: `world` }, null, 2);
        http
          .request('GET', URL, {
            responseType: 'blob',
          })
          .subscribe((res: Blob) => {
            expect(res.size).toBe(content.length);
            expect(res.type).toBe('application/json');
            done();
          });
        const blob = new Blob([content], { type: 'application/json' });
        backend.expectOne(() => true).flush(blob);
      });

      it(`method: get, should be return Observable<String>`, done => {
        http
          .request('GET', URL, {
            responseType: 'text',
          })
          .subscribe((res: string) => {
            expect(res).toBe(OK);
            done();
          });
        backend.expectOne(() => true).flush(OK);
      });

      it(`method: post`, done => {
        http.request('POST', URL).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        backend.expectOne(() => true).flush(OK);
      });
    });
  });

  describe('[config]', () => {
    it('should be none processed date values', () => {
      createModule({ dateValueHandling: 'ignore' });
      http.get(URL, { a: new Date() }).subscribe();
      const ret = backend.expectOne(() => true) as TestRequest;
      expect(ret.request.urlWithParams.length).toBeGreaterThan(URL.length + 15);
    });
    it('should be ingore null values', () => {
      createModule({ nullValueHandling: 'ignore' });
      http.get(URL, { a: 1, b: null, c: undefined }).subscribe();
      const ret = backend.expectOne(() => true) as TestRequest;
      expect(ret.request.urlWithParams).toBe(URL + `?a=1`);
    });
  });
});
