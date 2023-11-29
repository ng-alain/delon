import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TinymceComponent } from 'ngx-tinymce';

import { ControlUIWidget, DelonFormModule } from '@delon/form';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import type { TinymceWidgetSchema } from './schema';

@Component({
  selector: 'sf-widget-tinymce',
  template: `
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <tinymce
        [ngModel]="value"
        (ngModelChange)="change($event)"
        [config]="ui.config"
        [inline]="ui.inline ?? false"
        [delay]="ui.delay ?? 0"
        [loading]="ui.loading ?? 'Loading...'"
        (ready)="_ready($event)"
      />
    </sf-item-wrap>
  `,
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [FormsModule, DelonFormModule, TinymceComponent]
})
export class TinymceWidget extends ControlUIWidget<TinymceWidgetSchema> {
  static readonly KEY = 'tinymce';

  change(value: string): void {
    this.setValue(value);
    if (this.ui.change) this.ui.change(value);
  }

  _ready(instance: NzSafeAny): void {
    if (this.ui.ready) this.ui.ready(instance);
  }
}
