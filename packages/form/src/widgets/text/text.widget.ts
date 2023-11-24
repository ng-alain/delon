import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { SFTextWidgetSchema } from './schema';
import { SFValue } from '../../interface';
import { toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';

@Component({
  selector: 'sf-text',
  template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
    [class.sf__text-html]="ui.html"
  >
    @if (ui.html) {
      <span [innerHTML]="text"></span>
    } @else {
      <span [innerText]="text"></span>
    }
  </sf-item-wrap>`,
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None
})
export class TextWidget extends ControlUIWidget<SFTextWidgetSchema> implements OnInit {
  text: string = '';
  ngOnInit(): void {
    this.ui._required = false;
    this.ui.html = toBool(this.ui.html, true);
  }

  reset(value: SFValue): void {
    this.text = value || this.ui.defaultText || '-';
  }
}
