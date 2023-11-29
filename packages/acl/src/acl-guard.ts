import { Injectable, Injector, inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { Observable, of, map, tap } from 'rxjs';

import { ACLService } from './acl.service';
import type { ACLCanType, ACLGuardData } from './acl.type';

@Injectable({ providedIn: 'root' })
export class ACLGuardService {
  constructor(
    private srv: ACLService,
    private router: Router,
    private injector: Injector
  ) {}

  process(data?: ACLGuardData): Observable<boolean> {
    data = {
      guard: null,
      guard_url: this.srv.guard_url,
      ...data
    };
    let guard = data.guard;
    if (typeof guard === 'function') guard = guard(this.srv, this.injector);
    return (guard && guard instanceof Observable ? guard : of(guard != null ? (guard as ACLCanType) : null)).pipe(
      map(v => this.srv.can(v)),
      tap(v => {
        if (v) return;
        this.router.navigateByUrl(data!!.guard_url!!);
      })
    );
  }
}

/**
 * Routing guard prevent unauthorized users visit the page, [ACL Document](https://ng-alain.com/acl).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivate: [ aclCanActivate ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
export const aclCanActivate: CanActivateFn = route => inject(ACLGuardService).process(route.data);

/**
 * Routing guard prevent unauthorized users visit the page, [ACL Document](https://ng-alain.com/acl).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivateChild: [ aclCanActivateChild ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
export const aclCanActivateChild: CanActivateChildFn = route => inject(ACLGuardService).process(route.data);

/**
 * Routing guard prevent unauthorized users visit the page, [ACL Document](https://ng-alain.com/acl).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canMatch: [ aclCanMatch ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
export const aclCanMatch: CanMatchFn = route => inject(ACLGuardService).process(route.data);
