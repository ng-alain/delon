import { Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface AlainI18NService {
  [key: string]: any;

  /**
   * 调用 `use` 触发变更通知
   */
  readonly change: Observable<string>;

  /**
   * 变更语言
   * @param lang 语言代码
   * @param emit 是否触发 `change`，默认：true
   */
  use(lang: string, emit?: boolean): void;

  /**
   * 返回当前语言列表
   */
  getLangs(): any[];

  /**
   * 翻译
   * - `params` 模板所需要的参数对象
   * - `isSafe` 是否返回安全字符，自动调用 `bypassSecurityTrustHtml`
   */
  fanyi(key: string, params?: {}, isSafe?: boolean): string;
}

export const ALAIN_I18N_TOKEN = new InjectionToken<AlainI18NService>('alainTranslatorToken', {
  providedIn: 'root',
  factory: ALAIN_I18N_TOKEN_FACTORY,
});

export function ALAIN_I18N_TOKEN_FACTORY() {
  return new AlainI18NServiceFake();
}

@Injectable({ providedIn: 'root' })
export class AlainI18NServiceFake implements AlainI18NService {
  private change$ = new BehaviorSubject<string | null>(null);

  get change(): Observable<string> {
    return this.change$.asObservable().pipe(filter(w => w != null)) as Observable<string>;
  }

  use(lang: string): void {
    this.change$.next(lang);
  }

  getLangs(): any[] {
    return [];
  }

  fanyi(key: string) {
    return key;
  }
}
