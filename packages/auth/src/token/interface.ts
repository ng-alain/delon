import { InjectionToken } from '@angular/core';
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

  /** 登录后跳转地址，未指定时返回 `/` */
  redirect: string;
}
