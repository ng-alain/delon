// tslint:disable:no-console class-name
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators/tap';
import { catchError } from 'rxjs/operators/catchError';
import * as moment from 'moment';
import { AlainThemeOptions, ALAIN_THEME_OPTIONS } from '../../theme.options';

/**
 * 封装HttpClient，主要解决：
 * + 优化HttpClient在参数上便利性
 * + 统一实现 loading
 * + 统一处理时间格式问题
 */
@Injectable()
export class _HttpClient {
    constructor(
        private http: HttpClient,
        @Inject(ALAIN_THEME_OPTIONS) private themeOptions: AlainThemeOptions) { }

    private _loading = false;

    /** 是否正在加载中 */
    get loading(): boolean {
        return this._loading;
    }

    parseParams(params: any): HttpParams {
        let ret = new HttpParams();
        if (params) {
            // tslint:disable-next-line:forin
            for (const key in params) {
                let _data = params[key];
                // 将时间转化为：时间戳 (秒)
                if (moment.isDate(_data)) {
                    _data = moment(_data).unix();
                }
                ret = ret.set(key, _data);
            }
        }
        return ret;
    }

    appliedUrl(url: string, params?: any) {
        if (!params) return url;
        url += ~url.indexOf('?') ? '&' : '?';
        // tslint:disable-next-line:forin
        for (const key in params) {
            url += `${key}=${params[key]}`;
        }
        return url;
    }

    private begin() {
        // console.time('http');
        this._loading = true;
    }

    private end() {
        // console.timeEnd('http');
        this._loading = false;
    }

    /** 服务端URL地址 */
    get SERVER_URL(): string {
        return this.themeOptions.SERVER_URL || '/';
    }

    /**
     * `get` 请求
     *
     * @param {string} url URL地址
     * @param {*} [params] 请求参数
     */
    get(url: string, params?: any): Observable<any> {
        this.begin();
        return this.http
            .get(url, {
                params: this.parseParams(params)
            })
            .pipe(
                tap(() => this.end()),
                catchError((res) => {
                    this.end();
                    return res;
                })
            );
    }

    /**
     * `post` 请求
     *
     * @param {string} url URL地址
     * @param {*} [body] body内容
     * @param {*} [params] 请求参数
     */
    post(url: string, body?: any, params?: any): Observable<any> {
        this.begin();
        return this.http
            .post(url, body || null, {
                params: this.parseParams(params)
            })
            .pipe(
                tap(() => this.end()),
                catchError((res) => {
                    this.end();
                    return res;
                })
            );
    }

    /**
     * `delete` 请求
     *
     * @param {string} url URL地址
     * @param {*} [params] 请求参数
     */
    delete(url: string, params?: any): Observable<any> {
        this.begin();
        return this.http
            .delete(url, {
                params: this.parseParams(params)
            })
            .pipe(
                tap(() => this.end()),
                catchError((res) => {
                    this.end();
                    return res;
                })
            );
    }

    /**
     * `jsonp` 请求
     *
     * @param {string} url URL地址
     * @param {*} [params] 请求参数
     * @param {string} [callbackParam] CALLBACK值，默认：JSONP_CALLBACK
     */
    jsonp(url: string, params?: any, callbackParam: string = 'JSONP_CALLBACK'): Observable<any> {
        this.begin();

        return this.http
            .jsonp(this.appliedUrl(url, params), callbackParam)
            .pipe(
                tap(() => this.end()),
                catchError((res) => {
                    this.end();
                    return res;
                })
            );
    }

    /**
     * `patch` 请求
     *
     * @param {string} url URL地址
     * @param {*} [body] 请求参数
     */
    patch(url: string, body?: any): Observable<any> {
        this.begin();
        return this.http.patch(url, body)
            .pipe(
                tap(() => this.end()),
                catchError((res) => {
                    this.end();
                    return res;
                })
            );
    }

    /**
     * `put` 请求
     *
     * @param {string} url URL地址
     * @param {*} [body] 请求参数
     */
    put(url: string, body?: any): Observable<any> {
        this.begin();
        return this.http.put(url, body)
            .pipe(
                tap(() => this.end()),
                catchError((res) => {
                    this.end();
                    return res;
                })
            );
    }

    /**
     * `request` 请求
     *
     * @param {string} method 请求方法类型
     * @param {string} url URL地址
     * @param {*} [options] 参数
     */
    request(method: string, url: string, options?: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body' | 'events' | 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        reportProgress?: boolean;
        withCredentials?: boolean;
    }): Observable<any> {
        this.begin();
        return this.http.request(method, url, options)
            .pipe(
                tap(() => this.end()),
                catchError((res) => {
                    this.end();
                    return res;
                })
            );
    }
}
