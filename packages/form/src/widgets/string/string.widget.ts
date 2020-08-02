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

  reset(value: SFValue): void {
    if (!value && this.schema.format === 'color') {
      this.setValue('#000000');
    }
  }

  change(val: string): void {
    this.setValue(val);
    if (this.ui.change) this.ui.change(val);
  }

  focus(e: FocusEvent): void {
    if (this.ui.focus) this.ui.focus(e);
  }

  blur(e: FocusEvent): void {
    if (this.ui.blur) this.ui.blur(e);
  }

  enter(e: KeyboardEvent): void {
    if (this.ui.enter) this.ui.enter(e);
  }
}
