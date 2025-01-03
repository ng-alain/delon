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

import { DelonFormModule, SFNumberWidgetSchema, SFSchema } from '@delon/form';
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
      number: {
        type: 'number',
        minimum: 18,
        maximum: 100,
        multipleOf: 2,
        ui: { widgetWidth: 200 } as SFNumberWidgetSchema
      },
      integer: { type: 'integer', default: 10, ui: { widgetWidth: '100%' } as SFNumberWidgetSchema },
      unit: { type: 'number', default: 10, ui: { unit: '%' } as SFNumberWidgetSchema },
      prefix: { type: 'number', default: 10, ui: { prefix: '$' } as SFNumberWidgetSchema },
      hideStep: { type: 'number', default: 10, ui: { hideStep: true } as SFNumberWidgetSchema }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
