import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget } from '../../widget';
import { SFNumberWidgetSchema } from './schema';

@Component({
  selector: 'sf-number',
  templateUrl: './number.widget.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
})
export class NumberWidget extends ControlUIWidget<SFNumberWidgetSchema> implements OnInit {
  min: number;
  max: number;
  step: number;
  formatter: (value: number) => string | number = value => value;
  parser: (value: string) => string | number = value => value;

  ngOnInit(): void {
    const { minimum, exclusiveMinimum, maximum, exclusiveMaximum, multipleOf, type } = this.schema;
    if (typeof minimum !== 'undefined') {
      this.min = exclusiveMinimum ? minimum + 1 : minimum;
    }
    if (typeof maximum !== 'undefined') {
      this.max = exclusiveMaximum ? maximum - 1 : maximum;
    }
    this.step = multipleOf || 1;
    if (type === 'integer') {
      this.min = Math.trunc(this.min);
      this.max = Math.trunc(this.max);
      this.step = Math.trunc(this.step);
    }

    const ui = this.ui;
    if (ui.prefix != null) {
      ui.formatter = value => (value == null ? '' : `${ui.prefix} ${value}`);
      ui.parser = value => value.replace(`${ui.prefix} `, '');
    }
    if (ui.unit != null) {
      ui.formatter = value => (value == null ? '' : `${value} ${ui.unit}`);
      ui.parser = value => value.replace(` ${ui.unit}`, '');
    }
    if (ui.formatter) this.formatter = ui.formatter;
    if (ui.parser) this.parser = ui.parser;
  }

  _setValue(val: number): void {
    this.setValue(this.schema.type === 'integer' ? Math.floor(val) : val);
  }
}
