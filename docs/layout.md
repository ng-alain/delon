---
order: 2
title:
  en-US: Layout
  zh-CN: 布局
type: Basic
---

页面整体布局是指包含导航、侧边栏、内容区域、页脚等最外层的框架结构。在页面之中，也有很多区块的布局结构，目前 ng-zorro-antd 有两套布局方案：[Layout](//ng.ant.design/components/layout) 和 [Grid](//ng.ant.design/components/grid)；而后者是日常都需要的，诸如：表单、列表页、明细页等多多少少都会涉及。

## 根据不同场景区分抽离布局组件

在大部分场景下，我们需要基于上面两个组件封装一些适用于当下具体业务的组件，包含了通用的导航、侧边栏、顶部通知、页面标题等元素。ng-alain 就已经包含了三种不同布局风格：

| 类型 | 位置 | 描述 |
| ---- | --- | ---- |
| 基础 | [LayoutComponent](//github.com/cipchk/ng-alain/blob/0.2.0/src/app/layout/layout.component.ts) | - |
| 全屏 | [LayoutFullScreenComponent](//github.com/cipchk/ng-alain/blob/0.2.0/src/app/layout/fullscreen/fullscreen.component.ts) | - |
| PRO用户授权 | [ProUserLayoutComponent](//github.com/cipchk/ng-alain/blob/0.2.0/src/app/layout/pro/user/user.component.ts) | 限 [pro](//cipchk.github.io/ng-alain/#/pro/user/login) 用户相关 |

## 如何使用

我们知道 Angular 页面是由一个复杂的组件树构成，而对于 Web 端是借由URL路由触发；而每一个路由都支持子路由，若希望某个页面由哪个布局渲染，则只需要在其相应的子路由中注册。

```ts
export const routes = [
    {
        // 父路由，指向的是 `LayoutComponent` 布局
        path: '',
        component: LayoutComponent,
        children: [
            // 子路由，仪表盘页
            { path: 'dashboard/v1', component: DashboardV1Component }
        ]
    }
];
```

假如你认为仪表盘应该是全屏才够酷，那么只须将 `LayoutComponent` 替换成 `LayoutFullScreenComponent` 即可。


