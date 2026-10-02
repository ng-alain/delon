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

export function getLoginUrl(o: { options: AlainAuthConfig; url?: string }): string {
  const loginUrl = o.options.login_url as string;
  // location.search 在 hash 模式下为空，查询串只能取自 Router
  const search = inject(Router).url.split('?')[1] ?? '';
  return search.length === 0 ? loginUrl : `${loginUrl}${loginUrl.includes('?') ? '&' : '?'}${search}`;
}

export function toLogin(o?: { options?: AlainAuthConfig; url?: string }): void {
  const token = inject(DA_SERVICE_TOKEN) as ITokenService;
  const config = o?.options ?? token.options;
  const router = inject(Router);
  token.referrer!.url = o?.url ?? router.url;
  if (config.token_invalid_redirect !== true) return;

  const url = getLoginUrl({ options: config, url: o?.url });
  const doc = inject(DOCUMENT);
  setTimeout(() => {
    if (/^https?:\/\//.test(url)) {
      doc.location.href = url;
    } else {
      router.navigateByUrl(url);
    }
  });
}
