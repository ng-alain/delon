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
import type { SFRateWidgetSchema } from '@delon/form/widgets/rate';
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
      rate: {
        type: 'number',
        title: '评级',
        default: 4.5,
        ui: {
          widget: 'rate'
        } as SFRateWidgetSchema
      },
      // 允许半选
      rate2: {
        type: 'number',
        title: '评级',
        maximum: 5,
        multipleOf: 0.5,
        default: 4.5,
        ui: {
          widget: 'rate',
          text: '{{value}} starts'
        } as SFRateWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
