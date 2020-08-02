import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NzMarks, NzSliderValue } from 'ng-zorro-antd/slider';
import { ControlUIWidget } from '../../widget';
import { SFSliderWidgetSchema } from './schema';

@Component({
  selector: 'sf-slider',
  templateUrl: './slider.widget.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
})
export class SliderWidget extends ControlUIWidget<SFSliderWidgetSchema> implements OnInit {
  min: number;
  max: number;
  step: number;
  marks: NzMarks | null;
  included: boolean;

  ngOnInit(): void {
    const { minimum, maximum, multipleOf } = this.schema;
    this.min = minimum || 0;
    this.max = maximum || 100;
    this.step = multipleOf || 1;

    const { marks, included } = this.ui;
    this.marks = marks || null;
    this.included = typeof included === 'undefined' ? true : included;
  }

  _formatter = (value: number) => {
    const { formatter } = this.ui;
    if (formatter) return formatter(value);
    return value;
  };

  _afterChange(value: NzSliderValue): void {
    const { afterChange } = this.ui;
    if (afterChange) return afterChange(value);
  }
}
