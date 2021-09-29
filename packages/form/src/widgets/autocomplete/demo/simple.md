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
import { Component } from '@angular/core';
import { SFAutoCompleteWidgetSchema, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';
import { of } from 'rxjs';

@Component({
  selector: 'app-demo',
  template: `<sf [schema]="schema" (formSubmit)="submit($event)"></sf>`,
})
export class DemoComponent {
  schema: SFSchema = {
    properties: {
      format: {
        type: 'string',
        title: 'Format',
        format: 'email',
      },
      widget: {
        type: 'string',
        title: '指定widget',
        ui: {
          widget: 'autocomplete',
          type: 'email',
        } as SFAutoCompleteWidgetSchema,
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
                    { label: input + input, value: 2 },
                  ]
                : [],
            ),
          change: (comp, data) => console.log(comp, data),
        } as SFAutoCompleteWidgetSchema,
        default: 'asdf',
      },
    },
  };

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
