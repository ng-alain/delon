---
order: 1
title:
  en-US: How to start
  zh-CN: 如何开始
type: Dev
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

From a mid and back-office perspective, NG-ALAIN always believes that a network request is required to get some application information (eg menu data, user data, etc.) before Angular starts.[startup.service.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/startup/startup.service.ts)；It returns a `Promise` object, which always needs to be called: `resolve()` to ensure that Angular starts normally.

> Network requests may encounter a 403 error because the scaffolding uses the user authentication module by default and always assumes that all requests must be a valid user authorization. For more documentation see:
> - [Interact with server](/docs/server)
> - [Auth User Authentication](/auth)

After obtaining the application information, you need to assign some values ​​to the built-in services of the scaffolding, including:

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

Menu data **Make sure** ensure [Menu](https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/menu/interface.ts) format, menu data throughout Applications, for example: main menu component [sidebar-nav](/components/sidebar-nav), page header auto navigation [page-header](/components/page-header), page title text [TitleService](/theme/title ) Wait.

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

Scaffolding top-level routing begins with [routes-routing.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/routes/routes-routing.module.ts) Its structure is as follows:

```ts
const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
      // business submodule
      // { path: 'trade', loadChildren: './trade/trade.module#TradeModule' }
    ]
  },
  // Full screen layout
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
  // Single page does not wrap Layout
  { path: 'callback/:type', component: CallbackComponent },
  { path: '403', component: Exception403Component },
  { path: '404', component: Exception404Component },
  { path: '500', component: Exception500Component },
  { path: '**', redirectTo: 'dashboard' }
];
```

Above we used the `LayoutDefaultComponent` base layout in the business module. User authorization uses `LayoutPassportComponent` user authorization layout and the full screen layout.

It is recommended that all submodules be loaded using a lazy module, such as the `TradeModule` order module, which organizes the code structure more efficiently.

### Under what circumstances do you not use lazy loading?

Angular startup from the top-level component. When a lazy module is encountered, it will initiate a script request. At this time, the dashboard or login page will be blank due to network requests, which is not good for the experience.

### Routing permission control

The routing URL may be affected by the browser's own historical memory, so that users may access the unprivileged route. If you want a better experience, you need to configure the `canActivate` option on the route. When the user has no permission, it will utomatically jump to the relevant page. see the [ACL Routing Guard](/acl/guard) section for details.
