import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { ControlUIWidget, DelonFormModule, SFSchemaEnum, SFValue, getData } from '@delon/form';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import {
  NzTransferModule,
  TransferCanMove,
  TransferChange,
  TransferItem,
  TransferSearchChange,
  TransferSelectChange
} from 'ng-zorro-antd/transfer';

import type { SFTransferWidgetSchema } from './schema';

@Component({
  selector: 'sf-transfer',
  template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-transfer
      [nzDataSource]="$any(list)"
      [nzTitles]="i.titles"
      [nzOperations]="i.operations"
      [nzListStyle]="ui.listStyle!"
      [nzItemUnit]="i.itemUnit"
      [nzItemsUnit]="i.itemsUnit"
      [nzShowSearch]="ui.showSearch"
      [nzFilterOption]="ui.filterOption"
      [nzSearchPlaceholder]="ui.searchPlaceholder"
      [nzNotFoundContent]="ui.notFoundContent"
      [nzCanMove]="_canMove"
      (nzChange)="_change($event)"
      (nzSearchChange)="_searchChange($event)"
      (nzSelectChange)="_selectChange($event)"
    />
  </sf-item-wrap> `,
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  imports: [FormsModule, DelonFormModule, NzTransferModule]
})
export class TransferWidget extends ControlUIWidget<SFTransferWidgetSchema> implements OnInit {
  static readonly KEY = 'transfer';

  list: SFSchemaEnum[] = [];
  i!: { titles: string[]; operations: string[]; itemUnit: string; itemsUnit: string };
  private _data: SFSchemaEnum[] = [];

  ngOnInit(): void {
    const { titles, operations, itemUnit, itemsUnit } = this.ui;
    this.i = {
      titles: titles || ['', ''],
      operations: operations || ['', ''],
      itemUnit: itemUnit || '项',
      itemsUnit: itemsUnit || '项'
    };
  }

  reset(value: SFValue): void {
    getData(this.schema, this.ui, null).subscribe(list => {
      let formData = value;
      if (!Array.isArray(formData)) {
        formData = [formData];
      }
      list.forEach((item: SFSchemaEnum) => {
        if (~(formData as NzSafeAny[]).indexOf(item.value)) {
          item.direction = 'right';
        }
      });
      this.list = list;
      this._data = list.filter(w => w.direction === 'right');
      this.notify();
      this.detectChanges();
    });
  }

  private notify(): void {
    this.formProperty.setValue(
      this._data.map(i => i.value),
      false
    );
  }

  _canMove = (arg: TransferCanMove): Observable<TransferItem[]> => {
    return this.ui.canMove ? this.ui.canMove(arg) : of(arg.list);
  };

  _change(options: TransferChange): void {
    if (options.to === 'right') {
      this._data = this._data.concat(...options.list);
    } else {
      this._data = this._data.filter((w: SFSchemaEnum) => options.list.indexOf(w as TransferItem) === -1);
    }
    if (this.ui.change) this.ui.change(options);
    this.notify();
  }

  _searchChange(options: TransferSearchChange): void {
    if (this.ui.searchChange) this.ui.searchChange(options);
    this.detectChanges();
  }

  _selectChange(options: TransferSelectChange): void {
    if (this.ui.selectChange) this.ui.selectChange(options);
    this.detectChanges();
  }
}
