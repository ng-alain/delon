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

| Property     | Description | Type                 | Default |
|--------------|-------------|----------------------|---------|
| `[enum]`     | Data source | `SFSchemaEnumType[]` | -       |
| `[readOnly]` | Read only   | `boolean`            | -       |

### ui

| Property                     | Description                                                                 | Type                                                   | Default                            |
|------------------------------|-----------------------------------------------------------------------------|--------------------------------------------------------|------------------------------------|
| `[asyncData]`                | Asynchronous data source                                                    | `() => Observable<SFSchemaEnumType[]>`                 | -                                  |
| `[size]`                     | Size, equals to `nzSize`                                                    | `string`                                               | `default`                          |
| `[placeholder]`              | Placeholder                                                                 | `string`                                               | -                                  |
| `[notFoundContent]`          | Text to display when a column is empty                                      | `string`                                               | -                                  |
| `[allowClear]`               | Whether show clear button                                                   | `boolean`                                              | `false`                            |
| `[dropdownMatchSelectWidth]` | Determine whether the dropdown menu and the select input are the same width | `boolean`                                              | `true`                             |
| `[dropdownStyle]`            | Set the style of the dropdown menu                                          | `object`                                               | -                                  |
| `[multiple]`                 | Support multiple select（set to true automatically when `checkable` is set）  | `boolean`                                              | `false`                            |
| `[checkable]`                | Whether to show checkbox on the treeNodes                                   | `boolean`                                              | `false`                            |
| `[showExpand]`               | Show a expand icon before the treeNodes                                     | `boolean`                                              | `true`                             |
| `[showLine]`                 | Shows a connecting line                                                     | `boolean`                                              | `false`                            |
| `[defaultExpandAll]`         | Whether to expand all treeNodes by default                                  | `boolean`                                              | `false`                            |
| `[displayWith]`              | How to display the selected node value in input box                         | `(node: NzTreeNode) => string | undefined`             | `(node: NzTreeNode) => node.title` |
| `[expandChange]`             | Callback function for when a treeNode is expanded or collapsed              | `(e: NzFormatEmitEvent) => Observable<SFSchemaEnum[]>` | -                                  |

> Asynchronous data must set initial data (Using either `enum` or `asyncData`), otherwise, `expandChange` cannot be triggered.
