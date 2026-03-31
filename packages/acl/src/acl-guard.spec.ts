import { Component } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { ACLGuardService, aclCanActivate, aclCanActivateChild, aclCanMatch } from './acl-guard';
import { ACLService } from './acl.service';
import { ACLGuardData } from './acl.type';

describe('acl: guard', () => {
  let srv: ACLGuardService;
  let acl: ACLService;
  let router: Router;
  let routerSpy: any;

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
    beforeEach(() => (routerSpy = vi.spyOn(router, 'navigateByUrl')));

    it(`should load route when no-specify permission`, () => new Promise<void>(done => {
      srv.process({}).subscribe(res => {
        expect(res).toBeTruthy();
        done();
      });
    }));

    it(`should load route when specify permission`, () => new Promise<void>(done => {
      srv
        .process({
          guard: 'user'
        })
        .subscribe(res => {
          expect(res).toBeTruthy();
          done();
        });
    }));

    it(`should unable load route if no-permission`, () => new Promise<void>(done => {
      srv
        .process({
          guard: 'admin'
        })
        .subscribe(res => {
          expect(res).toBeFalsy();
          done();
        });
    }));

    it(`should load route via function`, () => new Promise<void>(done => {
      srv
        .process({
          guard: () => of('user')
        })
        .subscribe(res => {
          expect(res).toBeTruthy();
          done();
        });
    }));

    it(`should load route via Observable`, () => new Promise<void>(done => {
      srv
        .process({
          guard: of('user')
        })
        .subscribe(res => {
          expect(res).toBeTruthy();
          done();
        });
    }));

    it(`should load route using ability`, () => new Promise<void>(done => {
      srv
        .process({
          guard: of(1)
        })
        .subscribe(res => {
          expect(res).toBeTruthy();
          done();
        });
    }));

    it(`should unable load route using ability`, () => new Promise<void>(done => {
      srv
        .process({
          guard: of(10)
        })
        .subscribe(res => {
          expect(res).toBeFalsy();
          done();
        });
    }));

    describe('#guard_url', () => {
      it(`should be rediect to default url: /403`, () => new Promise<void>(done => {
        srv
          .process({
            guard: 'admin'
          })
          .subscribe(() => {
            expect(routerSpy.mock.calls[0][0]).toBe(`/403`);
            done();
          });
      }));
      it(`should be specify rediect url`, () => new Promise<void>(done => {
        srv
          .process({
            guard: 'admin',
            guard_url: '/no'
          })
          .subscribe(() => {
            expect(routerSpy.mock.calls[0][0]).toBe(`/no`);
            done();
          });
      }));
    });
  });

  describe('#router', () => {
    it('canMatch', fakeAsync(async () => {
      acl.set({ role: ['user'] });
      const targetUrl = '/canMatch';
      await router.navigateByUrl(targetUrl);
      tick();
      expect(router.url).toBe('/403');
      acl.set({ role: ['admin'] });
      await router.navigateByUrl(targetUrl);
      tick();
      expect(router.url).toBe(targetUrl);
    }));
    it('canActivate', fakeAsync(async () => {
      acl.set({ role: ['user'] });
      const targetUrl = '/canActivate';
      await router.navigateByUrl(targetUrl);
      tick();
      expect(router.url).toBe('/403');
      acl.set({ role: ['admin'] });
      await router.navigateByUrl(targetUrl);
      tick();
      expect(router.url).toBe(targetUrl);
    }));
    it('canActivateChild', fakeAsync(async () => {
      acl.set({ role: ['user'] });
      const targetUrl = '/canActivateChild/1';
      await router.navigateByUrl(targetUrl);
      tick();
      expect(router.url).toBe('/403');
      acl.set({ role: ['admin'] });
      await router.navigateByUrl(targetUrl);
      tick();
      expect(router.url).toBe(targetUrl);
    }));
  });
});

@Component({
  template: ``
})
class TestComponent {}
