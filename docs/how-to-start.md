---
order: 1
title:
  en-US: How to start
  zh-CN: 如何开始
type: Dev
---

## 一、前序准备

当你开始着手在 ng-alain 基础上进行业务开发时，我建议你先了解一下以下文档，这对于团队中每个成员都非常有帮助。

+ [Ant Desig 指引文章](//ant.design/docs/spec/introduce-cn)
+ [Ant Deisng for Angular](//ng.ant.design/)
+ [Antv 图表](//antv.alipay.com/zh-cn/index.html)

ng-alain 的基础组件库来自 ng-zorro-antd，因此对于这类组件的使用方式你可以通过其官网得到很详细的 [API](//ng.ant.design/) 文档说明，而对于 ng-alain 提供的组件则通过[组件页](/components)获取。

## 二、启动

项目从启动开始就需要从远程获取到一些配置信息（例如：菜单数据、用户数据等），脚手架的启动始于 [startup.service.ts](https://github.com/cipchk/ng-alain/blob/master/src/app/core/startup/startup.service.ts)；它返回的是一个 `Promise` 对象，因此你可以在这个方法体内做你想做的事，默认情况下做了很多有意思的事：

```ts
// 应用信息：包括站点名、描述、年份
this.settingService.setApp(res.app);
// 用户信息：包括姓名、头像、邮箱地址
this.settingService.setUser(res.user);
// 初始化菜单
this.menuService.add(res.menu);
// 设置页面标题的后缀
this.titleService.suffix = res.app.name;
// i18n：设置默认语言
this.tr.use(this.settingService.layout.lang);
// ACL：设置权限为全量
this.aclService.setFull(true);
```

以上这些是中台一些必备数据，有关任何应用启动前一些必要数据建议都在这里获取。

### 应用信息

用于贯穿整个应用，其包括应用基本信息、布局信息、用户信息。这些信息并没有任何功能性，只是单纯方便于页面渲染。为了更好的管理这类通用信息，建议依然保持这种规则，并在启动前给予相应合理的值。

布局信息会依布局结构的变化自动更新，例如：收缩侧边栏其值 `collapsed` 会自动更新。

### 菜单数据

中台的菜单数据大多数是来自后端，但给予的数据务必确保是 [Menu](https://github.com/cipchk/delon/blob/master/packages/theme/src/services/menu/interface.ts) 格式，有关更多细节请参考[sidebar-nav](/components/sidebar-nav) 的API说明。

### 页面标题

统一设置标题前后缀。

### 国际化

建议在启动前优先加载国际化数据包，这样可确保项目启动后页面渲染为目标语言。

### ACL

建议在启动前加载ACL访问控制权限数据，有关更多细节可参考 [ACL](/acl)。

最后，调用 `resolve(res)` 告诉Angular可以进行组件渲染了。

## 三、路由

脚手架顶层路由从 [routes-routing.module.ts](https://github.com/cipchk/ng-alain/blob/master/src/app/routes/routes-routing.module.ts) 开始，其结构如下：

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
