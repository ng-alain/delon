import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';

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
  const src = inject(DA_SERVICE_TOKEN);
  const options = src.options;

  if (isAnonymous(req, options)) return next(req);

  const model = src.get<JWTTokenModel>(JWTTokenModel);
  if (CheckJwt(model, options.token_exp_offset!)) return next(newReq(req, model));

  return throwErr(req, options);
};
