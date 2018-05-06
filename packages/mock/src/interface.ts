import { HttpRequest } from '@angular/common/http';

export interface MockRequest {
  [key: string]: any;
}

export interface MockCachedRule {
  [key: string]: any;

  method: string;

  url: string;

  martcher: RegExp;

  segments: string[];

  callback: (req: MockRequest) => any;
}

export interface MockRule {
  [key: string]: any;

  method: string;

  url: string;

  /** 路由参数 */
  params?: any;

  callback: (req: MockRequest) => any;
}

export interface MockRequest {
  /** 路由参数 */
  params?: any;
  queryString?: any;
  headers?: any;
  body?: any;
  /** 原始 `HttpRequest` */
  original: HttpRequest<any>;
}
