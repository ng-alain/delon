---
order: 1
title:
  en-US: How to start
  zh-CN: 如何开始
type: Dev
---

## 一、前序准备

当你开始着手在 NG-ALAIN 基础上进行业务开发时，我建议你先了解一下以下文档，这对于团队中每个成员都非常有帮助。

+ [Ant Design 指引文章](//ant.design/docs/spec/introduce-cn)
+ [Ant Design for Angular](//ng.ant.design/)
+ [Antv 图表](//antv.alipay.com/zh-cn/index.html)
+ [NG-ZORRO 社区推荐](https://ng.ant.design/docs/recommendation/zh#博客及网站)

NG-ALAIN 的基础组件库来自 NG-ZORRO，因此对于这类组件的使用方式你可以通过其官网得到很详细的 [API](//ng.ant.design/) 文档说明，而对于 NG-ALAIN 提供的组件则通过[组件页](/components)获取。

## 二、启动流程

NG-ALAIN 是一个可直接用于生产环境脚手架，要了解这些细节的前提条件是你对 Angular 有一定的知识储备，在开始之前下列文档可能对你有帮助：

- **NG-ALAIN 入门视频（[YouTube](https://www.youtube.com/watch?v=lPnNKPuULVw&list=PLhWkvn5F8uyJRimbVZ944unzRrHeujngw)、[腾讯视频](http://v.qq.com/vplus/2c1dd5c6db4feeeea25e9827b38c171e/foldervideos/870001501oy1ijf)、[B站](https://space.bilibili.com/12207877/#/channel/detail?cid=50229)）**
- [知乎专栏](https://zhuanlan.zhihu.com/ng-alain)

当通过 `ng serve` 运行应用后，一个完整的 Angular 启动流程大概是这样：

1. 触发 `APP_INITIALIZER`（脚手架具体实现在 `StartupService.load`） 获取应用信息
2. 触发业务路由（脚手架的 `src/app/routes/routes-routing.module.ts`）
3. 渲染组件

### 1) APP_INITIALIZER

以中后台角度出发，NG-ALAIN 始终认为在 Angular 启动之前需要一次网络请求来获取一些应用信息（例如：菜单数据、用户数据等），具体实现细节[startup.service.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/startup/startup.service.ts)；它返回的是一个 `Promise` 对象，不管怎么样始终都需要调用：`resolve()` 才能确保 Angular 正常启动。

> 网络请求可能会遇到 403 错误，这是因为脚手架默认使用了用户认证模块，并始终认为所有请求务必是一个有效用户授权，更多文档见：
> - [和服务端进行交互](/docs/server)
> - [Auth 用户认证](/auth)

当获取应用信息后，需要对脚手架内置的一些服务做赋值，包含：

**应用信息**

包括：应用名称、描述、年份，信息可以直接注入 `SettingsService`（[API](/theme/settings)）后直接在HTML模板中访问。

```ts
this.settingService.setApp(res.app);
```

**用户信息**

包括：姓名、头像、邮箱地址等，信息可以直接注入 `SettingsService`（[API](/theme/settings)）后直接在HTML模板中访问。

```ts
this.settingService.setUser(res.user);
```

**布局信息**

包括：姓名、头像、邮箱地址等，信息可以直接注入 `SettingsService`（[API](/theme/settings)）后直接在HTML模板中访问。

```ts
// 是否固定顶部菜单
this.settingService.setLayout(`fixed`, false);
// 是否折叠右边菜单
this.settingService.setLayout(`collapsed`, false);
```

**菜单数据**

NG-ALAIN 认为菜单数据也是来自远程，也可以任意位置注入 `MenuService`（[API](/theme/menu)）来改变菜单数据，当然在 Angular 启动之前执行菜单赋值更为合理。

菜单数据**务必**确保 [Menu](https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/menu/interface.ts) 格式，菜单数据贯穿整个应用，例如：主菜单组件 [sidebar-nav](/components/sidebar-nav)，页头自动导航 [page-header](/components/page-header)，页标题文本 [TitleService](/theme/title) 等。

```ts
this.menuService.add(res.menu);
```

**页面标题**

若页面标题总希望加上应用名称为后缀时，可以注入 `TitleService`（[API](/theme/title)）重新调整 `suffix` 属性值。

```ts
// 设置页面标题的后缀
this.titleService.suffix = res.app.name;
```

**ACL**

```ts
this.aclService.setFull(true);
```

建议在启动前加载ACL访问控制权限数据，有关更多细节可参考 [访问控制列表](/acl)。

**国际化**

建议在启动前优先加载国际化数据包，这样可确保项目启动后页面渲染为目标语言。更多细节参考[国际化](/docs/i18n)。

### 2) 业务路由

脚手架顶层路由从 [routes-routing.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/routes/routes-routing.module.ts) 开始，其结构如下：

```ts
const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent, data: { title: '仪表盘' } },
      // 业务子模块
      // { path: 'trade', loadChildren: './trade/trade.module#TradeModule' }
    ]
  },
  // 全屏布局
  {
    path: 'fullscreen',
    component: LayoutFullScreenComponent,
    children: [
    ]
  },
  // passport
  {
    path: 'passport',
    component: LayoutPassportComponent,
    children: [
      { path: 'login', component: UserLoginComponent },
      { path: 'register', component: UserRegisterComponent },
      { path: 'register-result', component: UserRegisterResultComponent }
    ]
  },
  // 单页不包裹Layout
  { path: 'callback/:type', component: CallbackComponent },
  { path: '403', component: Exception403Component },
  { path: '404', component: Exception404Component },
  { path: '500', component: Exception500Component },
  { path: '**', redirectTo: 'dashboard' }
];
```

上述我们在业务模块中使用了 `LayoutDefaultComponent` 基础布局、用户授权使用了 `LayoutPassportComponent` 用户授权布局以及全屏布局。

建议所有子模块都使用懒模块加载，例如 `TradeModule` 订单模块，这种方式可以更有效地组织代码结构。

### 什么情况下不使用懒加载？

Angular 启动是从顶层组件开始向下渲染，当遇到懒模块时会先发起脚本请求，此时会因为网络请求导致仪表盘或登录页短暂的空白，这对体验并不好。

### 路由权限控制

路由URL可能会受浏览器自身历史记忆的原因，导致用户可能会访问至无权限路由时，若你希望有更好的体验，则需要在路由上配置 `canActivate` 选项，当用户无权限时会自动跳转至相关页；有关细节见[ACL路由守卫](/acl/guard)章节。
