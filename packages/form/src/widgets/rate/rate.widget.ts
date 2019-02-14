import { Component, OnInit } from '@angular/core';
import { toBool } from '../../utils';
import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-rate',
  templateUrl: './rate.widget.html',
})
export class RateWidget extends ControlWidget implements OnInit {
  count: number;
  allowHalf: boolean;
  allowClear: boolean;
  autoFocus: boolean;
  hasText = false;

  get text(): string {
    return (this.ui.text as string).replace('{{value}}', this.formProperty.value);
  }

  ngOnInit(): void {
    this.count = this.schema.maximum || 5;
    this.allowHalf = (this.schema.multipleOf || 0.5) === 0.5;
    this.allowClear = toBool(this.ui.allowClear, true);
    this.autoFocus = toBool(this.ui.autoFocus, false);
    this.hasText = !!this.ui.text;
  }
}
