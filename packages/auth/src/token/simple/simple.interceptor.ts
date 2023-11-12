/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTTP_INTERCEPTORS, HttpRequest } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';

import { AlainAuthConfig } from '@delon/util/config';

import { SimpleTokenModel } from './simple.model';
import { BaseInterceptor } from '../base.interceptor';
import { CheckSimple } from '../helper';
import { DA_SERVICE_TOKEN } from '../interface';

export function withAuthSimple(): Provider[] {
  return [{ provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true }];
}

/**
 * Simple 拦截器
 *
 * ```
 * // app.config.ts
 * providers: [
 *  withAuthSimple(),
 * ]
 * ```
 */
@Injectable()
export class SimpleInterceptor extends BaseInterceptor {
  isAuth(_options: AlainAuthConfig): boolean {
    this.model = this.injector.get(DA_SERVICE_TOKEN).get() as SimpleTokenModel;
    return CheckSimple(this.model as SimpleTokenModel);
  }

  setReq(req: HttpRequest<any>, options: AlainAuthConfig): HttpRequest<any> {
    const { token_send_template, token_send_key } = options;
    const token = token_send_template!.replace(/\$\{([\w]+)\}/g, (_: string, g) => this.model[g]);
    switch (options.token_send_place) {
      case 'header':
        const obj: any = {};
        obj[token_send_key!] = token;
        req = req.clone({
          setHeaders: obj
        });
        break;
      case 'body':
        const body = req.body || {};
        body[token_send_key!] = token;
        req = req.clone({
          body
        });
        break;
      case 'url':
        req = req.clone({
          params: req.params.append(token_send_key!, token)
        });
        break;
    }
    return req;
  }
}
