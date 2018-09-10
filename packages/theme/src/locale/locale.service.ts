import { Injectable, Inject } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { LocaleData } from './locale.types';
import { DELON_I18N } from './tokens';
import zh_CN from '../../locales/zh-CN';

@Injectable({ providedIn: 'root' })
export class DelonI18nService {
  private _locale: LocaleData;
  private change$ = new BehaviorSubject<LocaleData>(this._locale);

  constructor(@Inject(DELON_I18N) locale: LocaleData) {
    this.setLocale(locale || zh_CN);
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
    return this._getObjectPath(path);
  }

  private _getObjectPath(path: string): string | object | any {
    let res = this._locale;
    const paths = path.split('.');
    const depth = paths.length;
    let index = 0;
    while (res && index < depth) {
      res = res[paths[index++]];
    }
    return index === depth ? res : null;
  }
}
