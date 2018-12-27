import { Component, OnInit } from '@angular/core';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { getData, toBool } from '../../utils';
import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-cascader',
  template: `
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <nz-cascader
        [nzDisabled]="disabled"
        [nzSize]="ui.size"
        [ngModel]="value"
        (ngModelChange)="_change($event)"
        [nzOptions]="data"
        [nzAllowClear]="ui.allowClear"
        [nzAutoFocus]="ui.autoFocus"
        [nzChangeOn]="ui.changeOn"
        [nzChangeOnSelect]="ui.changeOnSelect"
        [nzColumnClassName]="ui.columnClassName"
        [nzExpandTrigger]="ui.expandTrigger"
        [nzMenuClassName]="ui.menuClassName"
        [nzMenuStyle]="ui.menuStyle"
        [nzLabelProperty]="ui.labelProperty || 'label'"
        [nzValueProperty]="ui.valueProperty || 'value'"
        [nzLoadData]="loadData"
        [nzPlaceHolder]="ui.placeholder"
        [nzShowArrow]="showArrow"
        [nzShowInput]="showInput"
        [nzShowSearch]="ui.showSearch"
        (nzClear)="_clear($event)"
        (nzVisibleChange)="_visibleChange($event)"
        (nzSelect)="_select($event)"
        (nzSelectionChange)="_selectionChange($event)"
      >
      </nz-cascader>
    </sf-item-wrap>
  `,
})
export class CascaderWidget extends ControlWidget implements OnInit {
  clearText: string;
  showArrow: boolean;
  showInput: boolean;
  triggerAction: string[];
  data: SFSchemaEnum[] = [];
  // tslint:disable-next-line:no-any
  loadData: any;

  ngOnInit(): void {
    this.clearText = this.ui.clearText || '清除';
    this.showArrow = toBool(this.ui.showArrow, true);
    this.showInput = toBool(this.ui.showInput, true);
    this.triggerAction = this.ui.triggerAction || ['click'];
    if (!!this.ui.asyncData) {
      // tslint:disable-next-line:no-any
      this.loadData = (node: any, index: number) => (this.ui.asyncData as any)(node, index, this);
    }
  }

  reset(value: SFValue) {
    getData(this.schema, {}, this.formProperty.formData).subscribe(
      list => {
        this.data = list;
        this.detectChanges();
      },
    );
  }

  _visibleChange(status: boolean) {
    if (this.ui.visibleChange) this.ui.visibleChange(status);
  }

  _change(value: string) {
    this.setValue(value);
    if (this.ui.change) this.ui.change(value);
  }

  // tslint:disable-next-line:no-any
  _selectionChange(options: any) {
    if (this.ui.selectionChange) this.ui.selectionChange(options);
  }

  // tslint:disable-next-line:no-any
  _select(options: any) {
    if (this.ui.select) this.ui.select(options);
  }

  // tslint:disable-next-line:no-any
  _clear(options: any) {
    if (this.ui.clear) this.ui.clear(options);
  }
}
