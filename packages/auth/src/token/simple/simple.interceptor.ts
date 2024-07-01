/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';

import { AlainAuthConfig, AlainConfigService } from '@delon/util/config';

import { mergeConfig } from '../../auth.config';
import { isAnonymous, throwErr } from '../base.interceptor';
import { CheckSimple } from '../helper';
import { DA_SERVICE_TOKEN } from '../interface';
import { SimpleTokenModel } from './simple.model';

function newReq(req: HttpRequest<unknown>, model: SimpleTokenModel, options: AlainAuthConfig): HttpRequest<unknown> {
  const { token_send_template, token_send_key } = options;
  const token = token_send_template!.replace(/\$\{([\w]+)\}/g, (_: string, g) => model[g]);
  switch (options.token_send_place) {
    case 'header':
      const obj: any = {};
      obj[token_send_key!] = token;
      req = req.clone({
        setHeaders: obj
      });
      break;
    case 'body':
      const body: any = req.body || {};
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

export const authSimpleInterceptor: HttpInterceptorFn = (req, next) => {
  const options = mergeConfig(inject(AlainConfigService));

  if (isAnonymous(req, options)) return next(req);

  const model = inject(DA_SERVICE_TOKEN).get() as SimpleTokenModel;
  if (CheckSimple(model)) return next(newReq(req, model, options));

  return throwErr(req, options);
};
