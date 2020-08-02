import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NzCascaderOption } from 'ng-zorro-antd/cascader';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { getData, toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
import { SFCascaderWidgetSchema } from './schema';

@Component({
  selector: 'sf-cascader',
  templateUrl: './cascader.widget.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
})
export class CascaderWidget extends ControlUIWidget<SFCascaderWidgetSchema> implements OnInit {
  clearText: string;
  showArrow: boolean;
  showInput: boolean;
  triggerAction: string[];
  data: SFSchemaEnum[] = [];
  loadData: (node: NzCascaderOption, index: number) => PromiseLike<any>;

  ngOnInit(): void {
    const { clearText, showArrow, showInput, triggerAction, asyncData } = this.ui;
    this.clearText = clearText || '清除';
    this.showArrow = toBool(showArrow, true);
    this.showInput = toBool(showInput, true);
    this.triggerAction = triggerAction || ['click'];
    if (!!asyncData) {
      this.loadData = (node: NzCascaderOption, index: number) => asyncData(node, index, this).then(() => this.detectChanges());
    }
  }

  reset(value: SFValue): void {
    getData(this.schema, {}, value).subscribe(list => {
      this.data = list;
      this.detectChanges();
    });
  }

  _visibleChange(status: boolean): void {
    if (this.ui.visibleChange) this.ui.visibleChange(status);
  }

  _change(value: any[] | null): void {
    this.setValue(value);
    if (this.ui.change) {
      this.ui.change(value);
    }
  }

  _selectionChange(options: NzCascaderOption[]): void {
    if (this.ui.selectionChange) {
      this.ui.selectionChange(options);
    }
  }

  _clear(): void {
    if (this.ui.clear) this.ui.clear();
  }
}
