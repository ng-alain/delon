import { Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient, HttpResponse } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import * as Mock from 'mockjs';
import { MockService } from './mock.service';
import { MockStatusError } from './status.error';
import { DM_USER_OPTIONS_TOKEN, MockOptions, DM_OPTIONS_TOKEN } from '../mock.options';
import { optionsFactory } from '../index';
import { MockInterceptor } from './mock.interceptor';
import { MockRequest } from './interface';

const DATA = {
    USERS: {
        'GET /users': { users: [1, 2] },
        '/users/1': Mock.mock({ id: 1, 'rank|3': '★★★' }),
        '/users/:id': (req: MockRequest) => req.params,
        '/array': [ 1, 2 ],
        '/fn/queryString': (req: MockRequest) => req.queryString,
        '/fn/header': (req: MockRequest) => req.headers,
        'POST /fn/body': (req: MockRequest) => req.body,
        'POST /users/1': { uid: 1, action: 'add' },
        '/404': () => { throw new MockStatusError(404); }
    }
};

describe('mock: service', () => {
    let injector: Injector;
    let srv: MockService = null;
    let http: HttpClient;
    let httpMock: HttpTestingController;

    function genModule(options: MockOptions) {
        injector = TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule, RouterTestingModule.withRoutes([]) ],
            providers: [
                { provide: DM_USER_OPTIONS_TOKEN, useValue: options },
                { provide: DM_OPTIONS_TOKEN, useFactory: optionsFactory, deps: [DM_USER_OPTIONS_TOKEN] },
                MockService,
                { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true }
            ]
        });
        srv = injector.get(MockService);
        http = injector.get(HttpClient);
        httpMock = injector.get(HttpTestingController);
    }

    describe('[default]', () => {
        beforeEach(() => genModule({ data: DATA, delay: 1 }));
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
        it('should response HttpStatus: 404', (done: () => void) => {
            http.get('/404').subscribe(() => {
                expect(false).toBe(true);
                done();
            }, () => {
                expect(true).toBe(true);
                done();
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
    });
});
