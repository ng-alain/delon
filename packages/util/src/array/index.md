---
title: array
subtitle: 数组
type: Type
---

`ArrayService` 用于数组与树之间的转化、访问等，一般配合 `nz-tree` 一起使用。

## treeToArr

将树结构转换成数组结构。

**options**

名称 | 类型 | 默认值 | 描述
---- | --- | ---- | ----
`deepMapName` | `string` | `deep` | 深度项名
`parentMapName` | `string` | `parent` | 扁平后数组的父数据项名
`childrenMapName` | `string` | `children` | 源数据子项名
`clearChildren` | `boolean` | `true` | 是否移除 `children` 节点
`cb` | `(item: any, parent: any, deep: number) => void` | - | 转换成数组结构时回调

## arrToTree

数组转换成树数据。

**options**

名称 | 类型 | 默认值 | 描述
---- | --- | ---- | ----
`idMapName` | `string` | `id` | 编号项名
`parentIdMapName` | `string` | `parent_id` | 父编号项名
`childrenMapName` | `string` | `children` | 子项名
`cb` | `(item: any) => void` | - | 转换成树数据时回调

## arrToTreeNode

数组转换成 `nz-tree` 数据源，通过 `options` 转化项名，也可以使用 `options.cb` 更高级决定数据项。

**options**

名称 | 类型 | 默认值 | 描述
---- | --- | ---- | ----
`idMapName` | `string` | `id` | 编号项名
`parentIdMapName` | `string` | `parent_id` | 父编号项名
`titleMapName` | `string` | `title` | 标题项名
`isLeafMapName` | `string` | `isLeaf` | 设置为叶子节点项名，若数据源不存在时自动根据 `children` 值决定是否为叶子节点
`checkedMapname` | `string` | `checked` | 节点 Checkbox 是否选中项名
`selectedMapname` | `string` | `selected` | 节点本身是否选中项名
`expandedMapname` | `string` | `expanded` | 节点是否展开(叶子节点无效)项名
`disabledMapname` | `string` | `disabled` | 设置是否禁用节点(不可进行任何操作)项名
`cb` | `(item: any, parent: any, deep: number) => void` | - | 转换成数组结构时回调

## visitTree

递归访问整个树。

**options**

名称 | 类型 | 默认值 | 描述
---- | --- | ---- | ----
`childrenMapName` | `string` | `children` | 子项名

## getKeysByTreeNode

获取所有已经选中的 `key` 值。

**options**

名称 | 类型 | 默认值 | 描述
---- | --- | ---- | ----
`includeHalfChecked` | `boolean` | `true` | 是否包含半选状态的值
`keyMapName` | `string` | - | 是否重新指定 `key` 键名，若不指定表示使用 `NzTreeNode.key` 值
`cb` | `(item: NzTreeNode, parent: NzTreeNode, deep: number) => any` | - | 回调，返回一个值 `key` 值，优先级高于其他
