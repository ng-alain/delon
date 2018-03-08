import { Injectable, Injector, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpRequest, HttpHandler,
         HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent,
         HttpHeaders,
         HttpEvent,
         HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { _throw } from 'rxjs/observable/throw';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

import { _HttpClient } from '@delon/theme';

import { ITokenModel } from './interface';
import { DA_OPTIONS_TOKEN, AuthOptions } from '../auth.options';

export abstract class BaseInterceptor implements HttpInterceptor {

    constructor(@Optional() protected injector: Injector) {}

    protected model: ITokenModel;

    abstract isAuth(options: AuthOptions): boolean;

    abstract setReq(req: HttpRequest<any>, options: AuthOptions): HttpRequest<any>;

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        const options = this.injector.get(DA_OPTIONS_TOKEN);
        if (options.ignores) {
            for (const item of options.ignores as RegExp[]) {
                if (item.test(req.url)) return next.handle(req);
            }
        }

        if (options.allow_anonymous_key && req.params.has(options.allow_anonymous_key)) {
            return next.handle(req);
        }

        if (this.isAuth(options)) {
            req = this.setReq(req, options);
        } else {
            if (options.token_invalid_redirect === true) {
                setTimeout(() => this.injector.get(Router).navigate([ options.login_url ]));
            }
            // observer.error：会导倒后续拦截器无法触发，因此，需要处理 `_HttpClient` 状态问题
            const hc = this.injector.get(_HttpClient, null);
            if (hc) hc.end();
            return new Observable((observer: Observer<HttpEvent<any>>) => {
                const res = new HttpErrorResponse({
                    status: 401,
                    statusText: `From Simple Intercept --> http://ng-alain.com/docs/auth`
                });
                observer.error(res);
            });
        }
        return next.handle(req);
    }

}
