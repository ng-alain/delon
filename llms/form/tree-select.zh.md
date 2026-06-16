---
title: tree-select
subtitle: 树选择
type: Non-built-in widgets
---

树型选择控件。

**注意：**

- `tree-select` 的数据源必须包含 `title`、`key` 键名

## 如何使用

非内置模块，需要额外在 [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9) 注册 `withTreeSelectWidget`。

## API

### schema 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[enum]` | 数据源 | `SFSchemaEnumType[]` | - |
| `[readOnly]` | 禁用状态 | `boolean` | - |

### ui 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[asyncData]` | 异步数据源 | `() => Observable<SFSchemaEnumType[]>` | - |
| `[size]` | 大小，等同 `nzSize` | `string` | `default` |
| `[placeholder]` | 在文字框中显示提示讯息 | `string` | - |
| `[notFoundContent]` | 当下拉列表为空时显示的内容 | `string` | - |
| `[allowClear]` | 支持清除 | `boolean` | `false` |
| `[clearValue]` | 清空时默认值 | `any` | `undefined` |
| `[dropdownMatchSelectWidth]` | 下拉菜单和选择器同宽 | `boolean` | `true` |
| `[dropdownStyle]` | 下拉菜单的 style 属性 | `object` | - |
| `[dropdownClassName]` | 下拉菜单的 className 属性 | `string` | - |
| `[multiple]` | 支持多选（当设置 `checkable` 时自动变为true） | `boolean` | `false` |
| `[hideUnMatched]` | 搜索隐藏未匹配的节点 | `boolean` | `false` |
| `[checkable]` | 节点前添加 Checkbox 复选框 | `boolean` | `false` |
| `[checkStrictly]` | checkable 状态下节点选择完全受控（父子节点选中状态不再关联） | `boolean` | `false` |
| `[showIcon]` | 是否展示 TreeNode title 前的图标，没有默认样式 | `boolean` | `false` |
| `[showExpand]` | 节点前添加展开图标 | `boolean` | `true` |
| `[showLine]` | 节点前添加展开图标 | `boolean` | `false` |
| `[defaultExpandAll]` | 默认展开所有树节点 | `boolean` | `false` |
| `[displayWith]` | 如何在输入框显示所选的节点值的方法 | `(node: NzTreeNode) => string | undefined` | `(node: NzTreeNode) => node.title` |
| `[expandedKeys]` | 默认展开指定的树节点 | `string[]` | - |
| `[maxTagCount]` | 最多显示多少个 tag | `number` | - |
| `[maxTagPlaceholder]` | 隐藏 tag 时显示的内容 | `TemplateRef<{ $implicit: NzTreeNode[] }>` | - |
| `[treeTemplate]` | 自定义节点 | `TemplateRef<{ $implicit: NzTreeNode; origin: NzTreeNodeOptions }>` | - |
| `[expandChange]` | 点击展开树节点图标调用 | `(e: NzFormatEmitEvent) => Observable<SFSchemaEnum[]>` | - |
| `[virtualHeight]` | 虚拟滚动的总高度 | `string` | `-` |
| `[virtualItemSize]` | 虚拟滚动时每一列的高度，与 [cdk itemSize](https://material.angular.io/cdk/scrolling/api) 相同 | `number` | `28` |
| `[virtualMaxBufferPx]` | 缓冲区最大像素高度，与 [cdk maxBufferPx](https://material.angular.io/cdk/scrolling/api) 相同 | `number` | `500` |
| `[virtualMinBufferPx]` | 缓冲区最小像素高度，低于该值时将加载新结构，与 [cdk minBufferPx](https://material.angular.io/cdk/scrolling/api) 相同 | `number` | `28` |

> 异步数据务必先指定初始化数据（使用 `enum`、`asyncData` 选其一），否则无法触发 `expandChange`。

---

## 代码示例

### 基础样例

最简单的用法。
> 多选：重置时无法刷新默认值 [#2085](https://github.com/NG-ZORRO/ng-zorro-antd/issues/2085)

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

### 自定义图标

可以针对不同节点采用样式覆盖的方式定制图标。

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

### 虚拟滚动

设定 `virtualHeight` 开启虚拟滚动。

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
