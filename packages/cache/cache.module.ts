import { NgModule, ModuleWithProviders } from '@angular/core';

import { DC_STORE_STORAGE_TOKEN, ICacheStore } from './src/interface';
import { DelonCacheConfig } from './cache.config';
import { CacheService } from './src/cache.service';
import { LocalStorageCacheService } from './src/local-storage-cache.service';

@NgModule({})
export class DelonCacheModule {
    public static forRoot(options?: DelonCacheConfig): ModuleWithProviders {
        return {
            ngModule: DelonCacheModule,
            providers: [
                {
                    provide: DelonCacheConfig, useValue: {
                        mode: options.mode || 'promise',
                        reName: options.reName || '',
                        prefix: options.prefix || '',
                        meta_key: options.meta_key || '__cache_meta'
                    }
                },
                CacheService,
                { provide: DC_STORE_STORAGE_TOKEN, useClass: LocalStorageCacheService }
            ]
        };
    }
}
