import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';
import { fakeAsync, tick, TestBed, TestBedStatic } from '@angular/core/testing';
import { deepCopy } from '@delon/util';

import { AlainThemeConfig } from '../../theme.config';
import { _HttpClient } from './http.client';
import { HttpClientConfig } from './http.config';

describe('theme: http.client', () => {
  let injector: TestBedStatic;
  let http: _HttpClient;
  let backend: HttpTestingController;
  const time = new Date();
  const timestamp = time.valueOf();
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

    http = injector.get(_HttpClient);
    backend = injector.get(HttpTestingController);
  }

  describe('[property]', () => {
    beforeEach(() => createModule());

    it(
      '#loading',
      fakeAsync(() => {
        http.get(URL).subscribe(res => {});
        tick(10);
        expect(http.loading).toBeTruthy();
        backend
          .expectOne(req => req.method === 'GET' && req.url === URL)
          .flush(OK);
        tick(10);
        expect(http.loading).toBeFalsy();
      }),
    );

    describe('[get]', () => {
      it(`basic`, (done: () => void) => {
        http.get(URL).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        backend
          .expectOne(req => req.method === 'GET' && req.url === URL)
          .flush(OK);
      });

      describe('#params', () => {
        it(`specified params`, (done: () => void) => {
          http.get(URL, PARAMS).subscribe(res => {
            expect(res).toBe(OK);
            done();
          });
          const ret = backend.expectOne(
            req => req.method === 'GET' && req.url === URL,
          ) as TestRequest;
          for (const key in PARAMS)
            expect(ret.request.params.get(key)).toBe(
              PARAMS[key],
              `param "${key}" muse be "${PARAMS[key]}"`,
            );
          ret.flush(OK);
        });
        it(`should be unix timestamp when is date param`, (done: () => void) => {
          const p = Object.assign(deepCopy(PARAMS), { time, date: new Date() });
          http.get(URL, p).subscribe(res => {
            expect(res).toBe(OK);
            done();
          });
          const ret = backend.expectOne(
            req => req.method === 'GET' && req.url === URL,
          ) as TestRequest;
          for (const key in p) {
            let v = p[key];
            if (v instanceof Date) v = v.valueOf();
            expect(ret.request.params.get(key)).toBe(
              v,
              `param "${key}" muse be "${v}"`,
            );
          }
          ret.flush(OK);
        });
      });

      it(`return a string`, (done: () => void) => {
        http.get(URL, PARAMS, { responseType: 'text' }).subscribe(res => {
          expect(typeof res).toBe('string');
          expect(res).toBe(OK);
          done();
        });
        const ret = backend.expectOne(
          req => req.method === 'GET' && req.url === URL,
        ) as TestRequest;
        for (const key in PARAMS)
          expect(ret.request.params.get(key)).toBe(
            PARAMS[key],
            `param "${key}" muse be "${PARAMS[key]}"`,
          );
        ret.flush(OK);
      });

      it(`return a HttpResponse<Object>`, (done: () => void) => {
        http
          .get(URL, PARAMS, { observe: 'response', responseType: 'json' })
          .subscribe(res => {
            expect(res.status).toBe(200);
            expect(res.body).toBe(OK);
            done();
          });
        const ret = backend.expectOne(
          req => req.method === 'GET' && req.url === URL,
        ) as TestRequest;
        for (const key in PARAMS)
          expect(ret.request.params.get(key)).toBe(
            PARAMS[key],
            `param "${key}" muse be "${PARAMS[key]}"`,
          );
        ret.flush(OK);
      });

      it('should be catch error', (done: () => void) => {
        http.get(URL).subscribe(
          res => {
            expect(false).toBe(true);
            done();
          },
          err => {
            expect(true).toBe(true);
            done();
          },
        );
        backend
          .expectOne(req => req.method === 'GET' && req.url === URL)
          .flush(null, { status: 500, statusText: 'Server Error' });
      });
    });

    describe('[post]', () => {
      it(`basic`, (done: () => void) => {
        http.post(URL).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        backend
          .expectOne(req => req.method === 'POST' && req.url === URL)
          .flush(OK);
      });

      it(`has body`, (done: () => void) => {
        http.post(URL, BODY).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        const ret = backend.expectOne(
          req => req.method === 'POST' && req.url === URL,
        ) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        ret.flush(OK);
      });

      it(`specified params`, (done: () => void) => {
        http.post(URL, BODY, PARAMS).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        const ret = backend.expectOne(
          req => req.method === 'POST' && req.url === URL,
        ) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS)
          expect(ret.request.params.get(key)).toBe(
            PARAMS[key],
            `param "${key}" muse be "${PARAMS[key]}"`,
          );
        ret.flush(OK);
      });

      it(`return a string`, (done: () => void) => {
        http
          .post(URL, BODY, PARAMS, { responseType: 'text' })
          .subscribe(res => {
            expect(typeof res).toBe('string');
            expect(res).toBe(OK);
            done();
          });
        const ret = backend.expectOne(
          req => req.method === 'POST' && req.url === URL,
        ) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS)
          expect(ret.request.params.get(key)).toBe(
            PARAMS[key],
            `param "${key}" muse be "${PARAMS[key]}"`,
          );
        ret.flush(OK);
      });

      it(`return a HttpResponse<Object>`, (done: () => void) => {
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
        const ret = backend.expectOne(
          req => req.method === 'POST' && req.url === URL,
        ) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS)
          expect(ret.request.params.get(key)).toBe(
            PARAMS[key],
            `param "${key}" muse be "${PARAMS[key]}"`,
          );
        ret.flush(OK);
      });
    });

    describe('[delete]', () => {
      it(`basic`, (done: () => void) => {
        http.delete(URL).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        backend
          .expectOne(req => req.method === 'DELETE' && req.url === URL)
          .flush(OK);
      });

      it(`specified params`, (done: () => void) => {
        http.delete(URL, PARAMS).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        const ret = backend.expectOne(
          req => req.method === 'DELETE' && req.url === URL,
        ) as TestRequest;
        for (const key in PARAMS)
          expect(ret.request.params.get(key)).toBe(
            PARAMS[key],
            `param "${key}" muse be "${PARAMS[key]}"`,
          );
        ret.flush(OK);
      });

      it(`return a string`, (done: () => void) => {
        http.delete(URL, PARAMS, { responseType: 'text' }).subscribe(res => {
          expect(typeof res).toBe('string');
          expect(res).toBe(OK);
          done();
        });
        const ret = backend.expectOne(
          req => req.method === 'DELETE' && req.url === URL,
        ) as TestRequest;
        for (const key in PARAMS)
          expect(ret.request.params.get(key)).toBe(
            PARAMS[key],
            `param "${key}" muse be "${PARAMS[key]}"`,
          );
        ret.flush(OK);
      });

      it(`return a HttpResponse<Object>`, (done: () => void) => {
        http
          .delete(URL, PARAMS, { observe: 'response', responseType: 'json' })
          .subscribe(res => {
            expect(res.status).toBe(200);
            expect(res.body).toBe(OK);
            done();
          });
        const ret = backend.expectOne(
          req => req.method === 'DELETE' && req.url === URL,
        ) as TestRequest;
        for (const key in PARAMS)
          expect(ret.request.params.get(key)).toBe(
            PARAMS[key],
            `param "${key}" muse be "${PARAMS[key]}"`,
          );
        ret.flush(OK);
      });
    });

    describe('[jsonp]', () => {
      it(`basic`, (done: () => void) => {
        http.jsonp(URL).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        backend
          .expectOne(req => req.method === 'JSONP' && req.url.startsWith(URL))
          .flush(OK);
      });

      it(`specified params`, (done: () => void) => {
        http.jsonp(URL, PARAMS).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        const ret = backend.expectOne(
          req => req.method === 'JSONP' && req.url.startsWith(URL),
        ) as TestRequest;
        const newURL = http.appliedUrl(URL, PARAMS);
        expect(ret.request.url).toBe(newURL);
        ret.flush(OK);
      });

      it(`specified params and url include ?`, (done: () => void) => {
        const u = URL + '?b=1';
        http.jsonp(u, PARAMS).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        const ret = backend.expectOne(
          req => req.method === 'JSONP' && req.url.startsWith(u),
        ) as TestRequest;
        const newURL = http.appliedUrl(u, PARAMS);
        expect(ret.request.url).toBe(newURL);
        ret.flush(OK);
      });

      it(`specified params & callback`, (done: () => void) => {
        const callbackParam = 'CB';
        http.jsonp(URL, PARAMS, callbackParam).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        const ret = backend.expectOne(
          req => req.method === 'JSONP' && req.url.startsWith(URL),
        ) as TestRequest;
        const newURL = `${URL}?a=1`;
        expect(ret.request.url).toBe(newURL);
        expect(ret.request.urlWithParams).toBe(
          `${newURL}&${callbackParam}=JSONP_CALLBACK`,
        );
        ret.flush(OK);
      });

      it('should be catch error', (done: () => void) => {
        http.jsonp(URL).subscribe(
          res => {
            expect(false).toBe(true);
            done();
          },
          err => {
            expect(true).toBe(true);
            done();
          },
        );
        backend
          .expectOne(req => req.method === 'JSONP' && req.url.startsWith(URL))
          .flush(null, { status: 500, statusText: 'Server Error' });
      });
    });

    describe('[patch]', () => {
      it(`basic`, (done: () => void) => {
        http.patch(URL).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        backend
          .expectOne(req => req.method === 'PATCH' && req.url === URL)
          .flush(OK);
      });

      it(`has body`, (done: () => void) => {
        http.patch(URL, BODY).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        const ret = backend.expectOne(
          req => req.method === 'PATCH' && req.url === URL,
        ) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        ret.flush(OK);
      });

      it(`specified params`, (done: () => void) => {
        http.patch(URL, BODY, PARAMS).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        const ret = backend.expectOne(
          req => req.method === 'PATCH' && req.url === URL,
        ) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS)
          expect(ret.request.params.get(key)).toBe(
            PARAMS[key],
            `param "${key}" muse be "${PARAMS[key]}"`,
          );
        ret.flush(OK);
      });

      it(`return a string`, (done: () => void) => {
        http
          .patch(URL, BODY, PARAMS, { responseType: 'text' })
          .subscribe(res => {
            expect(typeof res).toBe('string');
            expect(res).toBe(OK);
            done();
          });
        const ret = backend.expectOne(
          req => req.method === 'PATCH' && req.url === URL,
        ) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS)
          expect(ret.request.params.get(key)).toBe(
            PARAMS[key],
            `param "${key}" muse be "${PARAMS[key]}"`,
          );
        ret.flush(OK);
      });

      it(`return a HttpResponse<Object>`, (done: () => void) => {
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
        const ret = backend.expectOne(
          req => req.method === 'PATCH' && req.url === URL,
        ) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS)
          expect(ret.request.params.get(key)).toBe(
            PARAMS[key],
            `param "${key}" muse be "${PARAMS[key]}"`,
          );
        ret.flush(OK);
      });
    });

    describe('[put]', () => {
      it(`basic`, (done: () => void) => {
        http.put(URL).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        backend
          .expectOne(req => req.method === 'PUT' && req.url === URL)
          .flush(OK);
      });

      it(`has body`, (done: () => void) => {
        http.put(URL, BODY).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        const ret = backend.expectOne(
          req => req.method === 'PUT' && req.url === URL,
        ) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        ret.flush(OK);
      });

      it(`specified params`, (done: () => void) => {
        http.put(URL, BODY, PARAMS).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        const ret = backend.expectOne(
          req => req.method === 'PUT' && req.url === URL,
        ) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS)
          expect(ret.request.params.get(key)).toBe(
            PARAMS[key],
            `param "${key}" muse be "${PARAMS[key]}"`,
          );
        ret.flush(OK);
      });

      it(`return a string`, (done: () => void) => {
        http
          .put(URL, BODY, PARAMS, { responseType: 'text' })
          .subscribe(res => {
            expect(typeof res).toBe('string');
            expect(res).toBe(OK);
            done();
          });
        const ret = backend.expectOne(
          req => req.method === 'PUT' && req.url === URL,
        ) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS)
          expect(ret.request.params.get(key)).toBe(
            PARAMS[key],
            `param "${key}" muse be "${PARAMS[key]}"`,
          );
        ret.flush(OK);
      });

      it(`return a HttpResponse<Object>`, (done: () => void) => {
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
        const ret = backend.expectOne(
          req => req.method === 'PUT' && req.url === URL,
        ) as TestRequest;
        expect(ret.request.body).toBe(BODY);
        for (const key in PARAMS)
          expect(ret.request.params.get(key)).toBe(
            PARAMS[key],
            `param "${key}" muse be "${PARAMS[key]}"`,
          );
        ret.flush(OK);
      });
    });

    describe('[request]', () => {
      it(`method: get`, (done: () => void) => {
        http.request('GET', URL).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        backend
          .expectOne(req => req.method === 'GET' && req.url === URL)
          .flush(OK);
      });

      it(`method: get, should be return Observable<ArrayBuffer>`, (done: () => void) => {
        http
          .request('GET', URL, {
            responseType: 'arraybuffer',
          })
          .subscribe((res: ArrayBuffer) => {
            expect(res.byteLength).toBe(1);
            done();
          });
        backend
          .expectOne(req => req.method === 'GET' && req.url === URL)
          .flush(new ArrayBuffer(1));
      });

      it(`method: get, should be return Observable<Blob>`, (done: () => void) => {
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
        backend
          .expectOne(req => req.method === 'GET' && req.url === URL)
          .flush(blob);
      });

      it(`method: get, should be return Observable<String>`, (done: () => void) => {
        http
          .request('GET', URL, {
            responseType: 'text',
          })
          .subscribe((res: string) => {
            expect(res).toBe(OK);
            done();
          });
        backend
          .expectOne(req => req.method === 'GET' && req.url === URL)
          .flush(OK);
      });

      it(`method: post`, (done: () => void) => {
        http.request('POST', URL).subscribe(res => {
          expect(res).toBe(OK);
          done();
        });
        backend
          .expectOne(req => req.method === 'POST' && req.url === URL)
          .flush(OK);
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
