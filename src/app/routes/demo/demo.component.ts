
import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-demo',
  template: `<sf [schema]="schema" (formSubmit)="submit($event)"></sf>`
})
export class DemoComponent {
    schema: SFSchema = {
        properties: {
            product: {
                type: 'array',
                title: '产品清单',
                maxItems: 4,
                items: {
                    type: 'object',
                    properties: {
                        name: {
                            type: 'string',
                            title: '名称'
                        },
                        price: {
                            type: 'number',
                            title: '单价',
                            minimum: 1
                        }
                    },
                    required: [ 'name', 'price' ]
                },
                ui: { grid: { arraySpan: 12 } }
            }
        }
    };
    constructor(public msg: NzMessageService) { }
    submit(value: any) { this.msg.success(JSON.stringify(value)); }
}
