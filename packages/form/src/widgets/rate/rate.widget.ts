import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
import { SFRateWidgetSchema } from './schema';

@Component({
  selector: 'sf-rate',
  templateUrl: './rate.widget.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
})
export class RateWidget extends ControlUIWidget<SFRateWidgetSchema> implements OnInit {
  count: number;
  allowHalf: boolean;
  allowClear: boolean;
  autoFocus: boolean;
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
