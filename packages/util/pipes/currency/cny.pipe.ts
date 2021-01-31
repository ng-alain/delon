import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyCNYOptions, CurrencyService } from '@delon/util/format';

@Pipe({ name: 'currencyCNY' })
export class CurrencyCNYPipe implements PipeTransform {
  constructor(private srv: CurrencyService) {}

  /**
   * Converted into RMB notation.
   *
   * 转化成人民币表示法
   */
  transform(value: number | string, options?: CurrencyCNYOptions): string {
    return this.srv.cny(value, options);
  }
}
