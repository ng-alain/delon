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
import { SFSchema, SFStringWidgetSchema, SFTextWidgetSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: `
    <sf [schema]="schema" [loading]="loading" (formSubmit)="submit($event)"></sf>
  `,
})
export class DemoComponent {
  loading = false;
  schema: SFSchema = {
    properties: {
      id1: { type: 'number', ui: { widget: 'text' } as SFTextWidgetSchema },
      id2: { type: 'number', ui: { widget: 'text', defaultText: 'default text' } as SFTextWidgetSchema },
      name: {
        type: 'string',
        title: 'Name',
        ui: {
          addOnAfter: 'RMB',
          placeholder: 'RMB结算',
        } as SFStringWidgetSchema,
      },
    },
    required: ['name'],
  };
  constructor(public msg: NzMessageService) {}
  submit(value: any) {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.msg.success(JSON.stringify(value));
    }, 1000);
  }
}
```
