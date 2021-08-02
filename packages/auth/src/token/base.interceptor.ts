import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Injectable, Injector, Optional } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { AlainAuthConfig, AlainConfigService } from '@delon/util';

import { mergeConfig } from '../auth.config';
import { ToLogin } from './helper';
import { ITokenModel } from './interface';

class HttpAuthInterceptorHandler implements HttpHandler {
  constructor(private next: HttpHandler, private interceptor: HttpInterceptor) {}

  handle(req: HttpRequest<NzSafeAny>): Observable<HttpEvent<NzSafeAny>> {
    return this.interceptor.intercept(req, this.next);
  }
}

@Injectable()
export abstract class BaseInterceptor implements HttpInterceptor {
  constructor(@Optional() protected injector: Injector) {}

  protected model: ITokenModel;

  abstract isAuth(options: AlainAuthConfig): boolean;

  abstract setReq(req: HttpRequest<NzSafeAny>, options: AlainAuthConfig): HttpRequest<NzSafeAny>;

  intercept(req: HttpRequest<NzSafeAny>, next: HttpHandler): Observable<HttpEvent<NzSafeAny>> {
    const options = mergeConfig(this.injector.get(AlainConfigService));
    if (Array.isArray(options.ignores)) {
      for (const item of options.ignores) {
        if (item.test(req.url)) return next.handle(req);
      }
    }

    const ingoreKey = options.allow_anonymous_key!;
    let ingored = false;
    let params = req.params;
    let url = req.url;
    if (req.params.has(ingoreKey)) {
      params = req.params.delete(ingoreKey);
      ingored = true;
    }
    const urlArr = req.url.split('?');
    if (urlArr.length > 1) {
      const queryStringParams = new HttpParams({ fromString: urlArr[1] });
      if (queryStringParams.has(ingoreKey)) {
        const queryString = queryStringParams.delete(ingoreKey).toString();
        url = queryString.length > 0 ? `${urlArr[0]}?${queryString}` : urlArr[0];
        ingored = true;
      }
    }
    if (ingored) {
      return next.handle(req.clone({ params, url }));
    }

    if (this.isAuth(options)) {
      req = this.setReq(req, options);
    } else {
      ToLogin(options, this.injector);
      // Interrupt Http request, so need to generate a new Observable
      const err$ = new Observable((observer: Observer<HttpEvent<NzSafeAny>>) => {
        const res = new HttpErrorResponse({
          url: req.url,
          headers: req.headers,
          status: 401,
          statusText: `来自 @delon/auth 的拦截，所请求URL未授权，若是登录API可加入 [url?_allow_anonymous=true] 来表示忽略校验，更多方法请参考： https://ng-alain.com/auth/getting-started#AlainAuthConfig\nThe interception from @delon/auth, the requested URL is not authorized. If the login API can add [url?_allow_anonymous=true] to ignore the check, please refer to: https://ng-alain.com/auth/getting-started#AlainAuthConfig`
        });
        observer.error(res);
      });
      if (options.executeOtherInterceptors) {
        const interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
        const lastInterceptors = interceptors.slice(interceptors.indexOf(this) + 1);
        if (lastInterceptors.length > 0) {
          const chain = lastInterceptors.reduceRight(
            (_next, _interceptor) => new HttpAuthInterceptorHandler(_next, _interceptor),
            {
              handle: (_: HttpRequest<NzSafeAny>) => err$
            }
          );
          return chain.handle(req);
        }
      }
      return err$;
    }
    return next.handle(req);
  }
}
