// tslint:disable:no-any
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injector, Optional } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import { DelonAuthConfig } from '../auth.config';
import { ToLogin } from './helper';
import { ITokenModel } from './interface';

class HttpAuthInterceptorHandler implements HttpHandler {
  constructor(private next: HttpHandler, private interceptor: HttpInterceptor) { }

  handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    return this.interceptor.intercept(req, this.next);
  }
}

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
      (req.params.has(options.allow_anonymous_key) || new RegExp(`[\?|&]${options.allow_anonymous_key}=[^&]+`).test(req.urlWithParams))
    ) {
      return next.handle(req);
    }

    if (this.isAuth(options)) {
      req = this.setReq(req, options);
    } else {
      ToLogin(options, this.injector, req.urlWithParams);
      // Interrupt Http request, so need to generate a new Observable
      const err$ = new Observable((observer: Observer<HttpEvent<any>>) => {
        const res = new HttpErrorResponse({
          url: req.url,
          headers: req.headers,
          status: 401,
          statusText: `From Auth Intercept --> https://ng-alain.com/docs/auth`,
        });
        observer.error(res);
      });
      if (options.executeOtherInterceptors) {
        const interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
        const lastInterceptors = interceptors.slice(interceptors.indexOf(this) + 1);
        if (lastInterceptors.length > 0) {
          const chain = lastInterceptors.reduceRight(
            (_next, _interceptor) => new HttpAuthInterceptorHandler(_next, _interceptor),
            { handle: (_: HttpRequest<any>) => err$ },
          );
          return chain.handle(req);
        }
      }
      return err$;
    }
    return next.handle(req);
  }
}
