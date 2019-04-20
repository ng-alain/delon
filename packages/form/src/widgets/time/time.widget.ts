import { Component, OnInit } from '@angular/core';
import format from 'date-fns/format';
import { SFValue } from '../../interface';
import { toBool } from '../../utils';
import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-time',
  templateUrl: './time.widget.html',
})
export class TimeWidget extends ControlWidget implements OnInit {
  displayValue: Date = null;
  format: string;
  i: any;

  ngOnInit(): void {
    const ui = this.ui;
    // 构建属性对象时会对默认值进行校验，因此可以直接使用 format 作为格式化属性
    this.format = ui.format;
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

  reset(value: SFValue) {
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
      v = new Date(`1970-1-1 ` + value);
    }
    this.displayValue = v;
    this.detectChanges();
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
