import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { format } from 'date-fns';

import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { toDate } from '@delon/util/date-time';

import { SFValue } from '../../interface';
import { FormProperty } from '../../model/form.property';
import { toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
import { SFDateWidgetSchema } from './schema';

@Component({
  selector: 'sf-date',
  templateUrl: './date.widget.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None
})
export class DateWidget extends ControlUIWidget<SFDateWidgetSchema> implements OnInit {
  private startFormat: string;
  private endFormat: string;
  private flatRange = false;
  mode: string;
  displayValue: Date | Date[] | null = null;
  displayFormat: string;
  i!: { allowClear: boolean; showToday: boolean };

  ngOnInit(): void {
    const { mode, end, displayFormat, allowClear, showToday } = this.ui;
    this.mode = mode || 'date';
    this.flatRange = end != null;
    // 构建属性对象时会对默认值进行校验，因此可以直接使用 format 作为格式化属性
    this.startFormat = this.ui._format!;
    if (this.flatRange) {
      this.mode = 'range';
      const endUi = this.endProperty.ui as SFDateWidgetSchema;
      this.endFormat = endUi.format ? endUi._format : this.startFormat;
    }
    if (!displayFormat) {
      switch (this.mode) {
        case 'year':
          this.displayFormat = `yyyy`;
          break;
        case 'month':
          this.displayFormat = `yyyy-MM`;
          break;
        case 'week':
          this.displayFormat = `yyyy-ww`;
          break;
      }
    } else {
      this.displayFormat = displayFormat;
    }
    this.i = {
      allowClear: toBool(allowClear, true),
      // nz-date-picker
      showToday: toBool(showToday, true)
    };
  }

  reset(value: SFValue): void {
    const toDateOptions = { formatString: this.startFormat, defaultValue: null };
    if (Array.isArray(value)) {
      value = value.map(v => toDate(v, toDateOptions));
    } else {
      value = toDate(value, toDateOptions);
    }
    if (this.flatRange) {
      const endValue = toDate(this.endProperty.formData as NzSafeAny, {
        formatString: this.endFormat || this.startFormat,
        defaultValue: null
      });
      this.displayValue = value == null || endValue == null ? [] : [value, endValue];
    } else {
      this.displayValue = value;
    }
    this.detectChanges();
    // TODO: Need to wait for the rendering to complete, otherwise it will be overwritten of end widget
    if (this.displayValue) {
      setTimeout(() => this._change(this.displayValue, false));
    }
  }

  _change(value: Date | Date[] | null, emitModelChange: boolean = true): void {
    if (emitModelChange && this.ui.change) {
      this.ui.change(value);
    }
    if (value == null || (Array.isArray(value) && value.length < 2)) {
      this.setValue(null);
      this.setEnd(null);
      return;
    }

    const res = Array.isArray(value)
      ? [format(value[0], this.startFormat), format(value[1], this.endFormat || this.startFormat)]
      : format(value, this.startFormat);

    if (this.flatRange) {
      this.setValue(res[0]);
      this.setEnd(res[1]);
    } else {
      this.setValue(res);
    }
  }

  _openChange(status: boolean): void {
    if (this.ui.onOpenChange) this.ui.onOpenChange(status);
  }

  _ok(value: NzSafeAny): void {
    if (this.ui.onOk) this.ui.onOk(value);
  }

  private get endProperty(): FormProperty {
    return (this.formProperty.parent!.properties as { [key: string]: FormProperty })[this.ui.end!];
  }

  private setEnd(value: string | null): void {
    if (!this.flatRange) return;

    this.endProperty.setValue(value, true);
    this.endProperty.updateValueAndValidity();
  }
}
