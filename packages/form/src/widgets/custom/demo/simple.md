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
import { NzMessageService } from 'ng-zorro-antd';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-demo',
  template: `
  <sf [schema]="schema" (formSubmit)="submit($event)">
    <!--sf-template必须与properties下的节点属性名相同-->
    <ng-template sf-template="property1" let-me let-ui="ui" let-schema="schema">
        自定义内容:
        <input nz-input
                [attr.id]="id"
                [disabled]="me.disabled"
                [attr.disabled]="me.disabled"
                [nzSize]="ui.size"
                [value]="me.formProperty.value"
                (input)="me.setValue($event.target?.value)">
    </ng-template>
  </sf>
  `
})
export class DemoComponent {
    schema: SFSchema = {
        properties: {
            property1: {
                type: 'string',
                title: '自定义内容',
                ui: {
                    widget: 'custom'
                },
                default: 'test'
            }
        }
    };
    constructor(public msg: NzMessageService) { }
    submit(value: any) { this.msg.success(JSON.stringify(value)); }
}
```
