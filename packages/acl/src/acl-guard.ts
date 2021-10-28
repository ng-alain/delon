import { Injectable, Injector } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Data,
  Route,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { ACLService } from './acl.service';
import { ACLCanType, ACLGuardType } from './acl.type';

/**
 * Routing guard prevent unauthorized users visit the page, [ACL Document](https://ng-alain.com/acl).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivate: [ ACLGuard ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
@Injectable({ providedIn: 'root' })
export class ACLGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private srv: ACLService, private router: Router, private injector: Injector) {}

  private process(data: Data): Observable<boolean> {
    data = {
      guard: null,
      guard_url: this.srv.guard_url,
      ...data
    };
    let guard: ACLGuardType = data.guard;
    if (typeof guard === 'function') guard = guard(this.srv, this.injector);
    return (guard && guard instanceof Observable ? guard : of(guard != null ? (guard as ACLCanType) : null)).pipe(
      map(v => this.srv.can(v)),
      tap(v => {
        if (v) return;
        this.router.navigateByUrl(data.guard_url);
      })
    );
  }

  // lazy loading
  canLoad(route: Route): Observable<boolean> {
    return this.process(route.data!);
  }
  // all children route
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(childRoute, state);
  }
  // route
  canActivate(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot | null): Observable<boolean> {
    return this.process(route.data);
  }
}
