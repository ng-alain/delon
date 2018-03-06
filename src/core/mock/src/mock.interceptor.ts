import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler,
         HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent,
         HttpHeaders, HttpErrorResponse, HttpEventType, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';
import { Observer } from 'rxjs/Observer';

import { DM_OPTIONS_TOKEN } from '../mock.options';
import { MockService } from './mock.service';
import { MockStatusError } from './status.error';
import { MockRequest } from './interface';

@Injectable()
export class MockInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        const src = this.injector.get(MockService);
        const config = this.injector.get(DM_OPTIONS_TOKEN);
        const rule = src.getRule(req.method, req.url);
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
                    params: rule.params
                };

                req.params.keys().forEach(key => mockRequest.queryString[key] = req.params.get(key));
                req.headers.keys().forEach(key => mockRequest.headers[key] = req.headers.get(key));

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
                            error: e.error
                        });
                        if (config.log) console.log(`%c 👽MOCK ${e.status} STATUS `, 'background:#000;color:#bada55', req.url, errRes, req);
                    } else {
                        console.error(`Please use MockStatusError to throw status error`, e, req);
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

        const response: HttpResponse<any> = new HttpResponse({
            status: 200,
            body: res,
            url: req.url
        });
        if (config.log) console.log('%c 👽MOCK ', 'background:#000;color:#bada55', req.url, response, req);
        return of(response).pipe(delay(config.delay));
    }
}
