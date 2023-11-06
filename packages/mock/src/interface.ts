/* eslint-disable @typescript-eslint/no-explicit-any */
import type { HttpRequest } from '@angular/common/http';
import type { Observable } from 'rxjs';

export class MockOptions {
  data?: any;
}

export interface MockCachedRule {
  [key: string]: any;

  method: string;

  url: string;

  martcher: RegExp | null;

  segments: string[];

  callback(req: MockRequest): any;
}

export interface MockRule {
  [key: string]: any;

  method: string;

  url: string;

  /** 路由参数 */
  params?: any;

  callback(req: MockRequest): any | Observable<any> | Promise<any>;
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
