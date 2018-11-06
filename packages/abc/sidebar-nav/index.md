---
type: Business
title: sidebar-nav
subtitle: 主菜单
cols: 1
module: SidebarNavModule
---

ng-alain 左边主菜单，依赖于 `@delon/theme`。

组件的数据来自 `MenuService`，其结构为 [Menu](https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/menu/menu.service.ts)，同时对 `MenuService` 的操作会直接同步主菜单组件。

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
`[autoCloseUnderPad]` | 小于Pad宽度时路由切换后自动关闭侧边栏 | `boolean` | `true`
`(select)` | 切换时回调 | `EventEmitter<Menu>` | -

### Menu

参数 | 说明 | 类型 | 默认值
----|------|-----|------
text | 文本，必填项 | `string` | -
i18n | i18n主键 | `string` | -
group | 是否显示分组名，默认：`true`，指[示例](//ng-alain.github.io/ng-alain/)中的【主导航】字样 | `string` | -
link | 路由，`link`、`externalLink` 二选其一 | `string` | -
linkExact | 路由是否精准匹配，默认：`false` [#344](https://github.com/ng-alain/ng-alain/issues/344) | `boolean` | -
externalLink | 外部链接，`link`、`externalLink` 二选其一 | `string` | -
target | 链接 target | `_blank,_self,_parent,_top` | -
icon | 图标，指[示例](//ng-alain.github.io/ng-alain/)中的【仪表盘】前图标，只对一级菜单有效 | `string | MenuIcon` | -
badge | 徽标数，展示的数字，指[示例](//ng-alain.github.io/ng-alain/)中的【小部件】后的红色块。（注：`group:true` 时无效） | `number` | -
badgeDot | 徽标数，显示小红点 | `boolean` | -
badgeStatus | 徽标 Badge 颜色 （默认：error， 所有[颜色值](https://next.ng-alain.com/theme/tools#%E8%89%B2%E5%BD%A9) | `string` | -
hide | 是否隐藏菜单 | `boolean` | -
hideInBreadcrumb | 隐藏面包屑，指 `page-header` 组件的自动生成面包屑时有效 | `boolean` | -
acl | ACL配置，若导入 `@delon/acl` 时自动有效，等同于 `ACLService.can(roleOrAbility: ACLCanType)` 参数值 | `any` | -
shortcut | 是否快捷菜单项 | `boolean` | -
shortcutRoot | 快捷菜单根节点 | `boolean` | -
reuse | 是否允许复用，需配合 `reuse-tab` 组件 | `boolean` | -
children | 子菜单 | `Menu[]` | -

### MenuIcon

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[type]` | 类型 | `class,icon,img` | `icon`
`[value]` | 值，包含：类名、图标 `type`、图像 | `string` | -
`[theme]` | 图标主题风格 | `outline,twotone,fill` | `outline`
`[spin]` | 是否有旋转动画 | `boolean` | `false`
`[twoToneColor]` | 仅适用双色图标，设置双色图标的主要颜色，仅对当前 icon 生效 | `string` | -
`[iconfont]` | 指定来自 IconFont 的图标类型 | `string` | -
