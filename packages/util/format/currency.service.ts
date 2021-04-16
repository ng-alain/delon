import { CurrencyPipe, formatNumber } from '@angular/common';
import { DEFAULT_CURRENCY_CODE, Inject, Injectable, LOCALE_ID } from '@angular/core';
import { AlainConfigService, AlainUtilCurrencyConfig } from '@delon/util/config';
import { CurrencyCNYOptions, CurrencyFormatOptions, CurrencyMegaOptions, CurrencyMegaResult, CurrencyMega_Powers } from './currency.types';

@Injectable({ providedIn: 'root' })
export class CurrencyService {
  private c: AlainUtilCurrencyConfig;
  private readonly currencyPipe: CurrencyPipe;

  constructor(
    cog: AlainConfigService,
    @Inject(LOCALE_ID) private locale: string,
    @Inject(DEFAULT_CURRENCY_CODE) _defaultCurrencyCode: string = 'USD',
  ) {
    this.currencyPipe = new CurrencyPipe(locale, _defaultCurrencyCode);
    this.c = cog.merge('utilCurrency', {
      startingUnit: 'yuan',
      megaUnit: { Q: '京', T: '兆', B: '亿', M: '万', K: '千' },
      precision: 2,
      ingoreZeroPrecision: true,
    })!;
  }

  /**
   * Format a number with commas as thousands separators
   *
   * 格式化货币，用逗号将数字格式化为千位分隔符
   * ```ts
   * 10000 => `10,000`
   * 10000.567 => `10,000.57`
   * ```
   */
  format(value: number | string, options?: CurrencyFormatOptions): string {
    options = {
      startingUnit: this.c.startingUnit,
      precision: this.c.precision,
      ingoreZeroPrecision: this.c.ingoreZeroPrecision,
      ngCurrency: this.c.ngCurrency,
      ...options,
    };
    let truthValue = Number(value);
    if (value == null || isNaN(truthValue)) {
      return '';
    }
    if (options.startingUnit === 'cent') {
      truthValue = truthValue / 100;
    }
    if (options.ngCurrency != null) {
      const cur = options.ngCurrency!;
      return this.currencyPipe.transform(truthValue, cur.currencyCode, cur.display, cur.digitsInfo, cur.locale || this.locale)!;
    }
    const res = formatNumber(truthValue, this.locale, `.${options.ingoreZeroPrecision ? 1 : options.precision}-${options.precision}`);
    return options.ingoreZeroPrecision ? res.replace(/(?:\.[0]+)$/g, '') : res;
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
  mega(value: number | string, options?: CurrencyMegaOptions): CurrencyMegaResult {
    options = { precision: this.c.precision, unitI18n: this.c.megaUnit, startingUnit: this.c.startingUnit, ...options };
    let num = Number(value);
    const res: CurrencyMegaResult = { raw: value, value: '', unit: '', unitI18n: '' };
    if (isNaN(num) || num === 0) {
      res.value = value.toString();
      return res;
    }
    if (options.startingUnit === 'cent') {
      num = num / 100;
    }
    let abs = Math.abs(+num);
    const rounder = Math.pow(10, options.precision!);
    const isNegative = num < 0;
    for (const p of CurrencyMega_Powers) {
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

  /**
   * Converted into RMB notation.
   *
   * 转化成人民币表示法
   */
  cny(value: number | string, options?: CurrencyCNYOptions): string {
    options = {
      inWords: true,
      minusSymbol: '负',
      startingUnit: this.c.startingUnit,
      ...options,
    };

    value = Number(value);
    if (isNaN(value)) {
      return '';
    }
    if (options.startingUnit === 'cent') {
      value = value / 100;
    }
    value = value.toString();
    let integer: number | string;
    let decimal: number | string | null;
    [integer, decimal] = value.split('.');
    let symbol = '';
    if (integer.startsWith('-')) {
      symbol = options.minusSymbol!;
      integer = integer.substr(1);
    }
    if (/^-?\d+$/.test(value)) {
      decimal = null;
    }
    integer = (+integer).toString();
    const inWords = options.inWords;
    const unit: { [key: string]: string[] } = {
      num: inWords
        ? ['', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖', '点']
        : ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '点'],
      radice: inWords
        ? ['', '拾', '佰', '仟', '万', '拾', '佰', '仟', '亿', '拾', '佰', '仟', '万亿', '拾', '佰', '仟', '兆', '拾', '佰', '仟']
        : ['', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千', '万亿', '十', '百', '千', '兆', '十', '百', '千'],
      dec: ['角', '分', '厘', '毫'],
    };
    if (inWords) {
      value = (+value).toFixed(5).toString();
    }
    let integerRes = '';
    const integerCount = integer.length;
    if (integer === '0' || integerCount === 0) {
      integerRes = '零';
    } else {
      let cnDesc = '';
      for (let i = 0; i < integerCount; i++) {
        const n = +integer[i];
        const j = integerCount - i - 1;
        const isZero = i > 1 && n !== 0 && integer[i - 1] === '0';
        const cnZero = isZero ? '零' : '';
        const isEmpptyUnit = (n === 0 && j % 4 !== 0) || integer.substr(i - 3, 4) === '0000';
        const descMark = cnDesc;
        let cnNum = unit.num[n];

        cnDesc = isEmpptyUnit ? '' : unit.radice[j];
        // 第一位是一十
        if (i === 0 && cnNum === '一' && cnDesc === '十') cnNum = '';
        const isChangeEr =
          n > 1 &&
          cnNum === '二' && // 去除首位
          ['', '十', '百'].indexOf(cnDesc) === -1 && // 不读两\两十\两百
          descMark !== '十'; // 不读十两
        if (isChangeEr) cnNum = '两';
        integerRes += cnZero + cnNum + cnDesc;
      }
    }

    // 小数部分拼接
    let decimalRes = '';
    const decimalCount = decimal ? decimal.toString().length : 0;
    if (decimal === null) {
      decimalRes = inWords ? '整' : '';
    } else if (decimal === '0') {
      decimalRes = '零';
    } else {
      for (let i = 0; i < decimalCount; i++) {
        if (inWords && i > unit.dec.length - 1) break;
        const n = decimal[i];
        const cnZero = n === '0' ? '零' : '';
        const cnNum = unit.num[+n];
        const cnDesc = inWords ? unit.dec[i] : '';
        decimalRes += cnZero + cnNum + cnDesc;
      }
    }
    const ret =
      symbol +
      (inWords
        ? integerRes + (decimalRes === '零' ? '元整' : `元${decimalRes}`)
        : integerRes + (decimalRes === '' ? '' : `点${decimalRes}`));
    return ret;
  }
}
