/**
 * Computes `number` rounded up to `precision`.
 *
 * 根据 `precision`（精度） 向上舍入 `number`。
 * ```ts
 * ceil(4.006); // 5
 * ceil(6.004, 2); // 6.01
 * ceil(6040, -2); // 6100
 * ```
 */
export function ceil(number: number, precision: number = 0): number {
  return createRound(number, precision, 'ceil');
}

/**
 * Computes `number` rounded down to `precision`.
 *
 * 根据 `precision`（精度） 向下舍入 `number`。
 * ```ts
 * floor(4.006); // 4
 * floor(0.046, 2); // 0.04
 * floor(4060, -2); // 4000
 * ```
 */
export function floor(number: number, precision: number = 0): number {
  return createRound(number, precision, 'floor');
}

/**
 * Computes `number` rounded to `precision`.
 *
 * 根据 `precision`（精度） 四舍五入 `number`。
 * ```ts
 * round(4.006); // 4
 * round(4.006, 2); // 4.01
 * round(4060, -2); // 4100
 * ```
 */
export function round(number: number, precision: number = 0): number {
  return createRound(number, precision, 'round');
}

function createRound(number: number, precision: number, methodName: keyof Math): number {
  const func = Math[methodName] as (x: number) => number;

  precision = precision == null ? 0 : Math.min(precision, 292);
  if (!precision) {
    return func(number);
  }
  // Shift with exponential notation to avoid floating-point issues.
  // See [MDN](https://mdn.io/round#Examples) for more details.
  let pair = `${number}e`.split('e');
  const value = func(Number(`${pair[0]}e${Number(pair[1]) + precision}`));
  pair = `${value}e`.split('e');
  return Number(`${pair[0]}e${Number(pair[1]) - precision}`);
}
