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
import { SFDateWidgetSchema, SFSchema } from '@delon/form';
import subWeeks from 'date-fns/subWeeks';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)"></sf> `,
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
        default: subWeeks(new Date(), 6),
      },
      startWeek: {
        type: 'string',
        ui: { widget: 'date', rangeMode: 'week', end: 'endWeek' } as SFDateWidgetSchema,
        default: new Date(),
      },
      endWeek: {
        type: 'string',
        default: subWeeks(new Date(), 6),
      },
      startMonth: {
        type: 'string',
        ui: { widget: 'date', rangeMode: 'month', end: 'endMonth' } as SFDateWidgetSchema,
        default: new Date(),
      },
      endMonth: {
        type: 'string',
        default: subWeeks(new Date(), 6),
      },
      startYear: {
        type: 'string',
        ui: { widget: 'date', rangeMode: 'year', end: 'endYear' } as SFDateWidgetSchema,
        default: new Date(),
      },
      endYear: {
        type: 'string',
        default: subWeeks(new Date(), 6),
      },
    },
    required: ['start'],
  };

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
