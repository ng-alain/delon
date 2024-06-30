import { Component, ViewEncapsulation } from '@angular/core';

import { ControlUIWidget } from '../../widget';
import { SFBooleanWidgetSchema } from './schema';

@Component({
  selector: 'sf-boolean',
  template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-switch
      [ngModel]="value"
      (ngModelChange)="setValue($event)"
      [nzDisabled]="disabled"
      [nzSize]="ui.size!"
      [nzCheckedChildren]="ui.checkedChildren!"
      [nzUnCheckedChildren]="ui.unCheckedChildren!"
      [nzLoading]="ui.loading"
    />
  </sf-item-wrap>`,
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None
})
export class BooleanWidget extends ControlUIWidget<SFBooleanWidgetSchema> {}
