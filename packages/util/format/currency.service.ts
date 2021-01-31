import { Injectable } from '@angular/core';
import { AlainConfigService, AlainUtilFormatConfig } from '@delon/util/config';
import { FormatCurrencyMegaOptions, FormatCurrencyMegaResult, FormatCurrencyMega_Powers } from './currency.types';

@Injectable({ providedIn: 'root' })
export class FormatCurrencyService {
  private c: AlainUtilFormatConfig;

  constructor(cog: AlainConfigService) {
    this.c = cog.merge('utilFormat', {})!;
  }

  /**
   * Format a number with commas as thousands separators
   *
   * 用逗号将数字格式化为千位分隔符
   * ```ts
   * 10000 => `10,000`
   * ```
   */
  commas(value: number | string, options?: { separator?: string }): string {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, options?.separator ?? ',');
  }

  /**
   * Large number format filter
   *
   * 大数据格式化
   * ```ts
   * 1000 => { value: '1', unit: 'K', unitI18n: '千' }
   * 12456 => { value: '12.46', unit: 'K', unitI18n: '千' }
   * ```
   */
  mega(value: number | string, options?: FormatCurrencyMegaOptions): FormatCurrencyMegaResult {
    options = { precision: 2, unitI18n: { Q: '京', T: '兆', B: '亿', M: '万', K: '千' }, ...this.c.currencyMegaUnit, ...options };
    const num = parseFloat(value.toString());
    const res: FormatCurrencyMegaResult = { raw: value, value: '', unit: '', unitI18n: '' };
    if (isNaN(num) || num === 0) {
      res.value = value.toString();
      return res;
    }
    let abs = Math.abs(+value);
    const rounder = Math.pow(10, options.precision!);
    const isNegative = num < 0;
    for (const p of FormatCurrencyMega_Powers) {
      let reduced = abs / p.value;

      reduced = Math.round(reduced * rounder) / rounder;

      if (reduced >= 1) {
        abs = reduced;
        res.unit = p.unit;
        break;
      }
    }

    res.value = (isNegative ? '-' : '') + abs;
    res.unitI18n = (options.unitI18n as { [key: string]: any })[res.unit];
    return res;
  }
}
