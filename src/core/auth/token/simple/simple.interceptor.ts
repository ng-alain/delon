import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpRequest, HttpHandler,
         HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent,
         HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import { ITokenModel, DA_SERVICE_TOKEN } from '../interface';
import { DA_OPTIONS_TOKEN } from '../../auth.options';
import { SimpleTokenModel } from './simple.model';

@Injectable()
export class SimpleInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) {}

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

        const model = this.injector.get(DA_SERVICE_TOKEN).get() as SimpleTokenModel;
        if (model && model.token) {
            const token = (options.token_send_template || '${token}').replace(/\$\{([\w]+)\}/g, (_: string, g) => model[g] || '');
            switch (options.token_send_place) {
                case 'header':
                    const obj = {};
                    obj[options.token_send_key] = token;
                    req = req.clone({
                        setHeaders: obj
                    });
                    break;
                case 'body':
                    const body = req.body || {};
                    body[options.token_send_key] = token;
                    req = req.clone({
                        body: body
                    });
                    break;
                case 'url':
                    const url = this.injector.get(Router).parseUrl(req.url);
                    url.queryParams[options.token_send_key] = token;
                    req = req.clone({
                        url: url.toString()
                    });
                    break;
            }
        } else {
            if (options.token_invalid_redirect === true) {
                setTimeout(() => this.injector.get(Router).navigate([ options.login_url ]));
                return _throw(<any>{ status: 401, _from: 'jwt_intercept' });
            }
        }
        return next.handle(req);
    }

}
