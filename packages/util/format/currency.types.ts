export interface FormatCurrencyMegaOptions {
  /**
   * 精度，默认：`2`
   */
  precision?: number;
  /**
   * 单位国际化，默认：`{Q: '京', T: '兆', B: '亿', M: '万', K: '千',}`
   */
  unitI18n?: FormatCurrencyMegaUnitI18n;
}

export interface FormatCurrencyMegaResult {
  raw: number | string;
  value: string;
  unit: string;
  unitI18n: string;
}

export const FormatCurrencyMega_Powers = [
  { unit: 'Q', value: Math.pow(10, 15) },
  { unit: 'T', value: Math.pow(10, 12) },
  { unit: 'B', value: Math.pow(10, 9) },
  { unit: 'M', value: Math.pow(10, 6) },
  { unit: 'K', value: 1000 },
];

export interface FormatCurrencyMegaUnitI18n {
  Q: string;
  T: string;
  B: string;
  M: string;
  K: string;
}
