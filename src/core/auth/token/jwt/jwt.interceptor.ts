import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpRequest, HttpHandler,
         HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent,
         HttpHeaders,
         HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import { ITokenModel, DA_SERVICE_TOKEN } from '../interface';
import { JWTTokenModel } from './jwt.model';
import { DA_OPTIONS_TOKEN } from '../../auth.options';
import { _HttpClient } from '@delon/theme';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

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

        const model = this.injector.get(DA_SERVICE_TOKEN).get<JWTTokenModel>(JWTTokenModel);
        if (model && model.token && !model.isExpired(options.token_exp_offset || 0)) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${model.token}`
                }
            });
        } else {
            if (options.token_invalid_redirect === true) {
                return new Observable<HttpEvent<any>>(observer => {
                    observer.next(<any>{ status: 401, _from: 'jwt_intercept' });
                    observer.complete();
                    setTimeout(() => {
                        try {
                            const hc = this.injector.get(_HttpClient);
                            if (hc) hc.end();
                        } catch {}
                        this.injector.get(Router).navigate([ options.login_url ]);
                    });
                });
            }
        }
        return next.handle(req);
    }

}
