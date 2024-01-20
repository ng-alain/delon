import { Injectable, inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, CanMatchFn } from '@angular/router';

import { SimpleTokenModel } from './simple.model';
import { CheckSimple, ToLogin } from '../helper';
import { DA_SERVICE_TOKEN } from '../interface';

@Injectable({ providedIn: 'root' })
export class AuthSimpleGuardService {
  private readonly srv = inject(DA_SERVICE_TOKEN);

  process(url?: string): boolean {
    const res = CheckSimple(this.srv.get() as SimpleTokenModel);
    if (!res) {
      ToLogin(this.srv.options, url);
    }
    return res;
  }
}

/**
 * Simple 路由守卫, [ACL Document](https://ng-alain.com/auth/guard).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivate: [ authSimpleCanActivate ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
export const authSimpleCanActivate: CanActivateFn = (_, state) => inject(AuthSimpleGuardService).process(state.url);

/**
 * Simple 路由守卫, [ACL Document](https://ng-alain.com/auth/guard).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivateChild: [ authSimpleCanActivateChild ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
export const authSimpleCanActivateChild: CanActivateChildFn = (_, state) =>
  inject(AuthSimpleGuardService).process(state.url);

/**
 * Simple 路由守卫, [ACL Document](https://ng-alain.com/auth/guard).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canMatch: [ authSimpleCanMatch ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
export const authSimpleCanMatch: CanMatchFn = route => inject(AuthSimpleGuardService).process(route.path);
