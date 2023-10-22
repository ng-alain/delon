import {
  addDays,
  endOfDay,
  endOfMonth,
  endOfWeek,
  endOfYear,
  parse,
  parseISO,
  startOfDay,
  startOfMonth,
  startOfWeek,
  startOfYear,
  subMonths,
  subWeeks,
  subYears,
  format,
  formatDistanceToNow
} from 'date-fns';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { DateLocale } from 'ng-zorro-antd/i18n';

/**
 * Get the time range, return `[ Date, Date]` for the start and end dates
 *
 * 获取时间范围
 *
 * @param type 类型，带 `-` 表示过去一个时间，若指定 `number` 表示天数
 * @param time 开始时间
 * @param ignoreMaxTime 忽略追加结束日期的最大时间值
 */
export function getTimeDistance(
  type: 'today' | '-today' | 'yesterday' | 'week' | '-week' | 'month' | '-month' | 'year' | '-year' | number,
  time?: Date | string | number,
  options?: { ignoreMaxTime?: boolean }
): [Date, Date] {
  time = time
    ? typeof time === 'string'
      ? parse(time, 'yyyy-MM-dd HH:mm:ss', new Date())
      : new Date(time)
    : new Date();
  const opt: { weekStartsOn: 1 } = { weekStartsOn: 1 };

  let res: [Date, Date];
  switch (type) {
    case 'today':
      res = [time, time];
      break;
    case '-today':
      res = [addDays(time, -1), time];
      break;
    case 'yesterday':
      res = [addDays(time, -1), addDays(time, -1)];
      break;
    case 'week':
      res = [startOfWeek(time, opt), endOfWeek(time, opt)];
      break;
    case '-week':
      res = [startOfWeek(subWeeks(time, 1), opt), endOfWeek(subWeeks(time, 1), opt)];
      break;
    case 'month':
      res = [startOfMonth(time), endOfMonth(time)];
      break;
    case '-month':
      res = [startOfMonth(subMonths(time, 1)), endOfMonth(subMonths(time, 1))];
      break;
    case 'year':
      res = [startOfYear(time), endOfYear(time)];
      break;
    case '-year':
      res = [startOfYear(subYears(time, 1)), endOfYear(subYears(time, 1))];
      break;
    default:
      res = type > 0 ? [time, addDays(time, type)] : [addDays(time, type), time];
      break;
  }
  return options?.ignoreMaxTime ? res : fixEndTimeOfRange(res);
}

/**
 * fix time is the most, big value
 */
export function fixEndTimeOfRange(dates: [Date, Date]): [Date, Date] {
  return [startOfDay(dates[0]), endOfDay(dates[1])];
}

export interface ToDateOptions {
  /** If parsing fails try to parse the date by pressing `formatString` */
  formatString?: string;
  /** If parsing fails returned default value, default: `new Date(NaN)` */
  defaultValue?: NzSafeAny;
  timestampSecond?: boolean;
}

/**
 * Convert to `Date` format
 *
 * @param value When is a number, it's treated as a timestamp; If it's seconds, you need to provide the `options.timestampSecond` parameter.
 */
export function toDate(value?: Date | string | number | null, options?: string | ToDateOptions): Date {
  const { formatString, defaultValue, timestampSecond } = {
    formatString: 'yyyy-MM-dd HH:mm:ss',
    defaultValue: new Date(NaN),
    timestampSecond: false,
    ...(typeof options === 'string' ? { formatString: options } : options)
  };
  if (value == null) {
    return defaultValue;
  }
  if (value instanceof Date) {
    return value;
  }
  if (typeof value === 'number' || (typeof value === 'string' && /^[0-9]+$/.test(value))) {
    const valueNumber = +value;
    return new Date(timestampSecond ? valueNumber * 1000 : valueNumber);
  }
  let tryDate = parseISO(value);
  if (isNaN(tryDate as NzSafeAny)) {
    tryDate = parse(value, formatString!, new Date());
  }

  return isNaN(tryDate as NzSafeAny) ? defaultValue : tryDate;
}

/**
 * Format date, supports `Date, number, string` types
 *
 * @param value When is a number, it is treated as a timestamp (Support seconds and milliseconds timestamp).
 * @param formatString Please refer to [date-fnd format](https://date-fns.org/v2.30.0/docs/format) for string format
 * @param dateLocale Recommended to be consistent with NG-ZORRO by using `inject(NZ_DATE_LOCALE)`
 */
export function formatDate(value: Date | string | number, formatString: string, dateLocale?: DateLocale): string {
  value = toDate(value);
  if (isNaN(value as NzSafeAny)) return '';

  const langOpt = { locale: dateLocale };
  return formatString === 'fn' ? formatDistanceToNow(value, langOpt) : format(value, formatString, langOpt);
}
