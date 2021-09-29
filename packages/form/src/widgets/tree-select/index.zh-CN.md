---
title: tree-select
subtitle: 树选择
type: Widgets
---

树型选择控件。

**注意：**

- `tree-select` 的数据源必须包含 `title`、`key` 键名

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
