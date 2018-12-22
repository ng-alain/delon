---
order: 4
title: TitleService
subtitle: 页面标题服务
type: Service
---

用于设置页面标题，一般监听路由变化并重新刷新标题，例如：[app.component.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/app.component.ts#L54)；同时标题的默认数据来源于 `MenuService`。

**建议：** 在 Angular 启动服务（[startup.service.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/startup/startup.service.ts)）过程中设置 `prefix` 或 `suffix` 值来调整统一的标题前后缀。

## 获取顺序

根据以下顺序获取 `title` 值：

1. 路由配置 `{ data: { title: 'page name', titleI18n: 'page-name' } }`
2. 根据当前 URL 解析菜单数据
3. 页面 `alain-default__content-title` 或 `page-header__title` 中获取 `h1` 内容
4. 默认标题名

## API

| 名称                                           | 类型       | 描述           |
| ---------------------------------------------- | ---------- | -------------- |
| `default`                                      | `property` | 设置默认标题名 |
| `separator`                                    | `property` | 设置分隔符     |
| `prefix`                                       | `property` | 设置前缀       |
| `suffix`                                       | `property` | 设置后缀       |
| `reverse`                                      | `property` | 设置是否反转   |
| `setTitle(title?: string | string[])`          | `method`   | 设置标题       |
| `setTitleByI18n(key: string, params?: Object)` | `method`   | 设置国际化标题 |
