import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { SFValue } from '../../interface';
import { ControlUIWidget } from '../../widget';
import { SFTextWidgetSchema } from './schema';

@Component({
  selector: 'sf-text',
  templateUrl: './text.widget.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None
})
export class TextWidget extends ControlUIWidget<SFTextWidgetSchema> implements OnInit {
  text: string = '';
  ngOnInit(): void {
    this.ui._required = false;
  }

  reset(value: SFValue): void {
    this.text = value || this.ui.defaultText || '-';
  }
}
