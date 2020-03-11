import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import format from 'date-fns/format';
import { SFValue } from '../../interface';
import { FormProperty } from '../../model/form.property';
import { toBool, isDateFns } from '../../utils';
import { ControlUIWidget } from '../../widget';
import { SFDateWidgetSchema } from './schema';

@Component({
  selector: 'sf-date',
  templateUrl: './date.widget.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
})
export class DateWidget extends ControlUIWidget<SFDateWidgetSchema> implements OnInit {
  private startFormat: string;
  private endFormat: string;
  private flatRange = false;
  mode: string;
  displayValue: Date | Date[] | null = null;
  displayFormat: string;
  i: any;

  private get zorroI18n(): NzI18nService {
    return this.injector.get<NzI18nService>(NzI18nService);
  }

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
      const usingDateFns = isDateFns(this.zorroI18n);
      switch (this.mode) {
        case 'year':
          this.displayFormat = usingDateFns ? `YYYY` : `yyyy`;
          break;
        case 'month':
          this.displayFormat = usingDateFns ? `YYYY-MM` : `yyyy-MM`;
          break;
        case 'week':
          this.displayFormat = usingDateFns ? `YYYY-WW` : `yyyy-ww`;
          break;
      }
    } else {
      this.displayFormat = displayFormat;
    }
    this.i = {
      allowClear: toBool(allowClear, true),
      // nz-date-picker
      showToday: toBool(showToday, true),
    };
  }

  reset(value: SFValue) {
    value = this.toDate(value);
    if (this.flatRange) {
      this.displayValue = value == null ? [] : [value, this.toDate(this.endProperty.formData)];
    } else {
      this.displayValue = value;
    }
    this.detectChanges();
  }

  _change(value: Date | Date[] | null) {
    if (value == null || (<Date[]>value).length < 2) {
      this.setValue(null);
      this.setEnd(null);
      return;
    }

    const res = Array.isArray(value)
      ? [format(value[0], this.startFormat), format(value[1], this.endFormat || this.startFormat)]
      : format(value, this.startFormat);

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

  _ok(value: any) {
    if (this.ui.onOk) this.ui.onOk(value);
  }

  private get endProperty(): FormProperty {
    return this.formProperty.parent!.properties![this.ui.end!];
  }

  private setEnd(value: string | null) {
    if (!this.flatRange) return;

    this.endProperty.setValue(value, true);
  }

  private toDate(value: SFValue) {
    if (typeof value === 'number' || (typeof value === 'string' && !isNaN(+value))) {
      value = new Date(+value);
    }
    return value;
  }
}
