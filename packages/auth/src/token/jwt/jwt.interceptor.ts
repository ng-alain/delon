import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AlainAuthConfig } from '@delon/util/config';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { BaseInterceptor } from '../base.interceptor';
import { CheckJwt } from '../helper';
import { DA_SERVICE_TOKEN } from '../interface';
import { JWTTokenModel } from './jwt.model';

/**
 * JWT 拦截器
 *
 * ```
 * // app.module.ts
 * { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true}
 * ```
 */
@Injectable()
export class JWTInterceptor extends BaseInterceptor {
  isAuth(options: AlainAuthConfig): boolean {
    this.model = this.injector.get(DA_SERVICE_TOKEN).get<JWTTokenModel>(JWTTokenModel);
    return CheckJwt(this.model as JWTTokenModel, options.token_exp_offset!);
  }

  setReq(req: HttpRequest<NzSafeAny>, _options: AlainAuthConfig): HttpRequest<NzSafeAny> {
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.model.token}`
      }
    });
  }
}
