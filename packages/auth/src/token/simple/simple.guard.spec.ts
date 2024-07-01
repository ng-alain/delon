import { Component, NgModule } from '@angular/core';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';

import { DA_SERVICE_TOKEN, ITokenService } from '../interface';
import { authSimpleCanActivate, authSimpleCanActivateChild, authSimpleCanMatch } from './simple.guard';

describe('auth: SimpleGuard', () => {
  let srv: ITokenService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockComponent],
      providers: [
        provideRouter([
          {
            path: 'home',
            component: MockComponent,
            canActivate: [authSimpleCanActivate]
          },
          {
            path: 'my',
            canActivateChild: [authSimpleCanActivateChild],
            children: [{ path: 'profile', component: MockComponent }]
          },
          {
            path: 'lazy',
            canMatch: [authSimpleCanMatch],
            loadChildren: () => AModule
          },
          {
            path: 'login',
            component: MockComponent
          }
        ])
      ]
    });
    srv = TestBed.inject(DA_SERVICE_TOKEN);
    router = TestBed.inject<Router>(Router);
    srv.set({ token: `11` });
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

  it(`should be support lazy module route`, fakeAsync(() => {
    router.navigateByUrl('/lazy').then(res => {
      expect(res).toBe(true);
    });
  }));
});

@Component({ template: '' })
class MockComponent {}

@NgModule({})
class AModule {}
