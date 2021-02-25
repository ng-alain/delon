import { Platform } from '@angular/cdk/platform';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AlainI18NService, DelonLocaleService, en_US as delonEnUS, zh_CN as delonZhCn } from '@delon/theme';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';
import { Observable, Subject } from 'rxjs';
import { ENUS } from './en-US';
import { ZHCN } from './zh-CN';

export type LangType = 'en-US' | 'zh-CN';

@Injectable({ providedIn: 'root' })
export class I18NService implements AlainI18NService {
  private change$: Subject<LangType> = new Subject<LangType>();
  private data: any;
  private _lang: string;

  private _langs = [
    { code: 'en-US', text: 'English' },
    { code: 'zh-CN', text: '中文' },
  ];

  constructor(
    private zorroI18n: NzI18nService,
    private delonI18n: DelonLocaleService,
    private dom: DomSanitizer,
    private platform: Platform,
  ) {
    // from browser
    const lang = (this.getBrowserLang() || this.defaultLang) as LangType;
    this.use(lang, false);
  }

  private getBrowserLang(): string | undefined {
    if (!this.platform.isBrowser) {
      return undefined;
    }
    const winNav: any = window.navigator;
    if (typeof window === 'undefined' || typeof winNav === 'undefined') {
      return undefined;
    }

    let browserLang: any = winNav.languages ? winNav.languages[0] : null;
    browserLang = browserLang || winNav.language || winNav.browserLanguage || winNav.userLanguage;

    if (browserLang.indexOf('-') !== -1) {
      browserLang = browserLang.split('-')[0];
    }

    if (browserLang.indexOf('_') !== -1) {
      browserLang = browserLang.split('_')[0];
    }

    return this.getFullLang(browserLang);
  }

  get change(): Observable<LangType> {
    return this.change$.asObservable();
  }

  use(lang: LangType, emit: boolean = true): void {
    this._lang = lang as string;
    this.data = lang === 'en-US' ? ENUS : ZHCN;
    this.zorroI18n.setLocale(lang === 'en-US' ? en_US : zh_CN);
    this.delonI18n.setLocale(lang === 'en-US' ? delonEnUS : delonZhCn);
    if (emit) this.change$.next(lang);
  }

  getLangs(): any[] {
    return this._langs;
  }

  get defaultLang(): LangType {
    return 'zh-CN';
  }
  get currentLang(): string {
    return this._lang;
  }

  get zone(): string {
    return this._lang.split('-')[0];
  }

  get langs(): string[] {
    return ['zh-CN', 'en-US'];
  }

  fanyi(key: string, data?: any, isSafe?: boolean): any {
    let res = this.data[key] as string;
    if (data) {
      Object.keys(data).forEach(key => (res = res.replace(new RegExp(`%${key}%`, 'g'), data[key])));
    }

    if (isSafe === true) {
      return this.dom.bypassSecurityTrustHtml(res);
    }
    return res;
  }

  get(i: any): string {
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
