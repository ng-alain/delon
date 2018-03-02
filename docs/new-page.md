---
order: 10
title:
  en-US: New Page
  zh-CN: 新增页面
type: Dev
---

Angular 虽然是以组件树来渲染一个页面，然后实际开发是以一种模块树来组织代码，使取能更好**代码复用**。而对于**模块粒度**取决于需求，ng-alain的定位在于中台前端，因此，比较建议从业务角度出发组织你的代码结构。

> ng-alain 是一个标准的 Angular Cli 项目，你可以利用 cli 快速的创建相关文件。

## 一、模块

要创建一个页面需要先创建一个模块开始，定位至 `src/app/routes/`，执行命令：

```bash
ng g module trade --routing
```

cli 会自动创建 `trade.module.ts` 和 `trade-routing.module.ts` 文件，前者是订单模块文件；后者是订单模块路由配置信息。当然为了使模块跟主模块产生联系，还需要至 `src/app/routes/routes-routing.module.ts` 文件内注册新建的业务模块：

```ts
{
    path: '',
    component: LayoutDefaultComponent,
    children: [
        { path: 'trade', loadChildren: './trade/trade.module#TradeModule' }
    ]
}
```

这样，你可以放心在 `trade` 目录中开始开发像订单列表、明细等业务页面。

## 二、页面

利用 cli 命令在 `trade` 目录下创建相应的页面文件：

```bash
ng g c list
```

> [@delon/cli](/docs/cli) 有额外的 `page` 命令，可以创建一个更有意义的列表页。

默认 cli 会帮助我们在 `trade.module.ts` 定义好相应的组件声明，但是列表是由路由触发的，因此还需要手动到 `trade-routing.module.ts` 注册一个路由：

```ts
const routes: Routes = [
    { path: 'list', component: ListComponent }
];
```

最终，你可以访问 [list](//localhost:4200/#/trade/list) 页面。
