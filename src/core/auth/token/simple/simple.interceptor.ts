import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequest } from '@angular/common/http';

import { AuthOptions } from '../../auth.options';
import { SimpleTokenModel } from './simple.model';
import { BaseInterceptor } from '../base.interceptor';
import { DA_SERVICE_TOKEN } from '../interface';

@Injectable()
export class SimpleInterceptor extends BaseInterceptor {
    isAuth(options: AuthOptions): boolean {
        this.model = this.injector.get(DA_SERVICE_TOKEN).get() as SimpleTokenModel;
        return this.model && (typeof this.model.token === 'string' && this.model.token.length > 0);
    }

    setReq(req: HttpRequest<any>, options: AuthOptions): HttpRequest<any> {
        const token = options.token_send_template.replace(/\$\{([\w]+)\}/g, (_: string, g) => this.model[g]);
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
        return req;
    }
}
