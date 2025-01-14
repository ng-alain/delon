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

import { DelonFormModule, SFSchema } from '@delon/form';
import type { SFUploadWidgetSchema } from '@delon/form/widgets/upload';
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
      file: {
        type: 'string',
        title: '单个文件',
        enum: [
          {
            uid: -1,
            name: 'xxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            response: {
              resource_id: 1
            }
          }
        ],
        ui: {
          widget: 'upload',
          action: '/upload',
          resReName: 'resource_id',
          urlReName: 'url'
        } as SFUploadWidgetSchema
      },
      mulit: {
        type: 'string',
        title: '多个文件',
        ui: {
          widget: 'upload',
          action: '/upload',
          resReName: 'resource_id',
          urlReName: 'url',
          multiple: true
        } as SFUploadWidgetSchema
      },
      // 拖动模式
      drag: {
        type: 'string',
        title: 'Drag',
        ui: {
          widget: 'upload',
          action: '/upload',
          resReName: 'resource_id',
          urlReName: 'url',
          type: 'drag'
        } as SFUploadWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
