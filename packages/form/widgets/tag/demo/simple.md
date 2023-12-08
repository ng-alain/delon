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

import { DelonFormModule, SFIcon, SFSchema } from '@delon/form';
import type { SFTagWidgetSchema } from '@delon/form/widgets/tag';
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
      like: {
        type: 'number',
        title: '兴趣',
        enum: [
          { value: 1, label: '电影' },
          { value: 2, label: '书' },
          { value: 3, label: '旅行' }
        ],
        ui: {
          widget: 'tag'
        } as SFTagWidgetSchema,
        default: [1, 2]
      },
      like1: {
        type: 'number',
        title: '兴趣',
        ui: {
          widget: 'tag',
          asyncData: () =>
            of([
              { value: 1, label: '电影' },
              { value: 2, label: '书' },
              { value: 3, label: '旅行' }
            ]).pipe(delay(10))
        } as SFTagWidgetSchema,
        default: [1, 2]
      },
      icon: {
        type: 'number',
        title: '兴趣',
        enum: [
          { value: 1, label: 'Twitter', prefixIcon: { type: 'twitter' } as SFIcon },
          { value: 2, label: 'Facebook', suffixIcon: { type: 'facebook' } as SFIcon }
        ],
        ui: {
          widget: 'tag'
        } as SFTagWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
