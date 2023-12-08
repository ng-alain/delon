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
import { of, delay } from 'rxjs';

import { DelonFormModule, SFSchema } from '@delon/form';
import { SFTransferWidgetSchema } from '@delon/form/widgets/transfer';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)" /> `,
  standalone: true,
  imports: [DelonFormModule]
})
export class DemoComponent {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      roles: {
        type: 'number',
        title: '角色',
        enum: [
          { title: 'DNS管理', value: 10 },
          { title: 'ECS管理', value: 11 },
          { title: 'OSS管理', value: 12 },
          { title: 'RDS管理', value: 13 }
        ],
        ui: {
          widget: 'transfer',
          titles: ['未拥有', '已拥有']
        } as SFTransferWidgetSchema,
        default: [11, 12]
      },
      roles2: {
        type: 'number',
        title: '角色',
        ui: {
          widget: 'transfer',
          titles: ['未拥有', '已拥有'],
          asyncData: () =>
            of([
              { title: 'DNS管理', value: 10 },
              { title: 'ECS管理', value: 11 },
              { title: 'OSS管理', value: 12 },
              { title: 'RDS管理', value: 13 }
            ]).pipe(delay(10))
        } as SFTransferWidgetSchema,
        default: [11, 12]
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
