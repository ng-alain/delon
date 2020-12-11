---
order: 30
title: 如何开始
type: Basic
i18n: need-update
---

## 前序准备

NG-ALAIN 技术栈基于 Typescript、Angular、图表G2 和 NG-ZORRO，在开始尝试使用 NG-ALAIN 脚手架前，请先提前了解和学习这些知识会非常有帮助。如果你是一名 Java 或 C# 后端开发人员，那么恭喜你，你所见到的不管是结构、代码、开发体验等都是你所想的那样。但不管怎么样，想写好 Angular 代码，以下这些文章及社区是你必须要知道的：

- 文档类
  - [TypeScript中文文档](https://www.tslang.cn/)，虽然 TypeScript 跟 Java、C# 语法很像，这是语法基础需要认真阅读
  - [Angular中文文档](https://angular.cn/docs)，建议一定要花时间阅读文档部分，透过它基本上就可以学会 Angular；同时，也是 Angular API 接口文档
  - [NG-ZORRO中文文档](https://ng.ant.design/docs/introduce/zh)，NG-ZORRO 作为 NG-ALAIN 的基础组件库，当你不懂某个组件时，它就是最好的文档，包含组件用法及API说明
  - [NG-ALAIN中文文档](https://ng-alain.com/)，包含所有 `@delon/*` 类型的用法及API说明
  - [G2图表中文文档](https://g2.antv.vision/zh)，如果需要图表开发，则这份文档是必备
- 辅助类
  - [Ant Design 指引文章](https://ant.design/docs/spec/introduce-cn)，学习 Ant Design 的设计理念，非常值得阅读的部分
  - [NG-ZORRO 社区推荐](https://ng.ant.design/docs/recommendation/zh)，一份非常值得学习的清单
  - NG-ALAIN 入门视频（[YouTube](https://www.youtube.com/watch?v=lPnNKPuULVw&list=PLhWkvn5F8uyJRimbVZ944unzRrHeujngw)、[腾讯视频](http://v.qq.com/vplus/2c1dd5c6db4feeeea25e9827b38c171e/foldervideos/870001501oy1ijf)、[B站](https://space.bilibili.com/12207877/#/channel/detail?cid=50229)）
  - [NG-ALAIN 知乎专栏](https://zhuanlan.zhihu.com/ng-alain)

## 写在前面

很多人在学习一项新东西时，无外乎写个 Hello World 或是写一个 Http 请求，然后慢慢开始辐射所需要的技术知识。一个 HTTP 请求对中后台而言便是涵盖了 CURD 主要任务，甚至可以说90%时间及功能都在做这项工作。在[介绍](/docs/getting-started)章节中已经描述创建一个 NG-ALAIN 项目并如何运行它，如果此时你也想要写个 Hello World，那么只需要利用 VSCode 打开这个项目，并在 `dashboard.component.html` 文件内输入文本，500ms 后就会在页面上立即呈现。

## 流程

回过头来我们试着回想一下，一个中后台项目，从启动再到呈现一份订单列表的功能，对于开发者而言包含了哪些事件。无外乎项目启动时应该加载点什么系统配置项，哪些页面用户无权进入；把粒度再想细一点，同一个页面不同的按钮给不同的人用，HTTP请求若产生错误是不是得每次都写相同的处理代码等等。

当我们在思考这些问题时，Angular 已经提供大部分解决方案的接口：

### 项目初始化

Angular 提供一个DI（依赖注入）令牌 `APP_INITIALIZER` 让应用启动时可以做一些会影响渲染结果的数据，比如：语言数据、菜单数据、用户信息数据、字典数据等，并且必须返回一个 `Promise` 异步函数，异步意味者可以做很多有趣的事，比如数据来自远程。`APP_INITIALIZER` 只会执行一次，只需要在 `AppModule` 模块注册它就行了。

```ts
export function StartupServiceFactory(startupService: StartupService): () => Promise<void> {
  return () => startupService.load();
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule]
  providers: [{
    StartupService,
    {
      provide: APP_INITIALIZER,
      useFactory: StartupServiceFactory,
      deps: [StartupService],
      multi: true,
    },
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

而 `StartupService` 如下：

```ts
@Injectable()
export class StartupService {
  constructor(private httpClient: HttpClient) {}

  load(): Promise<void> { 
    return new Promise((resolve) => {
      this.httpClient.get(``).subscribe(() => {
        resolve();
      });
    });
  }
}
```

哪怕 Http 请求失败，这里也必须执行 `resolve()`，否则应用就无法启动。而 NG-ALAIN 提供的 [startup.service.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/startup/startup.service.ts) 内容更加丰富一点，对于完整的中后台而言，大多数项目中以下这些信息都可以必备的：

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


--------

## 二、启动流程

NG-ALAIN 是一个可直接用于生产环境脚手架，要了解这些细节的前提条件是你对 Angular 有一定的知识储备，在开始之前下列文档可能对你有帮助：

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
  // 空白布局
  {
    path: 'blank',
    component: LayoutBlankComponent,
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
