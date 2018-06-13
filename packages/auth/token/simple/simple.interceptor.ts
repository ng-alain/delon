import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequest } from '@angular/common/http';

import { DelonAuthConfig } from '../../auth.config';
import { SimpleTokenModel } from './simple.model';
import { BaseInterceptor } from '../base.interceptor';
import { DA_SERVICE_TOKEN } from '../interface';

@Injectable()
export class SimpleInterceptor extends BaseInterceptor {
  isAuth(options: DelonAuthConfig): boolean {
    this.model = this.injector.get(DA_SERVICE_TOKEN).get() as SimpleTokenModel;
    return (
      this.model &&
      (typeof this.model.token === 'string' && this.model.token.length > 0)
    );
  }

  setReq(req: HttpRequest<any>, options: DelonAuthConfig): HttpRequest<any> {
    const token = options.token_send_template.replace(
      /\$\{([\w]+)\}/g,
      (_: string, g) => this.model[g],
    );
    switch (options.token_send_place) {
      case 'header':
        const obj = {};
        obj[options.token_send_key] = token;
        req = req.clone({
          setHeaders: obj,
        });
        break;
      case 'body':
        const body = req.body || {};
        body[options.token_send_key] = token;
        req = req.clone({
          body: body,
        });
        break;
      case 'url':
        req = req.clone({
          params: req.params.append(options.token_send_key, token),
        });
        break;
    }
    return req;
  }
}
