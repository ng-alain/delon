---
type: Business
title: sidebar-nav
subtitle: 主菜单
cols: 1
module: SidebarNavModule
---

NG-ALAIN 左边主菜单，依赖于 `@delon/theme`。

组件的数据来自 `MenuService`（其结构为 [Menu](/theme/menu#Menu)）， `MenuService` 的操作会自动同步至该组件。

## 常见问题

### 为什么会有两个快捷菜单

快捷菜单生成规则统一在 `0` 索引下查找，并按以下顺序来获取：

1. 【推荐】 children 存在 `shortcutRoot: true` 则最优先
2. 否则查找带有【dashboard】字样链接，若存在则在此菜单的下方创建快捷入口
3. 否则放在0节点位置

因此，建议在菜单数据的 `0` 索引下保持一个有效的 `shortcutRoot: true` 数据。

### 关于隐藏

**隐藏主菜单项**

表示永远不显示菜单，可以在菜单设置 `hide: true`。

**隐藏自动生成导航隐藏面包屑**

表示不显示该节点，可以在菜单设置 `hideInBreadcrumb: true`。

## API

### sidebar-nav

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[disabledAcl]` | `acl` 校验失败时以 `disabled` 状态显示 | `boolean` | `false`
`[autoCloseUnderPad]` | 小于Pad宽度时路由切换后自动关闭侧边栏 | `boolean` | `true`
`[recursivePath]` | 自动向上递归查找，菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项 | `boolean` | `true`
`[openStrictly]` | 展开完全受控，不再自动关闭已展开的项 | `boolean` | `false`
`(select)` | 点击菜单时回调（包含 `disabled`） | `EventEmitter<Menu>` | -
