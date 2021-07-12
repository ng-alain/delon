import { Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { NzSafeAny } from 'ng-zorro-antd/core/types';

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
   * @param lang 语言代码
   * @param emit 是否触发 `change`，默认：true
   */
  use(lang: string, emit?: boolean): void;

  /**
   * Return to the current language list
   *
   * 返回当前语言列表
   */
  getLangs(): NzSafeAny[];

  /**
   * 翻译
   * - `params` 模板所需要的参数对象
   * - `isSafe` 是否返回安全字符，自动调用 `bypassSecurityTrustHtml`
   */
  fanyi(key: string, params?: unknown, isSafe?: boolean): string;
}

export const ALAIN_I18N_TOKEN = new InjectionToken<AlainI18NService>('alainTranslatorToken', {
  providedIn: 'root',
  factory: ALAIN_I18N_TOKEN_FACTORY
});

export function ALAIN_I18N_TOKEN_FACTORY(): AlainI18NServiceFake {
  return new AlainI18NServiceFake();
}

@Injectable({ providedIn: 'root' })
export class AlainI18NServiceFake implements AlainI18NService {
  private change$ = new BehaviorSubject<string | null>(null);

  get change(): Observable<string> {
    return this.change$.asObservable().pipe(filter(w => w != null)) as Observable<string>;
  }

  get defaultLang(): string {
    return '';
  }

  get currentLang(): string {
    return '';
  }

  use(lang: string): void {
    this.change$.next(lang);
  }

  getLangs(): NzSafeAny[] {
    return [];
  }

  fanyi(key: string): string {
    return key;
  }
}
