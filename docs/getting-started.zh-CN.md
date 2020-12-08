---
order: 10
title: 介绍
type: Basic
---

## 什么是NG-ALAIN

NG-ALAIN 是一个企业级中后台前端/设计解决方案脚手架，我们秉承 [Ant Design](https://ant.design/) 的设计价值观，目标也非常简单，希望在Angular上面开发企业后台更简单、更快速。随着『设计者』的不断反馈，将持续迭代，逐步沉淀和总结出更多设计模式和相应的代码实现，阐述中后台产品模板/组件/业务场景的最佳实践，也十分期待你的参与和共建。

## 前序准备

你的本地环境需要安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。我们的技术栈基于 [Typescript](https://www.tslang.cn/)、[Angular](https://angular.cn/)、[g2](http://g2.alipay.com/)、[@delon](https://github.com/ng-alain/delon) 和 [ng-zorro-antd](https://ng.ant.design/)，提前了解和学习这些知识会非常有帮助。

## 环境搭建

Angular 开发环境至少需要安装 [Node.js](https://nodejs.org/en/download/)(Node.js 内置了 [npm](https://www.npmjs.com/get-npm) 无须单独安装，如果你习惯使用 [Yarn](https://yarnpkg.com/) 需要单独安装）、[VSCode](https://code.visualstudio.com/)，其中 Node.js 建议安装 LTS 版本，安装完成后可以通过终端窗口中运行：

```bash
node -v # 查看 Node.js 当前版本
npm -v  # 查看 Npm 当前版本
```

Npm 默认从国外源来下载包信息，鉴于国内环境因素，在开始下一步前先设定淘宝提供 Npm 源镜像：

```bash
# 设置淘宝源
npm config set registry https://registry.npm.taobao.org
npm config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass
# 恢复默认源
npm config delete registry
npm config delete sass_binary_site
```

> 也可以使用 [nrm](https://www.npmjs.com/package/nrm) 包，可以快速切换不同国内镜像源。

## 安装

### 全局 Angular Cli

安装之前请先确保本地已经安装全局 Angular Cli，只有这样才能随时随地在终端内执行 `ng` 命令，可以通过终端窗口中运行：

```bash
npm install -g @angular/cli
```

### 创建NG-ALAIN项目

NG-ALAIN 必须先创建一个全新的 Angular 项目，可以通过终端窗口中运行：

```bash
ng new my-project --style less --routing
```

> 如果你想了解 `--style`、`--routing` 参数，请参考[ng new](https://angular.io/cli/new#options)文档。

当提示 `Packages installed successfully.` 表示成功，接下来只需要将 NG-ALAIN 添加到 `my-project` 项目中即可，通过终端窗口分别执行以下三行命令：

```bash
cd my-project
ng add ng-alain
```

NG-ALAIN 会询问是否需要一些额外的插件，一开始完全可以一路回车，这些插件都是可插拔，后期可以自行添加与移除。

> 以上只会生成干净的项目，可以直接用于生产环境中，NG-ALAIN 开发了一些示例页面，我们建议有需要参考的可以通过 [Github](https://github.com/ng-alain/ng-alain) 上拷贝。当然也可以通过克隆代码的方式获得：
> ```bash
> git clone --depth=1 https://github.com/ng-alain/ng-alain.git my-project
> cd my-project
> npm install
> ```

### 运行

```bash
npm start
```

启动完成后会打开浏览器访问 [http://localhost:4200](http://localhost:4200)，若你看到如下页面则代表成功了。

![](./assets/screenshot/start.png | width=700)

恭喜你，你已经成功部署一个 NG-ALAIN 项目。

## 如何贡献

在任何形式的参与前，请先阅读 [贡献者文档](/docs/contributing)。如果你希望参与贡献，欢迎 [Pull Request](https://github.com/ng-alain/ng-alain/pulls)，或给我们 [报告 Bug](https://github.com/ng-alain/ng-alain/issues)。

> 强烈推荐阅读 [《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)(本指南不提供此项目的实际支持服务！)、[《如何向开源社区提问题》](https://github.com/seajs/seajs/issues/545) 和 [《如何有效地报告 Bug》](http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html)、[《如何向开源项目提交无法解答的问题》](https://zhuanlan.zhihu.com/p/25795393)，更好的问题更容易获得帮助。

## 社区互助

如果您在使用的过程中碰到问题，可以通过下面几个途径寻求帮助，同时我们也鼓励资深用户通过下面的途径给新人提供帮助。

通过 Stack Overflow 或者 Segment Fault 提问时，建议加上 `ng-alain` 标签。

1. QQ 群
    - [316911865](//shang.qq.com/wpa/qunwpa?idkey=f5102185e4ecf8b641a176596aca3037a45d3452329f69cf3bc496877cd087ff)
    - [428749721](//shang.qq.com/wpa/qunwpa?idkey=06823e225199af79b0c5ba3bbc89756ee57c2b0cc2115e3f44cc19230db2b0c3)
2. [![Segment Fault](https://gw.alipayobjects.com/zos/rmsportal/hfYFfCvHTQTUKntlJbMF.svg | width=140)](https://segmentfault.com/t/ng-alain)（中文）
3. 加入 NG-ALAIN 自助服务群（中文）

![](./assets/qq-group.png)

## 捐助

如果你觉得 NG-ALAIN 不错，可以考虑自愿为本站打赏或捐助。

![](./assets/donate.png)
