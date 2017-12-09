---
order: 6
title:
  en-US: Service
  zh-CN: 服务
type: Theme
---

`@delon/theme` 包含了若干服务类，它们包括：网络、菜单、滚动条、标题等一些日常页面的数据维护。

## _HttpClient

见[网络请求](//localhost:4200/docs/net)章节。

## MenuService

菜单服务的数据格式是一个 [Menu](//github.com/cipchk/delon/blob/master/src/core/theme/services/menu/menu.service.ts#L4) 数组，其中 `text` 属性表示菜单文本为必填项，而且本身并不受外部组件的影响（例如[sidebar-nav](/components/sidebar-nav)组件），这是因为菜单是贯穿整个项目必不可少的组成部分，而将其独立成一个服务可以更有效被使用，例如：动态生成导航、标题等。

**建议：** 在 Angular 启动服务（[startup.service.ts](//github.com/cipchk/ng-alain/blob/master/src/app/core/services/startup.service.ts)）从远程获取到菜单数据后，调用 `add()` 方法。

**API 接口**

| 接口名 | 参数 | 描述 |
| ----- | --- | ---- |
| `resume` | `callback` | 重置菜单，可能I18N、用户权限变动时需要调用刷新 |
| `getPathByUrl` | `url` | 根据url获取菜单列表 |

## ScrollService

滚动条控制，允许滚动至指定元素所处位置。

## SettingsService

项目配置项，包含应用[App](//github.com/cipchk/delon/blob/master/src/core/theme/services/settings/settings.service.ts#L13)、布局[Layout](//github.com/cipchk/delon/blob/master/src/core/theme/services/settings/settings.service.ts#L22)、用户信息[User](//github.com/cipchk/delon/blob/master/src/core/theme/services/settings/settings.service.ts#L6)三种类型。

**建议：** 在 Angular 启动服务（[startup.service.ts](//github.com/cipchk/ng-alain/blob/master/src/app/core/services/startup.service.ts)）从远程获取到应用、用户数据后，调用 `setApp()`、`setUser()` 方法。

## TitleService

用于设置页面标题，一般需要配置路由变化一起使用，例如：[app.component.ts](//github.com/cipchk/ng-alain/blob/master/src/app/app.component.ts#L29)；而标题的数据来源于 `MenuService`。

**建议：** 在 Angular 启动服务（[startup.service.ts](//github.com/cipchk/ng-alain/blob/master/src/app/core/services/startup.service.ts)）从远程获取到应用数据后，设置 `prefix` 或 `suffix` 值来调整统一的标题前后缀。

## ThemesService

用于设置当前 ng-alain 主题颜色，默认提供 A-J 共十种颜色，除了调用 `setTheme()` 方法改变颜色系外，还要确保 [_alain-custom-variables.less](//github.com/cipchk/ng-alain/blob/master/src/styles/_alain-custom-variables.less) 中注册相应的颜色系样式。

与之相对应的还有 `ColorsService` 用于获取这些颜色系。

## ModalHelper

这是对 `NzModalService` 进一步封装，打开一个对话框，默认会过滤一些事件的回调，因此更容易处理回调：

```ts
this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());

// 成功：
this.subject.destroy('onOk');
    // 若需要回调用参数则：
    this.subject.next(data);
    this.subject.destroy();
// 关闭：
this.subject.destroy();
```

服务只包括两个方法体 `open` & `static` 分别打开普通&静态对话框。在 `NzModalService` 基础上新增了 `size` 参数，其值包括：`sm`、`lg`、`空字符串` 表示三种不同尺寸的对话框。
