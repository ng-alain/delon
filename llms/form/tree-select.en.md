---
title: tree-select
subtitle: Tree Select
type: Non-built-in widgets
---

Tree select widget.

**Note:**

- Data source of `tree-select` must have keys of `title`、`key`

## How to use

Non-built-in modules need to additionally register `withTreeSelectWidget` in [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9).

## API

### schema

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[enum]` | Data source | `SFSchemaEnumType[]` | - |
| `[readOnly]` | Read only | `boolean` | - |

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[asyncData]` | Asynchronous data source | `() => Observable<SFSchemaEnumType[]>` | - |
| `[size]` | Size, equals to `nzSize` | `string` | `default` |
| `[placeholder]` | Placeholder | `string` | - |
| `[notFoundContent]` | Text to display when a column is empty | `string` | - |
| `[allowClear]` | Whether show clear button | `boolean` | `false` |
| `[clearValue]` | Default value when cleared | `any` | `undefined` |
| `[dropdownMatchSelectWidth]` | Determine whether the dropdown menu and the select input are the same width | `boolean` | `true` |
| `[dropdownStyle]` | Set the style of the dropdown menu | `object` | - |
| `[dropdownClassName]` | Set className of the dropdown menu | `string` | - |
| `[multiple]` | Support multiple select（set to true automatically when `checkable` is set） | `boolean` | `false` |
| `[hideUnMatched]` | Hide unmatched nodes | `boolean` | `false` |
| `[checkable]` | Whether to show checkbox on the treeNodes | `boolean` | `false` |
| `[checkStrictly]` | Fully control node itself when it's checkable status(No relationship about check status between parent and child nodes) | `boolean` | `false` |
| `[showIcon]` | Whether to show icon in front of TreeNode title, there is no default style | `boolean` | `false` |
| `[showExpand]` | Show a expand icon before the treeNodes | `boolean` | `true` |
| `[showLine]` | Shows a connecting line | `boolean` | `false` |
| `[defaultExpandAll]` | Whether to expand all treeNodes by default | `boolean` | `false` |
| `[displayWith]` | How to display the selected node value in input box | `(node: NzTreeNode) => string | undefined` | `(node: NzTreeNode) => node.title` |
| `[expandedKeys]` | Expand specific tree nodes by default | `string[]` | - |
| `[maxTagCount]` | Maximun number of tag | `number` | - |
| `[maxTagPlaceholder]` | Placeholder for not showing tags | `TemplateRef<{ $implicit: NzTreeNode[] }>` | - |
| `[treeTemplate]` | Custom Nodes | `TemplateRef<{ $implicit: NzTreeNode; origin: NzTreeNodeOptions }>` | - |
| `[expandChange]` | Callback function for when a treeNode is expanded or collapsed | `(e: NzFormatEmitEvent) => Observable<SFSchemaEnum[]>` | - |
| `[virtualHeight]` | The height of virtual scroll | `string` | `-` |
| `[virtualItemSize]` | The size of the items in the list, same as [cdk itemSize](https://material.angular.io/cdk/scrolling/api) | `number` | `28` |
| `[virtualMaxBufferPx]` | The number of pixels worth of buffer to render for when rendering new items, same as [cdk maxBufferPx](https://material.angular.io/cdk/scrolling/api) | `number` | `500` |
| `[virtualMinBufferPx]` | The minimum amount of buffer rendered beyond the viewport (in pixels),same as [cdk minBufferPx](https://material.angular.io/cdk/scrolling/api) | `number` | `28` |

> Asynchronous data must set initial data (Using either `enum` or `asyncData`), otherwise, `expandChange` cannot be triggered.

---

## Examples

### Basic Usage

Simplest of usage.

```typescript
import { Component, inject } from '@angular/core';
import { of, delay } from 'rxjs';

import { DelonFormModule, SFSchema } from '@delon/form';
import type { SFTreeSelectWidgetSchema } from '@delon/form/widgets/tree-select';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-tree-select-simple',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)" /> `,
  imports: [DelonFormModule]
})
export class FormTreeSelectSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      status1: {
        type: 'string',
        title: '基本',
        enum: [
          { title: '待支付', key: 'WAIT_BUYER_PAY' },
          { title: '已支付', key: 'TRADE_SUCCESS' },
          { title: '交易完成', key: 'TRADE_FINISHED' }
        ],
        default: 'WAIT_BUYER_PAY',
        ui: {
          widget: 'tree-select'
        } as SFTreeSelectWidgetSchema
      },
      status2: {
        type: 'string',
        title: '多选',
        enum: [
          { title: '待支付', key: 'WAIT_BUYER_PAY' },
          { title: '已支付', key: 'TRADE_SUCCESS' },
          { title: '交易完成', key: 'TRADE_FINISHED' }
        ],
        default: ['WAIT_BUYER_PAY', 'TRADE_SUCCESS'],
        ui: {
          widget: 'tree-select',
          multiple: true
        } as SFTreeSelectWidgetSchema
      },
      status3: {
        type: 'string',
        title: '可勾选',
        default: ['WAIT_BUYER_PAY', 'TRADE_FINISHED'],
        ui: {
          widget: 'tree-select',
          checkable: true,
          asyncData: () =>
            of([
              { title: '待支付', key: 'WAIT_BUYER_PAY' },
              { title: '已支付', key: 'TRADE_SUCCESS' },
              { title: '交易完成', key: 'TRADE_FINISHED' }
            ]).pipe(delay(10))
        } as SFTreeSelectWidgetSchema
      },
      // 异步数据
      async: {
        type: 'string',
        title: 'Async',
        enum: [
          { title: '待支付', key: 'WAIT_BUYER_PAY' },
          { title: '已支付', key: 'TRADE_SUCCESS' },
          { title: '交易完成', key: 'TRADE_FINISHED' }
        ],
        ui: {
          widget: 'tree-select',
          expandChange: () => {
            return of([
              { title: '待支付', key: 'WAIT_BUYER_PAY' },
              { title: '已支付', key: 'TRADE_SUCCESS' },
              { title: '交易完成', key: 'TRADE_FINISHED' }
            ]).pipe(delay(10));
          }
        } as SFTreeSelectWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```

### Customize Icon

You can customize icons for different nodes.

```typescript
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';
import type { SFTreeSelectWidgetSchema } from '@delon/form/widgets/tree-select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTreeNode } from 'ng-zorro-antd/tree';

@Component({
  selector: 'form-tree-select-customized-icon',
  template: `
    @if (schema) {
      <sf [schema]="schema" />
    }
    <ng-template #customTpl let-node>
      <span class="ant-tree-node-content-wrapper" [class.ant-tree-node-selected]="node.isSelected">
        <span> <nz-icon [nzType]="node.isExpanded ? 'folder-open' : 'folder'"/> {{ node.title }} </span>
      </span>
    </ng-template>
  `,
  imports: [DelonFormModule, NzIconModule]
})
export class FormTreeSelectCustomizedIcon implements OnInit {
  @ViewChild('customTpl', { static: true }) private customTpl!: TemplateRef<{ $implicit: NzTreeNode }>;

  schema?: SFSchema;

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
                { title: 'leaf 1-0-1', key: '10011', icon: 'frown', isLeaf: true }
              ]
            }
          ],
          default: '10010',
          ui: {
            widget: 'tree-select',
            treeTemplate: this.customTpl
          } as SFTreeSelectWidgetSchema
        }
      }
    };
  }
}
```

### Virtual Scroll

Set `virtualHeight` to enable virtual scroll.

```typescript
import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';
import type { SFTreeSelectWidgetSchema } from '@delon/form/widgets/tree-select';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';

@Component({
  selector: 'form-tree-select-virtual-scroll',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)" /> `,
  imports: [DelonFormModule]
})
export class FormTreeSelectVirtualScroll {
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
