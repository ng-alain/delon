---
order: 0
title:
  zh-CN: 基础样例
  en-US: Basic Usage
---

## zh-CN

最简单的用法。

## en-US

Simplest of usage.

```ts
import { Component, inject } from '@angular/core';
import { of } from 'rxjs';

import { DelonFormModule, SFSchema } from '@delon/form';
import type { SFAutoCompleteWidgetSchema } from '@delon/form/widgets/autocomplete';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: `<sf [schema]="schema" (formSubmit)="submit($event)" />`,
  standalone: true,
  imports: [DelonFormModule]
})
export class DemoComponent {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      format: {
        type: 'string',
        title: 'Format',
        format: 'email'
      },
      widget: {
        type: 'string',
        title: '指定widget',
        ui: {
          widget: 'autocomplete',
          type: 'email'
        } as SFAutoCompleteWidgetSchema
      },
      async: {
        type: 'string',
        title: '异步',
        ui: {
          widget: 'autocomplete',
          debounceTime: 100,
          asyncData: input =>
            of(
              input
                ? [
                    { label: input, value: 1, otherData: 1 },
                    { label: input + input, value: 2 }
                  ]
                : []
            ),
          change: (comp, data) => console.log(comp, data)
        } as SFAutoCompleteWidgetSchema,
        default: 'asdf'
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
