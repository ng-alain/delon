---
order: 0
title: How to start
type: Dev
i18n: need-update
---

## First, pre-order preparation

As you begin your business development on NG-ALAIN, i recommend that you first review the following documents, which is very helpful for everyone on the team.

+ [Ant Design Guide article](//ant.design/docs/spec/introduce)
+ [Ant Design for Angular](//ng.ant.design/)
+ [Antv chart - G2](//www.yuque.com/antv/g2-docs-en?language=en-us)
+ [NG-ZORRO Community recommendation](https://ng.ant.design/docs/recommendation/en)

NG-ALAIN's base component library comes from NG-ZORRO, so you can get a very detailed [API](//ng.ant.design/) documentation for its use on the official website. For ng components provided by -alain are obtained through the [component page](/components).

## Second, the startup process

NG-ALAIN is a scaffold that can be used directly in production environments. The prerequisite for understanding these details is that you have a certain knowledge of Angular. The following documents may be helpful to you before you start:

- NG-ALAIN Getting started video ([YouTube](https://www.youtube.com/watch?v=lPnNKPuULVw&list=PLhWkvn5F8uyJRimbVZ944unzRrHeujngw)、[Tencent video](http://v.qq.com/vplus/2c1dd5c6db4feeeea25e9827b38c171e/foldervideos/870001501oy1ijf)、[Station B](https://space.bilibili.com/12207877/#/channel/detail?cid=50229)）
- [Know the column](https://zhuanlan.zhihu.com/ng-alain)

When running an app via `ng serve`, a complete Angular startup process would look like this:

1. Trigger `APP_INITIALIZER` (the scaffolding implementation is implemented in `StartupService.load`) to get the application information.
2. Trigger service routing (src/app/routes/routes-routing.module.ts` for scaffolding)
3. Rendering components

### 1) APP_INITIALIZER

Angular provides a DI (dependency injection) token `APP_INITIALIZER` that allows the application to perform some data that will affect the rendering results when it starts, such as: language data, menu data, user information data, dictionary data, etc., and must return an `Observable` Asynchronous, asynchronous means that you can do a lot of interesting things, such as data coming from a remote location. `APP_INITIALIZER` will only be executed once, you only need to register it in the `ApplicationConfig` module.

The NG-ALAIN scaffolding provides a sample code on how to load basic data before starting rendering after starting Angular [startup.service.ts](https://github.com/ng-alain/ng-alain/blob/ master/src/app/core/startup/startup.service.ts).

1. Provide unified registration `provideStartup` function, which only needs to be registered in `app.config.ts`
2. Provide the `load()` function and ensure that **regardless of whether the request is successful or not** must return an `Observable<void>` for Angular to render normally, otherwise Angular will not be able to start.

> Note: NG-ALAIN provides authorization services. If the requested data interface cannot be authorized, you can add `ALLOW_ANONYMOUS` to mark it.

**Application Information**

Including: application name, description, year, information can be directly injected into the `SettingsService` ([API](/theme/settings)) and directly in the HTML template.

```ts
this.settingService.setApp(res.app);
```

**User Info**

Including: name, avatar, email address, etc., information can be directly injected into the `SettingsService` ([API](/theme/settings)) and directly in the HTML template.

```ts
this.settingService.setUser(res.user);
```

**Layout information**

Including: name, avatar, email, address, etc., information can be directly injected into the `SettingsService` ([API](/theme/settings)) and directly in the HTML template.

```ts
// Whether to fix the top menu
this.settingService.setLayout(`fixed`, false);
// Whether to collapse the right menu
this.settingService.setLayout(`collapsed`, false);
```

**Menu data**

NG-ALAIN takes menu from the remote and can also inject `MenuService` ([API](/theme/menu)) to change the menu data. Of course, it is more reasonable to perform menu assignment before Angular starts.

Menu data **Make sure** ensure [Menu](https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/menu/interface.ts) format, menu data throughout Applications, for example: page header auto navigation [page-header](/components/page-header), page title text [TitleService](/theme/title ) Wait.

```ts
this.menuService.add(res.menu);
```

**Page title**

If the page title always wants to add the application name as a suffix, you can re-adjust the `suffix` attribute value by injecting `TitleService`([API](/theme/title)).

```ts
// Set the suffix of the page title
this.titleService.suffix = res.app.name;
```

**ACL**

```ts
this.aclService.setFull(true);
```

It is recommended to load the ACL access control permission data before starting. For more details, please refer to [Access Control List](/acl).

**Globalization**

It is recommended to load the internationalization package first before starting, which will ensure that the page is rendered as the target language after the project is started. See [Internationalization](/docs/i18n) for more details.

### 2) Business routing

Scaffolding top-level routing begins with [routes.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/routes/routes.ts) Its structure is as follows:

```ts
const routes: Routes = [
  {
    path: '',
    component: LayoutBasicComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/routes').then(m => m.routes)
      },
      // business submodule
      // { path: 'trade', loadChildren: () => import('./trade/routes').then(m => m.routes) },
    ]
  },
  // Blank layout
  {
    path: 'blank',
    component: LayoutBlankComponent,
    children: [
    ]
  },
  { path: '', loadChildren: () => import('./passport/routes').then(m => m.routes) },
  { path: 'exception', loadChildren: () => import('./exception/routes').then(m => m.routes) },
  // All missed routes will jump to the `exception/404` page
  { path: '**', redirectTo: 'dashboard' }
];
```

> The above mentioned `LayoutBasicComponent` basic layout is used in the business module, user authorization uses `LayoutPassportComponent` user authorization layout and `LayoutBlankComponent` blank layout. The above three layouts can be used in [layout](https://github.com/ ng-alain/ng-alain/tree/master/src/app/layout) directory.

> NG-ALAIN also provides some [commercial themes](https://e.ng-alain.com/) to chooses.

For example, when a user accesses the `/dashboard` route, they will first go through `LayoutBasicComponent` -> `DashboardComponent`, and eventually form a huge component tree to represent a specific page. NG-ALAIN scaffolding helps you complete most of the work, and a newbie only needs to care about how to implement the `DashboardComponent` business component.

### Routing permission control

The routing URL may be affected by the browser's own historical memory, so that users may access the unprivileged route. If you want a better experience, you need to configure the `canActivate` option on the route. When the user has no permission, it will utomatically jump to the relevant page. see the [ACL Routing Guard](/acl/guard) section for details.

### Intercept network requests

Network requests are a very frequent task. If you want to use network request actions elegantly within business components, it is essential to centrally handle server-side URL prefixes, exception handling, token refresh and other operations. NG-ALAIN scaffolding Provide a [net](https://github.com/ng-alain/ng-alain/tree/master/src/app/core/net) file. It uses the token `HttpInterceptorFn` to act as an interceptor.

For details, please refer to [default.interceptor.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/net/default.interceptor. ts) file.

## IDE

A developer must first sharpen his tools if he is to do his work well, NG-ALAIN recommended to use the [Visual Studio Code](https://code.visualstudio.com/) IDE, because ng-alain adds some extra features to VSCode to better help you. Development.

> Or use the [NG-ALAIN Extension Pack](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-extension-pack) suite directly.

### Code fragment

- [NG-ALAIN Snippets](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode)

### Class style smart reminder

ng-alain has a lot of built-in toolkit styles ([API](/theme/tools)), and the following plugins can be installed directly into the HTML template.

- [NG-ALAIN Snippets](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode)
