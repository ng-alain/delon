import { LOCALE_ID, Pipe, PipeTransform, inject } from '@angular/core';

import { CurrencyMegaOptions, CurrencyService } from '@delon/util/format';

/**
 * Large number format filter
 *
 * 大数据格式化
 */
@Pipe({ name: 'mega' })
export class CurrencyMegaPipe implements PipeTransform {
  private readonly srv = inject(CurrencyService);
  private isCN = inject(LOCALE_ID).startsWith('zh');

  transform(value: number | string, options?: CurrencyMegaOptions): string {
    const res = this.srv.mega(value, options);
    return res.value + (this.isCN ? res.unitI18n : res.unit);
  }
}
