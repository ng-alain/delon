import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AlainThemeConfig } from '../../theme.config';
import { HttpClientConfig } from './http.config';

export type _HttpHeaders = HttpHeaders | { [header: string]: string | string[] };
export type HttpObserve = 'body' | 'events' | 'response';

/**
 * 封装HttpClient，主要解决：
 * + 优化HttpClient在参数上便利性
 * + 统一实现 loading
 * + 统一处理时间格式问题
 */
@Injectable({ providedIn: 'root' })
// tslint:disable-next-line:class-name
export class _HttpClient {
  private cog: HttpClientConfig;
  constructor(private http: HttpClient, cog: AlainThemeConfig) {
    this.cog = {
      nullValueHandling: 'include',
      dateValueHandling: 'timestamp',
      ...cog!.http,
    };
  }

  private _loading = false;

  /** 是否正在加载中 */
  get loading(): boolean {
    return this._loading;
  }

  parseParams(params: {}): HttpParams {
    const newParams = {};
    Object.keys(params).forEach(key => {
      let _data = params[key];
      // 忽略空值
      if (this.cog.nullValueHandling === 'ignore' && _data == null) return;
      // 将时间转化为：时间戳 (秒)
      if (this.cog.dateValueHandling === 'timestamp' && _data instanceof Date) {
        _data = _data.valueOf();
      }
      newParams[key] = _data;
    });
    return new HttpParams({ fromObject: newParams });
  }

  appliedUrl(url: string, params?: {}) {
    if (!params) return url;
    url += ~url.indexOf('?') ? '' : '?';
    const arr: string[] = [];
    // tslint:disable-next-line: forin
    for (const key in params) {
      arr.push(`${key}=${params[key]}`);
    }
    return url + arr.join('&');
  }

  begin() {
    setTimeout(() => (this._loading = true), 10);
  }

  end() {
    setTimeout(() => (this._loading = false), 10);
  }

  // #region get

  /**
   * GET：返回一个 `string` 类型
   */
  get(
    url: string,
    params: any,
    options: {
      headers?: _HttpHeaders;
      observe?: 'body';
      reportProgress?: boolean;
      responseType: 'text';
      withCredentials?: boolean;
    },
  ): Observable<string>;

  /**
   * GET：返回一个 `HttpEvent<T>` 类型
   */
  get<T>(
    url: string,
    params: any,
    options: {
      headers?: _HttpHeaders;
      observe: 'events';
      reportProgress?: boolean;
      responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
      withCredentials?: boolean;
    },
  ): Observable<HttpEvent<T>>;

  /**
   * GET：返回一个 `HttpResponse<any>` 类型
   */
  get(
    url: string,
    params: any,
    options: {
      headers?: _HttpHeaders;
      observe: 'response';
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    },
  ): Observable<HttpResponse<any>>;

  /**
   * GET：返回一个 `HttpResponse<T>` 类型
   */
  get<T>(
    url: string,
    params: any,
    options: {
      headers?: _HttpHeaders;
      observe: 'response';
      reportProgress?: boolean;
      responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
      withCredentials?: boolean;
    },
  ): Observable<HttpResponse<T>>;

  /**
   * GET：返回一个 `any` 类型
   */
  get(
    url: string,
    params?: any,
    options?: {
      headers?: _HttpHeaders;
      observe?: 'body' | 'events' | 'response';
      reportProgress?: boolean;
      responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
      withCredentials?: boolean;
    },
  ): Observable<any>;

  /**
   * GET：返回一个泛类型
   */
  get<T>(
    url: string,
    params?: any,
    options?: {
      headers?: _HttpHeaders;
      observe: 'body';
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    },
  ): Observable<T>;

  /**
   * GET 请求
   */
  get(
    url: string,
    params: any,
    options: {
      headers?: _HttpHeaders;
      observe?: 'body' | 'events' | 'response';
      reportProgress?: boolean;
      responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
      withCredentials?: boolean;
    } = {},
  ): Observable<any> {
    return this.request('GET', url, {
      params,
      ...options,
    });
  }

  // #endregion

  // #region post

  /**
   * POST：返回一个 `string` 类型
   */
  post(
    url: string,
    body: any,
    params: any,
    options: {
      headers?: _HttpHeaders;
      observe?: 'body';
      reportProgress?: boolean;
      responseType: 'text';
      withCredentials?: boolean;
    },
  ): Observable<string>;

  /**
   * POST：返回一个 `HttpEvent<T>` 类型
   */
  post<T>(
    url: string,
    body: any,
    params: any,
    options: {
      headers?: _HttpHeaders;
      observe: 'events';
      reportProgress?: boolean;
      responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
      withCredentials?: boolean;
    },
  ): Observable<HttpEvent<T>>;

  /**
   * POST：返回一个 `HttpResponse<JSON>` 类型
   */
  post(
    url: string,
    body: any,
    params: any,
    options: {
      headers?: _HttpHeaders;
      observe: 'response';
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    },
  ): Observable<HttpResponse<any>>;

  /**
   * POST：返回一个 `any` 类型
   */
  post(
    url: string,
    body?: any,
    params?: any,
    options?: {
      headers?: _HttpHeaders;
      observe?: 'body' | 'events' | 'response';
      reportProgress?: boolean;
      responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
      withCredentials?: boolean;
    },
  ): Observable<any>;

  /**
   * POST：返回一个 `JSON` 类型
   */
  post<T>(
    url: string,
    body?: any,
    params?: any,
    options?: {
      headers?: _HttpHeaders;
      observe: 'response';
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    },
  ): Observable<T>;

  /**
   * POST 请求
   */
  post(
    url: string,
    body: any,
    params: any,
    options: {
      headers?: _HttpHeaders;
      observe?: 'body' | 'events' | 'response';
      reportProgress?: boolean;
      responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
      withCredentials?: boolean;
    } = {},
  ): Observable<any> {
    return this.request('POST', url, {
      body,
      params,
      ...options,
    });
  }

  // #endregion

  // #region delete

  /**
   * DELETE：返回一个 `string` 类型
   */
  delete(
    url: string,
    params: any,
    options: {
      headers?: _HttpHeaders;
      observe?: 'body';
      reportProgress?: boolean;
      responseType: 'text';
      withCredentials?: boolean;
    },
  ): Observable<string>;

  /**
   * DELETE：返回一个 `JSON` 类型
   */
  delete(
    url: string,
    params: any,
    options: {
      headers?: _HttpHeaders;
      observe: 'response';
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    },
  ): Observable<HttpResponse<{}>>;

  /**
   * DELETE：返回一个 `any` 类型
   */
  delete(
    url: string,
    params?: any,
    options?: {
      headers?: _HttpHeaders;
      observe?: 'body' | 'events' | 'response';
      reportProgress?: boolean;
      responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
      withCredentials?: boolean;
    },
  ): Observable<any>;

  /**
   * DELETE：返回一个泛类型
   */
  delete<T>(
    url: string,
    params?: any,
    options?: {
      headers?: _HttpHeaders;
      observe?: 'body' | 'events' | 'response';
      reportProgress?: boolean;
      responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
      withCredentials?: boolean;
    },
  ): Observable<T>;

  /**
   * DELETE 请求
   */
  delete(
    url: string,
    params: any,
    options: {
      headers?: _HttpHeaders;
      observe?: 'body' | 'events' | 'response';
      reportProgress?: boolean;
      responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
      withCredentials?: boolean;
    } = {},
  ): Observable<any> {
    return this.request('DELETE', url, {
      params,
      ...options,
    });
  }

  // #endregion

  // #region jsonp

  /**
   * `jsonp` 请求
   *
   * @param url URL地址
   * @param params 请求参数
   * @param callbackParam CALLBACK值，默认：JSONP_CALLBACK
   */
  jsonp(url: string, params?: any, callbackParam: string = 'JSONP_CALLBACK'): Observable<any> {
    this.begin();
    return this.http.jsonp(this.appliedUrl(url, params), callbackParam).pipe(
      tap(() => this.end()),
      catchError(res => {
        this.end();
        return throwError(res);
      }),
    );
  }

  // #endregion

  // #region patch

  /**
   * PATCH：返回一个 `string` 类型
   */
  patch(
    url: string,
    body: any,
    params: any,
    options: {
      headers?: _HttpHeaders;
      observe?: 'body';
      reportProgress?: boolean;
      responseType: 'text';
      withCredentials?: boolean;
    },
  ): Observable<string>;

  /**
   * PATCH：返回一个 `HttpResponse<JSON>` 类型
   */
  patch(
    url: string,
    body: any,
    params: any,
    options: {
      headers?: _HttpHeaders;
      observe: 'response';
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    },
  ): Observable<HttpResponse<{}>>;

  /**
   * PATCH：返回一个 `any` 类型
   */
  patch(
    url: string,
    body?: any,
    params?: any,
    options?: {
      headers?: _HttpHeaders;
      observe?: 'body' | 'events' | 'response';
      reportProgress?: boolean;
      responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
      withCredentials?: boolean;
    },
  ): Observable<any>;

  /**
   * PATCH：返回一个 `JSON` 类型
   */
  patch<T>(
    url: string,
    body?: any,
    params?: any,
    options?: {
      headers?: _HttpHeaders;
      observe: 'response';
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    },
  ): Observable<T>;

  /**
   * PATCH 请求
   */
  patch(
    url: string,
    body: any,
    params: any,
    options: {
      headers?: _HttpHeaders;
      observe?: 'body' | 'events' | 'response';
      reportProgress?: boolean;
      responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
      withCredentials?: boolean;
    } = {},
  ): Observable<any> {
    return this.request('PATCH', url, {
      body,
      params,
      ...options,
    });
  }

  // #endregion

  // #region put

  /**
   * PUT：返回一个 `string` 类型
   */
  put(
    url: string,
    body: any,
    params: any,
    options: {
      headers?: _HttpHeaders;
      observe?: 'body';
      reportProgress?: boolean;
      responseType: 'text';
      withCredentials?: boolean;
    },
  ): Observable<string>;

  /**
   * PUT：返回一个 `HttpResponse<JSON>` 类型
   */
  put(
    url: string,
    body: any,
    params: any,
    options: {
      headers?: _HttpHeaders;
      observe: 'response';
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    },
  ): Observable<HttpResponse<{}>>;

  /**
   * PUT：返回一个 `any` 类型
   */
  put(
    url: string,
    body?: any,
    params?: any,
    options?: {
      headers?: _HttpHeaders;
      observe?: 'body' | 'events' | 'response';
      reportProgress?: boolean;
      responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
      withCredentials?: boolean;
    },
  ): Observable<any>;

  /**
   * PUT：返回一个 `JSON` 类型
   */
  put<T>(
    url: string,
    body?: any,
    params?: any,
    options?: {
      headers?: _HttpHeaders;
      observe: 'response';
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    },
  ): Observable<T>;

  /**
   * PUT 请求
   */
  put(
    url: string,
    body: any,
    params: any,
    options: {
      headers?: _HttpHeaders;
      observe?: 'body' | 'events' | 'response';
      reportProgress?: boolean;
      responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
      withCredentials?: boolean;
    } = {},
  ): Observable<any> {
    return this.request('PUT', url, {
      body,
      params,
      ...options,
    });
  }

  // #endregion

  // #region request

  /** 返回一个 `arraybuffer` 类型 */
  request(
    method: string,
    url: string,
    options: {
      body?: any;
      headers?: _HttpHeaders;
      params?: any;
      observe?: 'body';
      reportProgress?: boolean;
      responseType: 'arraybuffer';
      withCredentials?: boolean;
    },
  ): Observable<ArrayBuffer>;

  request(
    method: string,
    url: string,
    options: {
      body?: any;
      headers?: _HttpHeaders;
      params?: any;
      observe?: 'body';
      reportProgress?: boolean;
      responseType: 'blob';
      withCredentials?: boolean;
    },
  ): Observable<Blob>;

  request(
    method: string,
    url: string,
    options: {
      body?: any;
      headers?: _HttpHeaders;
      params?: any;
      observe?: 'body';
      reportProgress?: boolean;
      responseType: 'text';
      withCredentials?: boolean;
    },
  ): Observable<string>;

  request(
    method: string,
    url: string,
    options: {
      body?: any;
      headers?: _HttpHeaders;
      params?: any;
      observe: 'events';
      reportProgress?: boolean;
      responseType: 'arraybuffer';
      withCredentials?: boolean;
    },
  ): Observable<HttpEvent<ArrayBuffer>>;

  request(
    method: string,
    url: string,
    options: {
      body?: any;
      headers?: _HttpHeaders;
      params?: any;
      observe: 'events';
      reportProgress?: boolean;
      responseType: 'blob';
      withCredentials?: boolean;
    },
  ): Observable<HttpEvent<Blob>>;

  request(
    method: string,
    url: string,
    options: {
      body?: any;
      headers?: _HttpHeaders;
      params?: any;
      observe: 'events';
      reportProgress?: boolean;
      responseType: 'text';
      withCredentials?: boolean;
    },
  ): Observable<HttpEvent<string>>;

  request(
    method: string,
    url: string,
    options: {
      body?: any;
      headers?: _HttpHeaders;
      params?: any;
      reportProgress?: boolean;
      observe: 'events';
      responseType?: 'json';
      withCredentials?: boolean;
    },
  ): Observable<HttpEvent<any>>;

  request<R>(
    method: string,
    url: string,
    options: {
      body?: any;
      headers?: _HttpHeaders;
      params?: any;
      reportProgress?: boolean;
      observe: 'events';
      responseType?: 'json';
      withCredentials?: boolean;
    },
  ): Observable<HttpEvent<R>>;

  request(
    method: string,
    url: string,
    options: {
      body?: any;
      headers?: _HttpHeaders;
      params?: any;
      observe: 'response';
      reportProgress?: boolean;
      responseType: 'arraybuffer';
      withCredentials?: boolean;
    },
  ): Observable<HttpResponse<ArrayBuffer>>;

  request(
    method: string,
    url: string,
    options: {
      body?: any;
      headers?: _HttpHeaders;
      params?: any;
      observe: 'response';
      reportProgress?: boolean;
      responseType: 'blob';
      withCredentials?: boolean;
    },
  ): Observable<HttpResponse<Blob>>;

  request(
    method: string,
    url: string,
    options: {
      body?: any;
      headers?: _HttpHeaders;
      params?: any;
      observe: 'response';
      reportProgress?: boolean;
      responseType: 'text';
      withCredentials?: boolean;
    },
  ): Observable<HttpResponse<string>>;

  request(
    method: string,
    url: string,
    options: {
      body?: any;
      headers?: _HttpHeaders;
      params?: any;
      reportProgress?: boolean;
      observe: 'response';
      responseType?: 'json';
      withCredentials?: boolean;
    },
    // tslint:disable-next-line: ban-types
  ): Observable<HttpResponse<Object>>;

  request<R>(
    method: string,
    url: string,
    options: {
      body?: any;
      headers?: _HttpHeaders;
      params?: any;
      reportProgress?: boolean;
      observe: 'response';
      responseType?: 'json';
      withCredentials?: boolean;
    },
  ): Observable<HttpResponse<R>>;

  request(
    method: string,
    url: string,
    options?: {
      body?: any;
      headers?: _HttpHeaders;
      params?: any;
      observe?: 'body';
      responseType?: 'json';
      reportProgress?: boolean;
      withCredentials?: boolean;
    },
    // tslint:disable-next-line: ban-types
  ): Observable<Object>;

  request<R>(
    method: string,
    url: string,
    options?: {
      body?: any;
      headers?: _HttpHeaders;
      params?: any;
      observe?: 'body';
      responseType?: 'json';
      reportProgress?: boolean;
      withCredentials?: boolean;
    },
  ): Observable<R>;

  request(
    method: string,
    url: string,
    options?: {
      body?: any;
      headers?: _HttpHeaders;
      params?: any;
      observe?: HttpObserve;
      reportProgress?: boolean;
      responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
      withCredentials?: boolean;
    },
  ): Observable<any>;

  request(
    method: string,
    url: string,
    options: {
      body?: any;
      headers?: _HttpHeaders;
      params?: any;
      observe?: HttpObserve;
      reportProgress?: boolean;
      responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
      withCredentials?: boolean;
    } = {},
  ): Observable<any> {
    this.begin();
    if (options.params) options.params = this.parseParams(options.params);
    return this.http.request(method, url, options).pipe(
      tap(() => this.end()),
      catchError(res => {
        this.end();
        return throwError(res);
      }),
    );
  }

  // #endregion
}
