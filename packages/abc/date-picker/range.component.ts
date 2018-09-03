import {
  forwardRef,
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { InputBoolean } from '@delon/util';
import { NaDatePickerConfig, NaDateRangePickerConfig } from './date-picker.config';

@Component({
  selector: 'range-picker',
  templateUrl: './range.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => NaRangePickerComponent),
    },
  ],
})
export class NaRangePickerComponent implements ControlValueAccessor {
  value: Date[] = [];

  @Input()
  ngModelEnd: Date;
  @Output()
  ngModelEndChange = new EventEmitter<Date>();

  // #region Native properties

  @Input()
  nzAllowClear = true;
  @Input()
  nzAutoFocus = false;
  @Input()
  nzClassName: string;
  @Input()
  nzDisabled: boolean;
  @Input()
  nzSize: string;
  @Input()
  nzStyle: string;
  @Input()
  nzDisabledDate: any;
  @Input()
  nzLocale: any;
  @Input()
  nzPopupStyle: any;
  @Input()
  nzDropdownClassName: any;
  @Input()
  nzPlaceHolder: any;
  @Output()
  nzOnOpenChange = new EventEmitter<boolean>();

  // range
  @Input()
  nzDateRender: any;
  @Input()
  nzFormat: any;
  @Input()
  nzDisabledTime: any;
  @Input()
  nzRenderExtraFooter: any;
  @Input()
  nzShowTime: any;
  @Input()
  @InputBoolean()
  nzShowToday: boolean = true;
  @Input()
  nzMode: any;
  @Input()
  nzRanges: any;
  @Output()
  nzOnPanelChange = new EventEmitter<any>();
  @Output()
  nzOnOk = new EventEmitter<any>();

  // #endregion

  constructor(cog: NaDatePickerConfig) {
    Object.assign(this, new NaDateRangePickerConfig(), cog && cog.range);
  }

  _nzOnOpenChange(e: any) {
    this.nzOnOpenChange.emit(e);
  }

  _nzOnPanelChange(e: any) {
    this.nzOnPanelChange.emit(e);
  }

  _nzOnOk(e: any) {
    this.nzOnOk.emit(e);
  }

  valueChange(e: Date[]) {
    this.onChangeFn(e[0]);
    this.ngModelEnd = e[1];
    this.ngModelEndChange.emit(e[1]);
  }

  onChangeFn: (val: Date) => void = () => void 0;
  onTouchedFn: () => void = () => void 0;

  writeValue(value: Date): void {
    this.value = value && this.ngModelEnd ? [value, this.ngModelEnd] : [];
  }

  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.nzDisabled = disabled;
  }
}
