---
title:
  zh-CN: 基础样例
  en-US: Basic Usage
order: 0
---

## zh-CN

最简单的用法。

## en-US

Simplest of usage.

```ts
import { Component, ViewChild } from '@angular/core';
import { SFComponent, SFSchema, SFSelectWidgetSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-demo',
  template: `
    <sf #sf [schema]="schema" (formSubmit)="submit($event)"></sf>
    <button nz-button (click)="updateStatus()">Update Status</button>
  `,
})
export class DemoComponent {
  @ViewChild('sf', { static: false }) private sf: SFComponent;
  schema: SFSchema = {
    properties: {
      status: {
        type: 'string',
        title: '状态',
        enum: [
          { label: '待支付', value: 'WAIT_BUYER_PAY', otherData: 1 },
          { label: '已支付', value: 'TRADE_SUCCESS' },
          { label: '交易完成', value: 'TRADE_FINISHED' },
        ],
        default: 'WAIT_BUYER_PAY',
        ui: {
          widget: 'select',
          change: (value, orgData) => console.log(value, orgData),
        } as SFSelectWidgetSchema,
      },
      // 标签
      tags: {
        type: 'string',
        title: '标签',
        enum: [
          { label: '待支付', value: 'WAIT_BUYER_PAY' },
          { label: '已支付', value: 'TRADE_SUCCESS' },
          { label: '交易完成', value: 'TRADE_FINISHED' },
        ],
        ui: {
          widget: 'select',
          mode: 'tags',
        } as SFSelectWidgetSchema,
        default: null,
      },
      // 异步数据
      async: {
        type: 'string',
        title: 'Async',
        default: 'WAIT_BUYER_PAY',
        ui: {
          widget: 'select',
          asyncData: () =>
            of([
              {
                label: '订单状态',
                group: true,
                children: [
                  { label: '待支付', value: 'WAIT_BUYER_PAY' },
                  { label: '已支付', value: 'TRADE_SUCCESS' },
                  { label: '交易完成', value: 'TRADE_FINISHED' },
                ],
              },
            ]).pipe(delay(1200)),
        } as SFSelectWidgetSchema,
      },
    },
  };

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }

  updateStatus(): void {
    const statusProperty = this.sf.getProperty('/status')!;
    statusProperty.schema.enum = ['1', '2', '3'];
    statusProperty.widget.reset('2');
  }
}
```