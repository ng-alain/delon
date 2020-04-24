import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlainAuthConfig } from '@delon/theme';
import { BaseInterceptor } from '../base.interceptor';
import { CheckJwt } from '../helper';
import { DA_SERVICE_TOKEN } from '../interface';
import { JWTTokenModel } from './jwt.model';

/**
 * JWT 拦截器
 */
@Injectable()
export class JWTInterceptor extends BaseInterceptor {
  isAuth(options: AlainAuthConfig): boolean {
    this.model = this.injector.get(DA_SERVICE_TOKEN).get<JWTTokenModel>(JWTTokenModel);
    return CheckJwt(this.model as JWTTokenModel, options.token_exp_offset!);
  }

  setReq(req: HttpRequest<any>, _options: AlainAuthConfig): HttpRequest<any> {
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.model.token}`,
      },
    });
  }
}
