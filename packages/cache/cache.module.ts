import { NgModule, ModuleWithProviders } from '@angular/core';

import { DC_STORE_STORAGE_TOKEN, ICacheStore } from './src/interface';
import { DelonCacheConfig } from './cache.config';
import { CacheService } from './src/cache.service';
import { LocalStorageCacheService } from './src/local-storage-cache.service';

@NgModule({})
export class DelonCacheModule {
  static forRoot(options?: DelonCacheConfig): ModuleWithProviders {
    return {
      ngModule: DelonCacheModule,
      providers: [
        DelonCacheConfig,
        CacheService,
        { provide: DC_STORE_STORAGE_TOKEN, useClass: LocalStorageCacheService },
      ],
    };
  }
}
