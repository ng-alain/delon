---
order: 3
title: 右击菜单
type: Service
---

快速构建右击菜单功能。

## API

### open

打开菜单。

| 参数             | 说明         | 类型               | 默认值 |
|------------------|------------|--------------------|--------|
| `[event]`        | 鼠标事件     | `MouseEvent`       | -      |
| `[ref]`          | 菜单目标组件 | `ContextMenuType`  | -      |
| `[containerRef]` | 容器对象     | `ViewContainerRef` | -      |
| `[options]`      | 额外[参数](https://material.angular.io/cdk/overlay/api#OverlayConfig)定义 | `OverlayConfig`    | -      |

### close

关闭菜单。
