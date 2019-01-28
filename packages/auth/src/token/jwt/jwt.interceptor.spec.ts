import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { TestBed, TestBedStatic } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { DelonAuthConfig } from '../../auth.config';
import { DelonAuthModule } from '../../auth.module';
import { DA_SERVICE_TOKEN } from '../interface';
import { JWTInterceptor } from './jwt.interceptor';
import { JWTTokenModel } from './jwt.model';

function genModel(
  token: string = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6ImNpcGNoayIsImFkbWluIjp0cnVlLCJleHAiOjQ2NzA0MDk2MDB9.IINuMTwqwCQP63fSQ-ZPgOEaE8lilrUceUX9Wy47PBk`,
) {
  const model = new JWTTokenModel();
  // from: https://jwt.io/
  model.token = token;
  return model;
}

describe('auth: jwt.interceptor', () => {
  let injector: TestBedStatic;
  let http: HttpClient;
  let httpBed: HttpTestingController;

  function genModule(options: DelonAuthConfig, tokenData?: JWTTokenModel) {
    injector = TestBed.configureTestingModule({
      declarations: [MockComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          {
            path: 'login',
            component: MockComponent,
          },
        ]),
        DelonAuthModule,
      ],
      providers: [
        { provide: DelonAuthConfig, useValue: options },
        { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true },
      ],
    });
    if (tokenData) injector.get(DA_SERVICE_TOKEN).set(tokenData);
    http = injector.get(HttpClient);
    httpBed = injector.get(HttpTestingController);
  }

  it('should be add token', (done: () => void) => {
    const basicModel = genModel();
    genModule({}, basicModel);
    http.get('/test', { responseType: 'text' }).subscribe(() => {
      done();
    });
    const req = httpBed.expectOne('/test') as TestRequest;
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${basicModel.token}`);
    req.flush('ok!');
  });

  it('should be invalid token', (done: () => void) => {
    genModule({}, genModel(null));
    http
      .get('/test')
      .pipe(
        catchError(err => {
          expect(err.status).toBe(401);
          done();
          return of(err);
        }),
      )
      .subscribe();
  });
});

@Component({ template: '' })
class MockComponent {}
