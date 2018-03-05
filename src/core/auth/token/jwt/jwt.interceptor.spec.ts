import { Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HTTP_INTERCEPTORS, HttpClient, HttpParams } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { publish, refCount } from 'rxjs/operators';
import { AuthOptions, DA_USER_OPTIONS_TOKEN, DA_OPTIONS_TOKEN } from '../../auth.options';
import { DA_SERVICE_TOKEN, ITokenService, ITokenModel } from '../interface';
import { DA_STORE_TOKEN } from '../../store/interface';
import { LocalStorageStore } from '../../store/local-storage.service';
import { JWTInterceptor } from './jwt.interceptor';
import { JWTTokenModel } from './jwt.model';
import { optionsFactory } from '../../index';

const payloadDATA = {
    sub: '1',
    'name': 'cipchk',
    'admin': true,
    'exp': 4670409600
};
const MAXTIME = new Date(2118, 1, 1, 0, 0, 0, 0);
function genModel(token: string = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6ImNpcGNoayIsImFkbWluIjp0cnVlLCJleHAiOjQ2NzA0MDk2MDB9.IINuMTwqwCQP63fSQ-ZPgOEaE8lilrUceUX9Wy47PBk`) {
    const model = new JWTTokenModel();
    // from: https://jwt.io/
    model.token = token;
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

describe('auth: jwt.interceptor', () => {
    let injector: Injector;
    const mockRouter = {
        navigate: jasmine.createSpy('navigate')
    };

    function genModule(options: AuthOptions, tokenData?: JWTTokenModel) {
        injector = TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule, RouterTestingModule.withRoutes([]) ],
            providers: [
                { provide: Router, useValue: mockRouter },
                { provide: DA_USER_OPTIONS_TOKEN, useValue: options },
                { provide: DA_OPTIONS_TOKEN, useFactory: optionsFactory, deps: [DA_USER_OPTIONS_TOKEN] },
                { provide: DA_STORE_TOKEN, useClass: LocalStorageStore },
                { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true },
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

        it(`should be Authorization in headers`, (done: () => void) => {
            injector.get(HttpClient).get('/test', { responseType: 'text' }).subscribe(value => {
                done();
            });
            const req = injector.get(HttpTestingController).expectOne('/test') as TestRequest;
            expect(req.request.headers.get('Authorization')).toBe(`Bearer ${basicModel.token}`);
            req.flush('ok!');
        });

        it(`should be ignores Authorization in headers`, (done: () => void) => {
            injector.get(HttpClient).get('/login', { responseType: 'text' }).subscribe(value => {
                done();
            });
            const req = injector.get(HttpTestingController).expectOne('/login') as TestRequest;
            expect(req.request.headers.get('Authorization')).toBeNull();
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

    describe('invalid token', () => {
        beforeEach(() => {
            genModule({}, genModel(null));
        });

        it('should be go to login', (done: () => void) => {
            injector.get(HttpClient).get('/test', { responseType: 'text' }).subscribe();
            setTimeout(() => {
                expect(injector.get(Router).navigate).toHaveBeenCalled();
                done();
            }, 20);
        });
    });

});
