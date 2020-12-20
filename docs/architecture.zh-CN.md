---
order: 20
title: 体系结构
type: Basic
i18n: need-update
---

NG-ALAIN 目标是提供更多通用性业务模块，让开发者更加专注于业务。所以在你着手开始开发前，有必要了解整个 NG-ALAIN 的体系结构，从整体上了解 NG-ALAIN 包含了哪些东西及其含义，才能更好的利用这些业务组件库快速构建项目。

## 结构图

![](./assets/screenshot/architecture.png | width=700)

| 类库 | 文档 | 描述 |
|----|----|----|
| **@delon/theme** | [文档](/theme) | 主题系统除了包含 NG-ALAIN 基础框架及所需样式（包含CSS工具集，一套类似Bootstrap）以外，还包含一些通用的数据渲染（Pipe）、服务工具类（页面标题、滚动条等）的集合，这些是日常必不可少的一些组成 |
| **@delon/abc** | [文档](/components) | 脚手架内提供了一套默认业务组件，这些组件抽象了控制台业务中的一些常见区块。我们将持续维护和迭代这些组件，为中后台业务提供比 Ant Design 基础组件更高级别的抽象 |
| **@delon/chart** | [文档](/chart) | 基于 G2 的基础上二次封装，提供了业务中常用的图表套件，可以单独使用，也可以组合起来实现复杂的展示效果 |
| **@delon/form** | [文档](/form) | 基于 [JSON Schema](http://json-schema.org/) 标准的动态构建表单 |
| **@delon/auth** | [文档](/auth) | 用户认证模块，用于解决如何获取、存取、使用这三个步骤的用户认证环节 |
| **@delon/acl** | [文档](/acl) | 访问控制列表，是一种非常简单的基于角色权限控制，甚至达到控制某个按钮显隐的粒度 |
| **@delon/cache** | [文档](/acl) | 将字典、城市数据等缓存至内存或持久化当中，有效减少 Http 请求 |
| **@delon/mock** | [文档](/mock) | Mock 会拦截 Angular Http 请求并返回测试数据，当后端未完成接口时 Mock 技术是一项不会影响前端开发进度的工具 |
| **@delon/util** | [文档](/util) | 包含数组、延迟、字符串、日期、校验等常见工具集 |
| **@delon/testing** | - | 常用测试套件 |
| **CLI Schematics** | [文档](/cli) | 快速生成统一的模板、可插拔的插件等 |

## 目录结构

当使用 `ng add ng-alain` 生成后的 NG-ALAIN 脚手架，它的基本目录结构概略图如下：

```
├── _mock                                       # Mock 数据规则目录
├── angular.json                                # Angular 项目配置文件
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

以下是针对各个目录及文件说明及使用目的：

| 名称 | 描述 |
|----|----|
| **angular.json** | Angular 工作区及项目的配置文件，参考[Angular文档](https://angular.cn/guide/workspace-config) |
| **_mock** | Mock 数据规则目录，若你通过 [命令行工具](/cli) 创建项目时可以指定 `--mock` 参数决定是否需要 Mock 功能 |
| **src/app/core/core.module.ts** | 核心模块，只会导入一次。因此，针对整个**业务模块都需要**使用的纯服务类（例如：消息、数据访问等） |
| **src/app/core/i18n** | [国际化](/docs/i18n)数据加载及处理相关类，若你通过 [命令行工具](/cli) 创建项目时可以指定 `-di` 参数决定是否需要国际化支持 |
| **src/app/core/net** | 默认拦截器，你可以在这里统一处理请求参数、请求异常、业务异常等动作 |
| **src/app/core/services/startup.service.ts** | 当你需要在 Angular 启动前执行一些远程数据（例如：应用信息、用户信息等）时非常有用 |
| **src/app/layout** | 布局目录，包含基础布局、空白布局、用户登录布局 |
| **src/app/routes** | 业务模块，你的所有业务代码都将在这里 |
| **src/app/shared/shared.module.ts** | 共享模块，指当你需要针对整个**业务模块都需要**使用的一些第三方模块、自定义组件、自定义指令，都应该存在这里。除此之外，针对 @delon & NG-ZORRO 分别构建了 `shared-delon.module.ts`、`shared-zorro.module.ts` 两种次级共享模块的导入。 |
| **src/app/global-config.module.ts** | 针对 @delon & NG-ZORRO 的全局配置项 |
| **src/environments** | 应用环境变量，包含以下值：`SERVER_URL` 所有HTTP请求的前缀；`production` 是否生产环境；`useHash` 路由是否useHash模式 |
