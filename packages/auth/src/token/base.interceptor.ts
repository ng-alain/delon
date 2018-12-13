// tslint:disable:no-any
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injector, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';

import { _HttpClient } from '@delon/theme';

import { DelonAuthConfig } from '../auth.config';
import { ToLogin } from './helper';
import { ITokenModel } from './interface';

export abstract class BaseInterceptor implements HttpInterceptor {
  constructor(@Optional() protected injector: Injector) { }

  protected model: ITokenModel;

  abstract isAuth(options: DelonAuthConfig): boolean;

  abstract setReq(req: HttpRequest<any>, options: DelonAuthConfig): HttpRequest<any>;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const options = { ...new DelonAuthConfig(), ...this.injector.get(DelonAuthConfig, null) };
    if (options.ignores) {
      for (const item of options.ignores as RegExp[]) {
        if (item.test(req.url)) return next.handle(req);
      }
    }

    if (
      options.allow_anonymous_key &&
      (req.params.has(options.allow_anonymous_key) || this.injector.get(Router).parseUrl(req.urlWithParams).queryParamMap.has(options.allow_anonymous_key))
    ) {
      return next.handle(req);
    }

    if (this.isAuth(options)) {
      req = this.setReq(req, options);
    } else {
      ToLogin(options, this.injector);
      // Unable to guarantee interceptor execution order
      // So cancel the loading state as much as possible
      const hc = this.injector.get(_HttpClient, null);
      if (hc) hc.end();
      // Interrupt Http request, so need to generate a new Observable
      return new Observable((observer: Observer<HttpEvent<any>>) => {
        const res = new HttpErrorResponse({
          url: req.url,
          headers: req.headers,
          status: 401,
          statusText: `From Auth Intercept --> https://ng-alain.com/docs/auth`,
        });
        observer.error(res);
      });
    }
    return next.handle(req);
  }
}
