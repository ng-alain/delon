import { Component, ViewChild } from '@angular/core';

import { SFCascaderWidgetSchema, SFCheckboxWidgetSchema, SFComponent, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-demo',
  template: `
    <sf #sf [schema]="schema" (formSubmit)="submit($event)"></sf>
    result: {{ sf.valid | json }},
    {{ sf.value | json }}
  `
})
export class DemoComponent {
  // 表单对象
  @ViewChild('sf', { static: false }) sf: SFComponent | undefined;
  schema: SFSchema = {
    properties: {
      // 单个多选框
      single: {
        type: 'boolean',
        title: '同意本协议',
        description: '《用户协议》',
        ui: {
          widget: 'checkbox'
        } as SFCascaderWidgetSchema,
        default: true
      },
      // 多选框组
      mulit: {
        type: 'string',
        title: 'Mulit',
        enum: ['Apple', 'Pear', 'Orange'],
        ui: {
          widget: 'checkbox',
          span: 8, // 指定每一项 8 个单元的布局
          checkAll: false
        } as SFCheckboxWidgetSchema
      }
    },
    required: ['mulit'],
    ui: { debug: true }
  };

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(`${this.sf?.valid},${JSON.stringify(value)}`);
  }
}
