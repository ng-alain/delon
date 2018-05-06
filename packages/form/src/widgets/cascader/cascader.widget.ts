import { Component, OnInit } from '@angular/core';
import { ControlWidget } from '../../widget';
import { getData } from '../../utils';
import { SFSchemaEnum } from '../../schema';

@Component({
  selector: 'sf-cascader',
  template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

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
      [nzLabelProperty]="ui.labelProperty"
      [nzValueProperty]="ui.valueProperty"
      [nzLoadData]="loadData"
      [nzPlaceHolder]="ui.placeholder"
      [nzShowArrow]="showArrow"
      [nzShowInput]="showInput"
      (nzClear)="_clear($event)"
      (nzVisibleChange)="_visibleChange($event)"
      (nzSelect)="_select($event)"
      (nzSelectionChange)="_selectionChange($event)">
    </nz-cascader>

  </sf-item-wrap>
  `,
  preserveWhitespaces: false,
})
export class CascaderWidget extends ControlWidget implements OnInit {
  clearText: string;
  showArrow: boolean;
  showInput: boolean;
  triggerAction: string[];
  data: SFSchemaEnum[] = [];
  loadData: any;

  ngOnInit(): void {
    this.clearText = this.ui.clearText || '清除';
    this.showArrow = this.ui.showArrow || true;
    this.showInput = this.ui.showInput || true;
    this.triggerAction = this.ui.triggerAction || ['click'];
    if (!!this.ui.loadData) {
      this.loadData = (node: any, index: number) =>
        this.ui.loadData(node, index, this);
    }
  }

  reset(value: any) {
    getData(this.schema, this.ui, this.formProperty.formData).subscribe(
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

  _selectionChange(options: any) {
    if (this.ui.selectionChange) this.ui.selectionChange(options);
  }

  _select(options: any) {
    if (this.ui.select) this.ui.select(options);
  }

  _clear(options: any) {
    if (this.ui.clear) this.ui.clear(options);
  }
}
