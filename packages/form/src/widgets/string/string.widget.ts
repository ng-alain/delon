import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SFValue } from '../../interface';
import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-string',
  templateUrl: './string.widget.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
})
export class StringWidget extends ControlWidget implements OnInit {
  type: string;

  ngOnInit(): void {
    this.type = !!(
      this.ui.addOnAfter ||
      this.ui.addOnBefore ||
      this.ui.addOnAfterIcon ||
      this.ui.addOnBeforeIcon ||
      this.ui.prefix ||
      this.ui.prefixIcon ||
      this.ui.suffix ||
      this.ui.suffixIcon
    )
      ? 'addon'
      : '';
  }

  reset(value: SFValue) {
    if (!value && this.schema.format === 'color') {
      this.setValue('#000000');
    }
  }
}
