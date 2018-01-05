import { NgModule, ModuleWithProviders } from '@angular/core';

import { DC_STORE_STORAGE_TOKEN, ICacheStore } from './src/interface';
import { CacheOptions, DC_OPTIONS_TOKEN, DC_USER_OPTIONS_TOKEN, DEFAULT } from './cache.options';
import { CacheService } from './src/cache.service';
import { LocalStorageCacheService } from './src/local-storage-cache.service';

// region: export

export * from './src/interface';
export * from './src/cache.service';

// endregion

export function optionsFactory(options: CacheOptions) {
    if (options && !Array.isArray(options.reName))
        options.reName = options.reName.split('.');
    return Object.assign(DEFAULT, options);
}

@NgModule({ })
export class DelonCacheModule {
    public static forRoot(options?: CacheOptions): ModuleWithProviders {
        return {
            ngModule: DelonCacheModule,
            providers: [
                { provide: DC_USER_OPTIONS_TOKEN, useValue: options },
                { provide: DC_OPTIONS_TOKEN, useFactory: optionsFactory, deps: [DC_USER_OPTIONS_TOKEN] },
                { provide: DC_STORE_STORAGE_TOKEN, useClass: LocalStorageCacheService },
                CacheService
            ]
        };
    }
}
