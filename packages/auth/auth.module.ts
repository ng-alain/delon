import { NgModule, ModuleWithProviders } from '@angular/core';

import { DelonAuthConfig } from './auth.config';
import { DA_STORE_TOKEN } from './store/interface';
import { DA_SERVICE_TOKEN } from './token/interface';
import { LocalStorageStore } from './store/local-storage.service';
import { TokenService } from './token/token.service';

@NgModule({ })
export class DelonAuthModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: DelonAuthModule,
            providers: [
                DelonAuthConfig,
                { provide: DA_STORE_TOKEN, useClass: LocalStorageStore },
                { provide: DA_SERVICE_TOKEN, useClass: TokenService }
            ]
        };
    }
}
