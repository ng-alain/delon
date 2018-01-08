---
order: 0
title:
  en-US: Getting Started
  zh-CN: 开始使用
type: Basic
---

## 写在前面

ng-alain 是一个基于 ng-zorro-antd 的企业级中后台前端脚手架，目标也非常简单，希望在Angular上面开发企业后台更简单、更快速。

## 版本

| package name | version | next version |
| ------------ |:-----:|:----------:|
| @delon/theme | [![NPM version](https://img.shields.io/npm/v/@delon/theme.svg)](https://www.npmjs.com/package/@delon/theme) | [![NPM version](https://img.shields.io/npm/v/@delon/theme/next.svg)](https://www.npmjs.com/package/@delon/theme) |
| @delon/abc | [![NPM version](https://img.shields.io/npm/v/@delon/abc.svg)](https://www.npmjs.com/package/@delon/abc) | [![NPM version](https://img.shields.io/npm/v/@delon/abc/next.svg)](https://www.npmjs.com/package/@delon/abc) |
| @delon/acl | [![NPM version](https://img.shields.io/npm/v/@delon/acl.svg)](https://www.npmjs.com/package/@delon/acl) | [![NPM version](https://img.shields.io/npm/v/@delon/acl/next.svg)](https://www.npmjs.com/package/@delon/acl) |
| @delon/auth | [![NPM version](https://img.shields.io/npm/v/@delon/auth.svg)](https://www.npmjs.com/package/@delon/auth) | [![NPM version](https://img.shields.io/npm/v/@delon/auth/next.svg)](https://www.npmjs.com/package/@delon/auth) |
| @delon/mock | [![NPM version](https://img.shields.io/npm/v/@delon/mock.svg)](https://www.npmjs.com/package/@delon/mock) | [![NPM version](https://img.shields.io/npm/v/@delon/mock/next.svg)](https://www.npmjs.com/package/@delon/mock) |
| @delon/cache | - | [![NPM version](https://img.shields.io/npm/v/@delon/cache/next.svg)](https://www.npmjs.com/package/@delon/cache) |

## 安装

有二种方式进行安装：

### 直接 clone git 仓库

```bash
# 基础版（只包括最基本功能）
git clone -b blank --depth 1 https://github.com/cipchk/ng-alain.git my-project
# 或完整版（含所有示例）
$ git clone --depth=1 https://github.com/cipchk/ng-alain.git my-project

$ cd my-project
```

### 下载压缩包

点击 [https://github.com/cipchk/ng-alain/archive/master.zip](https://github.com/cipchk/ng-alain/archive/master.zip) 下载到本地后解压。

## 目录结构

ng-alain 是一个标准的 Angular cli 构建的项目，因此你会非常熟悉结构的组成。在此基础上提供了很多典型的模板，利用这些模板你可以快速的构建产品。

```
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
│   │   │   └── routes.ts                       # 业务路由注册口
│   │   ├── shared                              # 共享模块
│   │   │   └── core.module.ts                  # 共享模块文件
│   │   ├── app.component.ts                    # 根组件
│   │   └── app.module.ts                       # 根模块
│   ├── assets                                  # 本地静态资源
│   ├── environments                            # 环境变量配置
│   ├── styles                                  # 样式目录
└── └── style.less                              # 样式引导入口
```

## 本地开发

安装依赖。

```bash
$ npm install
```

如果网络状况不佳，可以使用 [cnpm](//cnpmjs.org/) 进行加速。

```bash
$ npm start
```

或以HMR模式启动：

```bash
$ npm run serve:hmr
```

启动完成后会打开浏览器访问 [//localhost:4200](//localhost:4200)，你看到下面的页面就代表成功了。

![](./assets/screenshot/desktop.png | width=700)
