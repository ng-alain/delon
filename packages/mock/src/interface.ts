import { HttpRequest } from '@angular/common/http';

import { NzSafeAny } from 'ng-zorro-antd/core/types';

export class MockOptions {
  data?: NzSafeAny;
}

export interface MockCachedRule {
  [key: string]: NzSafeAny;

  method: string;

  url: string;

  martcher: RegExp | null;

  segments: string[];

  callback(req: MockRequest): NzSafeAny;
}

export interface MockRule {
  [key: string]: NzSafeAny;

  method: string;

  url: string;

  /** 路由参数 */
  params?: NzSafeAny;

  callback(req: MockRequest): NzSafeAny;
}

export interface MockRequest {
  /** 路由参数 */
  params?: NzSafeAny;
  /** URL参数 */
  queryString?: NzSafeAny;
  headers?: NzSafeAny;
  body?: NzSafeAny;
  /** 原始 `HttpRequest` */
  original: HttpRequest<NzSafeAny>;
}
