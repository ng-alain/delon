import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SFValue } from '../../interface';
import { ControlUIWidget } from '../../widget';
import { SFStringWidgetSchema } from './schema';

@Component({
  selector: 'sf-string',
  templateUrl: './string.widget.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
})
export class StringWidget extends ControlUIWidget<SFStringWidgetSchema> implements OnInit {
  type: string;

  ngOnInit(): void {
    const { addOnAfter, addOnAfterIcon, addOnBefore, addOnBeforeIcon, prefix, prefixIcon, suffix, suffixIcon } = this.ui;
    this.type = !!(addOnAfter || addOnBefore || addOnAfterIcon || addOnBeforeIcon || prefix || prefixIcon || suffix || suffixIcon)
      ? 'addon'
      : '';
  }

  reset(value: SFValue) {
    if (!value && this.schema.format === 'color') {
      this.setValue('#000000');
    }
  }
}
