import { Inject, Injectable, Injector, inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, CanMatchFn } from '@angular/router';

import { SimpleTokenModel } from './simple.model';
import { CheckSimple, ToLogin } from '../helper';
import { DA_SERVICE_TOKEN, ITokenService } from '../interface';

@Injectable({ providedIn: 'root' })
export class AuthSimpleGuardService {
  constructor(
    @Inject(DA_SERVICE_TOKEN) private srv: ITokenService,
    private injector: Injector
  ) {}

  process(url?: string): boolean {
    const res = CheckSimple(this.srv.get() as SimpleTokenModel);
    if (!res) {
      ToLogin(this.srv.options, this.injector, url);
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
