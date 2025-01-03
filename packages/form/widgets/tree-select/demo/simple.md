---
title:
  zh-CN: 基础样例
  en-US: Basic Usage
order: 1
---

## zh-CN

最简单的用法。

> 多选：重置时无法刷新默认值 [#2085](https://github.com/NG-ZORRO/ng-zorro-antd/issues/2085)

## en-US

Simplest of usage.

```ts
import { Component, inject } from '@angular/core';
import { of, delay } from 'rxjs';

import { DelonFormModule, SFSchema } from '@delon/form';
import type { SFTreeSelectWidgetSchema } from '@delon/form/widgets/tree-select';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)" /> `,
  imports: [DelonFormModule]
})
export class DemoComponent {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      status1: {
        type: 'string',
        title: '基本',
        enum: [
          { title: '待支付', key: 'WAIT_BUYER_PAY' },
          { title: '已支付', key: 'TRADE_SUCCESS' },
          { title: '交易完成', key: 'TRADE_FINISHED' }
        ],
        default: 'WAIT_BUYER_PAY',
        ui: {
          widget: 'tree-select'
        } as SFTreeSelectWidgetSchema
      },
      status2: {
        type: 'string',
        title: '多选',
        enum: [
          { title: '待支付', key: 'WAIT_BUYER_PAY' },
          { title: '已支付', key: 'TRADE_SUCCESS' },
          { title: '交易完成', key: 'TRADE_FINISHED' }
        ],
        default: ['WAIT_BUYER_PAY', 'TRADE_SUCCESS'],
        ui: {
          widget: 'tree-select',
          multiple: true
        } as SFTreeSelectWidgetSchema
      },
      status3: {
        type: 'string',
        title: '可勾选',
        default: ['WAIT_BUYER_PAY', 'TRADE_FINISHED'],
        ui: {
          widget: 'tree-select',
          checkable: true,
          asyncData: () =>
            of([
              { title: '待支付', key: 'WAIT_BUYER_PAY' },
              { title: '已支付', key: 'TRADE_SUCCESS' },
              { title: '交易完成', key: 'TRADE_FINISHED' }
            ]).pipe(delay(10))
        } as SFTreeSelectWidgetSchema
      },
      // 异步数据
      async: {
        type: 'string',
        title: 'Async',
        enum: [
          { title: '待支付', key: 'WAIT_BUYER_PAY' },
          { title: '已支付', key: 'TRADE_SUCCESS' },
          { title: '交易完成', key: 'TRADE_FINISHED' }
        ],
        ui: {
          widget: 'tree-select',
          expandChange: () => {
            return of([
              { title: '待支付', key: 'WAIT_BUYER_PAY' },
              { title: '已支付', key: 'TRADE_SUCCESS' },
              { title: '交易完成', key: 'TRADE_FINISHED' }
            ]).pipe(delay(10));
          }
        } as SFTreeSelectWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
