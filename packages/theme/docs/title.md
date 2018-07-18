---
order: 4
title:
  en-US: Title Service
  zh-CN: 页面标题服务
type: Service
---

用于设置页面标题，一般需要配置路由变化一起使用，例如：[app.component.ts](https://github.com/cipchk/ng-alain/blob/master/src/app/app.component.ts#L33)；而标题的数据来源于 `MenuService`。

**建议：** 在 Angular 启动服务（[startup.service.ts](https://github.com/cipchk/ng-alain/blob/master/src/app/core/startup/startup.service.ts)）从远程获取到应用数据后，设置 `prefix` 或 `suffix` 值来调整统一的标题前后缀。

**获取顺序**

按以下顺序指定文档 `title` 值：

- 路由配置 `{ data: { title: 'page name', titleI18n: 'page-name' } }`
- 根据当前 URL 解析菜单数据
- 页面 `content__title` 或 `pro-header` 中获取 `h1` 内容
- 默认标题名
