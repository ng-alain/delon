import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AlainConfigService } from '@delon/util/config';

import { ALAIN_I18N_TOKEN } from './i18n';

@Injectable({ providedIn: 'root' })
export class AlainI18NGuardService {
  private readonly i18nSrv = inject(ALAIN_I18N_TOKEN, { optional: true });
  private readonly cogSrv = inject(AlainConfigService);

  process(route: ActivatedRouteSnapshot): Observable<boolean> {
    const lang = route.params && route.params[this.cogSrv.get('themeI18n')?.paramNameOfUrlGuard ?? 'i18n'];
    if (lang != null) {
      this.i18nSrv?.use(lang);
    }
    return of(true);
  }
}

/**
 * Internationalization guard, automatically recognizes the language in Url and triggers the `ALAIN_I18N_TOKEN.use` method
 *
 * 国际化守卫，自动识别Url中的语言，并触发 `ALAIN_I18N_TOKEN.use` 方法
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivate: [ alainI18nCanActivate ]
 * }
 * ```
 */
export const alainI18nCanActivate: CanActivateFn = childRoute => inject(AlainI18NGuardService).process(childRoute);

/**
 * Internationalization guard, automatically recognizes the language in Url and triggers the `ALAIN_I18N_TOKEN.use` method
 *
 * 国际化守卫，自动识别Url中的语言，并触发 `ALAIN_I18N_TOKEN.use` 方法
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivateChild: [ alainI18nCanActivateChild ]
 * }
 * ```
 */
export const alainI18nCanActivateChild: CanActivateChildFn = route => inject(AlainI18NGuardService).process(route);
