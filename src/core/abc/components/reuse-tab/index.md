---
title: reuse-tab
subtitle: 路由复用标签
order: 1
cols: 1
module: AdReuseTabModule
---

复用标签在中台系统非常常见，本质是解决不同路由页切换时组件数据不丢失问题。

> 控制台会打印很多日志，在组件未发布正式版之前，若发现BUG可以提供更多信息；`0.4.0` 正式版后将会移除。

## 匹配模式

提供三种不同的匹配模式用于满足需求，可以根据 `ReuseTabService` 调整这种模式规则：

**1、（推荐）Menu**

按菜单 `Menu` 配置。

可复用：

```
{ text:'Dashboard' }
{ text:'Dashboard', reuse: true }
```

不可复用：

```
{ text:'Dashboard', reuse: false }
```

**2、（推荐）MenuForce**

按菜单 `Menu` 强制配置。

可复用：

```
{ text:'Dashboard', reuse: true }
```

不可复用：

```
{ text:'Dashboard' }
{ text:'Dashboard', reuse: false }
```

**3、URL**

对所有路由有效，可以配合 `excludes` 过滤无须复用路由

## API

### reuse-tab

参数 | 说明 | 类型 | 默认值
----|------|-----|------
max | 允许最多复用多少个页面 | `number` | `10`
excludes | 排除规则，限 `mode=URL` | `RegExp[]` | -
allowClose | 允许关闭 | `boolean` | `true`
showCurrent | 总是显示当前页 | `boolean` | `true`
fixed | 是否固定 | `boolean` | `true`
change | 切换时回调 | `EventEmitter` | -
close | 关闭回调 | `EventEmitter` | -

## 如何删除？

ng-alain 脚手架默认使用了 `reuse-tab` 组件，移除包含：

- `shared.module.ts` 的 `AdReuseTabModule` 模块导入语句及 `providers` 定义
- `layout.component.html` 的 `<reuse-tab></reuse-tab>` 组件模板定义
