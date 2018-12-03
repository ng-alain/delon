import { Component, OnInit } from '@angular/core';
import { toBool } from '../../utils';
import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-rate',
  template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

    <nz-rate
      [nzDisabled]="disabled"
      [ngModel]="value"
      (ngModelChange)="setValue($event)"
      [nzAllowClear]="allowClear"
      [nzAllowHalf]="allowHalf"
      [nzAutoFocus]="autoFocus"
      [nzCount]="count"></nz-rate>
    <span *ngIf="hasText && formProperty.value" class="ant-rate-text">{{ genText() }}</span>

  </sf-item-wrap>
  `,
})
export class RateWidget extends ControlWidget implements OnInit {
  count: number;
  allowHalf: boolean;
  allowClear: boolean;
  autoFocus: boolean;
  hasText = false;
  ngOnInit(): void {
    this.count = this.schema.maximum || 5;
    this.allowHalf = (this.schema.multipleOf || 0.5) === 0.5;
    this.allowClear = toBool(this.ui.allowClear, true);
    this.autoFocus = toBool(this.ui.autoFocus, false);
    this.hasText = !!this.ui.text;
  }

  genText() {
    return this.hasText
      ? (this.ui.text as string).replace('{{value}}', this.formProperty.value)
      : '';
  }
}
