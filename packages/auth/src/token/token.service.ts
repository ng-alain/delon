import { inject, Inject, Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, interval, Observable, Subject, Subscription } from 'rxjs';
import { filter, map, share } from 'rxjs/operators';

import { AlainAuthConfig, AlainConfigService } from '@delon/util/config';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { mergeConfig } from '../auth.config';
import { DA_STORE_TOKEN, IStore } from '../store/interface';
import { AuthReferrer, ITokenModel, ITokenService } from './interface';

export function DA_SERVICE_TOKEN_FACTORY(): ITokenService {
  return new TokenService(inject(AlainConfigService), inject(DA_STORE_TOKEN));
}

/**
 * 维护Token信息服务，[在线文档](https://ng-alain.com/auth)
 */
@Injectable()
export class TokenService implements ITokenService, OnDestroy {
  private refresh$ = new Subject<ITokenModel>();
  private change$ = new BehaviorSubject<ITokenModel | null>(null);
  private interval$: Subscription;
  private _referrer: AuthReferrer = {};
  private _options: AlainAuthConfig;

  constructor(configSrv: AlainConfigService, @Inject(DA_STORE_TOKEN) private store: IStore) {
    this._options = mergeConfig(configSrv);
  }

  get refresh(): Observable<ITokenModel> {
    this.builderRefresh();
    return this.refresh$.pipe(share());
  }

  get login_url(): string | undefined {
    return this._options.login_url?.toString();
  }

  get referrer(): AuthReferrer {
    return this._referrer;
  }

  get options(): AlainAuthConfig {
    return this._options;
  }

  set(data: ITokenModel): boolean {
    const res = this.store.set(this._options.store_key!, data);
    this.change$.next(data);
    return res;
  }

  get(type?: NzSafeAny): NzSafeAny;
  get<T extends ITokenModel>(type?: new () => T): T {
    const data = this.store.get(this._options.store_key!);
    return type ? (Object.assign(new type(), data) as T) : (data as T);
  }

  clear(options: { onlyToken: boolean } = { onlyToken: false }): void {
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

  change(): Observable<ITokenModel | null> {
    return this.change$.pipe(share());
  }

  private builderRefresh(): void {
    const { refreshTime, refreshOffset } = this._options;
    this.cleanRefresh();
    this.interval$ = interval(refreshTime)
      .pipe(
        map(() => {
          const item = this.get() as ITokenModel;
          const expired = item.expired || item.exp || 0;
          if (expired <= 0) {
            return null;
          }

          const curTime = new Date().valueOf() + refreshOffset!;
          return expired <= curTime ? item : null;
        }),
        filter(v => v != null)
      )
      .subscribe(res => this.refresh$.next(res!));
  }

  private cleanRefresh(): void {
    if (this.interval$ && !this.interval$.closed) {
      this.interval$.unsubscribe();
    }
  }

  ngOnDestroy(): void {
    this.cleanRefresh();
  }
}
