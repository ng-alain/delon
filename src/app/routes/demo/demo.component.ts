
import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-demo',
  template: `<sf mode="search"  [schema]="schema" (formSubmit)="submit($event)"></sf>`,
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
        },
        format: 'mobile',
      },
      mobile: {
        type: 'string',
        format: 'mobile',
        title: '手机号',
        readOnly: true
      },
      sfz: {
        type: 'string',
        format: 'id-card',
        title: '身份证号'
      },
      color: {
        type: 'string',
        format: 'color',
        title: '颜色'
      },
      type: {
        type: 'string',
        title: '类型',
        enum: [
          { label: '电影', value: 'movie' },
          { label: '电视剧', value: 'tv' },
        ],
        ui: {
          widget: 'select',
          mode: 'tags',
          placeholder: '请选择',
          allowClear: true,
          style: {width: '200px'}
        },
        default: null,
      },
    },
    required: ['name'],
  };
  constructor(public msg: NzMessageService) {}
  submit(value: any) {
    this.msg.success(JSON.stringify(value));
  }
}
