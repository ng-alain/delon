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

import { DelonFormModule, SFSchema } from '@delon/form';
import type { SFTimeWidgetSchema } from '@delon/form/widgets/time';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)" />`,
  standalone: true,
  imports: [DelonFormModule]
})
export class DemoComponent {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      time: {
        type: 'string',
        ui: { widget: 'time' } as SFTimeWidgetSchema
      },
      time_number: {
        type: 'number',
        ui: { widget: 'time' } as SFTimeWidgetSchema
      },
      time_format: {
        type: 'string',
        format: 'time',
        ui: {
          format: `HH:mm:ss+00:00`
        } as SFTimeWidgetSchema
      },
      '12hours': {
        type: 'string',
        ui: {
          widget: 'time',
          format: 'h:mm:ss a',
          use12Hours: true
        } as SFTimeWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
