---
type: Business
title: sidebar-nav
subtitle: 主菜单
cols: 1
module: SidebarNavModule
---

ng-alain 左边主菜单，依赖于 `@delon/theme`。

组件的数据来自 `MenuService`，其结构为 [Menu](/theme/menu#Menu)，同时对 `MenuService` 的操作会直接同步主菜单组件。

## 常见问题

### 为什么会有两个快捷菜单

快捷菜单生成规则是【统一在下标0的节点下（即【主导航】节点下方）】为寻找点，且按以下顺序来获取：

1. 【推荐】 children 存在 `shortcutRoot: true` 则最优先
2. 否则查找带有【dashboard】字样链接，若存在则在此菜单的下方创建快捷入口
3. 否则放在0节点位置

因此，建议在菜单数据的第 `0` 个下标里保持一个有效的 `shortcutRoot: true` 数据。

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
`(select)` | 点击菜单时回调（包含 `disabled`） | `EventEmitter<Menu>` | -
