---
order: 0
title: 如何开始
type: Dev
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

### 初始化项目数据

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

| 数据类型 | 描述 |
|------|----|
| 应用信息 | 应用名称、描述、年份，信息可以直接注入 `SettingsService`（[API](/theme/settings)）后直接在HTML模板中访问。<br>例如：`this.settingService.setApp(res.app);` |
| 用户信息 | 当前用户的姓名、头像、邮箱地址等，信息可以直接注入 `SettingsService`（[API](/theme/settings)）后直接在HTML模板中访问。<br>例如：`this.settingService.setUser(res.user);` |
| 布局信息 | 调整主题配置，例如：固定顶部菜单、折叠菜单等。<br>例如：`this.settingService.setLayout("fixed", false);` 或 `this.settingService.setLayout("collapsed", false);` |
| 菜单数据 | NG-ALAIN 认为菜单数据也是来自远程，也可以任意位置注入 `MenuService`（[API](/theme/menu)）来改变菜单数据，当然在 Angular 启动之前执行菜单赋值更为合理。<br>菜单数据**务必**确保 [Menu](https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/menu/interface.ts) 格式，菜单数据贯穿整个应用，例如：页头自动导航 [page-header](/components/page-header)，页标题文本 [TitleService](/theme/title) 等。<br>例如：`this.menuService.add(res.menu);` |
| 页面标题 | 若页面标题总希望加上应用名称为后缀时，可以注入 `TitleService`（[API](/theme/title)）重新调整 `suffix` 属性值。<br>例如设置页面标题的后缀：`this.titleService.suffix = res.app.name;` |
| ACL | 访问控制列表数据，建议在启动前加载ACL访问控制权限数据，有关更多细节可参考 [访问控制列表](/acl)。 <br>例如设置全量权限：`this.aclService.setFull(true);` |
| 国际化 | 建议在启动前优先加载国际化数据包，这样可确保项目启动后页面渲染为目标语言。更多细节参考[国际化](/docs/i18n)。 |

### 业务路由

当 Angular 项目正式启动后会进入渲染动作，根据当前的路由地址来决定一个页面如何渲染，从最顶层路由 [routes-routing.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/routes/routes-routing.module.ts) 开始一层层寻找，其结构如下：

```ts
const routes: Routes = [
  {
    path: '',
    component: LayoutBasicComponent,
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
    ]
  },
  // 单页不包裹Layout
  { path: 'passport/callback/:type', component: CallbackComponent },
  { path: 'exception', loadChildren: () => import('./exception/exception.module').then((m) => m.ExceptionModule) },
  // 未命中路由全部跳转至 `exception/404` 页面上
  { path: '**', redirectTo: 'exception/404' },
];
```

> 上述在业务模块中使用了 `LayoutBasicComponent` 基础布局、用户授权使用了 `LayoutPassportComponent` 用户授权布局以及 `LayoutBlankComponent` 空白布局，以上三种布局都可以在 [layout](https://github.com/ng-alain/ng-alain/tree/master/src/app/layout) 目录下找得到。

例如当用户访问 `/dashboard` 路由时，会先经过 `LayoutBasicComponent` -> `DashboardComponent`，最终换形成一个庞大的组件树来表示一个具体的页面。NG-ALAIN 脚手架帮助你完成大多数工作，而一个新入门的人更多只需要关心 `DashboardComponent` 业务组件该如何实现。

**什么情况下不使用懒加载？**

Angular 启动是从顶层组件开始向下渲染，当遇到懒模块时会先发起脚本请求，此时会因为网络请求导致仪表盘或登录页短暂的空白，这对体验并不好。

### 用户认证与授权

页面能否访问取决于用户是否登录、已经登录还得判断否有授权，而这两项工作分别交给 `@delon/auth` 与 `@delon/acl` 来完成。

#### 用户认证

首先用户访问页面时是由顶层路由开始寻找命中后进行渲染，要想让所有未登录用户跳转到登录页面，可以配置 `canActivate` 选项，`@delon/auth` 已经提供了具体的实现，例如：

```ts
const routes: Routes = [
  {
    path: '',
    component: LayoutBasicComponent,
    canActivate: [SimpleGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent, data: { title: '仪表盘' } },
    ]
  },
];
```

> 这里的 `SimpleGuard` 是因为采用基于 Simple Web Token 认证风格，其他认证方式请参考[用户认证](/auth)章节。

当用户未登录时会直接跳转至 `/passport/login` 页面，如果采用的是 JWT 认证方式，还会对 Token 是否有效进行检验。

#### 用户授权

接者用户访问的页面还需要取决于授权程度，例如系统配置页普通用户肯定无法进入。在初始化项目数据小节里会根据当前用户的 Token 来获得授权的数据，并将数据交给 `@delon/acl`，同时它也提供一组路由守卫的具体实现 `ACLGuard` 类，例如希望整个系统配置模块都必须是 `admin` 角色才能访问，则：

```ts
const routes: Routes = [
  {
    path: 'sys',
    canActivate: [ACLGuard],
    data: { guard: 'admin' },
    children: [
      { path: 'config', component: ConfigComponent },
    ]
  },
];
```

此时，当一个未授权 `admin` 角色的用户尝试访问 `/sys/config` 页面时会被跳转至未授权错误页上。

当然还支持粒度有更细操作，比如某个按钮，请参考[ACL](/acl)章节。

### 拦截网络请求

网络请求是一项非常频繁的工作，如果想优雅的在业务组件内使用网络请求动作的话，那么将服务端URL前缀、异常处理、Token 刷新等操作集中处理是必不可少的，NG-ALAIN 脚手架提供一个 [default.interceptor.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/net/default.interceptor.ts) 文件。它会利用令牌 `HTTP_INTERCEPTORS` 起到一种拦截器的效果。

有关以上集中处理的动作细节，请参考 [default.interceptor.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/net/default.interceptor.ts) 文件。


## IDE

“工欲善其事，必先利其器是”，NG-ALAIN 脚手架推荐使用 [Visual Studio Code](https://code.visualstudio.com/) IDE，因为 NG-ALAIN 针对 VSCode 增加一些额外的特性，可以更好的帮助你开发。

> 或者直接使用 [NG-ALAIN Extension Pack](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-extension-pack) 套件。

### 代码片断

- [NG-ALAIN Snippets](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode)

### Class样式智能提醒

ng-alain 内置了大量的工具集样式（[API](/theme/tools)），安装以下插件可以直接在HTML模板里直接访问到它们。

- [NG-ALAIN Snippets](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode)
