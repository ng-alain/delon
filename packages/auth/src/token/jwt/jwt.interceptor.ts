import { HTTP_INTERCEPTORS, HttpRequest } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';

import { AlainAuthConfig } from '@delon/util/config';

import { JWTTokenModel } from './jwt.model';
import { BaseInterceptor } from '../base.interceptor';
import { CheckJwt } from '../helper';
import { DA_SERVICE_TOKEN } from '../interface';

export function withAuthJWT(): Provider[] {
  return [{ provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true }];
}

/**
 * JWT 拦截器
 *
 * ```
 * // app.config.ts
 * withAuthSimple(),
 * ```
 */
@Injectable()
export class JWTInterceptor extends BaseInterceptor {
  isAuth(options: AlainAuthConfig): boolean {
    this.model = this.injector.get(DA_SERVICE_TOKEN).get<JWTTokenModel>(JWTTokenModel);
    return CheckJwt(this.model as JWTTokenModel, options.token_exp_offset!);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setReq(req: HttpRequest<any>, _options: AlainAuthConfig): HttpRequest<any> {
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.model.token}`
      }
    });
  }
}
