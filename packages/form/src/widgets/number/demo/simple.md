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
import { SFNumberWidgetSchema, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)"></sf> `,
})
export class DemoComponent {
  schema: SFSchema = {
    properties: {
      number: { type: 'number', minimum: 18, maximum: 100, multipleOf: 2, ui: { widgetWidth: 200 } },
      integer: { type: 'integer', default: 10 },
      unit: { type: 'number', default: 10, ui: { unit: '%' } as SFNumberWidgetSchema },
      prefix: { type: 'number', default: 10, ui: { prefix: '$' } as SFNumberWidgetSchema },
    },
  };

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
