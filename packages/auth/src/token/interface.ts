import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { DA_SERVICE_TOKEN_FACTORY } from './token.service';

export const DA_SERVICE_TOKEN = new InjectionToken<ITokenService>('DA_SERVICE_TOKEN', {
  providedIn: 'root',
  factory: DA_SERVICE_TOKEN_FACTORY,
});

// tslint:disable-next-line: interface-name
export interface ITokenModel {
  [key: string]: any;

  token: string | null | undefined;
}

export interface AuthReferrer {
  url?: string | null | undefined;
}

// tslint:disable-next-line: interface-name
export interface ITokenService {
  /** 获取登录地址 */
  readonly login_url: string | undefined;

  /** 获取授权失败前路由信息 */
  readonly referrer?: AuthReferrer;

  set(data: ITokenModel | null): boolean;

  /**
   * 获取Token，形式包括：
   * - `get()` 获取 Simple Token
   * - `get<JWTTokenModel>(JWTTokenModel)` 获取 JWT Token
   */
  get(type?: any): ITokenModel | null;

  /**
   * 获取Token，形式包括：
   * - `get()` 获取 Simple Token
   * - `get<JWTTokenModel>(JWTTokenModel)` 获取 JWT Token
   */
  get<T extends ITokenModel>(type?: any): T;

  clear(): void;

  change(): Observable<ITokenModel | null>;
}
