import { Inject, Injectable, Injector } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { DelonAuthConfig } from '../../auth.config';
import { CheckSimple, ToLogin } from '../helper';
import { DA_SERVICE_TOKEN, ITokenService } from '../interface';
import { SimpleTokenModel } from './simple.model';

@Injectable({ providedIn: 'root' })
export class SimpleGuard implements CanActivate, CanActivateChild, CanLoad {
  private cog: DelonAuthConfig;
  private url?: string;

  constructor(@Inject(DA_SERVICE_TOKEN) private srv: ITokenService, private injector: Injector, cog: DelonAuthConfig) {
    this.cog = { ...new DelonAuthConfig(), ...cog };
  }

  private process(): boolean {
    const res = CheckSimple(this.srv.get() as SimpleTokenModel);
    if (!res) {
      ToLogin(this.cog, this.injector, this.url);
    }
    return res;
  }

  // lazy loading
  canLoad(route: Route, _segments: UrlSegment[]): boolean {
    this.url = route.path;
    return this.process();
  }
  // all children route
  canActivateChild(_childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.url = state.url;
    return this.process();
  }
  // route
  canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.url = state.url;
    return this.process();
  }
}
