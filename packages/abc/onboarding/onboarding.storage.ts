import { InjectionToken } from '@angular/core';

export interface OnBoardingKeyStore {
  get(key: string): unknown;

  set(key: string, version: unknown): void;
}

export const ONBOARDING_STORE_TOKEN = new InjectionToken<OnBoardingKeyStore>('ONBOARDING_STORE_TOKEN', {
  providedIn: 'root',
  factory: ONBOARDING_STORE_TOKEN_FACTORY
});

export function ONBOARDING_STORE_TOKEN_FACTORY(): OnBoardingKeyStore {
  return new LocalStorageStore();
}

export class LocalStorageStore implements OnBoardingKeyStore {
  get(key: string): unknown {
    return localStorage.getItem(key);
  }

  set(key: string, version: unknown): void {
    localStorage.setItem(key, `${version}`);
  }
}
