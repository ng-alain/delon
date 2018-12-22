---
type: Layout
title: full-content
subtitle: Full Screen Workspace
cols: 1
module: FullContentModule
---

Often used for tables with scroll bars, a simple [demo](https://ng-alain.github.io/ng-alain/#/delon/simple-table)。

## API

Property         | Description                                           | Type      | Default
-----------------|-------------------------------------------------------|-----------|--------
`[(fullscreen)]` | Whether full screen (not including top, sidebar area) | `boolean` | -
`[hideTitle]`    | Hide title when `fullscreen` is true                  | `boolean` | `true`
`[padding]`      | Padding of work area                                  | `number`  | `24`
### Control

There are three ways:

- Use `fullscreen` property, it support two-way binding
- Use `[full-toggle]` directive
- Use `FullContentService.toggle()` service
