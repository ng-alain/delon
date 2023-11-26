import { Component, ViewEncapsulation } from '@angular/core';

import { SFRadioWidgetSchema } from './schema';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema/index';
import { getData } from '../../utils';
import { ControlUIWidget } from '../../widget';

@Component({
  selector: 'sf-radio',
  template: `<sf-item-wrap
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
      (ngModelChange)="_setValue($event)"
      [nzButtonStyle]="ui.buttonStyle || 'outline'"
    >
      @if (styleType) {
        @for (option of data; track $index) {
          <label nz-radio [nzValue]="option.value" [nzDisabled]="disabled || option.disabled">
            <span [innerHTML]="option.label"></span>
          </label>
        }
      } @else {
        @for (option of data; track $index) {
          <label nz-radio-button [nzValue]="option.value" [nzDisabled]="disabled || option.disabled">
            <span [innerHTML]="option.label"></span>
          </label>
        }
      }
    </nz-radio-group>
  </sf-item-wrap>`,
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None
})
export class RadioWidget extends ControlUIWidget<SFRadioWidgetSchema> {
  data: SFSchemaEnum[] = [];
  styleType!: boolean;

  reset(value: SFValue): void {
    this.styleType = (this.ui.styleType || 'default') === 'default';
    getData(this.schema, this.ui, value).subscribe(list => {
      this.data = list;
      this.detectChanges();
    });
  }

  _setValue(value: SFValue): void {
    this.setValue(value);
    if (this.ui.change) this.ui.change(value);
  }
}
