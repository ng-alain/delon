import { Component } from '@angular/core';
import { SFSchema, SFStringWidgetSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: `<sf [schema]="schema" (formSubmit)="submit($event)"></sf>`,
})
export class DemoComponent {
  schema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: 'Name',
        ui: {
          addOnAfter: 'RMB',
          placeholder: 'RMB结算',
          change: val => console.log(val),
          focus: e => console.log('focus', e),
          blur: e => console.log('blur', e),
          enter: e => console.log('enter', e),
        } as SFStringWidgetSchema,
      },
      mobile: {
        type: 'string',
        format: 'mobile',
        title: '手机号',
      },
      sfz: {
        type: 'string',
        format: 'id-card',
        title: '身份证号',
      },
      color: {
        type: 'string',
        format: 'color',
        title: '颜色',
      },
    },
    required: ['name'],
  };
  constructor(public msg: NzMessageService) {}
  submit(value: any) {
    this.msg.success(JSON.stringify(value));
  }
}
