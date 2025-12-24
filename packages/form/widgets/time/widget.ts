import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { format } from 'date-fns';

import { ControlUIWidget, DelonFormModule, SFValue, toBool } from '@delon/form';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

import type { SFTimeWidgetSchema } from './schema';

@Component({
  selector: 'sf-time',
  template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-time-picker
      [nzId]="id"
      [(ngModel)]="displayValue"
      (ngModelChange)="_change($event)"
      [nzDisabled]="disabled"
      [nzSize]="$any(ui.size)"
      [nzFormat]="i.displayFormat"
      [nzAllowEmpty]="i.allowEmpty"
      [nzClearText]="i.clearText"
      [nzDefaultOpenValue]="i.defaultOpenValue"
      [nzDisabledHours]="ui.disabledHours"
      [nzDisabledMinutes]="ui.disabledMinutes"
      [nzDisabledSeconds]="ui.disabledSeconds"
      [nzHideDisabledOptions]="i.hideDisabledOptions"
      [nzUse12Hours]="i.use12Hours"
      [nzHourStep]="i.hourStep"
      [nzMinuteStep]="i.minuteStep"
      [nzSecondStep]="i.secondStep"
      [nzPopupClassName]="ui.popupClassName!"
      [nzPlaceHolder]="ui.placeholder!"
      [nzNowText]="ui.nowText!"
      [nzOkText]="ui.okText!"
      (nzOpenChange)="_openChange($event)"
    />
  </sf-item-wrap>`,
  encapsulation: ViewEncapsulation.None,
  imports: [FormsModule, DelonFormModule, NzTimePickerModule]
})
export class TimeWidget extends ControlUIWidget<SFTimeWidgetSchema> implements OnInit {
  static readonly KEY = 'time';

  private valueFormat: string | undefined;
  displayValue: Date | null = null;
  i: NzSafeAny;

  ngOnInit(): void {
    const ui = this.ui;
    this.valueFormat = ui._format;
    const opt = {
      displayFormat: ui.displayFormat ?? 'HH:mm:ss',
      allowEmpty: toBool(ui.allowEmpty, true),
      clearText: ui.clearText ?? '清除',
      defaultOpenValue: ui.defaultOpenValue ?? new Date(),
      hideDisabledOptions: toBool(ui.hideDisabledOptions, false),
      use12Hours: toBool(ui.use12Hours, false),
      hourStep: ui.hourStep ?? 1,
      minuteStep: ui.minuteStep ?? 1,
      secondStep: ui.secondStep ?? 1
    };
    if (opt.use12Hours && !ui.displayFormat) {
      opt.displayFormat = `h:mm:ss a`;
    }
    this.i = opt;
  }

  reset(value: SFValue): void {
    if (value instanceof Date) {
      this.displayValue = value;
      this.detectChanges();
      return;
    }
    let v = value != null && value.toString().length ? new Date(value) : null;

    // trying restore full Date format
    if (v != null && v.toString() === 'Invalid Date') {
      if (value.toString().split(':').length <= 1) {
        value += ':00';
      }
      v = new Date(`1970-1-1 ${value}`);
    }
    this.displayValue = v;
    this.detectChanges();
  }

  _change(value: Date | null): void {
    if (this.ui.change) {
      this.ui.change(value);
    }
    if (value == null) {
      this.setValue(null);
      return;
    }
    if (this.ui.utcEpoch === true) {
      this.setValue(Date.UTC(1970, 0, 1, value.getHours(), value.getMinutes(), value.getSeconds()));
      return;
    }
    this.setValue(format(value, this.valueFormat!));
  }

  _openChange(status: boolean): void {
    if (this.ui.openChange) {
      this.ui.openChange(status);
    }
  }
}
