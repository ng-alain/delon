import { EnvironmentProviders, Provider, makeEnvironmentProviders } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { REUSE_TAB_CACHED_MANAGER, ReuseTabCachedManagerFactory } from './reuse-tab.cache';
import { ReuseTabService } from './reuse-tab.service';
import { REUSE_TAB_STORAGE_KEY, REUSE_TAB_STORAGE_STATE, ReuseTabLocalStorageState } from './reuse-tab.state';
import { ReuseTabStrategy } from './reuse-tab.strategy';

export enum ReuseTabFeatureKind {
  Cache,
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
 * @see {@link withCache}
 */
export function provideReuseTabConfig(options?: {
  storeKey?: string;
  cache?: ReuseTabFeature<ReuseTabFeatureKind.Cache>;
  store?: ReuseTabFeature<ReuseTabFeatureKind.Store>;
}): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: REUSE_TAB_STORAGE_KEY,
      useValue: options?.storeKey ?? '_reuse-tab-state'
    },
    (options?.cache ?? withCache()).ɵproviders,
    (options?.store ?? withLocalStorage()).ɵproviders,
    {
      provide: RouteReuseStrategy,
      useClass: ReuseTabStrategy,
      deps: [ReuseTabService]
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

export function withCache(): ReuseTabFeature<ReuseTabFeatureKind.Cache> {
  return makeFeature(ReuseTabFeatureKind.Cache, [
    {
      provide: REUSE_TAB_CACHED_MANAGER,
      useFactory: () => new ReuseTabCachedManagerFactory()
    }
  ]);
}
