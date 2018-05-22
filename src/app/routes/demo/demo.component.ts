import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-demo',
  template: `<sf [schema]="schema" (formSubmit)="submit($event)"
  (formChange)="change($event)"></sf>`,
})
export class DemoComponent {
  schema: SFSchema = {
    properties: {
      display: {
        type: 'string',
        default: 'inline',
        title: '显示',
        enum: [
          { label: '默认', value: 'inherit' },
          { label: '块元素', value: 'block' },
          { label: '行内块', value: 'inline-block' },
          { label: '行内', value: 'inline' },
          { label: 'flex', value: 'flex' },
        ],
        ui: {
          widget: 'select',
        }
      },
      flexDirection: {
        type: 'string',
        title: '方向',
        default: 'row',
        enum: [
          { label: '默认', value: 'inherit' },
          { label: '水平', value: 'row' },
          { label: '垂直', value: 'column' },
        ],
        ui: {
          visibleIf: {
            display: ['flex'],
          },
          widget: 'select',
        },
      },
    },
  };
  constructor(public msg: NzMessageService) {}
  submit(value: any) {
    this.msg.success(JSON.stringify(value));
  }

  change(value: any) {
    console.log('change', value);
  }
}
