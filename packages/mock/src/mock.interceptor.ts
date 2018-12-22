// tslint:disable:no-any
import { HttpBackend, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpResponseBase, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { of, throwError, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { MockRequest } from './interface';
import { DelonMockConfig } from './mock.config';
import { MockService } from './mock.service';
import { MockStatusError } from './status.error';

class HttpMockInterceptorHandler implements HttpHandler {
  constructor(private next: HttpHandler, private interceptor: HttpInterceptor) { }

  handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    return this.interceptor.intercept(req, this.next);
  }
}

@Injectable()
export class MockInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const src = this.injector.get(MockService);
    const config = {
      delay: 300,
      force: false,
      log: true,
      executeOtherInterceptors: true,
      ...this.injector.get(DelonMockConfig, null),
    };
    const rule = src.getRule(req.method, req.url.split('?')[0]);
    if (!rule && !config.force) {
      return next.handle(req);
    }

    let res: any;
    switch (typeof rule.callback) {
      case 'function':
        const mockRequest: MockRequest = {
          original: req,
          body: req.body,
          queryString: {},
          headers: {},
          params: rule.params,
        };
        const urlParams = req.url.split('?');
        if (urlParams.length > 1) {
          urlParams[1].split('&').forEach(item => {
            const itemArr = item.split('=');
            const key = itemArr[0];
            const value = itemArr[1];
            // is array
            if (Object.keys(mockRequest.queryString).includes(key)) {
              if (!Array.isArray(mockRequest.queryString[key])) {
                mockRequest.queryString[key] = [mockRequest.queryString[key]];
              }
              mockRequest.queryString[key].push(value);
            } else {
              mockRequest.queryString[key] = value;
            }
          });
        }
        req.params
          .keys()
          .forEach(key => (mockRequest.queryString[key] = req.params.get(key)));
        req.headers
          .keys()
          .forEach(key => (mockRequest.headers[key] = req.headers.get(key)));

        try {
          res = rule.callback.call(this, mockRequest);
        } catch (e) {
          res = new HttpErrorResponse({
            url: req.url,
            headers: req.headers,
            status: 400,
            statusText: e.statusText || 'Unknown Error',
            error: e.error,
          });
          if (e instanceof MockStatusError) {
            res.status = e.status;
          }
        }
        break;
      default:
        res = rule.callback;
        break;
    }

    if (!(res instanceof HttpResponseBase)) {
      res = new HttpResponse({
        status: 200,
        url: req.url,
        body: res,
      });
    }

    if (config.log) {
      console.log(`%c👽${req.method}->${req.url}->request`, 'background:#000;color:#bada55', req);
      console.log(`%c👽${req.method}->${req.url}->response`, 'background:#000;color:#bada55', res);
    }

    const res$ = res instanceof HttpErrorResponse ? throwError(res) : of(res);

    if (config.executeOtherInterceptors) {
      const interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
      const lastInterceptors = interceptors.slice(interceptors.indexOf(this) + 1);
      if (lastInterceptors.length > 0) {
        const chain = lastInterceptors.reduceRight(
          (_next, _interceptor) => new HttpMockInterceptorHandler(_next, _interceptor), {
            handle: () => res$,
          } as HttpBackend,
        );
        return chain.handle(req).pipe(delay(config.delay));
      }
    }

    return res$.pipe(delay(config.delay));
  }
}
