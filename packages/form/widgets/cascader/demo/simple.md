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
import type { SFCascaderWidgetSchema } from '@delon/form/widgets/cascader';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
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
      static: {
        type: 'number',
        title: 'Static',
        enum: [
          {
            value: 110000,
            label: '北京',
            parent: 0,
            children: [
              {
                value: 110100,
                label: '北京市',
                parent: 110000,
                children: [
                  {
                    value: 110101,
                    label: '东城区',
                    parent: 110100,
                    isLeaf: true
                  },
                  {
                    value: 110105,
                    label: '朝阳区',
                    parent: 110100,
                    isLeaf: true
                  }
                ]
              }
            ]
          }
        ],
        ui: 'cascader',
        default: [110000, 110100, 110105]
      },
      async: {
        type: 'number',
        title: 'RealTime',
        ui: {
          widget: 'cascader',
          multiple: true,
          asyncData: (node, index) => {
            return new Promise(resolve => {
              setTimeout(() => {
                (node as NzSafeAny).children = [
                  { value: 110000, label: '北京', parent: 0 },
                  { value: 110100, label: '北京市', parent: 110000 },
                  { value: 110101, label: '东城区', parent: 110100 },
                  { value: 110105, label: '朝阳区', parent: 110100 },
                  { value: 310000, label: '上海', parent: 0 },
                  { value: 310100, label: '上海市', parent: 310000 },
                  { value: 310101, label: '黄浦区', parent: 310100 },
                  { value: 310104, label: '徐汇区', parent: 310100 }
                ].filter((w: NzSafeAny) => {
                  w.isLeaf = index === 1;
                  return w.parent === (node.value || 0);
                });
                resolve();
              }, 300);
            });
          }
        } as SFCascaderWidgetSchema,
        default: [110000, 110100, 110105]
      }
    }
  };

  submit(value: Record<string, unknown>): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
