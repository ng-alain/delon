import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NzFormatEmitEvent } from 'ng-zorro-antd/core/tree';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { getData, toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
import { SFTreeSelectWidgetSchema } from './schema';

@Component({
  selector: 'sf-tree-select',
  templateUrl: './tree-select.widget.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
})
export class TreeSelectWidget extends ControlUIWidget<SFTreeSelectWidgetSchema> implements OnInit {
  i: SFTreeSelectWidgetSchema;
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
      displayWith: ui.displayWith || ((node: any) => node.title),
    };
    this.asyncData = typeof ui.expandChange === 'function';
  }

  reset(value: SFValue) {
    getData(this.schema, this.ui, value).subscribe(list => {
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
    ui.expandChange(e).subscribe(res => {
      e.node!.clearChildren();
      e.node!.addChildren(res);
      this.detectChanges();
    });
  }
}
