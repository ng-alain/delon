/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpEvent, HttpInterceptorFn, HttpResponseBase } from '@angular/common/http';
import { inject } from '@angular/core';
import { map, of, OperatorFunction } from 'rxjs';

import { AlainConfigService } from '@delon/util/config';

import { CacheService } from './cache.service';
import { CacheOptions, CACHE } from './token';

/**
 * Cache interceptor
 *
 * 缓存拦截器
 *
 * @example
 * provideHttpClient(withInterceptors([httpCacheInterceptor])),
 */
export const httpCacheInterceptor: HttpInterceptorFn = (req, next) => {
  const cog = inject(AlainConfigService).merge('cache', {})!.interceptor;
  const options: CacheOptions = {
    enabled: true,
    emitNotify: true,
    saveType: 'm',
    ...cog,
    ...req.context.get(CACHE)
  };
  const srv = inject(CacheService);
  const mapPipe: OperatorFunction<HttpEvent<any>, HttpEvent<any>> = map(ev => save(srv, ev, options));
  if (options.enabled === false) {
    return next(req).pipe(mapPipe);
  }

  if (options.key == null) {
    options.key = req.urlWithParams;
  }

  const cacheData = srv.getNone<HttpEvent<any>>(options.key);
  if (cacheData != null) {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      console.log(
        `%c👽${req.method}->${req.urlWithParams}->from cache(onle in development)`,
        'background:#000;color:#1890ff',
        req,
        cacheData
      );
    }
    return of(cacheData);
  }

  return next(req).pipe(mapPipe);
};

function save(srv: CacheService, ev: HttpEvent<any>, options: CacheOptions): HttpEvent<any> {
  if (!(ev instanceof HttpResponseBase) || !(ev.status >= 200 && ev.status < 300)) return ev;
  let expire = options.expire;
  if (expire == null) {
    const ageMatch = /max-age=(\d+)/g.exec(ev.headers.get('cache-control')?.toLowerCase() ?? '');
    if (ageMatch == null) return ev;
    expire = +ageMatch[1];
  }
  if (expire > 0) {
    srv.set(options.key!!, ev, {
      type: options.saveType!!,
      expire: expire
    });
  }
  return ev;
}
