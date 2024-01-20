import { Pipe, PipeTransform, inject } from '@angular/core';

import { CurrencyCNYOptions, CurrencyService } from '@delon/util/format';

/**
 * Converted into RMB notation.
 *
 * 转化成人民币表示法
 */
@Pipe({ name: 'cny', standalone: true })
export class CurrencyCNYPipe implements PipeTransform {
  private readonly srv = inject(CurrencyService);

  transform(value: number | string, options?: CurrencyCNYOptions): string {
    return this.srv.cny(value, options);
  }
}
