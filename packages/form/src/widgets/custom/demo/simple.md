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
import { NzMessageService } from 'ng-zorro-antd/message';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-demo',
  template: `
    <sf [schema]="schema" (formSubmit)="submit($event)">
      <ng-template sf-template="custom" let-me let-ui="ui" let-schema="schema">
        自定义内容:
        <input
          nz-input
          [attr.id]="me.id"
          [disabled]="me.disabled"
          [attr.disabled]="me.disabled"
          [nzSize]="ui.size"
          [ngModel]="me.formProperty.value"
          (ngModelChange)="me.setValue($event)"
        />
      </ng-template>
    </sf>
  `,
})
export class DemoComponent {
  schema: SFSchema = {
    properties: {
      custom: {
        type: 'string',
        title: '自定义内容',
        ui: {
          widget: 'custom',
        },
        default: 'test',
      },
    },
  };
  constructor(public msg: NzMessageService) {}
  submit(value: any) {
    this.msg.success(JSON.stringify(value));
  }
}
```
