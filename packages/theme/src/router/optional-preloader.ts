import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

/**
 * Optional pre-loading module, when it's necessary to load the resource at the first page load for some lazy routes, [example](https://github.com/ng-alain/ng-alain/blob/master/src/app/routes/routes-routing.module.ts).
 *
 * 可选预加载模块，当需要对某些懒路由在第一次页面加载时也一并加载该资源时，[示例](https://github.com/ng-alain/ng-alain/blob/master/src/app/routes/routes-routing.module.ts)。
 *
 * @example
 * {AT}NgModule({
 *  providers: [PreloadOptionalModules],
 *  imports: [
 *    RouterModule.forRoot([
 *      { path: '', loadChildren: null, data: { preload: true } }
 *    ], { preloadingStrategy: PreloadOptionalModules})]
 * })
 */
export class PreloadOptionalModules implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<NzSafeAny>): Observable<NzSafeAny> {
    return route.data?.preload === true ? fn().pipe(catchError(() => of(null))) : of(null);
  }
}
