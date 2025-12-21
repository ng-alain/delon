import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ControlUIWidget, DelonFormModule } from '@delon/form';
import { NzMarks, NzSliderModule, NzSliderValue } from 'ng-zorro-antd/slider';

import type { SFSliderWidgetSchema } from './schema';

@Component({
  selector: 'sf-slider',
  template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-slider
      [ngModel]="value"
      (ngModelChange)="setValue($event)"
      [nzDisabled]="disabled"
      [nzRange]="ui.range"
      [nzMin]="min"
      [nzMax]="max"
      [nzStep]="step"
      [nzMarks]="marks"
      [nzDots]="ui.dots"
      [nzIncluded]="included"
      [nzVertical]="ui.vertical"
      [nzTipFormatter]="_formatter"
      (nzOnAfterChange)="_afterChange($event)"
    />
  </sf-item-wrap>`,
  encapsulation: ViewEncapsulation.None,
  imports: [FormsModule, DelonFormModule, NzSliderModule]
})
export class SliderWidget extends ControlUIWidget<SFSliderWidgetSchema> implements OnInit {
  static readonly KEY = 'slider';

  min!: number;
  max!: number;
  step!: number;
  marks: NzMarks | null = null;
  included!: boolean;

  ngOnInit(): void {
    const { minimum, maximum, multipleOf } = this.schema;
    this.min = minimum ?? 0;
    this.max = maximum ?? 100;
    this.step = multipleOf ?? 1;

    const { marks, included } = this.ui;
    this.marks = marks ?? null;
    this.included = typeof included === 'undefined' ? true : included;
  }

  _formatter = (value: number): string => {
    const { formatter } = this.ui;
    if (formatter) return formatter(value);
    return `${value}`;
  };

  _afterChange(value: NzSliderValue): void {
    const { afterChange } = this.ui;
    if (afterChange) return afterChange(value);
  }
}
