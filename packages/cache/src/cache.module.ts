import { ModuleWithProviders, NgModule } from '@angular/core';

import { DelonCacheConfig } from './cache.config';
import { CacheService } from './cache.service';
import { DC_STORE_STORAGE_TOKEN } from './interface';
import { LocalStorageCacheService } from './local-storage-cache.service';

@NgModule({})
export class DelonCacheModule {
  static forRoot(): ModuleWithProviders {
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
