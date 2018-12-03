import { Component, OnInit } from '@angular/core';
import { deepCopy } from '@delon/util';
import { NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd';
import { map } from 'rxjs/operators';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { getData, toBool } from '../../utils';
import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-tree-select',
  template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
    <nz-tree-select
      [nzAllowClear]="i.allowClear"
      [nzPlaceHolder]="ui.placeholder"
      [nzDisabled]="disabled"
      [nzShowSearch]="i.showSearch"
      [nzDropdownMatchSelectWidth]="i.dropdownMatchSelectWidth"
      [nzDropdownStyle]="ui.dropdownStyle"
      [nzMultiple]="i.multiple"
      [nzSize]="ui.size"
      [nzCheckable]="i.checkable"
      [nzShowExpand]="i.showExpand"
      [nzShowLine]="i.showLine"
      [nzAsyncData]="i.asyncData"
      [nzNodes]="data"
      [nzDefaultExpandAll]="i.defaultExpandAll"
      [nzDefaultExpandedKeys]="i.defaultExpandedKeys"
      [nzDisplayWith]="i.displayWith"
      [ngModel]="value"
      (ngModelChange)="change($event)"
      (nzExpandChange)="expandChange($event)">
    </nz-tree-select>

  </sf-item-wrap>
  `,
})
export class TreeSelectWidget extends ControlWidget implements OnInit {
  // tslint:disable-next-line:no-any
  i: any;
  data: SFSchemaEnum[] = [];

  private dc() {
    // Muse wait `nz-tree-select` write values
    // https://github.com/NG-ZORRO/ng-zorro-antd/issues/2316
    setTimeout(() => this.detectChanges(), 1000);
  }

  private tranData(list: SFSchemaEnum[]) {
    // tslint:disable-next-line:no-any
    return list.map(node => new NzTreeNode(deepCopy(node) as any));
  }

  ngOnInit(): void {
    const { ui } = this;
    this.i = {
      allowClear: ui.allowClear,
      showSearch: toBool(ui.showSearch, false),
      dropdownMatchSelectWidth: toBool(ui.dropdownMatchSelectWidth, true),
      multiple: toBool(ui.multiple, false),
      checkable: toBool(ui.checkable, false),
      showExpand: toBool(ui.showExpand, true),
      showLine: toBool(ui.showLine, false),
      asyncData: typeof ui.expandChange === 'function',
      defaultExpandAll: toBool(ui.defaultExpandAll, false),
      defaultExpandedKeys: ui.defaultExpandedKeys || [],
      displayWith: ui.displayWith || ((node: NzTreeNode) => node.title),
    };
  }

  reset(value: SFValue) {
    getData(this.schema, this.ui, this.formProperty.formData)
      .pipe(map(list => this.tranData(list)))
      .subscribe(list => {
        this.data = list;
        this.dc();
      });
  }

  change(value: string[] | string) {
    if (this.ui.change) this.ui.change(value);
    this.setValue(value);
  }

  expandChange(e: NzFormatEmitEvent) {
    const { ui } = this;
    if (typeof ui.expandChange !== 'function') return;
    ui.expandChange(e)
      .pipe(map((list: SFSchemaEnum[]) => this.tranData(list)))
      .subscribe(res => {
        e.node.clearChildren();
        e.node.addChildren(res);
        this.dc();
      });
  }
}
