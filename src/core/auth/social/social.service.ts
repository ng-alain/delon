import { Observable } from 'rxjs/Observable';
import { Injectable, Inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { ITokenModel, ITokenService, DA_SERVICE_TOKEN } from '../token/interface';
import { Observer } from 'rxjs/Observer';

const OPENTYPE = '_delonAuthSocialType';
const HREFCALLBACK = '_delonAuthSocialCallbackByHref';

export type SocialOpenType = 'href' | 'window';

@Injectable()
export class SocialService implements OnDestroy {
    private _win: Window;
    private _win$: any;
    private observer: Observer<ITokenModel>;

    constructor(
        @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
        @Inject(DOCUMENT) private doc: any,
        private router: Router) {}

    /**
     * 使用窗体打开授权页，返回值是 `Observable<ITokenModel>` 用于订阅授权后返回的结果
     * @param url 获取授权地址
     * @param callback 回调路由地址
     * @param options.windowFeatures 等同 `window.open` 的 `features` 参数值
     */
    login(url: string, callback?: string, options?: {
        type?: 'window',
        windowFeatures?: string
    }): Observable<ITokenModel>;

    /**
     * 跳转至授权页
     * @param url 获取授权地址
     * @param callback 回调路由地址
     */
    login(url: string, callback?: string, options?: {
        type?: 'href'
    }): void;

    /**
     * 跳转至登录页，若为 `type=window` 时，返回值是 `Observable<ITokenModel>`
     * @param url 获取授权地址
     * @param callback 当 `type=href` 成功时的回调路由地址
     * @param options.type 打开方式
     * @param options.windowFeatures 等同 `window.open` 的 `features` 参数值
     */
    login(url: string, callback?: string, options: {
        type?: 'href' | 'window',
        windowFeatures?: string
    } = {}): Observable<ITokenModel> | void {
        options = Object.assign({
            type: 'href',
            windowFeatures: 'location=yes,height=570,width=520,scrollbars=yes,status=yes'
        }, options);
        localStorage.setItem(OPENTYPE, options.type);
        localStorage.setItem(HREFCALLBACK, callback || '/');
        if (options.type === 'href') {
            this.doc.location.href = url;
        } else {
            this._win = window.open(url, '_blank', options.windowFeatures);
            this._win$ = setInterval(() => {
                if (this._win && this._win.closed) {
                    this.ngOnDestroy();

                    let model = this.tokenService.get();
                    if (model && !model.token) model = null;

                    if (model) {
                        this.tokenService.set(model);
                    }

                    if (this.observer) {
                        this.observer.next(model);
                        this.observer.complete();
                    }
                }
            }, 100);
        }
        if (options.type === 'window') {
            return Observable.create((observer: Observer<ITokenModel>) => {
                this.observer = observer;
            });
        } else {
            return ;
        }
    }

    /**
     * 授权成功后的回调处理
     * @param rawData 指定回调认证信息，为空时从根据当前URL解析
     */
    callback(rawData?: string | ITokenModel, allowRedirect: boolean = true): ITokenModel {
        // from uri
        if (!rawData && this.router.url.indexOf('?') === -1) {
            throw new Error(`url muse contain a ?`);
        }
        // parse
        let data: ITokenModel = { token: `` };
        if (typeof rawData === 'string') {
            const rightUrl = rawData.split('?')[1].split('#')[0];
            data = <any>this.router.parseUrl(~rightUrl.indexOf('?') ? rightUrl : './?' + rightUrl).queryParams || {};
        } else {
            data = rawData;
        }

        if (!data || !data.token) throw new Error(`invalide token data`);
        this.tokenService.set(data);

        // redirect
        if (allowRedirect === true) {
            const url = localStorage.getItem(HREFCALLBACK) || '/';
            localStorage.removeItem(HREFCALLBACK);
            const type = localStorage.getItem(OPENTYPE);
            localStorage.removeItem(OPENTYPE);
            if (type === 'window') {
                window.close();
            } else {
                this.router.navigateByUrl(url);
            }
        }

        return data;
    }

    ngOnDestroy(): void {
        if (this._win$) {
            clearInterval(this._win$);
            this._win$ = null;
        }
    }
}
