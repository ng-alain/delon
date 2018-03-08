import { Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { Router, DefaultUrlSerializer } from '@angular/router';

import { AuthOptions } from '../../auth.options';
import { DA_SERVICE_TOKEN, ITokenService, ITokenModel } from '../interface';
import { SimpleInterceptor } from './simple.interceptor';
import { SimpleTokenModel } from './simple.model';
import { optionsFactory, AlainAuthModule } from '../../index';

function genModel(token: string = `123`) {
    const model = new SimpleTokenModel();
    model.token = token;
    model.uid = 1;
    return model;
}

class MockTokenService implements ITokenService {
    [key: string]: any;
    _data: any;
    set(data: ITokenModel): boolean {
        this._data = data;
        return true;
    }
    get(): ITokenModel {
        return this._data;
    }
    change(): any {
        return null;
    }
    clear() {
        this._data = null;
    }
    get login_url() {
        return '/login';
    }
    redirect: string;
}

describe('auth: simple.interceptor', () => {
    let injector: Injector;
    let http: HttpClient;
    let httpBed: HttpTestingController;
    const mockRouter = {
        navigate: jasmine.createSpy('navigate'),
        parseUrl: jasmine.createSpy('parseUrl').and.callFake((value: any) => {
            return (new DefaultUrlSerializer()).parse(value);
        })
    };

    function genModule(options: AuthOptions, tokenData?: SimpleTokenModel) {
        injector = TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule, RouterTestingModule.withRoutes([]), AlainAuthModule.forRoot(options) ],
            providers: [
                { provide: Router, useValue: mockRouter },
                { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true },
                { provide: DA_SERVICE_TOKEN, useClass: MockTokenService }
            ]
        });
        if (tokenData)
            injector.get(DA_SERVICE_TOKEN).set(tokenData);

        http = injector.get(HttpClient);
        httpBed = injector.get(HttpTestingController);
    }

    describe('[token position]', () => {
        it(`in headers`, (done: () => void) => {
            const basicModel = genModel();
            genModule({}, basicModel);
            http.get('/test', { responseType: 'text' }).subscribe(value => {
                done();
            });
            const req = httpBed.expectOne('/test') as TestRequest;
            expect(req.request.headers.get('token')).toBe(basicModel.token);
            req.flush('ok!');
        });
        it(`in body`, (done: () => void) => {
            genModule({
                token_send_place: 'body'
            }, genModel('123'));
            http.get('/test', { responseType: 'text' }).subscribe(value => {
                done();
            });
            const req = httpBed.expectOne('/test') as TestRequest;
            expect(req.request.body.token).toBe('123');
            req.flush('ok!');
        });
        it(`in url`, (done: () => void) => {
            genModule({
                token_send_place: 'url'
            }, genModel('123'));
            http.get('/test', { responseType: 'text' }).subscribe(value => {
                done();
            });
            const req = httpBed.expectOne('/test?token=123') as TestRequest;
            expect(req.request.url).toContain(`token=123`);
            req.flush('ok!');
        });
    });

    describe('[token template]', () => {
        const basicModel = genModel();

        it('should be [Bearer ${token}]', (done: () => void) => {
            genModule({
                token_send_place: 'header',
                token_send_key: 'Authorization',
                token_send_template: 'Bearer ${token}'
            }, basicModel);

            http.get('/test', { responseType: 'text' }).subscribe(value => {
                done();
            });
            const ret = httpBed
                .expectOne(r => r.method === 'GET' && (<string>r.url).startsWith('/test')) as TestRequest;
            expect(ret.request.headers.get('Authorization')).toBe(`Bearer ${basicModel.token}`);
            ret.flush('ok!');
        });

        it('should be [Bearer ${uid}-${token}]', (done: () => void) => {
            genModule({
                token_send_place: 'header',
                token_send_key: 'Authorization',
                token_send_template: 'Bearer ${uid}-${token}'
            }, basicModel);

            http.get('/test', { responseType: 'text' }).subscribe(value => {
                done();
            });
            const ret = httpBed
                .expectOne(r => r.method === 'GET' && (<string>r.url).startsWith('/test')) as TestRequest;
            expect(ret.request.headers.get('Authorization')).toBe(`Bearer ${basicModel.uid}-${basicModel.token}`);
            ret.flush('ok!');
        });
    });
});
