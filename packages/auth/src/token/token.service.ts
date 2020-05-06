import { inject, Inject } from '@angular/core';
import { AlainAuthConfig, AlainConfigService } from '@delon/util';
import { BehaviorSubject, Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { mergeConfig } from '../auth.config';
import { DA_STORE_TOKEN, IStore } from '../store/interface';
import { AuthReferrer, ITokenModel, ITokenService } from './interface';

export function DA_SERVICE_TOKEN_FACTORY(): ITokenService {
  return new TokenService(inject(AlainConfigService), inject(DA_STORE_TOKEN));
}

/**
 * 维护Token信息服务，[在线文档](https://ng-alain.com/auth)
 */
export class TokenService implements ITokenService {
  private change$ = new BehaviorSubject<ITokenModel | null>(null);
  private _referrer: AuthReferrer = {};
  private _options: AlainAuthConfig;

  constructor(configSrv: AlainConfigService, @Inject(DA_STORE_TOKEN) private store: IStore) {
    this._options = mergeConfig(configSrv);
  }

  /**
   * 授权失败后跳转路由路径（支持外部链接地址），通过设置[全局配置](https://ng-alain.com/docs/global-config)来改变
   */
  get login_url(): string | undefined {
    return this._options.login_url;
  }

  /**
   * 当前请求页面的来源页面的地址
   */
  get referrer() {
    return this._referrer;
  }

  get options() {
    return this._options;
  }

  /**
   * 设置 Token 信息，当用户 Token 发生变动时都需要调用此方法重新刷新
   */
  set(data: ITokenModel): boolean {
    this.change$.next(data);
    return this.store.set(this._options.store_key!, data);
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
    const data = this.store.get(this._options.store_key!);
    return type ? (Object.assign(new type(), data) as T) : (data as T);
  }

  /**
   * 清除 Token 信息，当用户退出登录时调用。
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
      this.store.remove(this._options.store_key!);
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
