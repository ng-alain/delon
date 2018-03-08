import { Injector, Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HttpRequest, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule, TestRequest } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, DefaultUrlSerializer } from '@angular/router';

import { AlainAuthModule, SimpleInterceptor } from '../index';
import { AuthOptions } from '../auth.options';
import { JWTTokenModel } from './jwt/jwt.model';
import { SimpleTokenModel } from './simple/simple.model';
import { ITokenModel, DA_SERVICE_TOKEN, ITokenService } from './interface';
import { BaseInterceptor } from './base.interceptor';
import { _HttpClient } from '@delon/theme';

function genModel<T extends ITokenModel>(modelType: { new(): T }, token: string = `123`) {
    const model = new modelType();
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

describe('auth: base.interceptor', () => {
    let injector: Injector;
    let http: HttpClient;
    let httpBed: HttpTestingController;
    const mockRouter = {
        navigate: jasmine.createSpy('navigate'),
        parseUrl: jasmine.createSpy('parseUrl').and.callFake((value: any) => {
            return (new DefaultUrlSerializer()).parse(value);
        })
    };

    function genModule(options: AuthOptions, tokenData?: ITokenModel, provider: any[] = []) {
        injector = TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule, RouterTestingModule.withRoutes([]), AlainAuthModule.forRoot(options) ],
            providers: [
                { provide: Router, useValue: mockRouter },
                { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true },
                { provide: DA_SERVICE_TOKEN, useClass: MockTokenService }
            ].concat(provider)
        });
        if (tokenData)
            injector.get(DA_SERVICE_TOKEN).set(tokenData);

        http = injector.get(HttpClient);
        httpBed = injector.get(HttpTestingController);
    }

    describe('[url ignores]', () => {
        const basicModel = genModel(SimpleTokenModel);

        it(`should be ignore /login`, (done: () => void) => {
            genModule({ ignores: [ `assets\\/`, `\\/login` ] }, basicModel);

            http.get('/login', { responseType: 'text' }).subscribe(value => {
                done();
            });
            const req = httpBed.expectOne('/login') as TestRequest;
            expect(req.request.headers.get('token')).toBeNull();
            req.flush('ok!');
        });

        it('should be non-ignore', (done: () => void) => {
            genModule({ ignores: null }, basicModel);
            http.get('/login', { responseType: 'text' }).subscribe(value => {
                done();
            });
            const req = httpBed.expectOne('/login') as TestRequest;
            expect(req.request.headers.get('token')).toBe('123');
            req.flush('ok!');
        });

    });

    describe('[basic]', () => {
        it(`should be ignores Authorization when exists allow_anonymous_key`, (done: () => void) => {
            http.get('/user', {
                responseType: 'text',
                params: { _allow_anonymous: '' }
            }).subscribe(value => {
                done();
            });
            const ret = httpBed
                .expectOne(req => req.method === 'GET' && req.url === '/user') as TestRequest;
            expect(ret.request.headers.get('Authorization')).toBeNull();
            ret.flush('ok!');
        });
    });

    describe('[invalid token]', () => {
        it('should be navigate to login', (done: () => void) => {
            genModule({}, genModel(SimpleTokenModel, null));
            http.get('/test', { responseType: 'text' }).subscribe(() => {
                expect(false).toBe(true);
                done();
            }, (err: any) => {
                expect(err.status).toBe(401);
                setTimeout(() => {
                    expect(injector.get(Router).navigate).toHaveBeenCalled();
                    done();
                }, 20);
            });
        });

        it('should be not navigate to login when token_invalid_redirect: false', (done: () => void) => {
            genModule({ token_invalid_redirect: false }, genModel(SimpleTokenModel, null));
            http.get('/test', { responseType: 'text' }).subscribe(() => {
                expect(false).toBe(true);
                done();
            }, (err: any) => {
                expect(err.status).toBe(401);
                done();
            });
        });

        it('should be call _HttpClient.end', (done: () => void) => {
            genModule(
                { token_invalid_redirect: false },
                genModel(SimpleTokenModel, null),
                [
                    { provide: _HttpClient, useValue: { end: () => {} } }
               ]
            );
            http.get('/test', { responseType: 'text' }).subscribe(() => {
                expect(false).toBe(true);
                done();
            }, (err: any) => {
                expect(err.status).toBe(401);
                done();
            });
        });
    });
});
