import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { SFObjectWidgetSchema, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)"></sf>
    <h3>asdf</h3>
    <sf [schema]="schema2" (formSubmit)="submit($event)"></sf>
    <ng-template #extra>
      <a (click)="msg.success('Success')">More</a>
    </ng-template>`,
})
export class DemoComponent {
  @ViewChild('extra', { static: true }) private extra: TemplateRef<void>;
  schema: SFSchema = {
    properties: {
      name: { type: 'string' },
      age: { type: 'number' },
      address1: {
        title: '地址1',
        type: 'object',
        properties: {
          country: {
            type: 'string',
            ui: {
              grid: { span: 24 },
            },
          },
          city: {
            type: 'string',
            ui: {
              grid: { span: 24 },
            },
          },
          zone: {
            type: 'string',
            ui: {
              grid: { span: 24 },
            },
          },
        },
        ui: {
          type: 'card',
          spanLabelFixed: 150,
          grid: { span: 24 },
        } as SFObjectWidgetSchema,
      },
      address2: {
        title: '地址2',
        type: 'object',
        properties: {
          country: {
            type: 'string',
            ui: {
              grid: { span: 12 },
            },
          },
          city: {
            type: 'string',
            ui: {
              grid: { span: 12 },
            },
          },
          zone: {
            type: 'string',
            ui: {
              grid: { span: 24 },
            },
          },
        },
        ui: {
          type: 'default',
          spanLabelFixed: 150,
          grid: { span: 24 },
        } as SFObjectWidgetSchema,
      },
    },
    required: ['name', 'age'],
    ui: {
      spanLabelFixed: 150,
      grid: { span: 24 },
    },
  };
  schema2: SFSchema = {
    ui: { grid: { span: 8 }, spanLabelFixed: 100 },
    properties: {
      status: {
        type: 'string',
        title: '状态',
        enum: [
          { label: '待支付待支付待支付待支付待支付待支付待支付待支付待支付待支付待支付', value: 'WAIT_BUYER_PAY' },
          { label: '已支付', value: 'TRADE_SUCCESS' },
          { label: '交易完成', value: 'TRADE_FINISHED' },
        ],
        default: 'WAIT_BUYER_PAY',
        ui: {
          widget: 'select',
        },
      },
      status2: {
        type: 'string',
        title: '状态',
        enum: [
          { label: '待支付', value: 'WAIT_BUYER_PAY' },
          { label: '已支付', value: 'TRADE_SUCCESS' },
          { label: '交易完成', value: 'TRADE_FINISHED' },
        ],
        default: 'WAIT_BUYER_PAY',
        ui: {
          widget: 'select',
        },
      },
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

  submit(value: any) {
    this.msg.success(JSON.stringify(value));
  }
}
