import { Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HTTP_INTERCEPTORS, HttpClient, HttpParams } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { Router } from '@angular/router';

import { AlainAuthModule } from '../../index';
import { AuthOptions } from '../../auth.options';
import { DA_SERVICE_TOKEN, ITokenService, ITokenModel } from '../interface';
import { JWTInterceptor } from './jwt.interceptor';
import { JWTTokenModel } from './jwt.model';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

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

describe('auth: jwt.interceptor', () => {
    let injector: Injector;
    let http: HttpClient;
    let httpBed: HttpTestingController;
    const mockRouter = {
        navigate: jasmine.createSpy('navigate')
    };

    function genModule(options: AuthOptions, tokenData?: JWTTokenModel) {
        injector = TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule, RouterTestingModule.withRoutes([]), AlainAuthModule.forRoot(options) ],
            providers: [
                { provide: Router, useValue: mockRouter },
                { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true }
            ]
        });
        if (tokenData)
            injector.get(DA_SERVICE_TOKEN).set(tokenData);
        http = injector.get(HttpClient);
        httpBed = injector.get(HttpTestingController);
    }

    it('should be add token', (done: () => void) => {
        const basicModel = genModel();
        genModule({}, basicModel);
        http.get('/test', { responseType: 'text' }).subscribe(value => {
            done();
        });
        const req = httpBed.expectOne('/test') as TestRequest;
        expect(req.request.headers.get('Authorization')).toBe(`Bearer ${basicModel.token}`);
        req.flush('ok!');
    });

    it('should be invalid token', (done: () => void) => {
        genModule({}, genModel(null));
        http.get('/test').pipe(
            catchError((err) => {
                expect(err.status).toBe(401);
                done();
                return of(err);
            })
        ).subscribe();
    });

});
