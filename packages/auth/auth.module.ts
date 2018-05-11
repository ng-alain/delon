import { NgModule, ModuleWithProviders } from '@angular/core';

import { DelonAuthConfig } from './auth.config';
import { DA_STORE_TOKEN } from './store/interface';
import { DA_SERVICE_TOKEN } from './token/interface';
import { LocalStorageStore } from './store/local-storage.service';
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
        { provide: DA_STORE_TOKEN, useClass: LocalStorageStore },
        { provide: DA_SERVICE_TOKEN, useClass: TokenService },
      ],
    };
  }
}
