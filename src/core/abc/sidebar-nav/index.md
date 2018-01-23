---
title: sidebar-nav
subtitle: 主菜单
order: 170
cols: 1
module: AdSidebarNavModule
---

ng-alain 左边主菜单，依赖于 `@delon/theme`。

组件的数据来自 `MenuService`，因此变更它也会同步变更组件。

## 关于隐藏

若希望永远不显示菜单，可以在菜单设置 `hide: true`。

## API

### sidebar-nav

参数 | 说明 | 类型 | 默认值
----|------|-----|------
autoCloseUnderPad | 小于Pad宽度时路由切换后自动关闭侧边栏 | `boolean` | `true`
