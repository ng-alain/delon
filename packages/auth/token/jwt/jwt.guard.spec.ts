import { Injector, Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DelonAuthModule } from '../../auth.module';
import { DA_SERVICE_TOKEN, ITokenService } from '../interface';
import { JWTGuard } from './jwt.guard';

describe('auth: JWTGuard', () => {
  let injector: Injector;
  let srv: ITokenService;
  let router: Router;

  beforeEach(() => {
    injector = TestBed.configureTestingModule({
      declarations: [MockComponent],
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: 'home',
            component: MockComponent,
            canActivate: [JWTGuard],
          },
          {
            path: 'my',
            canActivateChild: [JWTGuard],
            children: [{ path: 'profile', component: MockComponent }],
          },
          {
            path: 'login',
            component: MockComponent,
          },
        ]),
        DelonAuthModule.forRoot(),
      ],
    });
    srv = injector.get(DA_SERVICE_TOKEN);
    router = injector.get(Router);
    srv.set({
      token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6ImNpcGNoayIsImFkbWluIjp0cnVlLCJleHAiOjQ2NzA0MDk2MDB9.IINuMTwqwCQP63fSQ-ZPgOEaE8lilrUceUX9Wy47PBk`,
    });
  });

  it(`should be activated when token valid`, (done: () => void) => {
    router.navigateByUrl('/home').then(res => {
      expect(res).toBe(true);
      done();
    });
  });

  it(`should be activated when not guard route`, (done: () => void) => {
    srv.set({ token: `` });
    router.navigateByUrl('/login').then(res => {
      expect(res).toBe(true);
      done();
    });
  });

  it(`should be go to login when token invalid`, (done: () => void) => {
    srv.set({ token: `` });
    router.navigateByUrl('/home').then(res => {
      expect(res).toBe(false);
      spyOn(router, 'navigateByUrl');
      expect(router.navigateByUrl).not.toHaveBeenCalled();
      setTimeout(() => {
        expect(router.navigateByUrl).toHaveBeenCalled();
        done();
      }, 2);
    });
  });

  it(`should be support children route`, (done: () => void) => {
    router.navigateByUrl('/my/profile').then(res => {
      expect(res).toBe(true);
      done();
    });
  });
});

@Component({ template: '' })
class MockComponent {}
