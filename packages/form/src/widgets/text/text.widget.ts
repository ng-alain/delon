import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation, signal } from '@angular/core';

import { SFTextWidgetSchema } from './schema';
import { SFValue } from '../../interface';
import { toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';

@Component({
  selector: 'sf-text',
  template: `
    @let content = text();
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
      [class.sf__text-html]="ui.html"
    >
      @if (ui.html) {
        <span [innerHTML]="content"></span>
      } @else {
        <span [innerText]="content"></span>
      }
    </sf-item-wrap>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class TextWidget extends ControlUIWidget<SFTextWidgetSchema> implements OnInit {
  protected readonly text = signal('');

  ngOnInit(): void {
    this.ui._required = false;
    this.ui.html = toBool(this.ui.html, true);
  }

  reset(value: SFValue): void {
    this.text.set(value ?? this.ui.defaultText ?? '-');
  }
}
