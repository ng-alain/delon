import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, of } from 'rxjs';

import { NzSafeAny } from 'ng-zorro-antd/core/types';
import {
  TransferCanMove,
  TransferChange,
  TransferItem,
  TransferSearchChange,
  TransferSelectChange
} from 'ng-zorro-antd/transfer';

import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { getData } from '../../utils';
import { ControlUIWidget } from '../../widget';
import { SFTransferWidgetSchema } from './schema';

@Component({
  selector: 'sf-transfer',
  templateUrl: './transfer.widget.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None
})
export class TransferWidget extends ControlUIWidget<SFTransferWidgetSchema> implements OnInit {
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
