import { Component, ViewEncapsulation } from '@angular/core';

import { ControlUIWidget, SFValue, getData } from '@delon/form';
import { NzSegmentedOptions } from 'ng-zorro-antd/segmented';

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
      [nzLabelTemplate]="ui.labelTemplate ?? null"
      (nzValueChange)="valueChange($event)"
    />
  </sf-item-wrap>`,
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None
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

  valueChange(index: number): void {
    if (this.ui.valueChange) {
      this.ui.valueChange({ index, item: this.list[index] as SFValue });
    }
  }
}
