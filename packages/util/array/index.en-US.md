---
title: array
subtitle: Array&Tree,flat,groupBy,uniq
type: Tools
---

## ArrayService

Used for conversion and access between arrays and trees. It is generally used with `nz-tree`.

> You can override [ArrayService] to set the mapping name through [Global Configuration](/docs/global-config).

### treeToArr

Convert tree structure to array structure.

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `deepMapName` | Deep map name | `string` | `deep` |
| `parentMapName` | Parent item map name of flat array | `string` | `parent` |
| `childrenMapName` | Source data children map name | `string` | `children` |
| `clearChildren` | Whether remove `children` item | `boolean` | `true` |
| `cb` | Callback event | `(item: any, parent: any, deep: number) => void` | - |

### arrToTree

Convert array structure to tree structure.

> If `parent_id` is a string, the root value **Make Sure** is an empty string.

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `idMapName` | Id map name | `string` | `id` |
| `parentIdMapName` | Parent id map name | `string` | `parent_id` |
| `rootParentIdValue` | Root parent id value, the most suitable root parent id value will be automatically calculated by default | `any` | - |
| `childrenMapName` | Children map name | `string` | `children` |
| `cb` | Callback event | `(item: any) => void` | - |

### arrToTreeNode

Convert array structure to `nz-tree` data structure.

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `idMapName` | Id map name | `string` | `id` |
| `parentIdMapName` | Parent id map name | `string` | `parent_id` |
| `titleMapName` | Title map name | `string` | `title` |
| `isLeafMapName` | isLeaf map name, if value does not exist, include `children` value to determine whether it's a leaf node | `string` | `isLeaf` |
| `checkedMapname` | Checked map name | `string` | `checked` |
| `selectedMapname` | Selected map name | `string` | `selected` |
| `expandedMapname` | Expanded map name (Except leaf nodes) | `string` | `expanded` |
| `disabledMapname` | Disabled map name | `string` | `disabled` |
| `cb` | Callback event | `(item: any, parent: any, deep: number) => void` | - |

### visitTree

Recursive access tree.

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `childrenMapName` | Children map name | `string` | `children` |

### findTree

Return the value of the first tree value in the tree where predicate is true, and `undefined` otherwise.

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `childrenMapName` | Children map name | `string` | `children` |

### getKeysByTreeNode

Get all the selected `key` values.

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `includeHalfChecked` | Whether include half-checked | `boolean` | `true` |
| `keyMapName` | Whether re-specify `key` name | `string` | - |
| `cb` | Callback event, return `key` value | `(item: NzTreeNode, parent: NzTreeNode, deep: number) => any` | - |

### flat

Recursively flattens array.

```ts
srv.flat([1, [2, 3, [4, 5, [6]]]]) => [1,2,3,4,5,6]
srv.flat([1, [2, 3, [4, 5, [6]]]], 1) => [1,2,3,[4, 5, [6]]]
```

### groupBy

Group the array.

```ts
srv.groupBy([6.1, 4.2, 6.3], Math.floor) => {"4":[4.2],"6":[6.1,6.3]}
srv.groupBy(['one', 'two', 'three'], v => v.length) => {"3":["one","two"],"5":["three"]}
```

### uniq

Creates a duplicate-free version of an array.

```ts
uniq([1, 2, 2, 3, 1]) => [1,2,3]
uniq([{ a: 1 }, { a: 1 }, { a: 2 }], 'a') => [{"a":1},{"a":2}]
uniq([{ a: 1 }, { a: 1 }, { a: 2 }], i => (i.a === 1 ? 'a' : 'b')) => [{"a":1},{"a":2}]
```

