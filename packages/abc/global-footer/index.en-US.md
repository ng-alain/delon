---
type: Layout
title: global-footer
subtitle: Global footer
cols: 1
module: GlobalFooterModule
---

The footer is part of the global navigation as a supplement to the top navigation.

## API

### global-footer

| Property | Description | Type | Default |
|----|----|----|-----|
| `[links]` | Link data | `GlobalFooterLink` | - |
| `[copyright]` | Copyright Information | `TemplateRef` | - |

### global-footer-item

| Property | Description | Type | Default |
|----|----|----|-----|
| `ng-content` | Title | `string` | - |
| `[href]` | Routing link | `string` | - |
| `[blankTarget]` | Whether to open a new window | `boolean` | `false` |

### GlobalFooterLink

| Property | Description | Type | Default |
|----|----|----|-----|
| `[title]` | Title | `string` | - |
| `[href]` | Routing link | `string` | - |
| `[blankTarget]` | Whether to open a new window | `boolean` | `false` |
