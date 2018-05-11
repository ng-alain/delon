---
order: 0
title:
  en-US: Getting Started
  zh-CN: 开始使用
type: Basic
---

## 一、写在前面

ng-alain 是一个企业级中后台前端/设计解决方案脚手架，目标也非常简单，希望在Angular上面开发企业后台更简单、更快速。随着『设计者』的不断反馈，将持续迭代，逐步沉淀和总结出更多设计模式和相应的代码实现，阐述中后台产品模板/组件/业务场景的最佳实践，也十分期待你的参与和共建。

## 二、前序准备

你的本地环境需要安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。我们的技术栈基于 [Typescript](https://www.tslang.cn/)、[Angular](https://angular.io/)、[g2](http://g2.alipay.com/)、[@delon](https://github.com/cipchk/delon) 和 [ng-zorro-antd](https://ng.ant.design/)，提前了解和学习这些知识会非常有帮助。

## 三、安装

有两种方式进行安装：

### 【推荐】命令行工具

需要依赖于 `@delon/cli`，[如何安装？](/docs/cli)

```bash
ng new -c=@delon/cli my-app
```

### 直接 clone git 仓库

```bash
$ git clone --depth=1 https://github.com/cipchk/ng-alain.git my-project

$ cd my-project
```

## 四、目录结构

ng-alain 是一个标准的 Angular cli 构建的项目，因此你会非常熟悉结构的组成。在此基础上提供了很多典型的模板，利用这些模板你可以快速的构建产品。

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

## 五、本地开发

安装依赖。

```bash
$ npm install
// 或
$ yarn
```

> 注：请勿使用 `cnpm` 安装依赖包，因为 ng-alain 脚手架需要依赖 `node_modules` 路径，而 `cnpm` 采用软链接会导致破坏文件夹名称，导致很难获取相应的样式文件。

如果网络状况不佳，可以使用 [nrm](https://www.npmjs.com/package/nrm) 并切换国内NPM镜像进行加速。

```bash
$ npm start
# 或以HMR模式启动：
$ npm run serve:hmr
```

启动完成后会打开浏览器访问 [//localhost:4200](//localhost:4200)，你看到下面的页面就代表成功了。

![](./assets/screenshot/desktop.png | width=700)
