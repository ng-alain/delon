import { EnvironmentProviders, Provider, makeEnvironmentProviders } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { REUSE_TAB_CACHED_MANAGER, ReuseTabCachedManagerFactory } from './reuse-tab.cache';
import { ReuseTabService } from './reuse-tab.service';
import { REUSE_TAB_STORAGE_KEY, REUSE_TAB_STORAGE_STATE, ReuseTabLocalStorageState } from './reuse-tab.state';
import { ReuseTabStrategy } from './reuse-tab.strategy';

export enum ReuseTabFeatureKind {
  CacheManager,
  Store
}

export interface ReuseTabFeature<KindT extends ReuseTabFeatureKind> {
  ɵkind: KindT;
  ɵproviders: Provider[];
}

function makeFeature<KindT extends ReuseTabFeatureKind>(kind: KindT, providers: Provider[]): ReuseTabFeature<KindT> {
  return {
    ɵkind: kind,
    ɵproviders: providers
  };
}

/**
 * Configures reuse-tab to be available for injection.
 *
 * @see {@link withLocalStorage}
 * @see {@link withCacheManager}
 */
export function provideReuseTabConfig(options?: {
  storeKey?: string;
  cacheManager?: ReuseTabFeature<ReuseTabFeatureKind.CacheManager>;
  store?: ReuseTabFeature<ReuseTabFeatureKind.Store>;
}): EnvironmentProviders {
  const providers: Provider[] = [
    {
      provide: REUSE_TAB_STORAGE_KEY,
      useValue: options?.storeKey ?? '_reuse-tab-state'
    },
    (options?.cacheManager ?? withCacheManager()).ɵproviders,
    (options?.store ?? withLocalStorage()).ɵproviders,
    {
      provide: RouteReuseStrategy,
      useClass: ReuseTabStrategy,
      deps: [ReuseTabService]
    }
  ];

  return makeEnvironmentProviders(providers);
}

export function withCacheManager(): ReuseTabFeature<ReuseTabFeatureKind.CacheManager> {
  return makeFeature(ReuseTabFeatureKind.CacheManager, [
    {
      provide: REUSE_TAB_CACHED_MANAGER,
      useFactory: () => new ReuseTabCachedManagerFactory()
    }
  ]);
}

export function withLocalStorage(): ReuseTabFeature<ReuseTabFeatureKind.Store> {
  return makeFeature(ReuseTabFeatureKind.Store, [
    {
      provide: REUSE_TAB_STORAGE_STATE,
      useFactory: () => new ReuseTabLocalStorageState()
    }
  ]);
}
