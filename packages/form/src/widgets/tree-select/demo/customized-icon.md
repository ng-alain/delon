---
order: 4
debug: true
title:
  zh-CN: 自定义图标
  en-US: Customize Icon
---

## zh-CN

可以针对不同节点采用样式覆盖的方式定制图标。

## en-US

You can customize icons for different nodes.

```ts
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { SFSchema, SFTreeSelectWidgetSchema } from '@delon/form';
import { NzTreeNode } from 'ng-zorro-antd/tree';

@Component({
  selector: 'app-demo',
  template: `
    <sf *ngIf="schema" [schema]="schema"></sf>
    <ng-template #customTpl let-node>
      <span class="ant-tree-node-content-wrapper" [class.ant-tree-node-selected]="node.isSelected">
        <span> <i nz-icon [nzType]="node.isExpanded ? 'folder-open' : 'folder'"></i> {{ node.title }} </span>
      </span>
    </ng-template>
  `,
})
export class DemoComponent implements OnInit {
  @ViewChild('customTpl', { static: true }) private customTpl!: TemplateRef<{ $implicit: NzTreeNode }>;

  schema: SFSchema;

  ngOnInit(): void {
    this.schema = {
      properties: {
        status: {
          type: 'string',
          title: '基本',
          enum: [
            {
              title: 'parent 1',
              key: '100',
              expanded: true,
              icon: 'smile',
              children: [
                { title: 'leaf 1-0-0', key: '10010', icon: 'meh', isLeaf: true },
                { title: 'leaf 1-0-1', key: '10011', icon: 'frown', isLeaf: true },
              ],
            },
          ],
          default: '10010',
          ui: {
            widget: 'tree-select',
            treeTemplate: this.customTpl,
          } as SFTreeSelectWidgetSchema,
        },
      },
    };
  }
}
```