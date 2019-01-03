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
import { SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd';
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
        },
      },
      async: {
        type: 'string',
        title: '异步',
        ui: {
          widget: 'autocomplete',
          debounceTime: 100,
          asyncData: (input: string) => of(input ? [{ label: input, value: 1 }, { label: input + input, value: 2 }] : []),
        },
      },
    },
  };
  constructor(public msg: NzMessageService) { }
  submit(value: any) { this.msg.success(JSON.stringify(value)); }
}
```
