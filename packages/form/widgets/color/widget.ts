import { Component, ViewEncapsulation } from '@angular/core';

import { ControlUIWidget } from '@delon/form';
import type { NzColor, NzColorPickerFormatType } from 'ng-zorro-antd/color-picker';

import type { SFColorWidgetSchema } from './schema';

@Component({
  selector: 'sf-color',
  template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-color-block *ngIf="ui.block" [nzColor]="value" [nzSize]="$any(ui.size)" />
    <nz-color-picker
      *ngIf="!ui.block"
      [ngModel]="value"
      (ngModelChange)="setValue($event)"
      [nzDisabled]="disabled"
      [nzSize]="$any(ui.size)"
      [nzDefaultValue]="ui.defaultValue ?? ''"
      [nzFormat]="ui.format ?? null"
      [nzTrigger]="ui.trigger ?? 'click'"
      [nzTitle]="ui.title ?? ''"
      [nzFlipFlop]="$any(ui.flipFlop)"
      [nzShowText]="ui.showText"
      [nzAllowClear]="ui.allowClear"
      (nzOnChange)="_change($event)"
      (nzOnFormatChange)="_formatChange($event)"
    />
  </sf-item-wrap>`,
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None
})
export class ColorWidget extends ControlUIWidget<SFColorWidgetSchema> {
  static readonly KEY = 'color';

  _change(ev: { color: NzColor; format: string }): void {
    if (this.ui.change) this.ui.change(ev);
  }

  _formatChange(ev: NzColorPickerFormatType): void {
    if (this.ui.formatChange) this.ui.formatChange(ev);
  }
}
