---
title: sidebar-nav
subtitle: 主菜单
cols: 1
module: AdSidebarNavModule
---

ng-alain 左边主菜单，依赖于 `@delon/theme`。

组件的数据来自 `MenuService`，其结构为 [Menu](https://github.com/cipchk/delon/blob/master/packages/theme/src/services/menu/interface.ts)，同时对 `MenuService` 的操作会直接同步主菜单组件。

## 常见问题

### 为什么会有两个快捷菜单

快捷菜单生成规则是【统一在下标0的节点下（即【主导航】节点下方）】为寻找点，且按以下顺序来获取：

1. 【推荐】 children 存在 `shortcut_root: true` 则最优先
2. 否则查找带有【dashboard】字样链接，若存在则在此菜单的下方创建快捷入口
3. 否则放在0节点位置

因此，建议在菜单数据的第 `0` 个下标里保持一个有效的 `shortcut_root: true` 数据。

### 关于隐藏

**隐藏主菜单项**

表示永远不显示菜单，可以在菜单设置 `hide: true`。

**隐藏自动生成导航隐藏面包屑**

表示不显示该节点，可以在菜单设置 `hideInBreadcrumb: true`。

## API

### sidebar-nav

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[autoCloseUnderPad]` | 小于Pad宽度时路由切换后自动关闭侧边栏 | `boolean` | `true`
`(select)` | 切换时回调 | `EventEmitter<Menu>` | -

### 菜单数据结构

参数 | 类型 | 说明
----|------|-----
text | `string` | 文本，必填项
i18n | `string` | i18n主键
group | `string` | 是否显示分组名，默认：`true`，指[示例](https://cipchk.github.io/ng-alain/)中的【主导航】字样
link | `string` | 路由，`link`、`externalLink` 二选其一
linkExact | `boolean` | 路由是否精准匹配，默认：`false` [#344](https://github.com/cipchk/ng-alain/issues/344)
externalLink | `string` | 外部链接，`link`、`externalLink` 二选其一
target | `_blank,_self,_parent,_top` | 链接 target
icon | `string` | 图标，指[示例](https://cipchk.github.io/ng-alain/)中的【仪表盘】前图标，只对一级菜单有效
badge | `number` | 徽标数，展示的数字，指[示例](https://cipchk.github.io/ng-alain/)中的【小部件】后的红色块。（注：`group:true` 时无效）
badge_dot | `boolean` | 徽标数，显示小红点
badge_status | `string` | 徽标 Badge 颜色 （默认：error， 所有颜色值见：https://github.com/cipchk/ng-alain/blob/master/_documents/utils.md#色彩）
hide | `boolean` | 是否隐藏菜单
hideInBreadcrumb | `boolean` | 隐藏面包屑，指 `page-header` 组件的自动生成面包屑时有效
acl | `any` | ACL配置，若导入 `@delon/acl` 时自动有效，等同于 `ACLService.can(roleOrAbility: ACLCanType)` 参数值
shortcut | `boolean` | 是否快捷菜单项
shortcut_root | `boolean` | 快捷菜单根节点
reuse | `boolean` | 是否允许复用，需配合 `reuse-tab` 组件
children | `Menu[]` | 子菜单
