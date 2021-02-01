import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyFormatOptions, CurrencyService } from '@delon/util/format';

@Pipe({ name: '_currency2' })
export class CurrencyFormatPipe implements PipeTransform {
  constructor(private srv: CurrencyService) {}
  /**
   * Format a number with commas as thousands separators
   *
   * 格式化货币，用逗号将数字格式化为千位分隔符
   * ```ts
   * 10000 => `10,000`
   * 10000.567 => `10,000.57`
   * ```
   */
  transform(value: number | string, options?: CurrencyFormatOptions): string {
    return this.srv.format(value, options);
  }
}
