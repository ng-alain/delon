import { Component } from '@angular/core';
import { SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-demo',
  template: `
  <h1>sf</h1>
  <sf [schema]="schema" (formSubmit)="submit($event)"></sf>
  `,
})
export class DemoComponent  {
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
