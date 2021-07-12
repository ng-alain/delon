import { HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, Injector } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { ACLService } from '@delon/acl';

import { _HttpClient } from './http.client';

/**
 * Every http decorator must be based on `BaseAPI`, Like this:
 * ```ts
 * \@Injectable()
 * class DataService extends BaseApi {}
 * ```
 */
@Injectable()
export abstract class BaseApi {
  constructor(@Inject(Injector) protected injector: Injector) {}
}

export interface HttpOptions {
  /** ACL配置，若导入 `@delon/acl` 时自动有效，等同于 `ACLService.can(roleOrAbility: ACLCanType)` 参数值 */
  acl?: any;
  observe?: 'body' | 'events' | 'response';
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
  reportProgress?: boolean;
  withCredentials?: boolean;
}

interface ParamType {
  key: string;
  index: number;
  [key: string]: any;
  [key: number]: any;
}

const paramKey = `__api_params`;

function setParam(target: any, key: string = paramKey): any {
  let params = target[key];
  if (typeof params === 'undefined') {
    params = target[key] = {};
  }
  return params;
}

/**
 * 默认基准URL
 * - 有效范围：类
 */
export function BaseUrl(url: string) {
  return function <TClass extends new (...args: any[]) => BaseApi>(target: TClass): TClass {
    const params = setParam(target.prototype);
    params.baseUrl = url;
    return target;
  };
}

/**
 * 默认 `headers`
 * - 有效范围：类
 */
export function BaseHeaders(
  headers:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      }
) {
  return function <TClass extends new (...args: any[]) => BaseApi>(target: TClass): TClass {
    const params = setParam(target.prototype);
    params.baseHeaders = headers;
    return target;
  };
}

function makeParam(paramName: string) {
  return function (key?: string) {
    return function (target: BaseApi, propertyKey: string, index: number) {
      const params = setParam(setParam(target), propertyKey);
      let tParams = params[paramName];
      if (typeof tParams === 'undefined') {
        tParams = params[paramName] = [];
      }
      tParams.push({
        key,
        index
      });
    };
  };
}

/**
 * URL路由参数
 * - 有效范围：方法参数
 */
export const Path = makeParam('path');

/**
 * URL 参数 `QueryString`
 * - 有效范围：方法参数
 */
export const Query = makeParam('query');

/**
 * 参数 `Body`
 * - 有效范围：方法参数
 */
export const Body = makeParam('body')();

/**
 * 参数 `headers`
 * - 有效范围：方法参数
 * - 合并 `BaseHeaders`
 */
export const Headers = makeParam('headers');

/**
 * Request Payload
 * - Supported body (like`POST`, `PUT`) as a body data, equivalent to `@Body`
 * - Not supported body (like `GET`, `DELETE` etc) as a `QueryString`
 */
export const Payload = makeParam('payload')();

function getValidArgs(data: any, key: string, args: any[]): NzSafeAny {
  if (!data[key] || !Array.isArray(data[key]) || data[key].length <= 0) {
    return undefined;
  }
  return args[data[key][0].index];
}

function genBody(data?: any, payload?: any): any {
  if (Array.isArray(data) || Array.isArray(payload)) {
    return Object.assign([], data, payload);
  }
  return { ...data, ...payload };
}

export type METHOD_TYPE = 'OPTIONS' | 'GET' | 'POST' | 'DELETE' | 'PUT' | 'HEAD' | 'PATCH' | 'JSONP' | 'FORM';

function makeMethod(method: METHOD_TYPE) {
  return function (url: string = '', options?: HttpOptions) {
    return (_target: BaseApi, targetKey?: string, descriptor?: PropertyDescriptor) => {
      descriptor!.value = function (...args: any[]): Observable<any> {
        options = options || {};

        const injector = (this as NzSafeAny).injector as Injector;
        const http = injector.get(_HttpClient, null) as _HttpClient;
        if (http == null) {
          throw new TypeError(
            `Not found '_HttpClient', You can import 'AlainThemeModule' && 'HttpClientModule' in your root module.`
          );
        }

        const baseData = setParam(this);
        const data = setParam(baseData, targetKey);

        let requestUrl = url || '';
        requestUrl = [baseData.baseUrl || '', requestUrl.startsWith('/') ? requestUrl.substr(1) : requestUrl].join('/');
        // fix last split
        if (requestUrl.length > 1 && requestUrl.endsWith('/')) {
          requestUrl = requestUrl.substr(0, requestUrl.length - 1);
        }

        if (options.acl) {
          const aclSrv = injector.get(ACLService, null);
          if (aclSrv && !aclSrv.can(options.acl)) {
            return throwError({
              url: requestUrl,
              status: 401,
              statusText: `From Http Decorator`
            });
          }
          delete options.acl;
        }

        requestUrl = requestUrl.replace(/::/g, '^^');
        ((data.path as ParamType[]) || [])
          .filter(w => typeof args[w.index] !== 'undefined')
          .forEach((i: ParamType) => {
            requestUrl = requestUrl.replace(new RegExp(`:${i.key}`, 'g'), encodeURIComponent(args[i.index]));
          });
        requestUrl = requestUrl.replace(/\^\^/g, `:`);

        const params = (data.query || []).reduce((p: NzSafeAny, i: ParamType) => {
          p[i.key] = args[i.index];
          return p;
        }, {});

        const headers = (data.headers || []).reduce((p: NzSafeAny, i: ParamType) => {
          p[i.key] = args[i.index];
          return p;
        }, {});

        if (method === 'FORM') {
          headers['content-type'] = 'application/x-www-form-urlencoded';
        }

        const payload = getValidArgs(data, 'payload', args);
        const supportedBody = method === 'POST' || method === 'PUT';

        return http.request(method, requestUrl, {
          body: supportedBody ? genBody(getValidArgs(data, 'body', args), payload) : null,
          params: !supportedBody ? { ...params, ...payload } : params,
          headers: { ...baseData.baseHeaders, ...headers },
          ...options
        });
      };

      return descriptor;
    };
  };
}

/**
 * `OPTIONS` 请求
 * - 有效范围：方法
 */
export const OPTIONS = makeMethod('OPTIONS');

/**
 * `GET` 请求
 * - 有效范围：方法
 */
export const GET = makeMethod('GET');

/**
 * `POST` 请求
 * - 有效范围：方法
 */
export const POST = makeMethod('POST');

/**
 * `DELETE` 请求
 * - 有效范围：方法
 */
export const DELETE = makeMethod('DELETE');

/**
 * `PUT` 请求
 * - 有效范围：方法
 */
export const PUT = makeMethod('PUT');

/**
 * `HEAD` 请求
 * - 有效范围：方法
 */
export const HEAD = makeMethod('HEAD');

/**
 * `PATCH` 请求
 * - 有效范围：方法
 */
export const PATCH = makeMethod('PATCH');

/**
 * `JSONP` 请求
 * - 有效范围：方法
 */
export const JSONP = makeMethod('JSONP');

/**
 * `FORM` 请求
 * - 有效范围：方法
 */
export const FORM = makeMethod('FORM');
