/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';

import { AlainConfigService } from '@delon/util/config';

import { mergeConfig } from '../../auth.config';
import { isAnonymous, throwErr } from '../base.interceptor';
import { CheckJwt } from '../helper';
import { DA_SERVICE_TOKEN } from '../interface';
import { JWTTokenModel } from './jwt.model';

function newReq(req: HttpRequest<unknown>, model: JWTTokenModel): HttpRequest<unknown> {
  return req.clone({
    setHeaders: {
      Authorization: `Bearer ${model.token}`
    }
  });
}

export const authJWTInterceptor: HttpInterceptorFn = (req, next) => {
  const options = mergeConfig(inject(AlainConfigService));

  if (isAnonymous(req, options)) return next(req);

  const model = inject(DA_SERVICE_TOKEN).get<JWTTokenModel>(JWTTokenModel);
  if (CheckJwt(model, options.token_exp_offset!)) return next(newReq(req, model));

  return throwErr(req, options);
};
