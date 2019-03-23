import { Component } from '@angular/core';
import { SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd';

const r = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

@Component({
  selector: 'app-demo',
  template: `
  <div style="width: 200px; display: inline-block">
      <g2-pie
          [percent]="percent"
          subTitle="中式快餐"
          total="28%"
          height="130"></g2-pie>
  </div>
  <button nz-button (click)="change()">change</button>
  `,
})
export class DemoComponent  {
  percent = 0;
  change() {
    this.percent = r(0, 100);
  }

  // @delon/form
  schema: SFSchema = {
    definitions: {
      nameRef: {
        type: 'string',
        title: 'nameRef',
      },
    },
    properties: {
      name: {
        type: 'string',
        title: 'Name',
        ui: {
          addOnAfter: 'RMB',
          placeholder: 'RMB结算',
        },
      },
      nameTwo: {
        '$ref': '#/definitions/nameRef',
      },
    },
    required: ['name', 'nameTwo'],
  };
  constructor(public msg: NzMessageService) { }
  submit(value: any) { this.msg.success(JSON.stringify(value)); }
}
