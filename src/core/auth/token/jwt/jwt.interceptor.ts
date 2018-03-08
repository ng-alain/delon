import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequest } from '@angular/common/http';

import { AuthOptions } from '../../auth.options';
import { BaseInterceptor } from '../base.interceptor';
import { DA_SERVICE_TOKEN } from '../interface';
import { JWTTokenModel } from './jwt.model';

@Injectable()
export class JWTInterceptor extends BaseInterceptor {
    isAuth(options: AuthOptions): boolean {
        this.model = this.injector.get(DA_SERVICE_TOKEN).get<JWTTokenModel>(JWTTokenModel);
        return this.model && this.model.token && !this.model.isExpired(options.token_exp_offset);
    }

    setReq(req: HttpRequest<any>, options: AuthOptions): HttpRequest<any> {
        return req.clone({
            setHeaders: {
                Authorization: `Bearer ${this.model.token}`
            }
        });
    }
}
