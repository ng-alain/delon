import { Component, EventEmitter, forwardRef, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { deepMergeKey, fixEndTimeOfRange, InputBoolean } from '@delon/util';
import { FunctionProp, NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzRangePickerComponent } from 'ng-zorro-antd/date-picker';
import { DatePickerConfig, DateRangePickerConfig, DateRangePickerShortcut, DateRangePickerShortcutItem } from './date-picker.config';

@Component({
  selector: 'range-picker',
  exportAs: 'rangePicker',
  templateUrl: './range.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => RangePickerComponent),
    },
  ],
})
export class RangePickerComponent implements ControlValueAccessor {
  private onChangeFn: (val: Date) => void;
  private _shortcut: DateRangePickerShortcut;
  private _cog: DateRangePickerConfig;
  @ViewChild('comp', { static: false }) private comp: NzRangePickerComponent;
  value: Date[] = [];

  @Input() ngModelEnd: Date;
  @Input()
  set shortcut(val: DateRangePickerShortcut | null) {
    const item = deepMergeKey({}, true, this._cog.shortcuts, val == null ? {} : val) as DateRangePickerShortcut;
    if (typeof val === 'boolean') {
      item.enabled = val;
    }
    (item.list || []).forEach(i => {
      i._text = this.dom.bypassSecurityTrustHtml(i.text);
    });
    this._shortcut = item;
  }
  get shortcut() {
    return this._shortcut;
  }
  @Output() readonly ngModelEndChange = new EventEmitter<Date>();

  // #region Native properties

  @Input() nzAllowClear = true;
  @Input() nzAutoFocus = false;
  @Input() nzClassName: string;
  @Input() nzDisabled: boolean;
  @Input() nzSize: string;
  @Input() nzStyle: string;
  @Input() nzDisabledDate: (d: Date) => boolean;
  @Input() nzLocale: object;
  @Input() nzPopupStyle: object;
  @Input() nzDropdownClassName: string;
  @Input() nzPlaceHolder: string | string[];
  @Output() readonly nzOnOpenChange = new EventEmitter<boolean>();

  // range
  @Input() nzDateRender: any;
  @Input() nzFormat: any;
  @Input() nzDisabledTime: any;
  @Input() nzRenderExtraFooter: FunctionProp<TemplateRef<void> | string>;
  @Input() nzShowTime: any;
  @Input() @InputBoolean() nzShowToday: boolean = true;
  @Input() nzMode: any;
  @Input() nzRanges: any;
  @Output() readonly nzOnPanelChange = new EventEmitter<any>();
  @Output() readonly nzOnOk = new EventEmitter<any>();

  // #endregion

  constructor(cog: DatePickerConfig, private dom: DomSanitizer) {
    this._cog = deepMergeKey(new DateRangePickerConfig(), true, cog && cog.range);
    Object.assign(this, this._cog);
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

  valueChange(e: [Date, Date]) {
    e = fixEndTimeOfRange(e);
    this.onChangeFn(e[0]);
    this.ngModelEnd = e[1];
    this.ngModelEndChange.emit(e[1]);
  }

  writeValue(value: Date): void {
    this.value = value && this.ngModelEnd ? [value, this.ngModelEnd] : [];
  }

  registerOnChange(fn: (val: Date) => void): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(_fn: () => void): void {
    // this.onTouchedFn = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.nzDisabled = disabled;
  }

  clickShortcut(item: DateRangePickerShortcutItem) {
    this.value = item.fn(this.value as any);
    this.valueChange(this.value as [Date, Date]);
    if (this._shortcut.closed) {
      // tslint:disable-next-line:no-string-literal
      (this.comp as NzSafeAny)['picker'].hideOverlay();
    }
  }
}
