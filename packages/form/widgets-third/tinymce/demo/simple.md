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
            remark: {
                type: 'string',
                title: '描述',
                ui: {
                    widget: 'tinymce'
                }
            }
        }
    };
    constructor(public msg: NzMessageService) { }
    submit(value: any) { this.msg.success(JSON.stringify(value)); }
}
```
