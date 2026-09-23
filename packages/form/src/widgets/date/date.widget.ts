import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation, signal } from '@angular/core';

import { format } from 'date-fns';

import { toDate } from '@delon/util/date-time';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { SFDateWidgetSchema } from './schema';
import { SFValue } from '../../interface';
import { FormProperty } from '../../model/form.property';
import { toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';

@Component({
  selector: 'sf-date',
  template: `
    @let showWeekNumber = ui.showWeekNumber ?? false;
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      @switch (mode) {
        @case ('year') {
          <nz-year-picker
            [nzId]="id"
            [nzDisabled]="disabled"
            [nzSize]="ui.size!"
            [nzAutoFocus]="ui.autoFocus"
            [nzFormat]="displayFormat"
            [(ngModel)]="displayValue"
            [ngModelOptions]="{ standalone: true }"
            (ngModelChange)="_change($event)"
            [nzAllowClear]="i.allowClear"
            [class]="ui.className!"
            [nzDisabledDate]="ui.disabledDate"
            [nzLocale]="ui.locale!"
            [nzPlaceHolder]="ui.placeholder!"
            [nzPopupStyle]="ui.popupStyle!"
            [nzDropdownClassName]="ui.dropdownClassName"
            (nzOnOpenChange)="_openChange($event)"
            [nzRenderExtraFooter]="ui.renderExtraFooter"
            [nzInputReadOnly]="ui.inputReadOnly"
            [nzInline]="ui.inline!"
          />
        }
        @case ('month') {
          <nz-month-picker
            [nzId]="id"
            [nzDisabled]="disabled"
            [nzSize]="ui.size!"
            [nzAutoFocus]="ui.autoFocus"
            [nzFormat]="displayFormat"
            [(ngModel)]="displayValue"
            [ngModelOptions]="{ standalone: true }"
            (ngModelChange)="_change($event)"
            [nzAllowClear]="i.allowClear"
            [class]="ui.className!"
            [nzDisabledDate]="ui.disabledDate"
            [nzLocale]="ui.locale!"
            [nzPlaceHolder]="ui.placeholder!"
            [nzPopupStyle]="ui.popupStyle!"
            [nzDropdownClassName]="ui.dropdownClassName"
            (nzOnOpenChange)="_openChange($event)"
            [nzRenderExtraFooter]="ui.renderExtraFooter"
            [nzInputReadOnly]="ui.inputReadOnly"
            [nzInline]="ui.inline!"
          />
        }
        @case ('week') {
          <nz-week-picker
            [nzId]="id"
            [nzDisabled]="disabled"
            [nzSize]="ui.size!"
            [nzAutoFocus]="ui.autoFocus"
            [nzFormat]="displayFormat"
            [(ngModel)]="displayValue"
            [ngModelOptions]="{ standalone: true }"
            (ngModelChange)="_change($event)"
            [nzAllowClear]="i.allowClear"
            [class]="ui.className!"
            [nzDisabledDate]="ui.disabledDate"
            [nzLocale]="ui.locale!"
            [nzPlaceHolder]="ui.placeholder!"
            [nzPopupStyle]="ui.popupStyle!"
            [nzDropdownClassName]="ui.dropdownClassName"
            [nzInputReadOnly]="ui.inputReadOnly"
            [nzInline]="ui.inline!"
            (nzOnOpenChange)="_openChange($event)"
          />
        }
        @case ('range') {
          <nz-range-picker
            [nzId]="id"
            [nzDisabled]="disabled"
            [nzSize]="ui.size!"
            [nzAutoFocus]="ui.autoFocus"
            [nzFormat]="displayFormat"
            [(ngModel)]="displayValue"
            [ngModelOptions]="{ standalone: true }"
            (ngModelChange)="_change($event)"
            [nzAllowClear]="i.allowClear"
            [class]="ui.className!"
            [nzDisabledDate]="ui.disabledDate"
            [nzLocale]="ui.locale!"
            [nzPlaceHolder]="ui.placeholder!"
            [nzPopupStyle]="ui.popupStyle!"
            [nzDropdownClassName]="ui.dropdownClassName"
            (nzOnOpenChange)="_openChange($event)"
            [nzDisabledTime]="ui.disabledTime"
            [nzRenderExtraFooter]="ui.renderExtraFooter"
            [nzRanges]="ui.ranges"
            [nzShowTime]="ui.showTime"
            [nzSeparator]="ui.separator"
            [nzShowWeekNumber]="showWeekNumber"
            [nzMode]="$any(ui.rangeMode)"
            [nzInputReadOnly]="ui.inputReadOnly"
            [nzInline]="ui.inline!"
            (nzOnOk)="_ok($event)"
          />
        }
        @default {
          <nz-date-picker
            [nzId]="id"
            [nzDisabled]="disabled"
            [nzSize]="ui.size!"
            [nzAutoFocus]="ui.autoFocus"
            [nzFormat]="displayFormat"
            [(ngModel)]="displayValue"
            [ngModelOptions]="{ standalone: true }"
            (ngModelChange)="_change($event)"
            [nzAllowClear]="i.allowClear"
            [class]="ui.className!"
            [nzDisabledDate]="ui.disabledDate"
            [nzLocale]="ui.locale!"
            [nzPlaceHolder]="ui.placeholder!"
            [nzPopupStyle]="ui.popupStyle!"
            [nzDropdownClassName]="ui.dropdownClassName"
            (nzOnOpenChange)="_openChange($event)"
            [nzDisabledTime]="ui.disabledTime"
            [nzRenderExtraFooter]="ui.renderExtraFooter"
            [nzShowTime]="ui.showTime"
            [nzShowToday]="i.showToday"
            [nzShowWeekNumber]="showWeekNumber"
            [nzInputReadOnly]="ui.inputReadOnly"
            [nzInline]="ui.inline!"
            (nzOnOk)="_ok($event)"
          />
        }
      }
    </sf-item-wrap>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class DateWidget extends ControlUIWidget<SFDateWidgetSchema> implements OnInit {
  private startFormat!: string;
  private endFormat?: string;
  private flatRange = false;
  mode!: string;
  protected readonly displayValue = signal<Date | Date[] | null>(null);
  displayFormat!: string;
  i!: { allowClear: boolean; showToday: boolean };

  ngOnInit(): void {
    const { mode, end, displayFormat, allowClear, showToday } = this.ui;
    this.mode = mode ?? 'date';
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
        formatString: this.endFormat ?? this.startFormat,
        defaultValue: null
      });
      this.displayValue.set(value == null || endValue == null ? [] : [value, endValue]);
    } else {
      this.displayValue.set(value);
    }
    // `flatRange` 缺一端时 `displayValue` 是 `[]`、单值模式是 `Date`，
    // 只有拿到完整值才回写：`_change()` 会把不完整的值当成空值，把仅剩的一端清掉
    const displayValue = this.displayValue();
    if (displayValue != null && (!Array.isArray(displayValue) || displayValue.length >= 2)) {
      // `ui.end` 指向的属性会被 `coverProperty` 置为 `hidden`，
      // 因此它**没有 widget**：整轮 reset 走到它时，`AtomicProperty.resetValue` 会把
      // `schema.default` 原样写回 `_value`，没有 widget 会再去格式化它。
      // → 同步回写一定会被这一步覆盖，必须等**整轮 reset 走完**。
      // 用微任务而不是渲染回调：整轮 reset 期间随时可能被别处的强制 CD 冲出来，
      // 那时 reset 还没走完，回写又会被覆盖。
      // 这次也是在补初值，不算用户变更。
      queueMicrotask(() => this.sfComp._runSilently(() => this._change(this.displayValue(), false)));
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
      ? [format(value[0], this.startFormat), format(value[1], this.endFormat ?? this.startFormat)]
      : format(value, this.startFormat);

    if (this.flatRange) {
      this.setValue(res[0]);
      this.setEnd(res[1]);
    } else {
      this.setValue(res);
    }
  }

  _openChange(status: boolean): void {
    this.ui.onOpenChange?.(status);
  }

  _ok(value: NzSafeAny): void {
    this.ui.onOk?.(value);
  }

  private get endProperty(): FormProperty {
    return (this.formProperty.parent!.properties as Record<string, FormProperty>)[this.ui.end!];
  }

  private setEnd(value: string | null): void {
    if (!this.flatRange) return;

    this.endProperty.setValue(value, true);
    this.endProperty.updateValueAndValidity();
  }
}
