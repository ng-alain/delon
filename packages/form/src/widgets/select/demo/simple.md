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
import { Component, ViewChild, inject } from '@angular/core';
import { of, delay } from 'rxjs';

import { DelonFormModule, SFComponent, SFSchema, SFSelectWidgetSchema } from '@delon/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: `
    <sf #sf [schema]="schema" (formSubmit)="submit($event)" />
    <button nz-button (click)="updateStatus()">Update Status</button>
    <button nz-button (click)="updateAsyncData()">Update async data</button>
  `,
  standalone: true,
  imports: [DelonFormModule, NzButtonModule]
})
export class DemoComponent {
  private readonly msg = inject(NzMessageService);
  @ViewChild('sf', { static: false }) private sf!: SFComponent;
  asyncData = [
    {
      label: '订单状态',
      group: true,
      children: [
        { label: '待支付', value: 'WAIT_BUYER_PAY' },
        { label: '已支付', value: 'TRADE_SUCCESS' },
        { label: '交易完成', value: 'TRADE_FINISHED' }
      ]
    }
  ];
  delay = 1200;
  schema: SFSchema = {
    properties: {
      status: {
        type: 'string',
        title: '状态',
        enum: [
          { label: '待支付', value: 'WAIT_BUYER_PAY', otherData: 1 },
          { label: '已支付', value: 'TRADE_SUCCESS' },
          { label: '交易完成', value: 'TRADE_FINISHED' }
        ],
        default: 'WAIT_BUYER_PAY',
        ui: {
          widget: 'select',
          change: (value, orgData) => console.log(value, orgData)
        } as SFSelectWidgetSchema
      },
      // 标签
      tags: {
        type: 'string',
        title: '标签',
        enum: [
          { label: '待支付', value: 'WAIT_BUYER_PAY' },
          { label: '已支付', value: 'TRADE_SUCCESS' },
          { label: '交易完成', value: 'TRADE_FINISHED' }
        ],
        ui: {
          widget: 'select',
          mode: 'tags'
        } as SFSelectWidgetSchema,
        default: null
      },
      // 异步数据
      async: {
        type: 'string',
        title: 'Async',
        default: 'WAIT_BUYER_PAY',
        ui: {
          widget: 'select',
          asyncData: () => of(this.asyncData).pipe(delay(this.delay))
        } as SFSelectWidgetSchema
      },
      hide: {
        type: 'string',
        title: '隐藏项',
        enum: [
          { label: '第1个', value: 1 },
          { label: '第2个', value: 2, hide: true },
          { label: '第3个(第2个被隐藏了)', value: 3 }
        ],
        default: 1
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }

  updateStatus(): void {
    const statusProperty = this.sf.getProperty('/status')!;
    statusProperty.schema.enum = ['1', '2', '3'];
    statusProperty.widget.reset('2');
  }

  updateAsyncData(): void {
    this.delay = 0;
    this.asyncData = [
      {
        label: 'Order Status',
        group: true,
        children: [
          { label: 'Wait buyer pay', value: 'WAIT_BUYER_PAY' },
          { label: 'Trade success', value: 'TRADE_SUCCESS' },
          { label: 'Trade finished', value: 'TRADE_FINISHED' }
        ]
      }
    ];
    // Reset the value to make the element load data again
    const updatePath = '/async';
    this.sf.setValue(updatePath, this.sf.getProperty(updatePath)?.value);
  }
}
```
