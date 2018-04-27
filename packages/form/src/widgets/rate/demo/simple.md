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
            rate: {
                type: 'number',
                title: '评级',
                default: 4.5,
                ui: {
                    widget: 'rate'
                }
            },
            // 允许半选
            rate2: {
                type: 'number',
                title: '评级',
                maximum: 5,
                multipleOf: 0.5,
                default: 4.5,
                ui: {
                    widget: 'rate',
                    text: '{{value}} starts'
                }
            }
        }
    };
    constructor(public msg: NzMessageService) { }
    submit(value: any) { this.msg.success(JSON.stringify(value)); }
}
```
