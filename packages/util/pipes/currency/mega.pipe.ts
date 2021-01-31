import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { CurrencyService } from '@delon/util/format';

@Pipe({ name: 'currencyMega' })
export class CurrencyMegaPipe implements PipeTransform {
  private isCN = false;
  constructor(private srv: CurrencyService, @Inject(LOCALE_ID) locale: string) {
    this.isCN = locale.startsWith('zh');
  }

  /**
   * Large number format filter
   *
   * 大数据格式化
   */
  transform(value: number | string, precision: number = 2): string {
    const res = this.srv.mega(value, { precision });
    return res.value + (this.isCN ? res.unitI18n : res.unit);
  }
}
