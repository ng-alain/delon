import { Component, OnInit } from '@angular/core';
import format from 'date-fns/format';
import { SFValue } from '../../interface';
import { toBool } from '../../utils';
import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-time',
  template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

    <nz-time-picker
      [(ngModel)]="displayValue"
      (ngModelChange)="_change($event)"
      [nzDisabled]="disabled"
      [nzSize]="ui.size"
      [nzFormat]="i.displayFormat"
      [nzAllowEmpty]="i.allowEmpty"
      [nzClearText]="i.clearText"
      [nzDefaultOpenValue]="i.defaultOpenValue"
      [nzDisabledHours]="ui.disabledHours"
      [nzDisabledMinutes]="ui.disabledMinutes"
      [nzDisabledSeconds]="ui.disabledSeconds"
      [nzHideDisabledOptions]="i.hideDisabledOptions"
      [nzHourStep]="i.hourStep"
      [nzMinuteStep]="i.minuteStep"
      [nzSecondStep]="i.secondStep"
      [nzPopupClassName]="ui.popupClassName"
      >
    </nz-time-picker>

  </sf-item-wrap>
  `,
})
export class TimeWidget extends ControlWidget implements OnInit {
  displayValue: Date = null;
  format: string;
  // tslint:disable-next-line:no-any
  i: any;

  ngOnInit(): void {
    const ui = this.ui;
    this.format = ui.format
      ? ui.format
      : this.schema.type === 'number'
        ? 'x'
        : 'HH:mm:ss';
    this.i = {
      displayFormat: ui.displayFormat || 'HH:mm:ss',
      allowEmpty: toBool(ui.allowEmpty, true),
      clearText: ui.clearText || '清除',
      defaultOpenValue: ui.defaultOpenValue || new Date(),
      hideDisabledOptions: toBool(ui.hideDisabledOptions, false),
      hourStep: ui.hourStep || 1,
      minuteStep: ui.nzMinuteStep || 1,
      secondStep: ui.secondStep || 1,
    };
  }

  private compCd() {
    // TODO: removed after nz-datepick support OnPush mode
    setTimeout(() => this.detectChanges());
  }

  reset(value: SFValue) {
    if (value instanceof Date) {
      this.displayValue = value;
      this.compCd();
      return;
    }
    let v = value != null && value.toString().length ? new Date(value) : null;

    // trying restore full Date format
    if (v != null && v.toString() === 'Invalid Date') {
      if (value.toString().split(':').length <= 1) value += ':00';
      v = new Date(`1970-1-1 ` + value);
    }
    this.displayValue = v;
    this.compCd();
  }

  _change(value: Date) {
    if (value == null) {
      this.setValue(null);
      return;
    }
    if (this.ui.utcEpoch === true) {
      this.setValue(Date.UTC(1970, 0, 1, value.getHours(), value.getMinutes(), value.getSeconds()));
      return;
    }
    this.setValue(format(value, this.format));
  }
}
