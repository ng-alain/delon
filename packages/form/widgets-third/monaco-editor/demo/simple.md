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
import type { MonacoEditorWidgetSchema } from '@delon/form/widgets-third/monaco-editor';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: `<sf [schema]="schema" (formSubmit)="submit($event)" />`
})
export class DemoComponent {
  schema: SFSchema = {
    properties: {
      json: {
        type: 'string',
        title: 'JSON',
        default: `{"string": "abc","number": 1 }`,
        ui: {
          widget: 'monaco-editor',
          options: { language: 'json' }
        } as MonacoEditorWidgetSchema
      }
    }
  };

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
