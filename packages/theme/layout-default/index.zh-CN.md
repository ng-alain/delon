---
type: Theme
order: 100
title: 默认布局
---

默认布局所有参数都以 `@alain-default-` 开头。

## 使用方式

### 1、导入样式

在 `src/styles.less` 引入：

```less
@import '~@delon/theme/layout-default/style/index';
```

### 2、使用 `layout-default` 组件

在 `src/app/layout/basic/basic.component.ts` 创建一个新的布局：

```ts
import { Component } from '@angular/core';
import { SettingsService, User } from '@delon/theme';
import { LayoutDefaultOptions } from '@delon/theme/layout-default';
import { environment } from '@env/environment';

@Component({
  selector: 'layout-basic',
  template: `
    <layout-default [options]="options" [asideUser]="asideUserTpl" [content]="contentTpl">
      <layout-default-header-item direction="left">
        <a layout-default-header-item-trigger href="//github.com/ng-alain/ng-alain" target="_blank">
          <i nz-icon nzType="github"></i>
        </a>
      </layout-default-header-item>
      <layout-default-header-item direction="left" hidden="pc">
        <div layout-default-header-item-trigger (click)="searchToggleStatus = !searchToggleStatus">
          <i nz-icon nzType="search"></i>
        </div>
      </layout-default-header-item>
      <layout-default-header-item direction="middle">
        <header-search class="alain-default__search" [toggleChange]="searchToggleStatus"></header-search>
      </layout-default-header-item>
      <layout-default-header-item direction="right" hidden="mobile">
        <header-task></header-task>
      </layout-default-header-item>
      <ng-template #asideUserTpl>
        <div nz-dropdown nzTrigger="click" [nzDropdownMenu]="userMenu" class="alain-default__aside-user">
          <nz-avatar class="alain-default__aside-user-avatar" [nzSrc]="user.avatar"></nz-avatar>
          <div class="alain-default__aside-user-info">
            <strong>{{ user.name }}</strong>
            <p class="mb0">{{ user.email }}</p>
          </div>
        </div>
        <nz-dropdown-menu #userMenu="nzDropdownMenu">
          <ul nz-menu>
            <li nz-menu-item routerLink="/pro/account/center">{{ 'menu.account.center' | translate }}</li>
            <li nz-menu-item routerLink="/pro/account/settings">{{ 'menu.account.settings' | translate }}</li>
          </ul>
        </nz-dropdown-menu>
      </ng-template>
      <ng-template #contentTpl>
        <router-outlet></router-outlet>
      </ng-template>
    </layout-default>

    <setting-drawer *ngIf="showSettingDrawer"></setting-drawer>
    <theme-btn></theme-btn>
  `,
})
export class LayoutBasicComponent {
  options: LayoutDefaultOptions = {
    logoExpanded: `./assets/logo-full.svg`,
    logoCollapsed: `./assets/logo.svg`,
  };
  searchToggleStatus = false;
  showSettingDrawer = !environment.production;
  get user(): User {
    return this.settings.user;
  }

  constructor(private settings: SettingsService) {}
}
```

除此之外，在布局的操作都可以通过 `SettingsService.notify` 来订阅布局的变化（例如：侧边栏的展开与收缩等），注意所有布局相关的变化都会通过这个接口，所以需要做好 `filter` 操作。

## API

### layout-default

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[options]` | 选项 | `LayoutDefaultOptions` | `-` |
| `[asideUser]` | 侧边用户信息 | `TemplateRef<void>` | `-` |
| `[nav]` | 导航信息 | `TemplateRef<void>` | `-` |
| `[content]` | 内容信息 | `TemplateRef<void>` | `-` |

### layout-default-header-item

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[hidden]` | 隐藏行为 | `pc, mobile, none` | `nones` |
| `[direction]` | 方向 | `left, middle, right` | `right` |

### layout-default-header-item-trigger

头部项的触发样式。

## 布局说明

按上-左-右布局方式，运用于**业务页**的开发。其规范细节：

+ 顶部区域高度 `64px`（参数：`@header-hg`）
+ 侧边区域宽度 `200px`（参数：`@aside-wd`）
  + 当屏幕低于 `1140px` 宽时隐藏侧边导航
  + 当屏幕低于 `1140px` 宽时打开侧边导航为 `fixed` 状态
  + 主要包括一个 [sidebar-nav（点击查看API）](/components/sidebar-nav) 组件

> 参数是指可以通过 `src/styles/theme.less` 文件按需要调整。

**顶部区域**

位置：*src/app/layout/base/widgets*。

脚手架默认提供了一些常规顶部区域组件，这些组件都存放于 *components* 目录中。同时 `@delon/abc` 也提供若干顶部组件（例如：[notice-icon](/components/notice-icon) 通知菜单组件）。你可以根据提供的组件自行组合或自行开发。

> 脚手架支持响应式布局，对于顶部区域可能会是在小屏幕下需要隐藏一些组件，因此你可以在对应的DOM节点上加上 `hidden-xs` 表示当屏幕小于 `768px` 时自动隐藏。

**侧边区域**

位置：*src/app/layout/default/sidebar*。

只包括一个用户信息和主菜单。主菜单是一个 [sidebar-nav](/components/sidebar-nav) 组件，具体使用细节请至[业务组件](/components/sidebar-nav)中查询。

**内部区域**

内容区域是业务页区域，规范细节：

+ 内容距离页面标准、侧边、右边滚动条、底部，这四边距依一个标准Dashboard的Gutter宽度 `24px`。

## 样式参数

| 名称 | 默认值 | 功能 |
|----|-----|----|
| `@alain-default-prefix` | `.alain-default` | 布局样式前缀 |
| `@alain-default-ease` | `cubic-bezier(.25, 0, .15, 1)` | 动画过滤函数 |
| `@alain-default-header-hg` | `64px` | 顶部高度 |
| `@alain-default-header-bg` | `@primary-color` | 顶部背景色 |
| `@alain-default-header-padding` | `@layout-gutter * 2` | 顶部左右内边距 |
| `@alain-default-header-search-enabled` | `true` | 是否开启顶部搜索框 |
| `@alain-default-header-icon-fs` | `18px` | 顶部 Icon 大小 |
| `@alain-default-aside-wd` | `200px` | 侧边栏宽度 |
| `@alain-default-aside-bg` | `#fff` | 侧边栏背景色 |
| `@alain-default-aside-scrollbar-width` | `0` | 侧边栏滚动条宽度 |
| `@alain-default-aside-scrollbar-height` | `0` | 侧边栏滚动条高度 |
| `@alain-default-aside-scrollbar-track-color` | `transparent` | 侧边栏滚动条的轨道颜色 |
| `@alain-default-aside-scrollbar-thumb-color` | `transparent` | 侧边栏滚动条小方块颜色 |
| `@alain-default-aside-nav-fs` | `14px` | 侧边栏菜单字号 |
| `@alain-default-aside-nav-icon-width` | `14px` | 侧边栏菜单 ICON 宽度 |
| `@alain-default-aside-nav-img-wh` | `14px` | 侧边栏菜单图像宽高 |
| `@alain-default-aside-nav-padding-top-bottom` | `@layout-gutter` | 侧边栏菜单项上下内边距 |
| `@alain-default-aside-nav-item-height` | `38px` | 侧边栏菜单项高度 |
| `@alain-default-aside-nav-text-color` | `rgba(0, 0, 0, 0.65)` | 侧边栏菜单文本颜色 |
| `@alain-default-aside-nav-text-hover-color` | `#108ee9` | 侧边栏菜单文本悬停颜色 |
| `@alain-default-aside-nav-group-text-color` | `rgba(0, 0, 0, 0.43)` | 侧边栏菜单分组文本颜色 |
| `@alain-default-aside-nav-selected-text-color` | `#108ee9` | 侧边栏菜单激活时文本颜色 |
| `@alain-default-aside-nav-selected-bg` | `#fcfcfc` | 侧边栏菜单激活时背景颜色 |
| `@alain-default-aside-collapsed-wd` | `@layout-gutter * 8` | 侧边栏收缩后宽度 |
| `@alain-default-aside-collapsed-nav-fs` | `24px` | 侧边栏收缩后文本字号 |
| `@alain-default-aside-collapsed-nav-img-wh` | `24px` | 侧边栏收缩后图像宽高 |
| `@alain-default-content-heading-bg` | `#fafbfc` | 内容区域标题背景色 |
| `@alain-default-content-heading-border` | `#efe3e5` | 内容区域标题底部边框色 |
| `@alain-default-content-padding` | `@layout-gutter * 3` | 内容区域内边距 |
| `@alain-default-content-bg` | `#f5f7fa` | 内容区域背景色 |
| `@alain-default-widget-app-icons-enabled` | `true` | 是否 app-icon 小部件样式 |
| `@alain-default-aside-user-enabled` | `true` | 是否侧边栏用户信息样式 |
