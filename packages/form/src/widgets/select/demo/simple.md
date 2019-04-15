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
import { Component } from '@angular/core';
import { SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-demo',
  template: `
    <sf [schema]="schema" (formSubmit)="submit($event)"></sf>
  `,
})
export class DemoComponent {
  schema: SFSchema = {
    properties: {
      status: {
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
        },
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
        },
      },
    },
  };
  constructor(public msg: NzMessageService) {}
  submit(value: any) {
    this.msg.success(JSON.stringify(value));
  }
}
```
