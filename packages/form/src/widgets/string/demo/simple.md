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
import { SFSchema, SFStringWidgetSchema, SFValueChange } from '@delon/form';

@Component({
  selector: 'app-demo',
  template: `<sf [schema]="schema" (formValueChange)="valueChange($event)" (formSubmit)="submit($event)"></sf>`,
})
export class DemoComponent {
  schema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: 'Name',
        ui: {
          addOnAfter: 'RMB',
          placeholder: 'RMB结算',
          change: val => console.log(val),
          focus: e => console.log('focus', e),
          blur: e => console.log('blur', e),
          enter: e => console.log('enter', e),
        } as SFStringWidgetSchema,
      },
      mobile: {
        type: 'string',
        format: 'mobile',
        title: '手机号'
      },
      sfz: {
        type: 'string',
        format: 'id-card',
        title: '身份证号'
      },
      color: {
        type: 'string',
        format: 'color',
        title: '颜色'
      },
    },
    required: ['name'],
  };

  constructor(public msg: NzMessageService) {}

  submit(value: any): void {
    this.msg.success(JSON.stringify(value));
  }

  valueChange(res: SFValueChange): void {
    this.msg.info(JSON.stringify(res));
  }
}
```
