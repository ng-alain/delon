import { Component, OnInit } from '@angular/core';
import { TransferCanMove, TransferChange, TransferItem, TransferSearchChange, TransferSelectChange } from 'ng-zorro-antd';
import { of, Observable } from 'rxjs';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { getData } from '../../utils';
import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-transfer',
  template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

    <nz-transfer
      [nzDataSource]="list"
      [nzTitles]="i.titles"
      [nzOperations]="i.operations"
      [nzListStyle]="ui.listStyle"
      [nzItemUnit]="i.itemUnit"
      [nzItemsUnit]="i.itemsUnit"
      [nzShowSearch]="ui.showSearch"
      [nzFilterOption]="ui.filterOption"
      [nzSearchPlaceholder]="ui.searchPlaceholder"
      [nzNotFoundContent]="ui.notFoundContent"
      [nzCanMove]="_canMove"
      (nzChange)="_change($event)"
      (nzSearchChange)="_searchChange($event)"
      (nzSelectChange)="_selectChange($event)">
    </nz-transfer>

  </sf-item-wrap>
  `,
})
export class TransferWidget extends ControlWidget implements OnInit {
  list: SFSchemaEnum[] = [];
  // tslint:disable-next-line:no-any
  i: any;
  private _data: SFSchemaEnum[] = [];

  ngOnInit(): void {
    this.i = {
      titles: this.ui.titles || ['', ''],
      operations: this.ui.operations || ['', ''],
      itemUnit: this.ui.itemUnit || '项',
      itemsUnit: this.ui.itemsUnit || '项',
    };
  }

  reset(value: SFValue) {
    getData(this.schema, this.ui, null).subscribe(list => {
      let formData = this.formProperty.formData;
      if (!Array.isArray(formData)) formData = [formData];
      list.forEach((item: SFSchemaEnum) => {
        // tslint:disable-next-line:no-any
        if (~(formData as any[]).indexOf(item.value)) item.direction = 'right';
      });
      this.list = list;
      this._data = list.filter(w => w.direction === 'right');
      this.notify();
      this.detectChanges();
    });
  }

  private notify() {
    this.formProperty.setValue(this._data.map(i => i.value), false);
  }

  _canMove = (arg: TransferCanMove): Observable<TransferItem[]> => {
    return this.ui.canMove ? this.ui.canMove(arg) : of(arg.list);
  }

  _change(options: TransferChange) {
    if (options.to === 'right') {
      this._data = this._data.concat(...options.list);
    } else {
      // tslint:disable-next-line:no-any
      this._data = this._data.filter((w: any) => options.list.indexOf(w) === -1);
    }
    if (this.ui.change) this.ui.change(options);
    this.notify();
  }

  _searchChange(options: TransferSearchChange) {
    if (this.ui.searchChange) this.ui.searchChange(options);
  }

  _selectChange(options: TransferSelectChange) {
    if (this.ui.selectChange) this.ui.selectChange(options);
    this.cd.detectChanges();
  }
}
