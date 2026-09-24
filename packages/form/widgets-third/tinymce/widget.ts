import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
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
        [ngModelOptions]="{ standalone: true }"
        (ngModelChange)="change($event)"
        [config]="ui.config"
        [inline]="ui.inline ?? false"
        [delay]="ui.delay ?? 0"
        [loading]="ui.loading ?? 'Loading...'"
        (ready)="_ready($event)"
      />
    </sf-item-wrap>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [FormsModule, DelonFormModule, TinymceComponent]
})
export class TinymceWidget extends ControlUIWidget<TinymceWidgetSchema> {
  static readonly KEY = 'tinymce';

  change(value: string): void {
    this.setValue(value);
    this.ui.change?.(value);
  }

  _ready(instance: NzSafeAny): void {
    this.ui.ready?.(instance);
  }
}
