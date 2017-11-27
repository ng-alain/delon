---
order: 0
title:
  en-US: Page Template
  zh-CN: 页面模板
type: Advance
---

ng-alain 提供了数十个页面典型模板，包括模板了一整套 Ant design pro 风格的，后续我们持续增加这些页面以便大家通过 ng-alain 的示例找到可参考的对象。

## 主模块

`src/app/routes/routes.module.ts` 和 `src/app/routes/routes.ts` 是我们业务的主模块，由它来引导各个业务模块的路由。

## 如何删除？

这些模板都存放在于 `src/app/routes` 目录下面，因此，除了 `routes.module.ts`、`routes.ts` 两个文件外，你都可以放心的移除它们，同时只需要注意把路由配置也一并移除即可。

## 为什么仪表盘和登录页面是在主模块中定义？

就目前而言 angular 启动后，才会进行懒加载模块时，倘若我们把仪表盘或登录页放在对应的模块里，会由于网络延迟的原因，导致从模块的加载至组件的渲染这一过程会产生一段时间的空白，这点在体验上很不好，因此建议将这类用户即时所需的页面放在主模块里面。
