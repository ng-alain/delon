import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export const DA_SERVICE_TOKEN = new InjectionToken<ITokenService>('DELON_AUTH_TOKEN_SERVICE_TOKEN');

export interface ITokenModel {
    [key: string]: any;

    token: string;
}

export interface ITokenService {

    set(data: ITokenModel): boolean;

    /**
     * 获取Token，形式包括：
     * - `get()` 获取 Simple Token
     * - `get<JWTTokenModel>(JWTTokenModel)` 获取 JWT Token
     */
    get(type?: any): ITokenModel;

    /**
     * 获取Token，形式包括：
     * - `get()` 获取 Simple Token
     * - `get<JWTTokenModel>(JWTTokenModel)` 获取 JWT Token
     */
    get<T extends ITokenModel>(type?: any): T;

    clear(): void;

    change(): Observable<ITokenModel>;

    /** 获取登录地址 */
    readonly login_url: string;

    /** 登录后跳转地址，未指定时返回 `/` */
    redirect: string;
}
