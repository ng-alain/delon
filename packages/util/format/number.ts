/**
 * Format a number with commas as thousands separators
 *
 * 用逗号将数字格式化为千位分隔符
 * ```ts
 * 10000 => `10,000`
 * ```
 */
export function commasNumber(value: number | string, separator: string = ','): string {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

export const MEGA_POWERS = [
  { unit: 'Q', value: Math.pow(10, 15) },
  { unit: 'T', value: Math.pow(10, 12) },
  { unit: 'B', value: Math.pow(10, 9) },
  { unit: 'M', value: Math.pow(10, 6) },
  { unit: 'K', value: 1000 },
];

export interface MegaNumberUnitI18n {
  Q: string;
  T: string;
  B: string;
  M: string;
  K: string;
}

export interface MegaNumberResult {
  raw: number | string;
  value: string;
  unit: string;
  unitI18n: string;
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
export function megaNumber(
  value: number | string,
  precision: number = 2,
  unitI18n: MegaNumberUnitI18n = { Q: '京', T: '兆', B: '亿', M: '万', K: '千' },
): MegaNumberResult {
  const num = parseFloat(value.toString());
  const res: MegaNumberResult = { raw: value, value: '', unit: '', unitI18n: '' };
  if (isNaN(num) || num === 0) {
    res.value = value.toString();
    return res;
  }
  let abs = Math.abs(+value);
  const rounder = Math.pow(10, precision!);
  const isNegative = num < 0;
  for (const p of MEGA_POWERS) {
    let reduced = abs / p.value;

    reduced = Math.round(reduced * rounder) / rounder;

    if (reduced >= 1) {
      abs = reduced;
      res.unit = p.unit;
      break;
    }
  }

  res.value = (isNegative ? '-' : '') + abs;
  res.unitI18n = (unitI18n as { [key: string]: any })[res.unit];
  return res;
}
