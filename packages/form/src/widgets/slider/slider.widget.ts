import { Component, OnInit } from '@angular/core';
import { Marks, SliderValue } from 'ng-zorro-antd';
import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-slider',
  template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

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
      (nzOnAfterChange)="_afterChange($event)">
    </nz-slider>

  </sf-item-wrap>
  `,
})
export class SliderWidget extends ControlWidget implements OnInit {
  min: number;
  max: number;
  step: number;
  marks: Marks;
  included: boolean;

  ngOnInit(): void {
    this.min = this.schema.minimum || 0;
    this.max = this.schema.maximum || 100;
    this.step = this.schema.multipleOf || 1;

    this.marks = this.ui.marks || null;
    const included = this.ui.included;
    this.included = typeof included === 'undefined' ? true : included;
  }

  _formatter = (value: number) => {
    if (this.ui.formatter) return this.ui.formatter(value);
    return value;
  }

  _afterChange(value: SliderValue) {
    if (this.ui.afterChange) this.ui.afterChange(value);
  }
}
