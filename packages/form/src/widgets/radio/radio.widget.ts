import { Component } from '@angular/core';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema/index';
import { getData } from '../../utils';
import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-radio',
  template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

    <nz-radio-group
      [nzDisabled]="disabled"
      [nzSize]="ui.size"
      [nzName]="id"
      [ngModel]="value"
      (ngModelChange)="_setValue($event)">
      <ng-container *ngIf="styleType">
        <label *ngFor="let option of data"
          nz-radio
          [nzValue]="option.value"
          [nzDisabled]="option.disabled">
          <span [innerHTML]="option.label"></span>
        </label>
      </ng-container>
      <ng-container *ngIf="!styleType">
        <label *ngFor="let option of data"
          nz-radio-button
          [nzValue]="option.value"
          [nzDisabled]="option.disabled">
          <span [innerHTML]="option.label"></span>
        </label>
      </ng-container>
    </nz-radio-group>

  </sf-item-wrap>
  `,
})
export class RadioWidget extends ControlWidget {
  data: SFSchemaEnum[] = [];
  styleType: boolean;

  reset(value: SFValue) {
    this.styleType = (this.ui.styleType || 'default') === 'default';
    getData(this.schema, this.ui, this.formProperty.formData).subscribe(
      list => (this.data = list),
    );
  }

  _setValue(value: SFValue) {
    this.setValue(value);
    if (this.ui.change) this.ui.change(value);
  }
}
