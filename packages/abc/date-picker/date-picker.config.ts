import { Injectable } from '@angular/core';

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
}

@Injectable({ providedIn: 'root' })
export class DatePickerConfig {
  range?: DateRangePickerConfig;
}
