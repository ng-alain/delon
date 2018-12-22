import { HttpRequest } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DA_SERVICE_TOKEN_FACTORY } from './token.service';

export const DA_SERVICE_TOKEN = new InjectionToken<ITokenService>(
  'DA_SERVICE_TOKEN',
  {
    providedIn: 'root',
    factory: DA_SERVICE_TOKEN_FACTORY,
  },
);

export interface ITokenModel {
  // tslint:disable-next-line:no-any
  [key: string]: any;

  token: string;
}

export interface AuthReferrer {
  url?: string;
}

export interface ITokenService {
  set(data: ITokenModel): boolean;

  /**
   * 获取Token，形式包括：
   * - `get()` 获取 Simple Token
   * - `get<JWTTokenModel>(JWTTokenModel)` 获取 JWT Token
   */
  // tslint:disable-next-line:no-any
  get(type?: any): ITokenModel;

  /**
   * 获取Token，形式包括：
   * - `get()` 获取 Simple Token
   * - `get<JWTTokenModel>(JWTTokenModel)` 获取 JWT Token
   */
  // tslint:disable-next-line:no-any
  get<T extends ITokenModel>(type?: any): T;

  clear(): void;

  change(): Observable<ITokenModel>;

  /** 获取登录地址 */
  readonly login_url: string;

  /** 获取授权失败前路由信息 */
  readonly referrer?: AuthReferrer;
}
