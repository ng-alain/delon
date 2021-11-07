import { DOCUMENT } from '@angular/common';
import { Injector } from '@angular/core';
import { Router } from '@angular/router';

import { AlainAuthConfig } from '@delon/util/config';

import { DA_SERVICE_TOKEN, ITokenService } from './interface';
import { JWTTokenModel } from './jwt/jwt.model';
import { SimpleTokenModel } from './simple/simple.model';

export function CheckSimple(model: SimpleTokenModel | null): boolean {
  return model != null && typeof model.token === 'string' && model.token.length > 0;
}

export function CheckJwt(model: JWTTokenModel, offset: number): boolean {
  try {
    return model != null && !!model.token && !model.isExpired(offset);
  } catch (err) {
    console.warn(`${err.message}, jump to login_url`);
    return false;
  }
}

export function ToLogin(options: AlainAuthConfig, injector: Injector, url?: string): void {
  const router = injector.get<Router>(Router);
  const srv = injector.get(DA_SERVICE_TOKEN) as ITokenService;
  srv.referrer!.url = url || router.url;
  if (options.token_invalid_redirect === true) {
    setTimeout(() => {
      const loginUrl = srv.login_url;
      if (/^https?:\/\//g.test(loginUrl!)) {
        injector.get(DOCUMENT).location.href = loginUrl;
      } else {
        router.navigate([loginUrl]);
      }
    });
  }
}
