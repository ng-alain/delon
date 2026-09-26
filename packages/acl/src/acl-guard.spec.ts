import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { firstValueFrom, of } from 'rxjs';

import type { Mock } from 'vitest';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { ACLGuardService, aclCanActivate, aclCanActivateChild, aclCanMatch } from './acl-guard';
import { ACLService } from './acl.service';
import { ACLGuardData } from './acl.type';

describe('acl: guard', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  let srv: ACLGuardService;
  let acl: ACLService;
  let router: Router;
  let routerSpy: Mock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([
          { path: '403', component: TestComponent },
          {
            path: 'canActivate',
            component: TestComponent,
            canActivate: [aclCanActivate],
            data: { guard: { role: ['admin'] } } as ACLGuardData
          },
          {
            path: 'canActivateChild',
            canActivateChild: [aclCanActivateChild],
            data: { guard: { role: ['admin'] } } as ACLGuardData,
            children: [{ path: '1', component: TestComponent }]
          },
          {
            path: 'canMatch',
            component: TestComponent,
            canMatch: [aclCanMatch],
            data: { guard: { role: ['admin'] } } as ACLGuardData
          }
        ])
      ]
    });
    srv = TestBed.inject<ACLGuardService>(ACLGuardService);
    acl = TestBed.inject<ACLService>(ACLService);
    acl.set({
      role: ['user'],
      ability: [1, 2, 3]
    });
    router = TestBed.inject(Router);
  });

  describe('', () => {
    beforeEach(() => (routerSpy = vi.spyOn(router, 'navigateByUrl').mockReturnValue(undefined as NzSafeAny)));

    it(`should load route when no-specify permission`, async () => {
      const res = await firstValueFrom(srv.process({}));
      expect(res).toBeTruthy();
    });

    it(`should load route when specify permission`, async () => {
      const res = await firstValueFrom(
        srv.process({
          guard: 'user'
        })
      );
      expect(res).toBeTruthy();
    });

    it(`should unable load route if no-permission`, async () => {
      const res = await firstValueFrom(
        srv.process({
          guard: 'admin'
        })
      );
      expect(res).toBeFalsy();
    });

    it(`should load route via function`, async () => {
      const res = await firstValueFrom(
        srv.process({
          guard: () => of('user')
        })
      );
      expect(res).toBeTruthy();
    });

    it(`should load route via Observable`, async () => {
      const res = await firstValueFrom(
        srv.process({
          guard: of('user')
        })
      );
      expect(res).toBeTruthy();
    });

    it(`should load route using ability`, async () => {
      const res = await firstValueFrom(
        srv.process({
          guard: of(1)
        })
      );
      expect(res).toBeTruthy();
    });

    it(`should unable load route using ability`, async () => {
      const res = await firstValueFrom(
        srv.process({
          guard: of(10)
        })
      );
      expect(res).toBeFalsy();
    });

    describe('#guard_url', () => {
      it(`should be rediect to default url: /403`, async () => {
        await firstValueFrom(
          srv.process({
            guard: 'admin'
          })
        );
        expect(vi.mocked(routerSpy).mock.calls[0]![0]).toBe(`/403`);
      });
      it(`should be specify rediect url`, async () => {
        await firstValueFrom(
          srv.process({
            guard: 'admin',
            guard_url: '/no'
          })
        );
        expect(vi.mocked(routerSpy).mock.calls[0]![0]).toBe(`/no`);
      });
    });
  });

  describe('#router', () => {
    it('canMatch', async () => {
      acl.set({ role: ['user'] });
      const targetUrl = '/canMatch';
      await router.navigateByUrl(targetUrl);
      await vi.advanceTimersByTimeAsync(0);
      expect(router.url).toBe('/403');
      acl.set({ role: ['admin'] });
      await router.navigateByUrl(targetUrl);
      await vi.advanceTimersByTimeAsync(0);
      expect(router.url).toBe(targetUrl);
    });
    it('canActivate', async () => {
      acl.set({ role: ['user'] });
      const targetUrl = '/canActivate';
      await router.navigateByUrl(targetUrl);
      await vi.advanceTimersByTimeAsync(0);
      expect(router.url).toBe('/403');
      acl.set({ role: ['admin'] });
      await router.navigateByUrl(targetUrl);
      await vi.advanceTimersByTimeAsync(0);
      expect(router.url).toBe(targetUrl);
    });
    it('canActivateChild', async () => {
      acl.set({ role: ['user'] });
      const targetUrl = '/canActivateChild/1';
      await router.navigateByUrl(targetUrl);
      await vi.advanceTimersByTimeAsync(0);
      expect(router.url).toBe('/403');
      acl.set({ role: ['admin'] });
      await router.navigateByUrl(targetUrl);
      await vi.advanceTimersByTimeAsync(0);
      expect(router.url).toBe(targetUrl);
    });
  });
});

@Component({
  template: ``
})
class TestComponent {}
