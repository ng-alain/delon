import { addDays, addSeconds, differenceInCalendarDays, format } from 'date-fns';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import type { DisabledDateFn, DisabledTimeConfig, DisabledTimeFn } from 'ng-zorro-antd/date-picker';

// TODO: timezone process
export class DateTimePickerUtil {
  /**
   * Current local time
   *
   * 当前本地时间
   */
  get now(): Date {
    return new Date();
  }
  /**
   * Current local date (not including time part)
   *
   * 当前本地日期（不包含时间部分）
   */
  get date(): Date {
    return this.removeTime(this.now);
  }
  /**
   * Remove the time part of the date
   *
   * 移除日期的时间部分
   */
  removeTime(d: Date): Date {
    return new Date(d.toDateString());
  }
  /**
   * Format date-time
   *
   * 格式化日期
   */
  format(d: number | Date, formatString: string = 'yyyy-MM-dd HH:mm:ss'): string {
    return format(d, formatString);
  }
  private genTick(count: number): number[] {
    return new Array(count).fill(0).map((_, idx) => idx);
  }
  /**
   * Calculate the number of days between two dates, `0` means the same day
   *
   * 计算两个日期相差天数，`0` 表示同一天
   */
  getDiffDays(dateLeft: Date | number, dateRight?: Date | number): number {
    return differenceInCalendarDays(
      dateLeft,
      typeof dateRight === 'number' ? addDays(this.date, dateRight) : dateRight || this.date
    );
  }
  /**
   * Disabled Before date (Default: today), Generally serves `nzDisabledDate`
   *
   * 禁用之前日期（默认：今天），一般服务于 `nzDisabledDate`
   */
  disabledBeforeDate(options?: { offsetDays?: Date | number }): DisabledDateFn {
    return (d): boolean => this.getDiffDays(d, options?.offsetDays) < 0;
  }
  /**
   * Disabled After date (Default: today), Generally serves `nzDisabledDate`
   *
   * 禁用之后日期（默认：今天），一般服务于 `nzDisabledDate`
   */
  disabledAfterDate(options?: { offsetDays?: Date | number }): DisabledDateFn {
    return (d): boolean => this.getDiffDays(d, options?.offsetDays) > 0;
  }
  private baseDisabledTime(type: 'before' | 'after', offsetSeconds?: number): DisabledTimeFn {
    const tick24 = this.genTick(24);
    const tick60 = this.genTick(60);
    return (current): DisabledTimeConfig => {
      const cur = current as Date;
      if (cur == null) {
        return {} as NzSafeAny;
      }
      const now = addSeconds(this.now, offsetSeconds || 0);
      const nowHours = now.getHours();
      const nowMinutes = now.getMinutes();
      const curHours = cur.getHours();
      const isToday = this.getDiffDays(this.removeTime(cur)) === 0;
      return {
        nzDisabledHours: () => {
          if (!isToday) return [];
          return type === 'before' ? tick24.slice(0, nowHours) : tick24.slice(nowHours + 1);
        },
        nzDisabledMinutes: () => {
          if (isToday && curHours === nowHours) {
            return type === 'before' ? tick60.slice(0, nowMinutes) : tick60.slice(nowMinutes + 1);
          }
          return [];
        },
        nzDisabledSeconds: () => {
          if (isToday && curHours === nowHours && cur.getMinutes() === nowMinutes) {
            const nowSeconds = now.getSeconds();
            return type === 'before' ? tick60.slice(0, nowSeconds) : tick60.slice(nowSeconds + 1);
          }
          return [];
        }
      };
    };
  }
  /**
   * Disabled Before time (Default: now), Generally serves `nzDisabledTime`
   *
   * 禁用之前时间（默认：现在），一般服务于 `nzDisabledTime`
   */
  disabledBeforeTime(options?: { offsetSeconds?: number }): DisabledTimeFn {
    return this.baseDisabledTime('before', options?.offsetSeconds);
  }
  /**
   * Disabled After time (Default: now), Generally serves `nzDisabledTime`
   *
   * 禁用之后时间（默认：现在），一般服务于 `nzDisabledTime`
   */
  disabledAfterTime(options?: { offsetSeconds?: number }): DisabledTimeFn {
    return this.baseDisabledTime('after', options?.offsetSeconds);
  }
}

export const dateTimePickerUtil = new DateTimePickerUtil();
