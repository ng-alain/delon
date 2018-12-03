import { ModuleWithProviders, NgModule } from '@angular/core';

import { DelonAuthConfig } from './auth.config';
import { DA_STORE_TOKEN } from './store/interface';
import { LocalStorageStore } from './store/local-storage.service';
import { DA_SERVICE_TOKEN } from './token/interface';
import { JWTGuard } from './token/jwt/jwt.guard';
import { SimpleGuard } from './token/simple/simple.guard';
import { TokenService } from './token/token.service';
import { WINDOW } from './win_tokens';

@NgModule({})
export class DelonAuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonAuthModule,
      providers: [
        { provide: WINDOW, useValue: window },
        DelonAuthConfig,
        SimpleGuard,
        JWTGuard,
        { provide: DA_STORE_TOKEN, useClass: LocalStorageStore },
        { provide: DA_SERVICE_TOKEN, useClass: TokenService },
      ],
    };
  }
}
