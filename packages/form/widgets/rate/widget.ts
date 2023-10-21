import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ControlUIWidget, toBool } from '@delon/form';

import type { SFRateWidgetSchema } from './schema';

@Component({
  selector: 'sf-rate',
  template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-rate
      [nzDisabled]="disabled"
      [ngModel]="value"
      (ngModelChange)="setValue($event)"
      [nzAllowClear]="allowClear"
      [nzAllowHalf]="allowHalf"
      [nzTooltips]="ui.tooltips || []"
      [nzAutoFocus]="autoFocus"
      [nzCount]="$any(count)"
    />
    <span *ngIf="hasText && formProperty.value" class="ant-rate-text">{{ text }}</span>
  </sf-item-wrap>`,
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None
})
export class RateWidget extends ControlUIWidget<SFRateWidgetSchema> implements OnInit {
  static readonly KEY = 'rate';

  count!: number;
  allowHalf!: boolean;
  allowClear!: boolean;
  autoFocus!: boolean;
  hasText = false;

  get text(): string {
    return (this.ui.text as string).replace('{{value}}', this.formProperty.value);
  }

  ngOnInit(): void {
    const { schema, ui } = this;
    this.count = schema.maximum || 5;
    this.allowHalf = (schema.multipleOf || 0.5) === 0.5;
    this.allowClear = toBool(ui.allowClear, true);
    this.autoFocus = toBool(ui.autoFocus, false);
    this.hasText = !!ui.text;
  }
}
