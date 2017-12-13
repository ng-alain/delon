import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpRequest, HttpHandler,
         HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent,
         HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { ITokenModel, DA_SERVICE_TOKEN } from '../interface';
import { JWTTokenModel } from './jwt.model';
import { DA_OPTIONS_TOKEN } from '../../auth.options';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        const options = this.injector.get(DA_OPTIONS_TOKEN);
        if (options.ignores) {
            for (const item of options.ignores) {
                if (item.test(req.url)) return next.handle(req);
            }
        }

        if (options.allow_anonymous_key && req.params.has(options.allow_anonymous_key)) {
            return next.handle(req);
        }

        const model = this.injector.get(DA_SERVICE_TOKEN).get() as JWTTokenModel;
        if (model.token && !model.isExpired(options.token_exp_offset || 0)) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${model.token}`
                }
            });
        } else {
            if (options.token_invalid_redirect === true) {
                const router = this.injector.get(Router);
                this.injector.get(Router).navigate([ options.login_url ]);
                return <any>ErrorObservable.create({ status: 401, _from: 'jwt_intercept' });
            }
        }
        return next.handle(req);
    }

}
