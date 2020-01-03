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
import { NzMessageService } from 'ng-zorro-antd/message';
import { SFSchema, SFArrayWidgetSchema } from '@delon/form';

@Component({
  selector: 'app-demo',
  template: `
    <sf [schema]="schema" (formSubmit)="submit($event)"></sf>
  `,
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
              title: '名称',
            },
            price: {
              type: 'number',
              title: '单价',
              minimum: 1,
            },
          },
          required: ['name', 'price'],
        },
        ui: { grid: { arraySpan: 12 } } as SFArrayWidgetSchema,
      },
    },
  };
  constructor(public msg: NzMessageService) {}
  submit(value: any) {
    this.msg.success(JSON.stringify(value));
  }
}
```
