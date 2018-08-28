import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

import { en_US, zh_CN, NzI18nService } from 'ng-zorro-antd';
import { AlainI18NService } from '@delon/theme';
import { ENUS } from './en-US';
import { ZHCN } from './zh-CN';

export type LangType = 'en-US' | 'zh-CN';
const DEFAULT_LANG = 'zh-CN';

@Injectable({ providedIn: 'root' })
export class I18NService implements AlainI18NService {
  private change$: Subject<LangType> = new Subject<LangType>();

  private _langs = [
    { code: 'en-US', text: 'English' },
    { code: 'zh-CN', text: '中文' },
  ];

  constructor(
    private nzLocalService: NzI18nService,
    private translate: TranslateService,
  ) {
    this.translate.setTranslation('en-US', ENUS);
    this.translate.setTranslation('zh-CN', ZHCN);
    this.translate.setDefaultLang('en-US');
    this.use(DEFAULT_LANG, false);
  }

  get change() {
    return this.change$.asObservable();
  }

  use(lang: LangType, emit = true) {
    this.translate.use(lang);
    this.nzLocalService.setLocale(lang === 'en-US' ? en_US : zh_CN);
    if (emit) this.change$.next(lang);
  }

  getLangs(): any[] {
    return this._langs;
  }

  get defaultLang(): LangType {
    return DEFAULT_LANG;
  }

  get lang() {
    return this.translate.currentLang;
  }

  get zone() {
    return this.translate.currentLang.split('-')[0];
  }

  get langs() {
    return ['zh-CN', 'en-US'];
  }

  fanyi(key: string) {
    return this.translate.instant(key);
  }

  get(i: any) {
    return typeof i === 'string'
      ? i
      : i[this.lang] || i[this.defaultLang] || '';
  }

  getFullLang(lang: string) {
    const res = this._langs.filter(l => l.code.split('-')[0] === lang);
    return res.length > 0 ? res[0].code : this.defaultLang.split('-')[0];
  }

  getRealUrl(url: string) {
    const arr = url
      .split('#')[0]
      .split('?')[0]
      .split('/');
    arr.splice(-1);
    return arr.join('/');
  }
}
