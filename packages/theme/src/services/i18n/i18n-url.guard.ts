import { Inject, Injectable, Optional } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AlainConfigService } from '@delon/util/config';

import { AlainI18NService, ALAIN_I18N_TOKEN } from './i18n';

@Injectable({ providedIn: 'root' })
export class AlainI18NGuard implements CanActivate, CanActivateChild {
  constructor(
    @Optional()
    @Inject(ALAIN_I18N_TOKEN)
    private i18nSrv: AlainI18NService,
    private cogSrv: AlainConfigService
  ) {}

  private resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    const lang = route.params && route.params[this.cogSrv.get('themeI18n')?.paramNameOfUrlGuard ?? 'i18n'];
    if (lang != null) {
      this.i18nSrv.use(lang);
    }
    return of(true);
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    _: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.resolve(childRoute);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    _: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.resolve(route);
  }
}
