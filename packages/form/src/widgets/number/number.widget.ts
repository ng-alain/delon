import { Component, OnInit } from '@angular/core';
import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-number',
  template: `
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <nz-input-number
        [ngModel]="value"
        (ngModelChange)="_setValue($event)"
        [nzDisabled]="disabled"
        [nzSize]="ui.size"
        [nzMin]="min"
        [nzMax]="max"
        [nzStep]="step"
        [nzFormatter]="formatter"
        [nzParser]="parser"
        [nzPrecision]="ui.precision"
        [nzPlaceHolder]="ui.placeholder || ''"
      >
      </nz-input-number>
    </sf-item-wrap>
  `,
})
export class NumberWidget extends ControlWidget implements OnInit {
  min: number;
  max: number;
  step: number;
  formatter = value => value;
  parser = value => value;

  ngOnInit(): void {
    const { schema, ui } = this;
    if (typeof schema.minimum !== 'undefined') {
      this.min = schema.exclusiveMinimum ? schema.minimum + 1 : schema.minimum;
    }
    if (typeof schema.maximum !== 'undefined') {
      this.max = schema.exclusiveMaximum ? schema.maximum - 1 : schema.maximum;
    }
    this.step = schema.multipleOf || 1;
    if (schema.type === 'integer') {
      this.min = Math.trunc(this.min);
      this.max = Math.trunc(this.max);
      this.step = Math.trunc(this.step);
    }
    if (ui.prefix != null) {
      ui.formatter = value => `${ui.prefix} ${value}`;
      ui.parser = value => value.replace(`${ui.prefix} `, '');
    }
    if (ui.unit != null) {
      ui.formatter = value => `${value} ${ui.unit}`;
      ui.parser = value => value.replace(` ${ui.unit}`, '');
    }
    if (ui.formatter) this.formatter = ui.formatter;
    if (ui.parser) this.parser = ui.parser;
  }

  _setValue(val: number) {
    this.setValue(this.schema.type === 'integer' ? Math.floor(val) : val);
  }
}
