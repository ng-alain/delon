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
import { CascaderWidget, SFSchema } from '@delon/form';
import { CascaderOption, NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-demo',
  template: `<sf [schema]="schema" (formSubmit)="submit($event)"></sf>`
})
export class DemoComponent {
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
                    isLeaf: true,
                  },
                  {
                    value: 110105,
                    label: '朝阳区',
                    parent: 110100,
                    isLeaf: true,
                  },
                ],
              },
            ],
          },
        ],
        ui: 'cascader',
        default: [110000, 110100, 110105],
      },
      async: {
        type: 'number',
        title: 'RealTime',
        ui: {
          widget: 'cascader',
          asyncData: ((
            node: CascaderOption,
            index: number,
            me: CascaderWidget,
          ) => {
            return new Promise(resolve => {
              setTimeout(() => {
                (node as any).children = [
                  { value: 110000, label: '北京', parent: 0 },
                  { value: 110100, label: '北京市', parent: 110000 },
                  { value: 110101, label: '东城区', parent: 110100 },
                  { value: 110105, label: '朝阳区', parent: 110100 },
                  { value: 310000, label: '上海', parent: 0 },
                  { value: 310100, label: '上海市', parent: 310000 },
                  { value: 310101, label: '黄浦区', parent: 310100 },
                  { value: 310104, label: '徐汇区', parent: 310100 },
                ].filter((w: any) => {
                  w.isLeaf = index === 1;
                  return w.parent === (node.value || 0);
                });
                resolve();
                me.detectChanges(true);
              }, 300);
            });
          }) as any,
        },
        default: [110000, 110100, 110105],
      },
    },
  };
  constructor(public msg: NzMessageService) {}
  submit(value: any) {
    this.msg.success(JSON.stringify(value));
  }
}
```
