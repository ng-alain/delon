import { Injectable } from '@angular/core';
import { deprecation10Cog, getTimeDistance } from '@delon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { DisabledTimeFn, PanelMode, PresetRanges, SupportTimeOptions } from 'ng-zorro-antd/date-picker/standard-types';
import { NzDatePickerI18nInterface } from 'ng-zorro-antd/i18n';

/**
 * @deprecated `DateRangePickerConfig` is going to be removed in 10.0.0, Please use `AlainDateRangePickerConfig` instead
 */
export class DateRangePickerConfig {
  nzFormat?: string = 'yyyy-MM-dd';
  nzClassName?: string;
  nzSize?: string;
  nzStyle?: string;
  nzAllowClear?: boolean = true;
  nzAutoFocus?: boolean = false;
  nzDisabled?: boolean = false;
  nzDisabledDate?: (d: Date) => boolean;
  nzDisabledTime?: DisabledTimeFn;
  nzLocale?: NzDatePickerI18nInterface;
  nzPopupStyle?: object = { position: 'relative' };
  nzDropdownClassName?: string;
  nzRenderExtraFooter?: string;
  nzPlaceHolder?: string | string[];
  nzShowTime?: SupportTimeOptions | boolean;
  nzShowToday?: boolean = true;
  nzMode?: PanelMode | PanelMode[];
  nzRanges?: PresetRanges;
  // tslint:disable-next-line: deprecation
  shortcuts?: DateRangePickerShortcut = {
    enabled: false,
    closed: true,
    list: [
      {
        text: '今天',
        fn: () => getTimeDistance('today'),
      },
      {
        text: '昨天',
        fn: () => getTimeDistance('yesterday'),
      },
      {
        text: '近3天',
        fn: () => getTimeDistance(-2),
      },
      {
        text: '近7天',
        fn: () => getTimeDistance(-6),
      },
      {
        text: '本周',
        fn: () => getTimeDistance('week'),
      },
      {
        text: '本月',
        fn: () => getTimeDistance('month'),
      },
      {
        text: '全年',
        fn: () => getTimeDistance('year'),
      },
    ],
  };
}

/**
 * @deprecated `DateRangePickerShortcut` is going to be removed in 10.0.0, Please use `AlainDateRangePickerShortcut` instead
 */
export interface DateRangePickerShortcut {
  /** Whether to enable, default: `false` */
  enabled?: boolean;
  /** Whether to close the panel after clicking, default: `true` */
  closed?: boolean;
  /**
   * Shortcut list, default: `今天`, `昨天`, `近3天`, `近7天`, `本周`, `本月`, `全年`
   */
  // tslint:disable-next-line: deprecation
  list?: DateRangePickerShortcutItem[];
}

/**
 * @deprecated `DateRangePickerShortcutItem` is going to be removed in 10.0.0, Please use `AlainDateRangePickerShortcutItem` instead
 */
export interface DateRangePickerShortcutItem {
  [key: string]: NzSafeAny;

  text: string;
  fn: (value: [Date, Date]) => [Date, Date];
}

/**
 * @deprecated `DatePickerConfig` is going to be removed in 10.0.0. Please refer to https://ng-alain.com/docs/global-config
 */
@Injectable({ providedIn: 'root' })
export class DatePickerConfig {
  constructor() {
    deprecation10Cog(`DatePickerConfig`);
  }
  // tslint:disable-next-line: deprecation
  range?: DateRangePickerConfig;
}
