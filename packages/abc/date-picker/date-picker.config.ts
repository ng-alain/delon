import { Injectable } from '@angular/core';

// tslint:disable:no-any
export class DateRangePickerConfig {
  nzFormat ?= 'yyyy-MM-dd';
  nzClassName?: string;
  nzSize?: string;
  nzStyle?: string;
  nzAllowClear ?= true;
  nzAutoFocus ?= false;
  nzDisabled ?= false;
  nzDisabledDate?: any;
  nzDisabledTime?: any;
  nzLocale?: any;
  nzPopupStyle ?= { 'position': 'relative' };
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
