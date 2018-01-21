import { Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { Router, DefaultUrlSerializer } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { publish, refCount } from 'rxjs/operators';
import { AuthOptions, DA_USER_OPTIONS_TOKEN, DA_OPTIONS_TOKEN } from '../../auth.options';
import { DA_SERVICE_TOKEN, ITokenService, ITokenModel } from '../interface';
import { DA_STORE_TOKEN } from '../../store/interface';
import { LocalStorageStore } from '../../store/local-storage.service';
import { SimpleInterceptor } from './simple.interceptor';
import { SimpleTokenModel } from './simple.model';
import { optionsFactory } from '../../index';

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
    change(): Observable<ITokenModel> {
        return this.change$.pipe(publish(), refCount());
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
    const mockRouter = {
        navigate: jasmine.createSpy('navigate'),
        parseUrl: jasmine.createSpy('parseUrl').and.callFake((value: any) => {
            return (new DefaultUrlSerializer()).parse(value);
        })
    };

    function genModule(options: AuthOptions, tokenData?: SimpleTokenModel) {
        injector = TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule, RouterTestingModule.withRoutes([]) ],
            providers: [
                { provide: Router, useValue: mockRouter },
                { provide: DA_USER_OPTIONS_TOKEN, useValue: options },
                { provide: DA_OPTIONS_TOKEN, useFactory: optionsFactory, deps: [DA_USER_OPTIONS_TOKEN] },
                { provide: DA_STORE_TOKEN, useClass: LocalStorageStore },
                { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true },
                { provide: DA_SERVICE_TOKEN, useClass: MockTokenService }
            ]
        });
        if (tokenData)
            injector.get(DA_SERVICE_TOKEN).set(tokenData);
    }

    describe('basic', () => {
        const basicModel = genModel();
        beforeEach(() => {
            genModule({}, basicModel);
        });

        it('initializes HttpClient properly', (done: () => void) => {
            injector.get(HttpClient).get('/test', { responseType: 'text' }).subscribe(value => {
                expect(value).toBe('ok!');
                done();
            });
            injector.get(HttpTestingController).expectOne('/test').flush('ok!');
        });

        it(`should be token in headers`, (done: () => void) => {
            injector.get(HttpClient).get('/test', { responseType: 'text' }).subscribe(value => {
                done();
            });
            const req = injector.get(HttpTestingController).expectOne('/test') as TestRequest;
            expect(req.request.headers.get('token')).toBe(basicModel.token);
            req.flush('ok!');
        });

        it(`should be ignores Authorization in headers`, (done: () => void) => {
            injector.get(HttpClient).get('/login', { responseType: 'text' }).subscribe(value => {
                done();
            });
            const req = injector.get(HttpTestingController).expectOne('/login') as TestRequest;
            expect(req.request.headers.get('token')).toBeNull();
            req.flush('ok!');
        });

        it(`should be ignores Authorization when exists allow_anonymous_key`, (done: () => void) => {
            injector.get(HttpClient).get('/user', {
                responseType: 'text',
                params: { _allow_anonymous: '' }
            }).subscribe(value => {
                done();
            });
            const ret = injector.get(HttpTestingController)
                .expectOne(req => req.method === 'GET' && req.url === '/user') as TestRequest;
            expect(ret.request.headers.get('Authorization')).toBeNull();
            ret.flush('ok!');
        });
    });

    describe('url ignores', () => {
        const basicModel = genModel();
        beforeEach(() => {
            genModule({
                ignores: [ `\\/login`, `assets\\/` ]
            }, basicModel);
        });

        it(`should be ignore /login`, (done: () => void) => {
            injector.get(HttpClient).get('/login', { responseType: 'text' }).subscribe(value => {
                done();
            });
            const req = injector.get(HttpTestingController).expectOne('/login') as TestRequest;
            expect(req.request.headers.get('token')).toBeNull();
            req.flush('ok!');
        });

    });

    describe('invalid token', () => {
        beforeEach(() => {
            genModule({}, genModel(null));
        });

        it('should be go to login', (done: () => void) => {
            injector.get(HttpClient).get('/test', { responseType: 'text' }).subscribe(value => {
            }, (err: any) => {
                expect(err.status).toBe(401);
                done();
            });
        });
    });

    describe('should be token in body', () => {
        beforeEach(() => {
            genModule({
                token_send_place: 'body'
            }, genModel('123'));
        });

        it(``, (done: () => void) => {
            injector.get(HttpClient).get('/test', { responseType: 'text' }).subscribe(value => {
                done();
            });
            const req = injector.get(HttpTestingController).expectOne('/test') as TestRequest;
            expect(req.request.body.token).toBe('123');
            req.flush('ok!');
        });
    });

    describe('should be token in url', () => {
        beforeEach(() => {
            genModule({
                token_send_place: 'url'
            }, genModel('123'));
        });

        it(``, (done: () => void) => {
            injector.get(HttpClient).get('/test', { responseType: 'text' }).subscribe(value => {
                done();
            });
            const req = injector.get(HttpTestingController).expectOne('/test?token=123') as TestRequest;
            expect(req.request.url).toContain(`token=123`);
            req.flush('ok!');
        });
    });

    describe('token template', () => {
        const basicModel = genModel();

        it('should be [Bearer ${token}]', (done: () => void) => {
            genModule({
                token_send_place: 'header',
                token_send_key: 'Authorization',
                token_send_template: 'Bearer ${token}'
            }, basicModel);

            injector.get(HttpClient).get('/test', { responseType: 'text' }).subscribe(value => {
                done();
            });
            const ret = injector.get(HttpTestingController)
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

            injector.get(HttpClient).get('/test', { responseType: 'text' }).subscribe(value => {
                done();
            });
            const ret = injector.get(HttpTestingController)
                .expectOne(r => r.method === 'GET' && (<string>r.url).startsWith('/test')) as TestRequest;
            expect(ret.request.headers.get('Authorization')).toBe(`Bearer ${basicModel.uid}-${basicModel.token}`);
            ret.flush('ok!');
        });
    });
});
