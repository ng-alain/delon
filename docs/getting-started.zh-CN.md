---
order: 10
title: 开始使用
type: Basic
---

## 写在前面

NG-ALAIN 是一个企业级中后台前端/设计解决方案脚手架，我们秉承 [Ant Design](https://ant.design/) 的设计价值观，目标也非常简单，希望在Angular上面开发企业后台更简单、更快速。随着『设计者』的不断反馈，将持续迭代，逐步沉淀和总结出更多设计模式和相应的代码实现，阐述中后台产品模板/组件/业务场景的最佳实践，也十分期待你的参与和共建。

**如何阅读文档**

在开始之前有一些文档描述约定说明，这有助于更好的阅读：

- API相关
  - `[]` 表示属性
  - `()` 表示事件
  - `[()]` 表示双向绑定
  - `ng-content` 表示组件内容占位符
  - `#tpl` 开头表示 `〈ng-template #tpl〉`

## 前序准备

你的本地环境需要安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。我们的技术栈基于 [Typescript](https://www.tslang.cn/)、[Angular](https://angular.cn/)、[g2](http://g2.alipay.com/)、[@delon](https://github.com/ng-alain/delon) 和 [ng-zorro-antd](https://ng.ant.design/)，提前了解和学习这些知识会非常有帮助。

## 安装

### CLI（推荐）

请先通过 `ng version` 命令确认全局 Angular Cli 版本为最新版本号（当前最新版本号：<img src="https://img.shields.io/npm/v/@angular/cli.svg?style=flat-square" alt="npm">），有关如何升级请参考[CLI 命令参考手册](https://angular.cn/cli)。

```bash
ng new my-project --style less
cd my-project
ng add ng-alain
npm start
```

> 请参考[命令行工具](/cli)了解更多细节。

### 克隆代码

```bash
git clone --depth=1 https://github.com/ng-alain/ng-alain.git my-project
cd my-project
yarn
npm start
```

> 注：使用CLI安装，是一个干净的脚手架；使用克隆代码会包含所有示例。

## 目录结构

NG-ALAIN 是一个标准的 Angular CLI 构建的项目，并提供了涵盖中后台开发的各类功能和坑位，下面是整个项目的目录结构。

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

## 本地开发

```bash
npm start
```

启动完成后会打开浏览器访问 [//localhost:4200](//localhost:4200)，若你看到如下页面则代表成功了。

![](./assets/screenshot/desktop.png | width=700)


如果您使用方法一安装，则右边只有部分菜单。

## 如何贡献

在任何形式的参与前，请先阅读 [贡献者文档](/docs/contributing)。如果你希望参与贡献，欢迎 [Pull Request](https://github.com/ng-alain/ng-alain/pulls)，或给我们 [报告 Bug](https://github.com/ng-alain/ng-alain/issues)。

> 强烈推荐阅读 [《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)(本指南不提供此项目的实际支持服务！)、[《如何向开源社区提问题》](https://github.com/seajs/seajs/issues/545) 和 [《如何有效地报告 Bug》](http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html)、[《如何向开源项目提交无法解答的问题》](https://zhuanlan.zhihu.com/p/25795393)，更好的问题更容易获得帮助。

## 社区互助

如果您在使用的过程中碰到问题，可以通过下面几个途径寻求帮助，同时我们也鼓励资深用户通过下面的途径给新人提供帮助。

通过 Stack Overflow 或者 Segment Fault 提问时，建议加上 `ng-alain` 标签。

1. QQ 群
    - [316911865](//shang.qq.com/wpa/qunwpa?idkey=f5102185e4ecf8b641a176596aca3037a45d3452329f69cf3bc496877cd087ff) 满
    - [428749721](//shang.qq.com/wpa/qunwpa?idkey=06823e225199af79b0c5ba3bbc89756ee57c2b0cc2115e3f44cc19230db2b0c3)
2. [![Stack Overflow](https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-logo.svg | width=140)](https://stackoverflow.com/questions/tagged/ng-alain)（English）
3. [![Segment Fault](https://gw.alipayobjects.com/zos/rmsportal/hfYFfCvHTQTUKntlJbMF.svg | width=140)](https://segmentfault.com/t/ng-alain)（中文）
4. 加入 NG-ALAIN 自助服务群（中文）

![](./assets/qq-group.png)

## 捐助

如果你觉得 NG-ALAIN 不错，可以考虑自愿为本站打赏或捐助。

![](./assets/donate.png)
