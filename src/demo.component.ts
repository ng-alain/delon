import { Component } from '@angular/core';
import { SFDateWidgetSchema, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-date-simple',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)" (formChange)="change($event)"></sf> `,
})
export class DemoComponent {
  schema: SFSchema = {
    properties: {
      datetime: {
        type: 'string',
        format: 'date-time',
      },
      date: {
        type: 'string',
        format: 'date',
      },
      date_number: {
        type: 'number',
        ui: { widget: 'date' } as SFDateWidgetSchema,
      },
      year: {
        type: 'number',
        ui: { widget: 'date', mode: 'year', format: 'yyyy' } as SFDateWidgetSchema,
      },
      month: {
        type: 'string',
        format: 'month',
      },
      week: {
        type: 'string',
        format: 'week',
      },
      range: {
        type: 'string',
        ui: { widget: 'date', mode: 'range' } as SFDateWidgetSchema,
      },
      start: {
        type: 'string',
        ui: { widget: 'date', end: 'end' } as SFDateWidgetSchema,
      },
      end: {
        type: 'string',
        ui: { widget: 'date', end: 'end' } as SFDateWidgetSchema,
      },
    },
  };

  constructor(public msg: NzMessageService) {}

  submit(value: any): void {
    this.msg.success(JSON.stringify(value));
  }

  change(value: {}): void {
    console.log('change', value);
  }
}
