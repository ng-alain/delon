import { Inject, Injectable, Optional, Provider, SkipSelf } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import zhCN from './languages/zh-CN';
import { DELON_LOCALE } from './locale.tokens';
import { FullLocaleData, LocaleData } from './locale.types';

@Injectable()
export class DelonLocaleService {
  private _locale: FullLocaleData;
  private change$ = new BehaviorSubject<FullLocaleData>(this._locale);

  constructor(@Inject(DELON_LOCALE) locale: FullLocaleData | null) {
    this.setLocale(locale || zhCN);
  }

  get change(): Observable<FullLocaleData> {
    return this.change$.asObservable();
  }

  setLocale(locale: FullLocaleData): void {
    if (this._locale && this._locale.abbr === locale.abbr) {
      return;
    }
    this._locale = locale;
    this.change$.next(locale);
  }

  get locale(): FullLocaleData {
    return this._locale;
  }

  getData(path: string): LocaleData {
    return this._locale[path] || {};
  }
}

export function DELON_LOCALE_SERVICE_PROVIDER_FACTORY(
  exist: DelonLocaleService,
  locale: FullLocaleData,
): DelonLocaleService {
  return exist || new DelonLocaleService(locale);
}

export const DELON_LOCALE_SERVICE_PROVIDER: Provider = {
  provide: DelonLocaleService,
  useFactory: DELON_LOCALE_SERVICE_PROVIDER_FACTORY,
  deps: [[new Optional(), new SkipSelf(), DelonLocaleService], DELON_LOCALE],
};
