export interface AlainUtilCurrencyConfig {
  /**
   * Starting unit, default: `yuan`
   *
   * 起始单位，默认：`yuan`
   * - `yuan` 人民币：元
   * - `cent` 人民币：分
   */
  startingUnit?: 'yuan' | 'cent';

  /**
   * 单位国际化，默认：`{Q: '京', T: '兆', B: '亿', M: '万', K: '千',}`
   */
  megaUnit?: {
    Q: string;
    T: string;
    B: string;
    M: string;
    K: string;
  };
  /**
   * 精度，默认：`2`
   */
  precision?: number;
  /**
   * 是否忽略精度 `.0` 或 `.00` 结尾的字符，默认：`true`
   */
  ingoreZeroPrecision: boolean;
}
