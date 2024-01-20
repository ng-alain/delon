import { Injectable, inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, CanMatchFn } from '@angular/router';

import { JWTTokenModel } from './jwt.model';
import { CheckJwt, ToLogin } from '../helper';
import { DA_SERVICE_TOKEN } from '../interface';

@Injectable({ providedIn: 'root' })
export class AuthJWTGuardService {
  private readonly srv = inject(DA_SERVICE_TOKEN);

  process(url?: string): boolean {
    const cog = this.srv.options;
    const res = CheckJwt(this.srv.get<JWTTokenModel>(JWTTokenModel), cog.token_exp_offset!);
    if (!res) {
      ToLogin(cog, url);
    }
    return res;
  }
}

/**
 * JWT 路由守卫, [ACL Document](https://ng-alain.com/auth/guard).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivate: [ authJWTCanActivate ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
export const authJWTCanActivate: CanActivateFn = (_, state) => inject(AuthJWTGuardService).process(state.url);

/**
 * JWT 路由守卫, [ACL Document](https://ng-alain.com/auth/guard).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivateChild: [ authJWTCanActivateChild ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
export const authJWTCanActivateChild: CanActivateChildFn = (_, state) => inject(AuthJWTGuardService).process(state.url);

/**
 * JWT 路由守卫, [ACL Document](https://ng-alain.com/auth/guard).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canMatch: [ authJWTCanMatch ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
export const authJWTCanMatch: CanMatchFn = route => inject(AuthJWTGuardService).process(route.path);
