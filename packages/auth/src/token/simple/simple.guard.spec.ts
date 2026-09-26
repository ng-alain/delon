import { Component, NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { DA_SERVICE_TOKEN, ITokenService } from '../interface';
import { authSimpleCanActivate, authSimpleCanActivateChild, authSimpleCanMatch } from './simple.guard';

describe('auth: SimpleGuard', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  let srv: ITokenService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
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

  it(`should be activated when token valid`, async () => {
    await router.navigateByUrl('/home').then(res => {
      expect(res).toBe(true);
    });
  });

  it(`should be activated when not guard route`, async () => {
    srv.set({ token: `` });
    await router.navigateByUrl('/login').then(res => {
      expect(res).toBe(true);
    });
  });

  it(`should be go to login when token invalid`, async () => {
    srv.set({ token: `` });
    const res = await router.navigateByUrl('/home');
    expect(res).toBe(false);
    const spy = vi.spyOn(router, 'navigateByUrl').mockReturnValue(undefined as NzSafeAny);
    expect(spy).not.toHaveBeenCalled();
    await vi.advanceTimersByTimeAsync(2);
    expect(spy).toHaveBeenCalled();
  });

  it(`should be support children route`, async () => {
    await router.navigateByUrl('/my/profile').then(res => {
      expect(res).toBe(true);
    });
  });

  it(`should be support lazy module route`, async () => {
    const res = await router.navigateByUrl('/lazy');
    expect(res).toBe(true);
  });
});

@Component({
  template: ''
})
class MockComponent {}

@NgModule({})
class AModule {}
