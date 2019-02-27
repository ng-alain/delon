import { Component, OnInit } from '@angular/core';
import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-slider',
  templateUrl: './slider.widget.html',
})
export class SliderWidget extends ControlWidget implements OnInit {
  min: number;
  max: number;
  step: number;
  marks: any;
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

  _afterChange(value: any) {
    if (this.ui.afterChange) this.ui.afterChange(value);
  }
}
