import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlainConfigService, AlainThemeHttpClientConfig } from '@delon/util/config';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Observable, of } from 'rxjs';
import { finalize, switchMap } from 'rxjs/operators';

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
  private cog: AlainThemeHttpClientConfig;
  constructor(private http: HttpClient, cogSrv: AlainConfigService) {
    this.cog = cogSrv.merge('themeHttp', {
      nullValueHandling: 'include',
      dateValueHandling: 'timestamp',
    })!;
  }

  private lc = 0;

  /**
   * Get whether it's loading
   *
   * 获取是否正在加载中
   */
  get loading(): boolean {
    return this.lc > 0;
  }

  /**
   * Get the currently loading count
   *
   * 获取当前加载中的数量
   */
  get loadingCount(): number {
    return this.lc;
  }

  parseParams(params: NzSafeAny): HttpParams {
    const newParams: NzSafeAny = {};
    if (params instanceof HttpParams) {
      return params;
    }

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

  appliedUrl(url: string, params?: NzSafeAny): string {
    if (!params) return url;
    url += ~url.indexOf('?') ? '' : '?';
    const arr: string[] = [];
    // tslint:disable-next-line: forin
    for (const key in params) {
      arr.push(`${key}=${params[key]}`);
    }
    return url + arr.join('&');
  }

  private setCount(count: number): void {
    Promise.resolve(null).then(() => (this.lc = count <= 0 ? 0 : count));
  }

  private push(): void {
    this.setCount(++this.lc);
  }

  private pop(): void {
    this.setCount(--this.lc);
  }

  /**
   * @deprecated Will be removed in 12.0.0, Pls used `cleanLoading` instead
   */
  end(): void {
    this.cleanLoading();
  }

  /**
   * Clean loading count
   *
   * 清空加载中
   */
  cleanLoading(): void {
    this.setCount(0);
  }

  // #region get

  /**
   * **GET Request** Return a `string` type / 返回一个 `string` 类型
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
   * **GET Request** Return a `HttpEvent<T>` type / 返回一个 `HttpEvent<T>` 类型
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
   * **GET Request** Return a `HttpResponse<any>` type / 返回一个 `HttpResponse<any>` 类型
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
   * **GET Request** Return a `HttpResponse<T>` type / 返回一个 `HttpResponse<T>` 类型
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
   * **GET Request** Return a `any` type / 返回一个 `any` 类型
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
   * **GET Request** Return a generic type / 返回一个泛类型
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
   * **POST Request** Return a `string` type / 返回一个 `string` 类型
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
   * **POST Request** Return a `HttpEvent<T>` type / 返回一个 `HttpEvent<T>` 类型
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
   * **POST Request** Return a `HttpResponse<any>` type / 返回一个 `HttpResponse<any>` 类型
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
   * **POST Request** Return a `any` type / 返回一个 `any` 类型
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
   * **POST Request** Return a JSON type / 返回一个 `JSON` 类型
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
   * **DELETE Request** Return a `string` type / 返回一个 `string` 类型
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
   * **DELETE Request** Return a `JSON` type / 返回一个 `JSON` 类型
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
   * **DELETE Request** Return a `any` type / 返回一个 `any` 类型
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
   * c返回一个泛类型
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
   * **JSONP Request**
   *
   * @param callbackParam CALLBACK值，默认：JSONP_CALLBACK
   */
  jsonp(url: string, params?: any, callbackParam: string = 'JSONP_CALLBACK'): Observable<any> {
    this.push();
    return this.http.jsonp(this.appliedUrl(url, params), callbackParam).pipe(finalize(() => this.pop()));
  }

  // #endregion

  // #region patch

  /**
   * **PATCH Request** Return a `string` type / 返回一个 `string` 类型
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
   * **PATCH Request** Return a `HttpResponse<JSON>` type / 返回一个 `HttpResponse<JSON>` 类型
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
   * **PATCH Request** Return a `any` type / 返回一个 `any` 类型
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
   * **PATCH Request** Return a `JSON` type / 返回一个 `JSON` 类型
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
   * **PUT Request** Return a `string` type / 返回一个 `string` 类型
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
   * **PUT Request** Return a `HttpResponse<JSON>` type / 返回一个 `HttpResponse<JSON>` 类型
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
   * **PUT Request** Return a `any` type / 返回一个 `any` 类型
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
   * **PUT Request** Return a `JSON` type / 返回一个 `JSON` 类型
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

  // #region form

  /**
   * **Form Request** Return a `string` type / 返回一个 `string` 类型
   */
  form(
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
   * **Form Request** Return a `HttpEvent<T>` type / 返回一个 `HttpEvent<T>` 类型
   */
  form<T>(
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
   * **Form Request** Return a `HttpResponse<JSON>` type / 返回一个 `HttpResponse<JSON>` 类型
   */
  form(
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
   * **Form Request** Return a `any` type / 返回一个 `any` 类型
   */
  form(
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
   * **Form Request** Return a `JSON` type / 返回一个 `JSON` 类型
   */
  form<T>(
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

  form(
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
      headers: {
        'content-type': `application/x-www-form-urlencoded`,
      },
    });
  }

  // #endregion

  // #region request

  /**
   * **Request** Return a `ArrayBuffer` type / 返回一个 `ArrayBuffer` 类型
   */
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

  /**
   * **Request** Return a `Blob` type / 返回一个 `Blob` 类型
   */
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

  /**
   * **Request** Return a `string` type / 返回一个 `string` 类型
   */
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

  /**
   * **Request** Return a `HttpEvent<ArrayBuffer>` type / 返回一个 `HttpEvent<ArrayBuffer>` 类型
   */
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

  /**
   * **Request** Return a `HttpEvent<Blob>` type / 返回一个 `HttpEvent<Blob>` 类型
   */
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

  /**
   * **Request** Return a `HttpEvent<string>` type / 返回一个 `HttpEvent<string>` 类型
   */
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

  /**
   * **Request** Return a `HttpEvent<any>` type / 返回一个 `HttpEvent<any>` 类型
   */
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

  /**
   * **Request** Return a `HttpEvent<R>` type / 返回一个 `HttpEvent<R>` 类型
   */
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

  /**
   * **Request** Return a `HttpResponse<ArrayBuffer>` type / 返回一个 `HttpResponse<ArrayBuffer>` 类型
   */
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

  /**
   * **Request** Return a `HttpResponse<Blob>` type / 返回一个 `HttpResponse<Blob>` 类型
   */
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

  /**
   * **Request** Return a `HttpResponse<string>` type / 返回一个 `HttpResponse<string>` 类型
   */
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

  /**
   * **Request** Return a `HttpResponse<Object>` type / 返回一个 `HttpResponse<Object>` 类型
   */
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
  ): // tslint:disable-next-line: ban-types
  Observable<HttpResponse<Object>>;

  /**
   * **Request** Return a `HttpResponse<R>` type / 返回一个 `HttpResponse<R>` 类型
   */
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

  /**
   * **Request** Return a `HttpResponse<Object>` type / 返回一个 `HttpResponse<Object>` 类型
   */
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
  ): // tslint:disable-next-line: ban-types
  Observable<Object>;

  /**
   * **Request** Return a `R` type / 返回一个 `R` 类型
   */
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

  /**
   * **Request** Return a `any` type / 返回一个 `any` 类型
   */
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
    this.push();
    if (options.params) options.params = this.parseParams(options.params);
    return of(null).pipe(
      switchMap(() => this.http.request(method, url, options)),
      finalize(() => this.pop()),
    );
  }

  // #endregion
}
