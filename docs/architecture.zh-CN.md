---
order: 20
title: 体系结构
type: Basic
i18n: need-update
---

在开始进行业务开发前，有必要了解整个 NG-ALAIN 的体系结构，这有助于你先从整体上了解 NG-ALAIN 包含了哪些东西。它是基于 Angular 和 [NG-ZORRO](https://ng.ant.design/)（Ant Design 的 Angular 版本） 基础组件库的中后台前端解决方案。脚手架包含着一套通用的功能和业务组件库，它们可以极大地减少一些基础建设开发工作。

## 结构图

![](./assets/screenshot/architecture.png | width=700)

**@delon/theme**

脚手架主题系统库，我们将主题相关发布至 Npm 当中，这极大地简化了升级成本。

主题系统除了包含 NG-ALAIN 基础框架所需要的样式（包含CSS工具集，一套类似bootstrap）以外，还包含一些通用的数据渲染（Pipe）、服务工具类（页面标题、滚动条等）的集合，这些是日常必不可少的一些组成。

**@delon/abc**

脚手架内提供了一套默认[业务组件](/components/)，这些组件抽象了控制台业务中的一些常见区块。我们将持续维护和迭代这些组件，为中后台业务提供比 Ant Design 基础组件更高级别的抽象。

**@delon/chart**

[@delon/chart](/chart) 图表是基于 G2 的基础上二次封装，提供了业务中常用的图表套件，可以单独使用，也可以组合起来实现复杂的展示效果。

**@delon/form**

[@delon/form](/form) 是一个基于 [JSON Schema](http://json-schema.org/) 标准的动态构建表单。

**@delon/auth**

[用户认证](/auth)模块，用于解决如何获取、存取、使用这三个步骤的用户认证环节。

**@delon/acl**

[ACL](/acl)访问控制列表，是一种非常简单的基于角色权限控制，甚至达到控制某个按钮显隐的粒度。

**@delon/cache**

将字典、城市数据等[缓存](/cache)至内存或持久化当中，有效减少 Http 请求。

**@delon/mock**

[Mock](/mock)会拦截 Angular Http 请求并返回测试数据。

**@delon/util**

[日常工具集](/util)。

**@delon/testing**

常用测试套件。

**CLI Schematics**

[命令行工具](/cli)。

## 目录结构

以下脚手架目录结构概略图：

```
├── _mock                                       # Mock 数据规则目录
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
│   │   │   ├── shared-delon.module.ts          # @Delon/* 次级共享模块导入
│   │   │   ├── shared-zorro.module.ts          # NG-ZORRO 次级共享模块导入
│   │   │   └── shared.module.ts                # 共享模块文件
│   │   ├── app.component.ts                    # 根组件
│   │   └── app.module.ts                       # 根模块
│   │   └── global-config.module.ts             # @delon & ng-zorro 全局配置项
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

共享模块，指当你需要针对整个**业务模块都需要**使用的一些第三方模块、自定义组件、自定义指令，都应该存在这里。除此之外，针对 @delon & NG-ZORRO 分别构建了 `shared-delon.module.ts`、`shared-zorro.module.ts` 两种次级共享模块的导入。

**src/app/global-config.module.ts**

针对 @delon & NG-ZORRO 的全局配置项。

**src/environments**

应用环境变量，包含以下值：

- `SERVER_URL` 所有HTTP请求的前缀
- `production` 是否生产环境
- `useHash` 路由是否useHash模式
