import { Component, OnInit } from '@angular/core';
import format from 'date-fns/format';
import { SFValue } from '../../interface';
import { FormProperty } from '../../model/form.property';
import { toBool } from '../../utils';
import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-date',
  templateUrl: './date.widget.html',
})
export class DateWidget extends ControlWidget implements OnInit {
  mode: string;
  displayValue: Date | Date[] = null;
  displayFormat: string;
  format: string;
  // tslint:disable-next-line:no-any
  i: any;
  flatRange = false;

  ngOnInit(): void {
    const ui = this.ui;
    this.mode = ui.mode || 'date';
    this.flatRange = ui.end != null;
    if (this.flatRange) {
      this.mode = 'range';
    }
    if (!ui.displayFormat) {
      switch (this.mode) {
        case 'month':
          this.displayFormat = `yyyy-MM`;
          break;
        case 'week':
          this.displayFormat = `yyyy-ww`;
          break;
      }
    } else {
      this.displayFormat = ui.displayFormat;
    }
    this.format = ui.format ? ui.format : this.schema.type === 'number' ? 'x' : 'YYYY-MM-DD HH:mm:ss';
    // 公共API
    this.i = {
      allowClear: toBool(ui.allowClear, true),
      // nz-date-picker
      showToday: toBool(ui.showToday, true),
    };
  }

  private compCd() {
    // TODO: removed after nz-datepick support OnPush mode
    setTimeout(() => this.detectChanges());
  }

  reset(value: SFValue) {
    value = this.toDate(value);
    if (this.flatRange) {
      this.displayValue = value == null ? [] : [value, this.toDate(this.endProperty.formData)];
    } else {
      this.displayValue = value;
    }
    this.compCd();
  }

  _change(value: Date | Date[]) {
    if (value == null) {
      this.setValue(null);
      this.setEnd(null);
      return;
    }

    const res = Array.isArray(value) ? value.map(d => format(d, this.format)) : format(value, this.format);

    if (this.flatRange) {
      this.setEnd(res[1]);
      this.setValue(res[0]);
    } else {
      this.setValue(res);
    }
  }

  _openChange(status: boolean) {
    if (this.ui.onOpenChange) this.ui.onOpenChange(status);
  }

  // tslint:disable-next-line:no-any
  _ok(value: any) {
    if (this.ui.onOk) this.ui.onOk(value);
  }

  private get endProperty(): FormProperty {
    return this.formProperty.parent.properties[this.ui.end];
  }

  private setEnd(value: string) {
    this.endProperty.setValue(value, true);
  }

  private toDate(value: SFValue) {
    if (typeof value === 'number' || (typeof value === 'string' && !isNaN(+value))) {
      value = new Date(+value);
    }
    return value;
  }
}
