---
order: 30
title:
  en-US: Scaffold
  zh-CN: 脚手架结构
type: Basic
---

## 目录结构

以下脚手架目录结构概略图：

```
├── _mock                                       # Mock 数据规则
├── src
│   ├── app
│   │   ├── core                                # 核心模块
│   │   │   ├── i18n
│   │   │   ├── net
│   │   │   │   └── default.interceptor.ts      # 默认HTTP拦截器
│   │   │   ├── services
│   │   │   │   └── startup.service.ts          # 初始化项目配置
│   │   │   └── core.module.ts                  # 核心模块文件
│   │   ├── layout                              # 通用布局
│   │   ├── routes
│   │   │   ├── **                              # 业务目录
│   │   │   ├── routes.module.ts                # 业务路由模块
│   │   │   └── routes-routing.module.ts        # 业务路由注册口
│   │   ├── shared                              # 共享模块
│   │   │   └── shared.module.ts                # 共享模块文件
│   │   ├── app.component.ts                    # 根组件
│   │   └── app.module.ts                       # 根模块
│   │   └── delon.module.ts                     # @delon模块导入
│   ├── assets                                  # 本地静态资源
│   ├── environments                            # 环境变量配置
│   ├── styles                                  # 样式目录
└── └── style.less                              # 样式引导入口
```

以下是针对各个目录及文件说明及使用目的。

**_mock**

Mock 数据规则目录，若你通过 [命令行工具](/cli) 创建项目时可以指定 `--mock` 参数决定是否需要 Mock 功能。

**src/app/core/core.module.ts**

核心模块，只会导入一次。因此，针对整个**业务模块都需要**使用的纯服务类（例如：消息、数据访问等），都应该存在这里。

**src/app/core/i18n**

[国际化](/docs/i18n)数据加载及处理相关类，若你通过 [命令行工具](/cli) 创建项目时可以指定 `-di` 参数决定是否需要国际化支持。

**src/app/core/net**

默认拦截器，你可以在这里统一处理请求参数、请求异常、业务异常等动作。

**src/app/core/services/startup.service.ts**

当你需要在 Angular 启动前执行一些远程数据（例如：应用信息、用户信息等）时非常有用。

> 它是一个单纯的方法且返回一个 `Promise` 对象，除非明确执行 `resolve(null)` 否则 Angular 将会中止启动。

**src/app/layout**

布局文件代码，参考页面结构小节。

**src/app/routes**

业务模块，你的所有业务代码都将在这里。

**src/app/shared/shared.module.ts**

共享模块，指当你需要针对整个**业务模块都需要**使用的一些第三方模块、自定义组件、自定义指令，都应该存在这里。

**src/app/delon.module.ts**

针对 @delon 系列的模块导入集合，默认情况下导入所有模块，你可以利用[优化](/docs/performance)章节，进一步按需优化。

**src/styles/_alain-custom-variables.less**

**【【勿删】】** 可以根据需求调整 alain 的默认参数。

**src/environments**

应用环境变量，包含以下值：

- `SERVER_URL` 所有HTTP请求的前缀
- `production` 是否生产环境
- `useHash` 路由是否useHash模式

## 页面结构

整体布局是指包含导航、侧边栏、内容区域、页脚等最外层的框架结构。

同时在内部区域内，也需要区块的布局诸如表单、搜索框、列表页等，针对此目前 NG-ZORRO 有两套布局方案：[Layout](https://ng.ant.design/#/components/layout) 和 [Grid](https://ng.ant.design/#/components/grid)。

脚手架默认提供三种整体布局方案：

| 类型 | 位置 | 描述 |
| ---- | --- | ---- |
| 基础 | [LayoutDefaultComponent](https://github.com/ng-alain/ng-alain/tree/master/src/app/layout/default) | - |
| 全屏 | [LayoutFullScreenComponent](https://github.com/ng-alain/ng-alain/blob/master/src/app/layout/fullscreen) | - |
| 用户授权 | [LayoutPassportComponent](https://github.com/ng-alain/ng-alain/blob/master/src/app/layout/passport) | - |

### 基础布局

按上-左-右布局方式，运用于**业务页**的开发。其规范细节：

+ 顶部区域高度 `64px`（参数：`@header-hg`）
+ 侧边区域宽度 `200px`（参数：`@aside-wd`）
    + 当屏幕低于 `1140px` 宽时隐藏侧边导航
    + 当屏幕低于 `1140px` 宽时打开侧边导航为 `fixed` 状态
    + 主要包括一个 [sidebar-nav（点击查看API）](/components/sidebar-nav) 组件

> 参数是指可以通过 `src/styles/_alain-custom-variables.less` 文件按需要调整。

**顶部区域**

位置：*src/app/layout/default/header*。

脚手架默认提供了一些常规顶部区域组件，这些组件都存放于 *components* 目录中。同时 `@delon/abc` 也提供若干顶部组件（例如：[notice-icon](/components/notice-icon) 通知菜单组件）。你可以根据提供的组件自行组合或自行开发。

> 脚手架支持响应式布局，对于顶部区域可能会是在小屏幕下需要隐藏一些组件，因此你可以在对应的DOM节点上加上 `hidden-xs` 表示当屏幕小于 `768px` 时自动隐藏。

**侧边区域**

位置：*src/app/layout/default/sidebar*。

只包括一个用户信息和主菜单。主菜单是一个 [sidebar-nav](/components/sidebar-nav) 组件，具体使用细节请至[业务组件](/components/sidebar-nav)中查询。

**内部区域**

内容区域是业务页区域，规范细节：

+ 内容距离页面标准、侧边、右边滚动条、底部，这四边距依一个标准Dashboard的Gutter宽度 `24px`。

### 全屏布局

用于无须任何顶部和侧边区域，一般用于高定制性页面，诸如大屏幕数据等。

### 用户授权布局

用于 `/passport/login` 系列用户相关页。

### 自定义布局

如果提供的布局不能满足你的要求，就需要自己新建 Layout 模板了。只需要在 layout.module.ts 中定义即可。
