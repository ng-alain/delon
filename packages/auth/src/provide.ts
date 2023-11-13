import { EnvironmentProviders, Provider, makeEnvironmentProviders } from '@angular/core';

import { CookieService } from '@delon/util/browser';

import { CookieStorageStore, DA_STORE_TOKEN, LocalStorageStore, MemoryStore, SessionStorageStore } from './store';

export enum AuthFeatureKind {
  Store
}

export interface AuthFeature<KindT extends AuthFeatureKind> {
  ɵkind: KindT;
  ɵproviders: Provider[];
}

function makeAuthFeature<KindT extends AuthFeatureKind>(kind: KindT, providers: Provider[]): AuthFeature<KindT> {
  return {
    ɵkind: kind,
    ɵproviders: providers
  };
}

/**
 * Configures authentication process service to be available for injection.
 *
 * @see {@link withCookie}
 * @see {@link withLocalStorage}
 * @see {@link withSessionStorage}
 */
export function provideAuth(store?: AuthFeature<AuthFeatureKind.Store>): EnvironmentProviders {
  return makeEnvironmentProviders([(store ?? withLocalStorage()).ɵproviders]);
}

/** `cookie` storage */
export function withCookie(): AuthFeature<AuthFeatureKind.Store> {
  return makeAuthFeature(AuthFeatureKind.Store, [
    { provide: DA_STORE_TOKEN, useClass: CookieStorageStore, deps: [CookieService] }
  ]);
}

/** `localStorage` storage, **not lost after closing the browser**. */
export function withLocalStorage(): AuthFeature<AuthFeatureKind.Store> {
  return makeAuthFeature(AuthFeatureKind.Store, [{ provide: DA_STORE_TOKEN, useClass: LocalStorageStore }]);
}

/** `sessionStorage` storage, **lost after closing the browser**. */
export function withSessionStorage(): AuthFeature<AuthFeatureKind.Store> {
  return makeAuthFeature(AuthFeatureKind.Store, [{ provide: DA_STORE_TOKEN, useClass: SessionStorageStore }]);
}

/** Memory storage, **lost after closing the browser tab**. */
export function withMemoryStorage(): AuthFeature<AuthFeatureKind.Store> {
  return makeAuthFeature(AuthFeatureKind.Store, [{ provide: DA_STORE_TOKEN, useClass: MemoryStore }]);
}
