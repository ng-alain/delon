import { TestBed, TestBedStatic } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { ACLGuard } from './acl-guard';
import { DelonACLModule } from './acl.module';
import { ACLService } from './acl.service';
import { ACLType } from './acl.type';

describe('acl: guard', () => {
  let injector: TestBedStatic;
  let srv: ACLGuard;
  let acl: ACLService;
  let routerSpy: jasmine.Spy;

  beforeEach(() => {
    injector = TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), DelonACLModule.forRoot()],
    });
    srv = injector.get<ACLGuard>(ACLGuard);
    acl = injector.get<ACLService>(ACLService);
    acl.set({
      role: ['user'],
      ability: [1, 2, 3],
    } as ACLType);
    routerSpy = spyOn(injector.get<Router>(Router), 'navigateByUrl');
  });

  it(`should load route when no-specify permission`, (done: () => void) => {
    srv.canActivate({} as any, null).subscribe(res => {
      expect(res).toBeTruthy();
      done();
    });
  });

  it(`should load route when specify permission`, (done: () => void) => {
    srv
      .canActivate(
        {
          data: {
            guard: 'user',
          },
        } as any,
        null,
      )
      .subscribe(res => {
        expect(res).toBeTruthy();
        done();
      });
  });

  it(`should unable load route if no-permission`, (done: () => void) => {
    srv
      .canActivate(
        {
          data: {
            guard: 'admin',
          },
        } as any,
        null,
      )
      .subscribe(res => {
        expect(res).toBeFalsy();
        done();
      });
  });

  it(`should load route via Observable`, (done: () => void) => {
    srv
      .canActivate(
        {
          data: {
            guard: of('user'),
          },
        } as any,
        null,
      )
      .subscribe(res => {
        expect(res).toBeTruthy();
        done();
      });
  });

  it(`should load route using ability`, (done: () => void) => {
    srv
      .canActivate(
        {
          data: {
            guard: of(1),
          },
        } as any,
        null,
      )
      .subscribe(res => {
        expect(res).toBeTruthy();
        done();
      });
  });

  it(`should unable load route using ability`, (done: () => void) => {
    srv
      .canActivate(
        {
          data: {
            guard: of(10),
          },
        } as any,
        null,
      )
      .subscribe(res => {
        expect(res).toBeFalsy();
        done();
      });
  });

  describe(`#canLoad`, () => {
    it(`should be can load when has [user] role`, (done: () => void) => {
      srv
        .canLoad({
          data: {
            guard: of('user'),
          },
        } as any)
        .subscribe(res => {
          expect(res).toBeTruthy();
          done();
        });
    });
    it(`should be can load when is null`, (done: () => void) => {
      srv
        .canLoad({
          data: {
            guard: null,
          },
        } as any)
        .subscribe(res => {
          expect(res).toBeTruthy();
          done();
        });
    });
  });

  it(`#canActivateChild`, (done: () => void) => {
    srv
      .canActivateChild(
        {
          data: {
            guard: of('user'),
          },
        } as any,
        null!,
      )
      .subscribe(res => {
        expect(res).toBeTruthy();
        done();
      });
  });

  describe('#guard_url', () => {
    it(`should be rediect to default url: /403`, (done: () => void) => {
      srv
        .canActivate(
          {
            data: {
              guard: 'admin',
            },
          } as any,
          null,
        )
        .subscribe(() => {
          expect(routerSpy.calls.first().args[0]).toBe(`/403`);
          done();
        });
    });
    it(`should be specify rediect url`, (done: () => void) => {
      srv
        .canActivate(
          {
            data: {
              guard: 'admin',
              guard_url: '/no',
            },
          } as any,
          null,
        )
        .subscribe(() => {
          expect(routerSpy.calls.first().args[0]).toBe(`/no`);
          done();
        });
    });
  });
});
