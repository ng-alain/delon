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
import { NzMessageService } from 'ng-zorro-antd';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-demo',
  template: `
    <sf [schema]="schema" (formSubmit)="submit($event)"></sf>
  `,
})
export class DemoComponent {
  schema: SFSchema = {
    properties: {
      like: {
        type: 'number',
        title: '兴趣',
        enum: [{ value: 1, label: '电影' }, { value: 2, label: '书' }, { value: 3, label: '旅行' }],
        ui: {
          widget: 'tag',
        },
        default: [1, 2],
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
              { value: 3, label: '旅行' },
            ]).pipe(delay(10)),
        },
        default: [1, 2],
      },
    },
  };
  constructor(public msg: NzMessageService) {}
  submit(value: any) {
    this.msg.success(JSON.stringify(value));
  }
}
```
