import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSwitchModule } from 'ng-zorro-antd/switch';

import { SFBooleanWidgetSchema } from './schema';
import { SFItemWrapComponent } from '../../sf-item-wrap.component';
import { ControlUIWidget } from '../../widget';

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
      [nzId]="id"
      [ngModel]="value"
      [ngModelOptions]="{ standalone: true }"
      (ngModelChange)="setValue($event)"
      [nzDisabled]="disabled"
      [nzSize]="ui.size!"
      [nzCheckedChildren]="ui.checkedChildren!"
      [nzUnCheckedChildren]="ui.unCheckedChildren!"
      [nzLoading]="ui.loading"
    />
  </sf-item-wrap>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, NzSwitchModule, SFItemWrapComponent]
})
export class BooleanWidget extends ControlUIWidget<SFBooleanWidgetSchema> {}
