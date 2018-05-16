import { Injectable, Injector, Optional } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpResponse,
  HttpUserEvent,
  HttpHeaders,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

import { _HttpClient } from '@delon/theme';

import { ITokenModel } from './interface';
import { DelonAuthConfig } from '../auth.config';
import { WINDOW } from '../win_tokens';

export abstract class BaseInterceptor implements HttpInterceptor {
  constructor(@Optional() protected injector: Injector) {}

  protected model: ITokenModel;

  abstract isAuth(options: DelonAuthConfig): boolean;

  abstract setReq(
    req: HttpRequest<any>,
    options: DelonAuthConfig,
  ): HttpRequest<any>;

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<
    | HttpSentEvent
    | HttpHeaderResponse
    | HttpProgressEvent
    | HttpResponse<any>
    | HttpUserEvent<any>
  > {
    const options = Object.assign(
      new DelonAuthConfig(),
      this.injector.get(DelonAuthConfig, null),
    );
    if (options.ignores) {
      for (const item of options.ignores as RegExp[]) {
        if (item.test(req.url)) return next.handle(req);
      }
    }

    if (
      options.allow_anonymous_key &&
      req.params.has(options.allow_anonymous_key)
    ) {
      return next.handle(req);
    }

    if (this.isAuth(options)) {
      req = this.setReq(req, options);
    } else {
      if (options.token_invalid_redirect === true) {
        setTimeout(() => {
          if (/^https?:\/\//g.test(options.login_url)) {
            this.injector.get(WINDOW).location.href = options.login_url;
          } else {
            this.injector.get(Router).navigate([options.login_url]);
          }
        });
      }
      // observer.error：会导倒后续拦截器无法触发，因此，需要处理 `_HttpClient` 状态问题
      const hc = this.injector.get(_HttpClient, null);
      if (hc) hc.end();
      return new Observable((observer: Observer<HttpEvent<any>>) => {
        const res = new HttpErrorResponse({
          status: 401,
          statusText: `From Simple Intercept --> http://ng-alain.com/docs/auth`,
        });
        observer.error(res);
      });
    }
    return next.handle(req);
  }
}
