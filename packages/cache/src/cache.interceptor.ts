/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponseBase } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, OperatorFunction } from 'rxjs';

import { AlainCacheInterceptor, AlainConfigService } from '@delon/util/config';

import { CacheService } from './cache.service';
import { CacheOptions, CACHE } from './token';

/**
 * Cache interceptor
 *
 * 缓存拦截器
 *
 * @example
 * providers: [
 *  { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
 * ]
 */
@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  private cog?: AlainCacheInterceptor;
  constructor(
    cogSrv: AlainConfigService,
    private srv: CacheService
  ) {
    this.cog = cogSrv.merge('cache', {})!.interceptor;
  }

  private save(ev: HttpEvent<any>, options: CacheOptions): HttpEvent<any> {
    if (!(ev instanceof HttpResponseBase) || !(ev.status >= 200 && ev.status < 300)) return ev;
    let expire = options.expire;
    if (expire == null) {
      const ageMatch = /max-age=(\d+)/g.exec(ev.headers.get('cache-control')?.toLowerCase() ?? '');
      if (ageMatch == null) return ev;
      expire = +ageMatch[1];
    }
    if (expire > 0) {
      this.srv.set(options.key!!, ev, {
        type: options.saveType!!,
        expire: expire
      });
    }
    return ev;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const options: CacheOptions = {
      enabled: true,
      emitNotify: true,
      saveType: 'm',
      ...this.cog,
      ...req.context.get(CACHE)
    };
    const mapPipe: OperatorFunction<HttpEvent<any>, HttpEvent<any>> = map(ev => this.save(ev, options));
    if (options.enabled === false) {
      return next.handle(req).pipe(mapPipe);
    }

    if (options.key == null) {
      options.key = req.urlWithParams;
    }

    const cacheData = this.srv.getNone<HttpEvent<any>>(options.key);
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

    return next.handle(req).pipe(mapPipe);
  }
}
