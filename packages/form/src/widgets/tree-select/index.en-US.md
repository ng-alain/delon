---
title: tree-select
subtitle: Tree Select
type: Widgets
---

Tree select widget.

**Note:**

- Data source of `tree-select` must have keys of `title`、`key`

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
