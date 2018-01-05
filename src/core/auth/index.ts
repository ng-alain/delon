import { NgModule, ModuleWithProviders } from '@angular/core';

import { DA_STORE_TOKEN } from './store/interface';
import { DA_SERVICE_TOKEN } from './token/interface';
import { AuthOptions, DA_OPTIONS_TOKEN, DA_USER_OPTIONS_TOKEN, DEFAULT } from './auth.options';
import { LocalStorageStore } from './store/local-storage.service';
import { TokenService } from './token/token.service';
import { SocialService } from './social/social.service';

// region: export

export * from './auth.options';
export * from './social';
export * from './store';
export * from './token';

// endregion

export function optionsFactory(options: AuthOptions) {
    if (options && options.ignores) {
        options.ignores = options.ignores.map(v => new RegExp(v));
    }
    return Object.assign(DEFAULT, options);
}

@NgModule({ })
export class AlainAuthModule {
    public static forRoot(options?: AuthOptions): ModuleWithProviders {
        return {
            ngModule: AlainAuthModule,
            providers: [
                { provide: DA_USER_OPTIONS_TOKEN, useValue: options },
                { provide: DA_OPTIONS_TOKEN, useFactory: optionsFactory, deps: [DA_USER_OPTIONS_TOKEN] },
                { provide: DA_STORE_TOKEN, useClass: LocalStorageStore },
                { provide: DA_SERVICE_TOKEN, useClass: TokenService }
            ]
        };
    }
}
