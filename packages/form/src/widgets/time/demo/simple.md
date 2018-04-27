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

@Component({
  selector: 'app-demo',
  template: `<sf [schema]="schema" (formSubmit)="submit($event)"></sf>`
})
export class DemoComponent {
    schema: SFSchema = {
        properties: {
            'time': {
                'type': 'string',
                'format': 'time'
            },
            'time_number': {
                'type': 'number',
                ui: { widget: 'time' }
            },
            'time_string': {
                'type': 'string',
                ui: { widget: 'time' }
            }
        }
    };
    constructor(public msg: NzMessageService) { }
    submit(value: any) { this.msg.success(JSON.stringify(value)); }
}
```
