import { Injector } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleTokenModel } from './simple/simple.model';
import { JWTTokenModel } from './jwt/jwt.model';
import { DelonAuthConfig } from '../auth.config';
import { WINDOW } from '../win_tokens';

export function CheckSimple(model: SimpleTokenModel): boolean {
  return (
    model != null && typeof model.token === 'string' && model.token.length > 0
  );
}

export function CheckJwt(model: JWTTokenModel, offset: number): boolean {
  return model != null && model.token && !model.isExpired(offset);
}

export function ToLogin(options: DelonAuthConfig, injector: Injector) {
  if (options.token_invalid_redirect === true) {
    setTimeout(() => {
      if (/^https?:\/\//g.test(options.login_url)) {
        injector.get(WINDOW).location.href = options.login_url;
      } else {
        injector.get(Router).navigate([options.login_url]);
      }
    });
  }
}
