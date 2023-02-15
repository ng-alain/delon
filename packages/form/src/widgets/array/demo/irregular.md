---
title:
  zh-CN: 不规则布局
  en-US: Irregular Layout
order: 1
---

## zh-CN

灵活使用 `ui` 来复杂不规则布局。

## en-US

Flexible use of `ui` for complex and irregular layouts.

```ts
import { Component } from '@angular/core';

import { SFArrayWidgetSchema, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)"></sf> `
})
export class DemoComponent {
  schema: SFSchema = {
    properties: {
      title: { type: 'string' },
      market: { type: 'number' },
      price: { type: 'number' },
      skus: {
        type: 'array',
        title: 'Skus',
        maxItems: 4,
        default: [{}],
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
            },
            stock: {
              type: 'number',
              minimum: 1
            },
            desc: {
              type: 'string',
              ui: {
                grid: { span: 24 } // 单独设置desc元素在当前数组表单所占格数，24表示整行
              }
            }
          },
          required: ['name', 'price', 'stock'],
          ui: {
            grid: { span: 12 } // 针对数组内部表单统一设置，12表示一行两个
          }
        },
        ui: {
          grid: {
            span: 24, // 单独设置Sku元素在整个表单所占格数，24表示整行
            arraySpan: 12 // 设置数组每个索引所占格数，12表示一行两个
          }
        } as SFArrayWidgetSchema
      },
      desc: {
        type: 'string',
        ui: { grid: { span: 24 } }
      }
    },
    required: ['title', 'market', 'price'],
    ui: {
      spanLabelFixed: 100,
      grid: { span: 8 }
    }
  };

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
