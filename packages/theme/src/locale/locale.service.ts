import { Inject, Injectable, Optional, Provider, SkipSelf } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import zhCN from './languages/zh-CN';
import { DELON_LOCALE } from './locale.tokens';
import { LocaleData } from './locale.types';

@Injectable()
export class DelonLocaleService {
  private _locale: LocaleData;
  private change$ = new BehaviorSubject<LocaleData>(this._locale);

  constructor(@Inject(DELON_LOCALE) locale: LocaleData) {
    this.setLocale(locale || zhCN);
  }

  get change(): Observable<LocaleData> {
    return this.change$.asObservable();
  }

  setLocale(locale: LocaleData): void {
    if (this._locale && this._locale.abbr === locale.abbr) {
      return;
    }
    this._locale = locale;
    this.change$.next(locale);
  }

  get locale(): LocaleData {
    return this._locale;
  }

  getData(path: string) {
    return this._locale[path] || {};
  }
}

export function DELON_LOCALE_SERVICE_PROVIDER_FACTORY(exist: DelonLocaleService, locale: LocaleData): DelonLocaleService {
  return exist || new DelonLocaleService(locale);
}

export const DELON_LOCALE_SERVICE_PROVIDER: Provider = {
  provide: DelonLocaleService,
  useFactory: DELON_LOCALE_SERVICE_PROVIDER_FACTORY,
  deps: [[new Optional(), new SkipSelf(), DelonLocaleService], DELON_LOCALE],
};
