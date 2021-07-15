import { Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { _HttpClient } from '../http/http.client';

export interface AlainI18NService {
  [key: string]: NzSafeAny;

  /**
   * Call `use` to trigger change notification
   *
   * 调用 `use` 触发变更通知
   */
  readonly change: Observable<string>;

  /**
   * Get the default language
   *
   * 获取默认语言
   */
  readonly defaultLang: string;

  /**
   * Get current language
   *
   * 获取当前语言
   */
  readonly currentLang: string;

  /**
   * Change language
   *
   * 变更语言
   *
   * @param emit 是否触发 `change`，默认：true ; Should be removed, please use `change` event instead.
   */
  use(lang: string, data?: Record<string, string>): void;

  /**
   * Return to the current language list
   *
   * 返回当前语言列表
   */
  getLangs(): NzSafeAny[];

  /**
   * Translate 翻译
   *
   * @param params 模板所需要的参数对象
   * @param isSafe 是否返回安全字符，自动调用 `bypassSecurityTrustHtml`; Should be removed, If you need SafeHtml support, please use `| html` pipe instead.
   */
  fanyi(path: string, params?: unknown): string;
}

export const ALAIN_I18N_TOKEN = new InjectionToken<AlainI18NService>('alainI18nToken', {
  providedIn: 'root',
  factory: () => new AlainI18NServiceFake()
});

@Injectable()
export abstract class AlainI18nBaseService implements AlainI18NService {
  protected _change$ = new BehaviorSubject<string | null>(null);
  protected _currentLang: string = '';
  protected _defaultLang: string = '';
  protected _data: Record<string, string> = {};
  get change(): Observable<string> {
    return this._change$.asObservable().pipe(filter(w => w != null)) as Observable<string>;
  }
  get defaultLang(): string {
    return this._defaultLang;
  }
  get currentLang(): string {
    return this._currentLang;
  }
  get data(): Record<string, string> {
    return this._data;
  }

  abstract use(lang: string, data?: Record<string, string>): void;

  abstract getLangs(): NzSafeAny[];

  fanyi(path: string, params?: Record<string, unknown>): string {
    let content = this._data[path] || '';
    if (!content) return path;

    if (params) {
      Object.keys(params).forEach(key => (content = content.replace(new RegExp(`{{${key}}}`, 'g'), `${params[key]}`)));
    }
    return content;
  }
}

@Injectable({ providedIn: 'root' })
export class AlainI18NServiceFake extends AlainI18nBaseService {
  use(lang: string, data: Record<string, string>): void {
    this._data = data;
    this._currentLang = lang;
    this._change$.next(lang);
  }

  getLangs(): NzSafeAny[] {
    return [];
  }
}
