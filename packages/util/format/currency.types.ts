export type CurrencyStartingUnit = 'yuan' | 'cent';

export interface CurrencyCommasOptions {
  /**
   * Thousands separator, default: `,`
   *
   * 千位分隔符，默认：`,`
   */
  separator?: string;

  /**
   * Starting unit, default: `yuan`
   *
   * 起始单位，默认：`yuan`
   */
  startingUnit?: CurrencyStartingUnit;
}

export interface CurrencyMegaOptions {
  /**
   * 精度，默认：`2`
   */
  precision?: number;

  /**
   * 单位国际化，默认：`{Q: '京', T: '兆', B: '亿', M: '万', K: '千',}`
   */
  unitI18n?: CurrencyMegaUnitI18n;

  /**
   * Starting unit, default: `yuan`
   *
   * 起始单位，默认：`yuan`
   */
  startingUnit?: CurrencyStartingUnit;
}

export interface CurrencyMegaResult {
  raw: number | string;
  value: string;
  unit: string;
  unitI18n: string;
}

export const CurrencyMega_Powers = [
  { unit: 'Q', value: Math.pow(10, 15) },
  { unit: 'T', value: Math.pow(10, 12) },
  { unit: 'B', value: Math.pow(10, 9) },
  { unit: 'M', value: Math.pow(10, 6) },
  { unit: 'K', value: 1000 },
];

export interface CurrencyMegaUnitI18n {
  Q: string;
  T: string;
  B: string;
  M: string;
  K: string;
}

export interface CurrencyCNYOptions {
  /**
   * Whether to return to uppercase notation, default: `true`
   *
   * 是否返回大写表示法，默认：`true`
   */
  inWords?: boolean;
  /**
   * Specify negative sign, default: `negative`
   *
   * 指定负数符号，默认：`负`
   */
  minusSymbol?: string;
  /**
   * Starting unit, default: `yuan`
   *
   * 起始单位，默认：`yuan`
   */
  startingUnit?: CurrencyStartingUnit;
}
