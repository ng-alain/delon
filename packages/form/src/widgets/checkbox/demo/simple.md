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
import { SFCascaderWidgetSchema, SFCheckboxWidgetSchema, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-demo',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)"></sf> `,
})
export class DemoComponent {
  schema: SFSchema = {
    properties: {
      // 单个多选框
      single: {
        type: 'boolean',
        title: '同意本协议',
        description: '《用户协议》',
        ui: {
          widget: 'checkbox',
        } as SFCascaderWidgetSchema,
        default: true,
      },
      // 多选框组
      mulit: {
        type: 'string',
        title: 'Mulit',
        enum: ['Apple', 'Pear', 'Orange'],
        ui: {
          widget: 'checkbox',
          span: 8, // 指定每一项 8 个单元的布局
          checkAll: true,
        } as SFCheckboxWidgetSchema,
        default: ['Apple'],
      },
      // 异步数据
      async: {
        type: 'string',
        title: 'Async',
        ui: {
          widget: 'checkbox',
          asyncData: () =>
            of([
              { label: 'Apple', value: 'Apple' },
              { label: 'Pear', value: 'Pear' },
              { label: 'Orange', value: 'Orange' },
            ]).pipe(delay(200)),
        } as SFCheckboxWidgetSchema,
        default: ['Apple'],
      },
    },
  };

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
