import { Injectable, Inject, Injector } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad } from '@angular/router';
import { DA_SERVICE_TOKEN, ITokenService } from '../interface';
import { JWTTokenModel } from './jwt.model';
import { DelonAuthConfig } from '../../auth.config';
import { CheckJwt, ToLogin } from '../helper';

@Injectable()
export class JWTGuard implements CanActivate, CanActivateChild, CanLoad {
  private cog: DelonAuthConfig;
  constructor(
    @Inject(DA_SERVICE_TOKEN) private srv: ITokenService,
    private injector: Injector,
    cog: DelonAuthConfig,
  ) {
    this.cog = Object.assign(new DelonAuthConfig(), cog);
  }

  private process(): boolean {
    const res = CheckJwt(
      this.srv.get<JWTTokenModel>(JWTTokenModel),
      this.cog.token_exp_offset,
    );
    if (!res) {
      ToLogin(this.cog, this.injector);
    }
    return res;
  }

  // lazy loading
  canLoad(): boolean {
    return this.process();
  }
  // all children route
  canActivateChild(): boolean {
    return this.process();
  }
  // route
  canActivate(): boolean {
    return this.process();
  }
}
