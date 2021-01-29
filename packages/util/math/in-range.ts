import { assertNumber } from '@delon/util/other';

/**
 * Checks if `value` is between `start` and `end` to, but not including `end`. If `end` is not specified, it's set to start with `start` then set to `0`. If `start` is greater than `end` the params are swapped to support negative ranges.
 *
 * 检查 `value` 是否在 `start` 与 `end` 之间，但不包括 `end`。 如果 `end` 没有指定，那么 `start` 设置为 `0`。 如果 `start` 大于 `end`，那么参数会交换以便支持负范围。
 * ```ts
 * inRange(3, 2, 4); // true
 * inRange(4, 8); // true
 * inRange(4, 2); // false
 * inRange(2, 2); // false
 * inRange(1.2, 2); // true
 * inRange(-3, -2, -6); // true
 * ```
 */
export function inRange(value: number, start: number, end?: number): boolean {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  assertNumber(value);
  assertNumber(start);
  assertNumber(end);
  return value >= Math.min(start, end) && value < Math.max(start, end);
}
