---
title:
  zh-CN: 范围
  en-US: Data Range
order: 1
---

## zh-CN

一个简单的开始与结束日期，**注意：** `end` 依然需要定义对应的Schema，但会强制隐藏状态。

## en-US

A simple start & end date range, **Note: ** `end` still needs define in schema, but will forced to be hidden.

```ts
import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SFSchema, SFDateWidgetSchema } from '@delon/form';

@Component({
  selector: 'app-demo',
  template: `
    <sf [schema]="schema" (formSubmit)="submit($event)"></sf>
  `,
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
        default: '2119-1-1',
      },
    },
    required: ['start'],
  };

  constructor(private msg: NzMessageService) {}

  submit(value: any) {
    this.msg.success(JSON.stringify(value));
  }
}
```
