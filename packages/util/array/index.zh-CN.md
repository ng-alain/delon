---
title: array
subtitle: 数组,树,扁平,分组,去重
type: Tools
---

## ArrayService

`ArrayService` 用于数组与树之间的转化、访问等，一般配合 `nz-tree` 一起使用。

> 可以通过[全局配置](/docs/global-config)覆盖 `ArrayService` 设置映射名称。

### treeToArr

将树结构转换成数组结构。

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `deepMapName` | 深度项名 | `string` | `deep` |
| `parentMapName` | 扁平后数组的父数据项名 | `string` | `parent` |
| `childrenMapName` | 源数据子项名 | `string` | `children` |
| `clearChildren` | 是否移除 `children` 节点 | `boolean` | `true` |
| `cb` | 转换成数组结构时回调 | `(item: any, parent: any, deep: number) => void` | - |

### arrToTree

数组转换成树数据。

> 若 `parent_id` 为字符串，则根值**务必**为空字符串。

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `idMapName` | 编号项名 | `string` | `id` |
| `parentIdMapName` | 父编号项名 | `string` | `parent_id` |
| `rootParentIdValue` | 根父编号值，默认会自动计算得到最合适的根父编号值 | `any` | - |
| `childrenMapName` | 子项名 | `string` | `children` |
| `cb` | 转换成树数据时回调 | `(item: any) => void` | - |

### arrToTreeNode

数组转换成 `nz-tree` 数据源，通过 `options` 转化项名，也可以使用 `options.cb` 更高级决定数据项。

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `idMapName` | 编号项名 | `string` | `id` |
| `parentIdMapName` | 父编号项名 | `string` | `parent_id` |
| `titleMapName` | 标题项名 | `string` | `title` |
| `isLeafMapName` | 是否叶节点项名，若数据源不存在时自动根据 `children` 值决定是否为叶子节点 | `string` | `isLeaf` |
| `checkedMapname` | 节点 Checkbox 是否选中项名 | `string` | `checked` |
| `selectedMapname` | 节点本身是否选中项名 | `string` | `selected` |
| `expandedMapname` | 节点是否展开(叶子节点无效)项名 | `string` | `expanded` |
| `disabledMapname` | 设置是否禁用节点(不可进行任何操作)项名 | `string` | `disabled` |
| `cb` | 转换成数组结构时回调 | `(item: any, parent: any, deep: number) => void` | - |

### visitTree

递归访问整个树。

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `childrenMapName` | 子项名 | `string` | `children` |

### findTree

根据条件返回树的第一个值，否则返回 `undefined`。

| 参数 | 说明 | 类型 | 默认值 |
|----------|-------------|------|---------|
| `childrenMapName` | 子项名 | `string` | `children` |

### getKeysByTreeNode

获取所有已经选中的 `key` 值。

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `includeHalfChecked` | 是否包含半选状态的值 | `boolean` | `true` |
| `keyMapName` | 是否重新指定 `key` 键名，若不指定表示使用 `NzTreeNode.key` 值 | `string` | - |
| `cb` | 回调，返回一个值 `key` 值，优先级高于其他 | `(item: NzTreeNode, parent: NzTreeNode, deep: number) => any` | - |

### flat

递归扁平数组。

```ts
srv.flat([1, [2, 3, [4, 5, [6]]]]) => [1,2,3,4,5,6]
srv.flat([1, [2, 3, [4, 5, [6]]]], 1) => [1,2,3,[4, 5, [6]]]
```

### groupBy

对数组进行分组。

```ts
srv.groupBy([6.1, 4.2, 6.3], Math.floor) => {"4":[4.2],"6":[6.1,6.3]}
srv.groupBy(['one', 'two', 'three'], v => v.length) => {"3":["one","two"],"5":["three"]}
```

### uniq

创建去重后的数组。

```ts
uniq([1, 2, 2, 3, 1]) => [1,2,3]
uniq([{ a: 1 }, { a: 1 }, { a: 2 }], 'a') => [{"a":1},{"a":2}]
uniq([{ a: 1 }, { a: 1 }, { a: 2 }], i => (i.a === 1 ? 'a' : 'b')) => [{"a":1},{"a":2}]
```
