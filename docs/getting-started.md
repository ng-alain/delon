---
order: 10
title:
  en-US: Getting Started
  zh-CN: 开始使用
type: Basic
---

## 一、写在前面

ng-alain 是一个企业级中后台前端/设计解决方案脚手架，目标也非常简单，希望在Angular上面开发企业后台更简单、更快速。随着『设计者』的不断反馈，将持续迭代，逐步沉淀和总结出更多设计模式和相应的代码实现，阐述中后台产品模板/组件/业务场景的最佳实践，也十分期待你的参与和共建。

**如何阅读文档**

在开始之前有一些文档描述约定说明，这有助于更好的阅读：

- API相关
  - `[]` 表示属性
  - `()` 表示事件
  - `[()]` 表示双向绑定
  - `ng-content` 表示组件内容占位符
  - `#tpl` 开头表示 `〈ng-template #tpl〉`

## 二、前序准备

你的本地环境需要安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。我们的技术栈基于 [Typescript](https://www.tslang.cn/)、[Angular](https://angular.io/)、[g2](http://g2.alipay.com/)、[@delon](https://github.com/ng-alain/delon) 和 [ng-zorro-antd](https://ng.ant.design/)，提前了解和学习这些知识会非常有帮助。

## 三、安装

```bash
ng new demo --style less
cd demo
ng add ng-alain
ng serve
```

请参考[命令行工具](/cli)了解更多细节。

## 四、目录结构

ng-alain 是一个标准的 Angular CLI 构建的项目，因此你会非常熟悉结构的组成。在此基础上提供了很多典型的模板，利用这些模板你可以快速地构建产品。

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
$ yarn
```

> 遇到问题请阅读 [常见问题](/docs/faq)

```bash
$ ng serve
```

启动完成后会打开浏览器访问 [//localhost:4200](//localhost:4200)，若你看到如下页面则代表成功了。

![](./assets/screenshot/desktop.png | width=700)
