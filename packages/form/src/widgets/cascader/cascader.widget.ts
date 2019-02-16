import { Component, OnInit } from '@angular/core';
import { LocaleData } from '@delon/theme';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { getData, toBool } from '../../utils';
import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-cascader',
  templateUrl: './cascader.widget.html',
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
    this.showArrow = toBool(this.ui.showArrow, true);
    this.showInput = toBool(this.ui.showInput, true);
    this.triggerAction = this.ui.triggerAction || ['click'];
    if (!!this.ui.asyncData) {
      this.loadData = (node: any, index: number) => (this.ui.asyncData as any)(node, index, this);
    }
  }

  reset(value: SFValue) {
    getData(this.schema, {}, this.formProperty.formData).subscribe(list => {
      this.data = list;
      this.detectChanges();
    });
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
