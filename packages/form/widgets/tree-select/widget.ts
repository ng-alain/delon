import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ControlUIWidget, DelonFormModule, SFSchemaEnum, SFValue, getData, toBool } from '@delon/form';
import { NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd/core/tree';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';

import type { SFTreeSelectWidgetSchema } from './schema';

@Component({
  selector: 'sf-tree-select',
  template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-tree-select
      [nzId]="id"
      [nzAllowClear]="i.allowClear"
      [nzPlaceHolder]="ui.placeholder!"
      [nzDropdownStyle]="ui.dropdownStyle!"
      [nzDropdownClassName]="ui.dropdownClassName"
      [nzSize]="ui.size!"
      [nzExpandedKeys]="ui.expandedKeys!"
      [nzNotFoundContent]="ui.notFoundContent"
      [nzMaxTagCount]="ui.maxTagCount!"
      [nzMaxTagPlaceholder]="ui.maxTagPlaceholder || null"
      [nzTreeTemplate]="ui.treeTemplate!"
      [nzDisabled]="disabled"
      [nzShowSearch]="i.showSearch"
      [nzShowIcon]="i.showIcon"
      [nzDropdownMatchSelectWidth]="i.dropdownMatchSelectWidth"
      [nzMultiple]="i.multiple"
      [nzHideUnMatched]="i.hideUnMatched"
      [nzCheckable]="i.checkable"
      [nzShowExpand]="i.showExpand"
      [nzShowLine]="i.showLine"
      [nzCheckStrictly]="i.checkStrictly"
      [nzAsyncData]="asyncData"
      [nzNodes]="$any(data)"
      [nzDefaultExpandAll]="i.defaultExpandAll"
      [nzDisplayWith]="i.displayWith!"
      [ngModel]="value"
      [nzVirtualHeight]="ui.virtualHeight!"
      [nzVirtualItemSize]="ui.virtualItemSize || 28"
      [nzVirtualMaxBufferPx]="ui.virtualMaxBufferPx || 500"
      [nzVirtualMinBufferPx]="ui.virtualMinBufferPx || 28"
      (ngModelChange)="change($event)"
      (nzExpandChange)="expandChange($event)"
    />
  </sf-item-wrap>`,
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  imports: [FormsModule, DelonFormModule, NzTreeSelectModule]
})
export class TreeSelectWidget extends ControlUIWidget<SFTreeSelectWidgetSchema> implements OnInit {
  static readonly KEY = 'tree-select';

  i!: SFTreeSelectWidgetSchema;
  data: SFSchemaEnum[] = [];
  asyncData = false;

  ngOnInit(): void {
    const { ui } = this;
    this.i = {
      allowClear: ui.allowClear,
      showSearch: toBool(ui.showSearch, false),
      dropdownMatchSelectWidth: toBool(ui.dropdownMatchSelectWidth, true),
      multiple: toBool(ui.multiple, false),
      checkable: toBool(ui.checkable, false),
      showIcon: toBool(ui.showIcon, false),
      showExpand: toBool(ui.showExpand, true),
      showLine: toBool(ui.showLine, false),
      checkStrictly: toBool(ui.checkStrictly, false),
      hideUnMatched: toBool(ui.hideUnMatched, false),
      defaultExpandAll: toBool(ui.defaultExpandAll, false),
      displayWith: ui.displayWith || ((node: NzTreeNode) => node.title)
    };
    this.asyncData = typeof ui.expandChange === 'function';
  }

  reset(value: SFValue): void {
    getData(this.schema, this.ui, value).subscribe(list => {
      this.data = list;
      this.detectChanges();
    });
  }

  change(value: NzSafeAny[] | NzSafeAny): void {
    if (this.ui.change) this.ui.change(value);
    this.setValue(value == null ? this.ui.clearValue : value);
  }

  expandChange(e: NzFormatEmitEvent): void {
    const { ui } = this;
    if (typeof ui.expandChange !== 'function') return;
    ui.expandChange(e).subscribe(res => {
      e.node!.clearChildren();
      e.node!.addChildren(res);
      this.detectChanges();
    });
  }
}
