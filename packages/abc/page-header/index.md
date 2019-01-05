---
type: Layout
title: page-header
subtitle: 页头
cols: 1
module: PageHeaderModule
config: PageHeaderConfig
---

页头用来声明页面的主题，包含了用户所关注的最重要的信息，使用户可以快速理解当前页面是什么以及它的功能。

## API

### page-header

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[title]` | 标题名 | `string,TemplateRef<void>` | -
`[autoTitle]` | 自动生成标题，以当前路由从主菜单中定位  | `boolean` | `true`
`[syncTitle]` | 是否自动将标题同步至 `TitleService`、`ReuseService` 下，仅 `title` 为 `string` 类型时有效  | `boolean` | `true`
`[home]` | 首页文本，若指定空表示不显示  | `string` | `首页`
`[homeLink]` | 首页链接  | `string` | `/`
`[homeI18n]` | 首页链接国际化参数 | `string` | -
`[autoBreadcrumb]` | 自动生成导航，以当前路由从主菜单中定位  | `boolean` | `true`
`[recursiveBreadcrumb]` | 自动向上递归查找，菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项 | `boolean` | `false`
`[loading]` | 是否加载中 | `boolean` | `false`
`[wide]` | 是否定宽 | `boolean` | `false`
`[fixed]` | 是否固定模式 | `boolean` | `false`
`[fixedOffsetTop]` | 固定偏移值 | `number` | `64`
`[breadcrumb]` | 自定义导航区域  | `TemplateRef<void>` | -
`[logo]` | 自定义LOGO区域  | `TemplateRef<void>` | -
`[action]` | 自定义操作区域  | `TemplateRef<void>` | -
`[content]` | 自定义内容区域  | `TemplateRef<void>` | -
`[extra]` | 自定义额外信息区域  | `TemplateRef<void>` | -
`[tab]` | 自定义标签区域  | `TemplateRef<void>` | -

## 常见问题

### 自动生成导航

默认情况下会根据菜单数据自动生成导航，有时你可能希望隐藏某个节点菜单数据时，可以指定菜单的 `hideInBreadcrumb: true`。

### 固定模式

固定模式在滚动过程中会覆盖 `reuse-tab` 组件。
