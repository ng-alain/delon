import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EnvironmentProviders, Provider, makeEnvironmentProviders } from '@angular/core';

import { CookieService } from '@delon/util/browser';

import { CookieStorageStore, DA_STORE_TOKEN, LocalStorageStore, MemoryStore, SessionStorageStore } from './store';
import { JWTInterceptor, SimpleInterceptor } from './token/index';

export enum AuthFeatureKind {
  Token,
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
 * @see {@link withSimple}
 * @see {@link withJWT}
 * @see {@link withCookie}
 * @see {@link withLocalStorage}
 * @see {@link withSessionStorage}
 */
export function provideAuth(
  type: AuthFeature<AuthFeatureKind.Token>,
  store?: AuthFeature<AuthFeatureKind.Store>
): EnvironmentProviders {
  return makeEnvironmentProviders([type.ɵproviders, (store ?? withLocalStorage()).ɵproviders]);
}

/** Use simple auth type,  */
export function withSimple(): AuthFeature<AuthFeatureKind.Token> {
  return makeAuthFeature(AuthFeatureKind.Token, [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SimpleInterceptor,
      multi: true
    }
  ]);
}

export function withJWT(): AuthFeature<AuthFeatureKind.Token> {
  return makeAuthFeature(AuthFeatureKind.Token, [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true
    }
  ]);
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
