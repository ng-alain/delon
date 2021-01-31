import { Pipe, PipeTransform } from '@angular/core';
import { FormatCurrencyService } from '@delon/util/format';

@Pipe({ name: 'currencyCommas' })
export class CurrencyCommasPipe implements PipeTransform {
  constructor(private srv: FormatCurrencyService) {}
  /**
   * Format a number with commas as thousands separators
   *
   * 用逗号将数字格式化为千位分隔符
   */
  transform(value: number | string, separator: string = ','): string {
    return this.srv.commas(value, { separator });
  }
}
