import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, TestRequest, provideHttpClientTesting } from '@angular/common/http/testing';
import { Component, Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of, catchError } from 'rxjs';

import { AlainAuthConfig, provideAlainConfig } from '@delon/util/config';

import { authJWTInterceptor } from './jwt.interceptor';
import { JWTTokenModel } from './jwt.model';
import { provideAuth } from '../../provide';
import { DA_SERVICE_TOKEN } from '../interface';

function genModel(
  token:
    | string
    | null = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6ImNpcGNoayIsImFkbWluIjp0cnVlLCJleHAiOjQ2NzA0MDk2MDB9.IINuMTwqwCQP63fSQ-ZPgOEaE8lilrUceUX9Wy47PBk`
): JWTTokenModel {
  const model = new JWTTokenModel();
  // from: https://jwt.io/
  model.token = token;
  return model;
}

describe('auth: jwt.interceptor', () => {
  let http: HttpClient;
  let httpBed: HttpTestingController;

  function genModule(options: AlainAuthConfig, tokenData?: JWTTokenModel): void {
    TestBed.configureTestingModule({
      declarations: [MockComponent],
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: 'login',
            component: MockComponent
          }
        ])
      ],
      providers: [
        provideHttpClient(withInterceptors([authJWTInterceptor])),
        provideHttpClientTesting(),
        provideAlainConfig({ auth: options }),
        provideAuth()
      ]
    });
    if (tokenData) TestBed.inject(DA_SERVICE_TOKEN).set(tokenData);
    http = TestBed.inject<HttpClient>(HttpClient);
    httpBed = TestBed.inject(HttpTestingController as Type<HttpTestingController>);
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
        })
      )
      .subscribe();
  });
});

@Component({ template: '' })
class MockComponent {}
