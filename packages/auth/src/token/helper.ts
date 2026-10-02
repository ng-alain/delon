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
  const search = getSearch();
  return search.length === 0 ? loginUrl : `${loginUrl}${loginUrl.includes('?') ? '&' : '?'}${search}`;
}

/**
 * 取当前地址的查询串
 *
 * - 优先取 `Router.url`；但启动期（`APP_INITIALIZER` 阶段）Router 尚未初始导航，其 url 为 `/`，需回退到浏览器地址
 * - hash 模式（`#/list?a=1`）下查询串在 `#` 之后，`location.search` 恒为空
 */
function getSearch(): string {
  const search = inject(Router).url.split('?')[1];
  if (search != null) return search;

  const { hash, search: locationSearch } = inject(DOCUMENT).location;
  const idx = (hash ?? '').indexOf('?');
  return idx === -1 ? (locationSearch ?? '').replace(/^\?/, '') : hash.slice(idx + 1);
}

/** 取当前浏览器地址中的路由地址（hash 模式取 `#` 之后，否则取 pathname） */
function getLocationPath(): string {
  const { hash, pathname } = inject(DOCUMENT).location;
  return (hash ? hash.slice(1) : (pathname ?? '')).split('?')[0];
}

export function toLogin(o?: { options?: AlainAuthConfig; url?: string }): void {
  const token = inject(DA_SERVICE_TOKEN) as ITokenService;
  const config = o?.options ?? token.options;
  const router = inject(Router);
  token.referrer!.url = o?.url ?? router.url;
  if (config.token_invalid_redirect !== true) return;

  const url = getLoginUrl({ options: config, url: o?.url });
  // 已在登录页时无需跳转
  if (getLocationPath() === url.split('?')[0]) return;

  const doc = inject(DOCUMENT);
  setTimeout(() => {
    if (/^https?:\/\//.test(url)) {
      doc.location.href = url;
    } else {
      router.navigateByUrl(url);
    }
  });
}
