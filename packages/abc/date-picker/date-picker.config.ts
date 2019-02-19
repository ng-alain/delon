import { Injectable } from '@angular/core';
import { getTimeDistance } from '../../util';

export class DateRangePickerConfig {
  nzFormat?: string = 'yyyy-MM-dd';
  nzClassName?: string;
  nzSize?: string;
  nzStyle?: string;
  nzAllowClear?: boolean = true;
  nzAutoFocus?: boolean = false;
  nzDisabled?: boolean = false;
  nzDisabledDate?: any;
  nzDisabledTime?: any;
  nzLocale?: any;
  nzPopupStyle?: any = { position: 'relative' };
  nzDropdownClassName?: any;
  nzRenderExtraFooter?: any;
  nzPlaceHolder?: any;
  nzShowTime?: any;
  nzShowToday = true;
  nzMode?: any;
  nzRanges?: any;
  shortcuts?: DateRangePickerShortcut = {
    enabled: false,
    closed: true,
    list: [
      {
        text: '近3天',
        fn: () => getTimeDistance(-2),
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

export interface DateRangePickerShortcut {
  /** Whether to enable, default: `false` */
  enabled?: boolean;
  /** Whether to close the panel after clicking, default: `true` */
  closed?: boolean;
  /**
   * Shortcut list, default: `近3天`, `本周`, `本月`, `全年`
   */
  list?: DateRangePickerShortcutItem[];
}

export interface DateRangePickerShortcutItem {
  text: string;
  fn: (value: Date[]) => Date[];
}

@Injectable({ providedIn: 'root' })
export class DatePickerConfig {
  range?: DateRangePickerConfig;
}
