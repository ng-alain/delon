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
}
