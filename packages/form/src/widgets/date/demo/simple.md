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
import { NzMessageService } from 'ng-zorro-antd';
import { SFSchema, SFDateWidgetSchema } from '@delon/form';

@Component({
  selector: 'app-demo',
  template: `
    <sf [schema]="schema" (formSubmit)="submit($event)" (formChange)="change($event)"></sf>
  `,
})
export class DemoComponent {
  schema: SFSchema = {
    properties: {
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
        ui: { widget: 'date', mode: 'year', format: 'YYYY' } as SFDateWidgetSchema,
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

  change(value: any) {
    console.log('change', value);
  }
}
```
