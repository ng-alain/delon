import { Component } from '@angular/core';
import { SFDateWidgetSchema, SFSchema } from '@delon/form';
import subWeeks from 'date-fns/subWeeks';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)"></sf> `,
})
export class DemoComponent {
  schema: SFSchema = {
    properties: {
      start: {
        type: 'string',
        ui: { widget: 'date', end: 'end' } as SFDateWidgetSchema,
        default: new Date(),
      },
      end: {
        type: 'string',
        default: subWeeks(new Date(), 6),
      },
    },
    required: ['start'],
  };

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
