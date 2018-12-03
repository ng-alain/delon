// tslint:disable:no-any
import { HttpRequest } from '@angular/common/http';

export interface MockCachedRule {
  [key: string]: any;

  method: string;

  url: string;

  martcher: RegExp;

  segments: string[];

  callback(req: MockRequest): any;
}

export interface MockRule {
  [key: string]: any;

  method: string;

  url: string;

  /** 路由参数 */
  params?: any;

  callback(req: MockRequest): any;
}

export interface MockRequest {
  /** 路由参数 */
  params?: any;
  /** URL参数 */
  queryString?: any;
  headers?: any;
  body?: any;
  /** 原始 `HttpRequest` */
  original: HttpRequest<any>;
}
