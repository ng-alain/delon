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
import { SFSchema, SFTimeWidgetSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)"></sf> `,
})
export class DemoComponent {
  schema: SFSchema = {
    properties: {
      time: {
        type: 'string',
        ui: { widget: 'time' } as SFTimeWidgetSchema,
      },
      time_number: {
        type: 'number',
        ui: { widget: 'time' } as SFTimeWidgetSchema,
      },
      time_format: {
        type: 'string',
        format: 'time',
        ui: {
          format: `HH:mm:ss+00:00`,
        } as SFTimeWidgetSchema,
      },
      '12hours': {
        type: 'string',
        ui: {
          widget: 'time',
          format: 'h:mm:ss a',
          use12Hours: true,
        } as SFTimeWidgetSchema,
      },
    },
  };

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
