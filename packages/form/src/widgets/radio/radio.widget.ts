import { ChangeDetectionStrategy, Component, ViewEncapsulation, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzRadioModule } from 'ng-zorro-antd/radio';

import { SFRadioWidgetSchema } from './schema';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema/index';
import { SFItemWrapComponent } from '../../sf-item-wrap.component';
import { getData } from '../../utils';
import { ControlUIWidget } from '../../widget';

@Component({
  selector: 'sf-radio',
  template: `
    @let list = data();
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <nz-radio-group
        [nzSize]="ui.size!"
        [nzName]="id"
        [ngModel]="value"
        [ngModelOptions]="{ standalone: true }"
        (ngModelChange)="_setValue($event)"
        [nzButtonStyle]="ui.buttonStyle ?? 'outline'"
      >
        @if (styleType()) {
          @for (option of list; track $index) {
            <label nz-radio [nzValue]="option.value" [nzDisabled]="disabled || option.disabled">
              <span [innerHTML]="option.label"></span>
            </label>
          }
        } @else {
          @for (option of list; track $index) {
            <label nz-radio-button [nzValue]="option.value" [nzDisabled]="disabled || option.disabled">
              <span [innerHTML]="option.label"></span>
            </label>
          }
        }
      </nz-radio-group>
    </sf-item-wrap>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [FormsModule, NzRadioModule, SFItemWrapComponent]
})
export class RadioWidget extends ControlUIWidget<SFRadioWidgetSchema> {
  protected readonly data = signal<SFSchemaEnum[]>([]);
  protected readonly styleType = signal(false);

  reset(value: SFValue): void {
    this.styleType.set((this.ui.styleType ?? 'default') === 'default');
    getData(this.schema, this.ui, value).subscribe(list => {
      this.data.set(list);
    });
  }

  _setValue(value: SFValue): void {
    this.setValue(value);
    this.ui.change?.(value);
  }
}
