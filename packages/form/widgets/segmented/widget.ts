import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ControlUIWidget, DelonFormModule, SFValue, getData } from '@delon/form';
import { NzSegmentedComponent, NzSegmentedOptions } from 'ng-zorro-antd/segmented';

import type { SFSegmentedWidgetSchema } from './schema';

@Component({
  selector: 'sf-segmented',
  template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-segmented
      [ngModel]="value"
      (ngModelChange)="setValue($event)"
      [nzDisabled]="disabled"
      [nzSize]="$any(ui.size)"
      [nzBlock]="ui.block ?? false"
      [nzOptions]="list"
      (nzValueChange)="valueChange($event)"
    />
  </sf-item-wrap>`,
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  imports: [FormsModule, DelonFormModule, NzSegmentedComponent]
})
export class SegmentedWidget extends ControlUIWidget<SFSegmentedWidgetSchema> {
  static readonly KEY = 'segmented';
  private _list?: NzSegmentedOptions;
  get list(): NzSegmentedOptions {
    return this._list ?? [];
  }

  reset(value: SFValue): void {
    getData(this.schema, this.ui, value).subscribe(list => {
      this._list = list as NzSegmentedOptions;
      this.detectChanges();
    });
  }

  valueChange(index: string | number): void {
    if (this.ui.valueChange) {
      this.ui.valueChange({ index, item: typeof index === 'number' ? (this.list[index] as SFValue) : null });
    }
  }
}
