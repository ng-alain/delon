---
order: 2
title:
  en-US: Menu Service
  zh-CN: 菜单服务
type: Service
---

菜单服务的数据格式是一个 [Menu](https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/menu/interface.ts) 数组，其中 `text` 属性表示菜单文本为必填项，而且本身并不受外部组件的影响（例如[sidebar-nav](/components/sidebar-nav)组件），这是因为菜单是贯穿整个项目必不可少的组成部分，而将其独立成一个服务可以更有效被使用，例如：动态生成导航、标题等。

**建议：** 在 Angular 启动服务（[startup.service.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/startup/startup.service.ts)）从远程获取到菜单数据后，调用 `add()` 方法。

## API

| 方法 | 参数 | 描述 |
| ----- | --- | ---- |
| `add` | `items: Menu[]` | 设置菜单数据 |
| `clear` | - | 清空菜单数据 |
| `resume` | `callback: Funection` | 重置菜单，可能I18N、用户权限变动时需要调用刷新 |
| `openedByUrl` | `url, recursive = false` | 根据URL设置菜单 `_open` 属性（`_open`用于是否展开菜单的条件值） |
| `getPathByUrl` | `url, recursive = false` | 根据url获取菜单列表 |

**recursive**

表示自动向上递归查找，例如菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项。
