import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ControlUIWidget, DelonFormModule } from '@delon/form';
import { NzColorPickerModule, type NzColor, type NzColorPickerFormatType } from 'ng-zorro-antd/color-picker';

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
    @if (ui.block) {
      <nz-color-block [nzColor]="value" [nzSize]="$any(ui.size)" />
    } @else {
      <nz-color-picker
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
    }
  </sf-item-wrap>`,
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [FormsModule, DelonFormModule, NzColorPickerModule]
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
