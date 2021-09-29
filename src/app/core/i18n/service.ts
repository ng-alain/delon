import { Platform } from '@angular/cdk/platform';
import { Injectable } from '@angular/core';

import { AlainI18nBaseService, DelonLocaleService, en_US as delonEnUS, zh_CN as delonZhCn } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';

import { ENUS } from './en-US';
import { ZHCN } from './zh-CN';

export type LangType = 'en-US' | 'zh-CN';

@Injectable({ providedIn: 'root' })
export class I18NService extends AlainI18nBaseService {
  private _langs = [
    { code: 'en-US', text: 'English' },
    { code: 'zh-CN', text: '中文' }
  ];

  constructor(
    private zorroI18n: NzI18nService,
    private delonI18n: DelonLocaleService,
    private platform: Platform,
    cogSrv: AlainConfigService
  ) {
    super(cogSrv);
    // from browser
    const lang = (this.getBrowserLang() || this.defaultLang) as LangType;
    this.use(lang, {}, false);
  }

  private getBrowserLang(): string | undefined {
    if (!this.platform.isBrowser) {
      return undefined;
    }
    const winNav: NzSafeAny = window.navigator;
    if (typeof window === 'undefined' || typeof winNav === 'undefined') {
      return undefined;
    }

    let browserLang: NzSafeAny = winNav.languages ? winNav.languages[0] : null;
    browserLang = browserLang || winNav.language || winNav.browserLanguage || winNav.userLanguage;

    if (browserLang.indexOf('-') !== -1) {
      browserLang = browserLang.split('-')[0];
    }

    if (browserLang.indexOf('_') !== -1) {
      browserLang = browserLang.split('_')[0];
    }

    return this.getFullLang(browserLang);
  }

  use(lang: LangType, _?: Record<string, string>, emit?: boolean): void {
    this._currentLang = lang as string;
    this._data = lang === 'en-US' ? ENUS : ZHCN;
    this.zorroI18n.setLocale(lang === 'en-US' ? en_US : zh_CN);
    this.delonI18n.setLocale(lang === 'en-US' ? delonEnUS : delonZhCn);
    if (emit !== false) this._change$.next(lang);
  }

  getLangs(): Array<{ code: string; text: string }> {
    return this._langs;
  }

  get defaultLang(): LangType {
    return 'zh-CN';
  }

  get zone(): string {
    return this._currentLang.split('-')[0];
  }

  get langs(): string[] {
    return ['zh-CN', 'en-US'];
  }

  get(i: string | { [key: string]: string } | null): string {
    if (i == null) return '';
    return typeof i === 'string' ? i : i[this.currentLang] || i[this.defaultLang] || '';
  }

  getFullLang(lang: string): string {
    const res = this._langs.filter(l => l.code.split('-')[0] === lang);
    return res.length > 0 ? res[0].code : this.defaultLang;
  }

  getRealUrl(url: string): string {
    const arr = url.split('#')[0].split('?')[0].split('/');
    arr.splice(-1);
    return arr.join('/');
  }
}
