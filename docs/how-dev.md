---
order: 1
title:
  en-US: How to developer
  zh-CN: 如何开发
type: Basic
---

## 前序准备

当你开始着手在 ng-alain 基础上进行业务开发时，我建议你先了解一下以下文档，这对于亦或是团队每个成员都非常有帮助。

+ [Ant Desig 指引文章](//ant.design/docs/spec/introduce-cn)
+ [Ant Deisng for Angular](//ng.ant.design/docs/angular/introduce)
+ [Antv 图表](//antv.alipay.com/zh-cn/index.html)

ng-alain 的基础组件库来自 ng-zorro-antd，因此对于这类组件的使用方式你可以通过其官网得到很细说 [API](//ng.ant.design/) 文档说明，而对于 ng-alain 提供的组件则通过[组件页](/components)获取。

> ng-alain 依赖了一个 [ng-zorro-antd-extra](//cipchk.github.io/ng-zorro-antd-extra/) 类库，这是它和 ng-zorro-antd 一样，只是提供了一些 3.0 才会有的组件临时解决方案。

## 如何开始？

ng-alain 的目录非常简单，只有简单几个文件；默认情况下，包含了 [i18n](/docs/i18n)、[acl](/docs/acl)、[页面模板](/docs/template)等文件。

> 很多情况下，可能你不需要这些功能，上述每个链接中都包含着如何去删除它们的方法。

我们知道，项目从启动开始就需要从远程获取到一些配置信息（例如：菜单数据、用户数据等），ng-alain 的启动始于 [startup.service.ts](//github.com/cipchk/ng-alain/blob/master/src/app/core/services/startup.service.ts)；它返回的是一个 `Promise` 对象，因此你可以在这个方法体内做你想做的事，默认情况下做了很多有意思的事：

```ts
// 应用信息：包括站点名、描述、年份
this.settingService.setApp(res.app);
// 用户信息：包括姓名、头像、邮箱地址
this.settingService.setUser(res.user);
// ACL：设置权限为全量
this.aclService.setFull(true);
// 初始化菜单
this.menuService.add(res.menu);
// i18n：设置默认语言
this.tr.use(this.settingService.layout.lang);
// 设置页面标题的后缀
this.titleService.suffix = res.app.name;
```

最后，调用 `resolve(res)` 告诉Angular可以进行组件渲染了。

## 构建布局

布局是我们开始业务前的一些细节调整，因为 ng-alain 默认情况下包括了很多像用户信息、搜索框等一些演示性质的东西，但你不必担心因为这些都是形成一个独立的组件形式存在，你非常容易去简化或二次开发它们。

所有布局相关都存在 `src/app/layout` 目录下。整体的布局是上-左-右结构，分别在 `header`、`sidebar` 目录中，至于右结构相对应就是我们业务组件区域。

### 头部

头像目录下起到关键作用自然是 `header.component.html`，这是头部组件的模板文件内容，包括着你想要加载哪些组件的声明。但这里可能你需要清楚，删除或增加头部组件时**千万不要破坏结构**，这个结构简化后如下：

```html
<!-- 品牌LOGO区域 -->
<div class="logo">
    <a [routerLink]="['/']">
        <img class="expanded" src="./assets/img/logo-full.svg" alt="{{settings.app.name}}" style="max-height:40px;" />
        <img class="collapsed" src="./assets/img/logo.svg" alt="{{settings.app.name}}" style="max-height:30px;" />
    </a>
</div>
<!-- 菜单区域 -->
<div class="top-nav-wrap">
    <!-- 左边 -->
    <ul class="top-nav">
    </ul>
    <!-- 中间：默认是一个搜索框 -->
    <!-- 左边 -->
    <ul class="top-nav">
    </ul>
</div>
```

只要保证这个结构，你大可放心修改加载你所需要的组件。当然 ng-alain 也提供了一些默认的常见组件提供大家模仿，它们都放在 `components` 目录里面。

> 注：当你自定义一个头部菜单组件时，别忘记在 `layout.module.ts` 定义它。

### 侧边栏

侧边栏默认下调用了 `@delon/abc` 专门为 ng-alain 开发的菜单组件，因此整个主菜单只是简单的一个组件而已：

```html
<sidebar-nav class="d-block py-lg"></sidebar-nav>
```

> 模板中的 `nz-dropdown` 部分是当前用户登录信息，你还记得前面在启动时设置的 `setUser` 用户信息吗？这里显示的数据就是来自 `SettingsService` 的内容，当然你要是不需要这个用户信息，你方可直接移除它。

## 如何创建页面？

当你了解启动以及布局两项基础环节后，接下将是如何进入实际业务开发。所有跟业务相关的页面都放在 `src/app/routes` 目录当中；当你在想构建一个产品时，会有相当庞大的业务线，而 angular 懒加载可以帮助将不同业务分隔在不同模块当中，例如：订单模块。

ng-alain 是一个标准的 Angular Cli 项目，自然你可以利用 cli 快速的创建相关文件。我们在命令窗口中定位至 `src/app/routes/`：

```bash
ng g module trade --routing
```

cli 会自动帮助我们创建 `trade.module.ts` 和 `trade-routing.module.ts` 文件，前者是订单模块文件后者为订单模块内的路由配置信息。当然为了使这个模块跟主模块产生联系，我们还需要至 `src/app/routes/routes.ts` 文件内注册我们新建的业务模块：

```ts
{
    path: '',
    component: LayoutComponent,
    children: [
        { path: 'trade', loadChildren: './trade/trade.module#TradeModule' }
    ]
}
```

这样，你可以放心在 `trade` 目录中开始开发像订单列表、明细等业务页面。当然，还是利用 cli 帮助我们创建相应的文件：

```bash
ng g c list
```

默认 cli 会帮助我们在 `trade.module.ts` 定义好相应的组件声明，但是列表是由路由触发的，因此我们还需要手动到 `trade-routing.module.ts` 注册一个路由：

```ts
const routes: Routes = [
    { path: 'list', component: ListComponent }
];
```

最终，你可以访问 [list](//localhost:4200/#/trade/list) 页面。
