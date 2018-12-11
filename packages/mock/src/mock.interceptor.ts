// tslint:disable:no-any
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { of, Observable, Observer } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { _HttpClient } from '@delon/theme';

import { MockRequest } from './interface';
import { DelonMockConfig } from './mock.config';
import { MockService } from './mock.service';
import { MockStatusError } from './status.error';

@Injectable()
export class MockInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const src = this.injector.get(MockService);
    const config = {
      delay: 300,
      force: false,
      log: true,
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
          let errRes: HttpErrorResponse;
          if (e instanceof MockStatusError) {
            errRes = new HttpErrorResponse({
              url: req.url,
              headers: req.headers,
              status: e.status,
              statusText: e.statusText || 'Unknown Error',
              error: e.error,
            });
            if (config.log)
              console.log(`%c💀${req.method}->${req.url}`, 'background:#000;color:#bada55', errRes, req);
          } else {
            console.log(`%c💀${req.method}->${req.url}`, 'background:#000;color:#bada55', `Please use MockStatusError to throw status error`, e, req);
          }
          return new Observable((observer: Observer<HttpEvent<any>>) => {
            observer.error(errRes);
          });
        }
        break;
      default:
        res = rule.callback;
        break;
    }

    const response =
      res instanceof HttpResponse ?
        res :
        new HttpResponse({
          status: 200,
          url: req.url,
          body: res,
        });

    if (config.log) {
      console.log(`%c👽${req.method}->${req.url}->request`, 'background:#000;color:#bada55', req);
      console.log(`%c👽${req.method}->${req.url}->response`, 'background:#000;color:#bada55', response);
    }
    const hc = this.injector.get(_HttpClient, null);
    if (hc) hc.begin();
    return of(response).pipe(
      delay(config.delay),
      tap(() => {
        if (hc) hc.end();
      }),
    );
  }
}
