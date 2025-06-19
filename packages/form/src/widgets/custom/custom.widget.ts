import { Component, ViewEncapsulation } from '@angular/core';

import { SFCustomWidgetSchema } from './schema';
import { ControlUIWidget } from '../../widget';

@Component({
  selector: 'sf-custom',
  template: `
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <ng-template
        [ngTemplateOutlet]="$any(ui)._render"
        [ngTemplateOutletContext]="{ $implicit: this, schema: schema, ui: ui }"
      />
    </sf-item-wrap>
  `,
  encapsulation: ViewEncapsulation.None,
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class CustomWidget extends ControlUIWidget<SFCustomWidgetSchema> {}
