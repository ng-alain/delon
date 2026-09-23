import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core';
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
  } catch (err: unknown) {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      console.warn(`${(err as { message: string }).message}, jump to login_url`);
    }
    return false;
  }
}

export function ToLogin(options: AlainAuthConfig, url?: string): void {
  const router = inject(Router);
  const token = inject(DA_SERVICE_TOKEN) as ITokenService;
  const doc = inject(DOCUMENT);
  token.referrer!.url = url ?? router.url;
  if (options.token_invalid_redirect === true) {
    setTimeout(() => {
      const loginUrl = options.login_url as string;
      // 跳转时携带当前页查询串，便于登录页或登录成功后恢复原始参数
      const search = doc.location.search ?? '';
      const target =
        search.length === 0 ? loginUrl : `${loginUrl}${loginUrl.includes('?') ? '&' : '?'}${search.slice(1)}`;
      if (/^https?:\/\//.test(loginUrl)) {
        doc.location.href = target;
      } else {
        router.navigateByUrl(target);
      }
    });
  }
}
