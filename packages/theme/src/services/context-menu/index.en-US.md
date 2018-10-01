---
order: 3
title: Context Menu Service
type: Service
---

Quickly build a context menu feature.

## API

### open

Open a context menu.

| Property         | Description                 | Type               | Default |
| ---------------- | --------------------------- | ------------------ | ------- |
| `[event]`        | event of the target element | `MouseEvent`       | -       |
| `[ref]`          | menu container              | `ContextMenuType`  | -       |
| `[containerRef]` | area container              | `ViewContainerRef` | -       |
| `[options]`      | Additional [parameters](https://material.angular.io/cdk/overlay/api#OverlayConfig)   | `OverlayConfig`    | -       |

### close

Close current context menu.
