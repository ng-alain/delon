import {
  ENVIRONMENT_INITIALIZER,
  EnvironmentProviders,
  Provider,
  inject,
  makeEnvironmentProviders
} from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { REUSE_TAB_CACHED_MANAGER, ReuseTabCachedManagerFactory } from './reuse-tab.cache';
import { ReuseTabMatchMode, ReuseTabRouteParamMatchMode } from './reuse-tab.interfaces';
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
  debug?: boolean;
  mode?: ReuseTabMatchMode;
  routeParamMatchMode?: ReuseTabRouteParamMatchMode;
  max?: number;
  excludes?: RegExp[];
  storeKey?: string;
  cacheManager?: ReuseTabFeature<ReuseTabFeatureKind.CacheManager>;
  store?: ReuseTabFeature<ReuseTabFeatureKind.Store>;
}): EnvironmentProviders {
  const providers: Provider[] = [
    ReuseTabService,
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
    },
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue: () => {
        const srv = inject(ReuseTabService);
        if (options?.debug) srv.debug = options.debug;
        if (options?.mode) srv.mode = options.mode;
        if (options?.routeParamMatchMode) srv.routeParamMatchMode = options.routeParamMatchMode;
        if (options?.max) srv.max = options.max;
        if (options?.excludes) srv.excludes = options.excludes;
      }
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
