import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { _HttpClient } from './http.client';
import { ALAIN_THEME_OPTIONS } from 'core/theme';

describe('theme: http.client', () => {
    let injector: Injector;
    let http: _HttpClient;
    let backend: HttpTestingController;
    const SERVER_URL = '//ng-alain.com/';
    const URL = '/user';
    const OK = 'ok!';
    const PARAMS = { a: 1 };
    const BODY = 'body data';

    beforeEach(() => {
        injector = TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ],
            providers: [
                _HttpClient,
                { provide: ALAIN_THEME_OPTIONS, useValue: { SERVER_URL: SERVER_URL } }
            ]
        });

        http = injector.get(_HttpClient);
        backend = injector.get(HttpTestingController);
    });

    it('#loading', (done: () => void) => {
        http.get(URL).subscribe(res => {
            expect(http.loading).toBeFalsy();
            done();
        });
        expect(http.loading).toBeTruthy();
        backend.expectOne(URL).flush(OK);
    });

    it('#SERVER_URL', () => {
        expect(http.SERVER_URL).toBe(SERVER_URL);
    });

    describe('[get]', () => {
        it(`basic`, (done: () => void) => {
            http.get(URL).subscribe(res => {
                expect(res).toBe(OK);
                done();
            });
            backend.expectOne(req => req.method === 'GET' && req.url === URL).flush(OK);
        });

        it(`specified params`, (done: () => void) => {
            http.get(URL, PARAMS).subscribe(res => {
                expect(res).toBe(OK);
                done();
            });
            const ret = backend.expectOne(req => req.method === 'GET' && req.url === URL) as TestRequest;
            for (const key in PARAMS)
                expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
            ret.flush(OK);
        });

    });

    describe('[post]', () => {
        it(`basic`, (done: () => void) => {
            http.post(URL).subscribe(res => {
                expect(res).toBe(OK);
                done();
            });
            backend.expectOne(req => req.method === 'POST' && req.url === URL).flush(OK);
        });

        it(`has body`, (done: () => void) => {
            http.post(URL, BODY).subscribe(res => {
                expect(res).toBe(OK);
                done();
            });
            const ret = backend.expectOne(req => req.method === 'POST' && req.url === URL) as TestRequest;
            expect(ret.request.body).toBe(BODY);
            ret.flush(OK);
        });

        it(`specified params`, (done: () => void) => {
            http.post(URL, BODY, PARAMS).subscribe(res => {
                expect(res).toBe(OK);
                done();
            });
            const ret = backend.expectOne(req => req.method === 'POST' && req.url === URL) as TestRequest;
            expect(ret.request.body).toBe(BODY);
            for (const key in PARAMS)
                expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
            ret.flush(OK);
        });
    });

    describe('[delete]', () => {
        it(`basic`, (done: () => void) => {
            http.delete(URL).subscribe(res => {
                expect(res).toBe(OK);
                done();
            });
            backend.expectOne(req => req.method === 'DELETE' && req.url === URL).flush(OK);
        });

        it(`specified params`, (done: () => void) => {
            http.delete(URL, PARAMS).subscribe(res => {
                expect(res).toBe(OK);
                done();
            });
            const ret = backend.expectOne(req => req.method === 'DELETE' && req.url === URL) as TestRequest;
            for (const key in PARAMS)
                expect(ret.request.params.get(key)).toBe(PARAMS[key], `param "${key}" muse be "${PARAMS[key]}"`);
            ret.flush(OK);
        });
    });

    describe('[jsonp]', () => {
        it(`basic`, (done: () => void) => {
            http.jsonp(URL).subscribe(res => {
                expect(res).toBe(OK);
                done();
            });
            backend.expectOne(req => req.method === 'JSONP' && req.url.startsWith(URL)).flush(OK);
        });

        it(`specified params`, (done: () => void) => {
            http.jsonp(URL, PARAMS).subscribe(res => {
                expect(res).toBe(OK);
                done();
            });
            const ret = backend.expectOne(req => req.method === 'JSONP' && req.url.startsWith(URL)) as TestRequest;
            const newURL = http.appliedUrl(URL, PARAMS);
            expect(ret.request.url).toBe(newURL);
            ret.flush(OK);
        });

        it(`specified params & callback`, (done: () => void) => {
            const callbackParam = 'CB';
            http.jsonp(URL, PARAMS, callbackParam).subscribe(res => {
                expect(res).toBe(OK);
                done();
            });
            const ret = backend.expectOne(req => req.method === 'JSONP' && req.url.startsWith(URL)) as TestRequest;
            const newURL = `${URL}?a=1`;
            expect(ret.request.url).toBe(newURL);
            expect(ret.request.urlWithParams).toBe(`${newURL}&${callbackParam}=JSONP_CALLBACK`);
            ret.flush(OK);
        });
    });

    describe('[patch]', () => {
        it(`basic`, (done: () => void) => {
            http.patch(URL).subscribe(res => {
                expect(res).toBe(OK);
                done();
            });
            backend.expectOne(req => req.method === 'PATCH' && req.url === URL).flush(OK);
        });

        it(`has body`, (done: () => void) => {
            http.patch(URL, BODY).subscribe(res => {
                expect(res).toBe(OK);
                done();
            });
            const ret = backend.expectOne(req => req.method === 'PATCH' && req.url === URL) as TestRequest;
            expect(ret.request.body).toBe(BODY);
            ret.flush(OK);
        });

    });

    describe('[put]', () => {
        it(`basic`, (done: () => void) => {
            http.put(URL).subscribe(res => {
                expect(res).toBe(OK);
                done();
            });
            backend.expectOne(req => req.method === 'PUT' && req.url === URL).flush(OK);
        });

        it(`has body`, (done: () => void) => {
            http.put(URL, BODY).subscribe(res => {
                expect(res).toBe(OK);
                done();
            });
            const ret = backend.expectOne(req => req.method === 'PUT' && req.url === URL) as TestRequest;
            expect(ret.request.body).toBe(BODY);
            ret.flush(OK);
        });

    });

    describe('[request]', () => {

        it(`method: get`, (done: () => void) => {
            http.request('GET', URL).subscribe(res => {
                expect(res).toBe(OK);
                done();
            });
            backend.expectOne(req => req.method === 'GET' && req.url === URL).flush(OK);
        });

        it(`method: post`, (done: () => void) => {
            http.request('POST', URL).subscribe(res => {
                expect(res).toBe(OK);
                done();
            });
            backend.expectOne(req => req.method === 'POST' && req.url === URL).flush(OK);
        });

    });
});
