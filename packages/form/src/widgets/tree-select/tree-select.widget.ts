import { Component, OnInit } from '@angular/core';
import { NzFormatEmitEvent } from 'ng-zorro-antd';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { getData, toBool } from '../../utils';
import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-tree-select',
  templateUrl: './tree-select.widget.html',
})
export class TreeSelectWidget extends ControlWidget implements OnInit {
  i: any;
  data: SFSchemaEnum[] = [];

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
      displayWith: ui.displayWith || ((node: any) => node.title),
    };
  }

  reset(value: SFValue) {
    getData(this.schema, this.ui, this.formProperty.formData)
      .subscribe(list => {
        this.data = list;
        this.detectChanges();
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
      .subscribe(res => {
        e.node.clearChildren();
        e.node.addChildren(res);
        this.detectChanges();
      });
  }
}
