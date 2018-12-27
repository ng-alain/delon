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
import { SFSchema } from '@delon/form';
import { MentionOnSearchTypes, NzMessageService } from 'ng-zorro-antd';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

const DATA = ['asdf', 'cipchk', '中文', 'にほんご'];

@Component({
  selector: 'app-demo',
  template: `<sf [schema]="schema" (formSubmit)="submit($event)"></sf>`
})
export class DemoComponent {
  schema: SFSchema = {
    properties: {
      remark: {
        type: 'string',
        title: '描述',
        enum: DATA,
        minimum: 2,
        maximum: 5,
        ui: {
          widget: 'mention',
          inputStyle: 'textarea',
        },
      },
      // 异步静态数据源
      async: {
        type: 'string',
        title: 'Async',
        ui: {
          widget: 'mention',
          asyncData: () =>
            of(DATA).pipe(delay(1000)),
        },
      },
      // 实时数据
      real_time: {
        type: 'string',
        title: 'RealTime',
        ui: {
          widget: 'mention',
          loadData: (option: MentionOnSearchTypes) => 
            of(DATA.filter(item => item.indexOf(option.value) !== -1))
            .pipe(delay(300)),
        },
      },
    },
  };
  constructor(public msg: NzMessageService) {}
  submit(value: any) {
    this.msg.success(JSON.stringify(value));
  }
}
```
