import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';

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
        [ngTemplateOutletContext]="{$implicit: this, schema: schema, ui: ui }"
      ></ng-template>
    </sf-item-wrap>
  `,
})
export class CustomWidget extends ControlWidget {}
