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

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[enum]` | 数据源 | `SFSchemaEnumType[]` | -
`[readOnly]` | 禁用状态  | `boolean` | -

### ui 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[asyncData]` | 异步数据源 | `() => Observable<SFSchemaEnumType[]>` | -
`[size]` | 大小，等同 `nzSize` | `string` | `default`
`[placeholder]` | 在文字框中显示提示讯息 | `string` | -
`[allowClear]` | 支持清除 | `boolean` | `false`
`[dropdownMatchSelectWidth]` | 下拉菜单和选择器同宽 | `boolean` | `true`
`[dropdownStyle]` | 下拉菜单的 style 属性 | `object` | -
`[multiple]` | 支持多选（当设置 `checkable` 时自动变为true） | `boolean` | `false`
`[checkable]` | 节点前添加 Checkbox 复选框 | `boolean` | `false`
`[showExpand]` | 节点前添加展开图标 | `boolean` | `true`
`[showLine]` | 节点前添加展开图标 | `boolean` | `false`
`[defaultExpandAll]` | 默认展开所有树节点 | `boolean` | `false`
`[displayWith]` | 如何在输入框显示所选的节点值的方法 | `(node: NzTreeNode) => string` | `(node: NzTreeNode) => node.title`
`[expandChange]` | 点击展开树节点图标调用 | `(e: NzFormatEmitEvent) => Observable<SFSchemaEnum[]>` | -

> 异步数据务必先指定初始化数据（使用 `enum`、`asyncData` 选其一），否则无法触发 `expandChange`。
