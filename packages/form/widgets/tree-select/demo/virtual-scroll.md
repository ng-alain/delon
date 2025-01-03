---
title:
  zh-CN: 虚拟滚动
  en-US: Virtual Scroll
order: 3
---

## zh-CN

设定 `virtualHeight` 开启虚拟滚动。

## en-US

Set `virtualHeight` to enable virtual scroll.

```ts
import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';
import type { SFTreeSelectWidgetSchema } from '@delon/form/widgets/tree-select';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';

@Component({
  selector: 'app-demo',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)" /> `,
  imports: [DelonFormModule]
})
export class DemoComponent {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      status1: {
        type: 'string',
        title: '虚拟滚动',
        enum: this.dig(),
        ui: {
          widget: 'tree-select',
          virtualHeight: '300px'
        } as SFTreeSelectWidgetSchema
      }
    }
  };

  private dig(path: string = '0', level: number = 3): NzTreeNodeOptions[] {
    const list: NzTreeNodeOptions[] = [];
    for (let i = 0; i < 10; i += 1) {
      const key = `${path}-${i}`;
      const treeNode: NzTreeNodeOptions = {
        title: key,
        key,
        expanded: true,
        children: [],
        isLeaf: false
      };

      if (level > 0) {
        treeNode.children = this.dig(key, level - 1);
      } else {
        treeNode.isLeaf = true;
      }

      list.push(treeNode);
    }
    return list;
  }

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
