import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';

import { DA_SERVICE_TOKEN, ITokenModel, ITokenService } from '../token/interface';

const OPENTYPE = '_delonAuthSocialType';
const HREFCALLBACK = '_delonAuthSocialCallbackByHref';

export type SocialOpenType = 'href' | 'window';

@Injectable()
export class SocialService implements OnDestroy {
  private _win: Window;
  private _winTime;
  private observer: Observer<ITokenModel>;

  constructor(
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    @Inject(DOCUMENT) private doc: any,
    private router: Router,
  ) {}

  /**
   * 使用窗体打开授权页，返回值是 `Observable<ITokenModel>` 用于订阅授权后返回的结果
   * @param url 获取授权地址
   * @param callback 回调路由地址
   * @param options.windowFeatures 等同 `window.open` 的 `features` 参数值
   */
  login(
    url: string,
    callback?: string,
    options?: {
      type?: 'window';
      windowFeatures?: string;
    },
  ): Observable<ITokenModel>;

  /**
   * 跳转至授权页
   * @param url 获取授权地址
   * @param callback 回调路由地址
   */
  login(
    url: string,
    callback?: string,
    options?: {
      type?: 'href';
    },
  ): void;

  /**
   * 跳转至登录页，若为 `type=window` 时，返回值是 `Observable<ITokenModel>`
   * @param url 获取授权地址
   * @param callback 当 `type=href` 成功时的回调路由地址
   * @param options.type 打开方式，默认 `window`
   * @param options.windowFeatures 等同 `window.open` 的 `features` 参数值
   */
  login(
    url: string,
    callback: string = '/',
    options: {
      type?: SocialOpenType;
      windowFeatures?: string;
    } = {},
  ): Observable<ITokenModel> | void {
    options = {
      type: 'window',
      windowFeatures: 'location=yes,height=570,width=520,scrollbars=yes,status=yes',
      ...options,
    };
    localStorage.setItem(OPENTYPE, options.type);
    localStorage.setItem(HREFCALLBACK, callback);
    if (options.type === 'href') {
      this.doc.location.href = url;
      return;
    }

    this._win = window.open(url, '_blank', options.windowFeatures);
    this._winTime = setInterval(() => {
      if (this._win && this._win.closed) {
        this.ngOnDestroy();

        let model = this.tokenService.get();
        if (model && !model.token) model = null;

        // 触发变更通知
        if (model) {
          this.tokenService.set(model);
        }

        this.observer.next(model);
        this.observer.complete();
      }
    }, 100);
    return Observable.create((observer: Observer<ITokenModel>) => {
      this.observer = observer;
    });
  }

  /**
   * 授权成功后的回调处理
   *
   * @param rawData 指定回调认证信息，为空时从根据当前URL解析
   */
  callback(rawData?: string | ITokenModel): ITokenModel {
    // from uri
    if (!rawData && this.router.url.indexOf('?') === -1) {
      throw new Error(`url muse contain a ?`);
    }
    // parse
    let data: ITokenModel = { token: `` };
    if (typeof rawData === 'string') {
      const rightUrl = rawData.split('?')[1].split('#')[0];
      data = this.router.parseUrl('./?' + rightUrl).queryParams as ITokenModel;
    } else {
      data = rawData;
    }

    if (!data || !data.token) throw new Error(`invalide token data`);
    this.tokenService.set(data);

    const url = localStorage.getItem(HREFCALLBACK) || '/';
    localStorage.removeItem(HREFCALLBACK);
    const type = localStorage.getItem(OPENTYPE);
    localStorage.removeItem(OPENTYPE);
    if (type === 'window') {
      window.close();
    } else {
      this.router.navigateByUrl(url);
    }

    return data;
  }

  ngOnDestroy(): void {
    clearInterval(this._winTime);
    this._winTime = null;
  }
}
