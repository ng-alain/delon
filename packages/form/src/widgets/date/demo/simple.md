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

import { DelonFormModule, SFDateWidgetSchema, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-date-simple',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)" (formChange)="change($event)" /> `,
  imports: [DelonFormModule]
})
export class DemoComponent {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      datetime: {
        type: 'string',
        format: 'date-time'
      },
      date: {
        type: 'string',
        format: 'date'
      },
      date_number: {
        type: 'number',
        ui: { widget: 'date' } as SFDateWidgetSchema
      },
      year: {
        type: 'number',
        ui: { widget: 'date', mode: 'year', format: 'yyyy' } as SFDateWidgetSchema
      },
      month: {
        type: 'string',
        format: 'month'
      },
      week: {
        type: 'string',
        format: 'week'
      },
      range: {
        type: 'string',
        ui: { widget: 'date', mode: 'range' } as SFDateWidgetSchema
      },
      start: {
        type: 'string',
        ui: { widget: 'date', end: 'end' } as SFDateWidgetSchema
      },
      end: {
        type: 'string',
        ui: { widget: 'date', end: 'end' } as SFDateWidgetSchema
      },
      inline: {
        type: 'string',
        ui: { widget: 'date', inline: true } as SFDateWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }

  change(value: {}): void {
    console.log('change', value);
  }
}
```
