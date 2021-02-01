import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyCommasOptions, CurrencyService } from '@delon/util/format';

@Pipe({ name: 'currencyCommas' })
export class CurrencyCommasPipe implements PipeTransform {
  constructor(private srv: CurrencyService) {}
  /**
   * Format a number with commas as thousands separators
   *
   * 用逗号将数字格式化为千位分隔符
   */
  transform(value: number | string, options?: CurrencyCommasOptions): string {
    return this.srv.commas(value, options);
  }
}
