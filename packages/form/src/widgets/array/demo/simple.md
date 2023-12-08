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
import { Component, inject } from '@angular/core';

import { DelonFormModule, SFArrayWidgetSchema, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)" /> `,
  standalone: true,
  imports: [DelonFormModule]
})
export class DemoComponent {
  private readonly msg = inject(NzMessageService);
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
          required: ['name', 'price']
        },
        ui: { grid: { arraySpan: 12 } } as SFArrayWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
