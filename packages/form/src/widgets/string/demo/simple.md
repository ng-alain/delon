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
import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema, SFStringWidgetSchema, SFValueChange } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: `<sf [schema]="schema" (formValueChange)="valueChange($event)" (formSubmit)="submit($event)" />`,
  imports: [DelonFormModule]
})
export class DemoComponent {
  private readonly msg = inject(NzMessageService);
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
          enter: e => console.log('enter', e)
        } as SFStringWidgetSchema
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
      regex: {
        type: 'string',
        pattern: `^[abc]+$`,
        title: '正则表达式',
        ui: {
          placeholder: `^[abc]+$`
        } as SFStringWidgetSchema
      },
      color: {
        type: 'string',
        format: 'color',
        title: '颜色',
        ui: {
          optionalHelp: {
            text: '我是有背景颜色的喔',
            bgColor: '#f50'
          }
        }
      }
    },
    required: ['name']
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }

  valueChange(res: SFValueChange): void {
    this.msg.info(JSON.stringify(res));
  }
}
```
