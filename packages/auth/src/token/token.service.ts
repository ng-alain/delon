import { inject, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { DelonAuthConfig } from '../auth.config';
import { DA_STORE_TOKEN, IStore } from '../store/interface';
import { AuthReferrer, ITokenModel, ITokenService } from './interface';

export function DA_SERVICE_TOKEN_FACTORY(): ITokenService {
  return new TokenService(inject(DelonAuthConfig), inject(DA_STORE_TOKEN));
}

/**
 * 维护Token信息服务，[在线文档](https://ng-alain.com/auth)
 */
export class TokenService implements ITokenService {
  private change$ = new BehaviorSubject<ITokenModel | null>(null);
  private _referrer: AuthReferrer = {};

  constructor(private options: DelonAuthConfig, @Inject(DA_STORE_TOKEN) private store: IStore) { }

  /**
   * 授权失败后跳转路由路径（支持外部链接地址），通过设置全局 `DelonAuthConfig.login_url` 来改变
   */
  get login_url(): string | undefined {
    return this.options.login_url;
  }

  /**
   * 当前请求页面的来源页面的地址
   */
  get referrer() {
    return this._referrer;
  }

  /**
   * 设置 Token 信息
   */
  set(data: ITokenModel): boolean {
    this.change$.next(data);
    return this.store.set(this.options.store_key!, data);
  }

  /**
   * 获取 Token 信息，例如：
   * ```
   * // 返回 `any` 类型 Token 对象
   * const token = tokenService.get();
   * // 获取 JWT 类型的 Token 对象
   * const token = tokenService.get<JWTTokenModel>(JWTTokenModel);
   * // 获取 Simple 类型的 Token 对象
   * const token = tokenService.get<SimpleTokenModel>(SimpleTokenModel);
   * ```
   */
  get(type?: any): any;
  get<T extends ITokenModel>(type?: new () => T): T {
    const data = this.store.get(this.options.store_key!);
    return type ? (Object.assign(new type(), data) as T) : (data as T);
  }

  /**
   * 清除 Token 信息，例如：
   * ```
   * // 清除所有 Token 信息
   * tokenService.clear();
   * // 只清除 token 字段
   * tokenService.clear({ onlyToken: true });
   * ```
   */
  clear(options: { onlyToken: boolean } = { onlyToken: false }) {
    let data: ITokenModel | null = null;
    if (options.onlyToken === true) {
      data = this.get() as ITokenModel;
      data.token = ``;
      this.set(data);
    } else {
      this.store.remove(this.options.store_key!);
    }
    this.change$.next(data);
  }

  /**
   * 订阅 Token 对象变更通知
   */
  change(): Observable<ITokenModel | null> {
    return this.change$.pipe(share());
  }
}
