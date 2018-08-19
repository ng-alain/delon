import { Component, OnInit } from '@angular/core';
import { ControlWidget } from '../../widget';
import * as format from 'date-fns/format';
import { toBool } from '../../utils';

const DATEFORMAT = {
  'date-time': `YYYY-MM-DDTHH:mm:ssZ`,
};

const DEFAULTFORMAT = 'YYYY-MM-DD HH:mm:ss';

@Component({
  selector: 'sf-date',
  template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
    <ng-container [ngSwitch]="mode">

      <nz-month-picker *ngSwitchCase="'month'"
        [nzDisabled]="disabled"
        [nzSize]="ui.size"
        [nzFormat]="displayFormat"
        [(ngModel)]="displayValue"
        (ngModelChange)="_change($event)"
        [nzAllowClear]="i.allowClear"
        [nzClassName]="ui.className"
        [nzDisabledDate]="ui.disabledDate"
        [nzLocale]="ui.locale"
        [nzPlaceHolder]="ui.placeholder"
        [nzPopupStyle]="ui.popupStyle"
        [nzDropdownClassName]="ui.dropdownClassName"
        (nzOnOpenChange)="_openChange($event)"
        [nzRenderExtraFooter]="ui.renderExtraFooter"
      ></nz-month-picker>

      <nz-week-picker *ngSwitchCase="'week'"
        [nzDisabled]="disabled"
        [nzSize]="ui.size"
        [nzFormat]="displayFormat"
        [(ngModel)]="displayValue"
        (ngModelChange)="_change($event)"
        [nzAllowClear]="i.allowClear"
        [nzClassName]="ui.className"
        [nzDisabledDate]="ui.disabledDate"
        [nzLocale]="ui.locale"
        [nzPlaceHolder]="ui.placeholder"
        [nzPopupStyle]="ui.popupStyle"
        [nzDropdownClassName]="ui.dropdownClassName"
        (nzOnOpenChange)="_openChange($event)"
      ></nz-week-picker>

      <nz-range-picker *ngSwitchCase="'range'"
        [nzDisabled]="disabled"
        [nzSize]="ui.size"
        [nzFormat]="displayFormat"
        [(ngModel)]="displayValue"
        (ngModelChange)="_change($event)"
        [nzAllowClear]="i.allowClear"
        [nzClassName]="ui.className"
        [nzDisabledDate]="ui.disabledDate"
        [nzLocale]="ui.locale"
        [nzPlaceHolder]="ui.placeholder"
        [nzPopupStyle]="ui.popupStyle"
        [nzDropdownClassName]="ui.dropdownClassName"
        (nzOnOpenChange)="_openChange($event)"
        [nzDisabledTime]="ui.disabledTime"
        [nzRenderExtraFooter]="ui.renderExtraFooter"
        [nzRanges]="ui.ranges"
        (nzOnOk)="_ok($event)"
      ></nz-range-picker>

      <nz-date-picker *ngSwitchDefault
        [nzDisabled]="disabled"
        [nzSize]="ui.size"
        [nzFormat]="displayFormat"
        [(ngModel)]="displayValue"
        (ngModelChange)="_change($event)"
        [nzAllowClear]="i.allowClear"
        [nzClassName]="ui.className"
        [nzDisabledDate]="ui.disabledDate"
        [nzLocale]="ui.locale"
        [nzPlaceHolder]="ui.placeholder"
        [nzPopupStyle]="ui.popupStyle"
        [nzDropdownClassName]="ui.dropdownClassName"
        (nzOnOpenChange)="_openChange($event)"
        [nzDisabledTime]="ui.disabledTime"
        [nzRenderExtraFooter]="ui.renderExtraFooter"
        [nzShowTime]="ui.showTime"
        [nzShowToday]="i.showToday"
        (nzOnOk)="_ok($event)"
      ></nz-date-picker>
    </ng-container>

  </sf-item-wrap>
  `,
  preserveWhitespaces: false,
})
export class DateWidget extends ControlWidget implements OnInit {
  mode: string;
  displayValue: Date | Date[] = null;
  displayFormat: string;
  format: string;
  i: any;

  ngOnInit(): void {
    const ui = this.ui;
    this.mode = ui.mode || 'date';
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
    this.format = ui.format
      ? ui.format
      : this.schema.type === 'number'
        ? 'x'
        : 'YYYY-MM-DD HH:mm:ss';
    // 公共API
    this.i = {
      allowClear: toBool(ui.allowClear, true),
      // nz-date-picker
      showToday: toBool(ui.showToday, true)
    };
  }

  reset(value: any) {
    this.displayValue = value;
  }

  _change(value: Date | Date[]) {
    if (value == null) {
      this.setValue(null);
      return;
    }
    this.setValue(
      Array.isArray(value)
        ? value.map(d => format(d, this.format))
        : format(value, this.format),
    );
  }

  _openChange(status: boolean) {
    if (this.ui.onOpenChange) this.ui.onOpenChange(status);
  }

  _ok(value: any) {
    if (this.ui.onOk) this.ui.onOk(status);
  }
}
