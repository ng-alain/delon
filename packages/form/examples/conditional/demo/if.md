---
title:
  zh-CN: If样例
  en-US: If Usage
order: 1
---

## zh-CN

支持 JSON Schema 的 [if-then-else](https://ajv.js.org/json-schema.html#if-then-else) 用法。

## en-US

[if-then-else](https://ajv.js.org/json-schema.html#if-then-else) usage of JSON Schema is supported.

```ts
import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)" /> `,
  imports: [DelonFormModule]
})
export class DemoComponent {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      login_type: {
        type: 'string',
        title: '登录方式',
        enum: [
          { label: '手机', value: 'mobile' },
          { label: '账密', value: 'account' }
        ],
        default: 'mobile',
        ui: {
          widget: 'radio',
          styleType: 'button'
        }
      },
      mobile: {
        type: 'string'
      },
      code: {
        type: 'number'
      },
      name: {
        type: 'string'
      },
      pwd: {
        type: 'string',
        ui: {
          type: 'password'
        }
      }
    },
    required: ['login_type'],
    if: {
      properties: { login_type: { enum: ['mobile'] } }
    },
    then: {
      required: ['mobile', 'code']
    },
    else: {
      required: ['name', 'pwd']
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
