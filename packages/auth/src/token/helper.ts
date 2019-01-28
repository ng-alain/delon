import { DOCUMENT } from '@angular/common';
import { Injector } from '@angular/core';
import { Router } from '@angular/router';
import { DelonAuthConfig } from '../auth.config';
import { DA_SERVICE_TOKEN, ITokenService } from './interface';
import { JWTTokenModel } from './jwt/jwt.model';
import { SimpleTokenModel } from './simple/simple.model';

export function CheckSimple(model: SimpleTokenModel): boolean {
  return model != null && typeof model.token === 'string' && model.token.length > 0;
}

export function CheckJwt(model: JWTTokenModel, offset: number): boolean {
  return model != null && model.token && !model.isExpired(offset);
}

export function ToLogin(options: DelonAuthConfig, injector: Injector, url: string) {
  (injector.get(DA_SERVICE_TOKEN) as ITokenService).referrer.url = url;
  if (options.token_invalid_redirect === true) {
    setTimeout(() => {
      if (/^https?:\/\//g.test(options.login_url)) {
        injector.get(DOCUMENT).location.href = options.login_url;
      } else {
        injector.get(Router).navigate([options.login_url]);
      }
    });
  }
}
