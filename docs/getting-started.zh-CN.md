---
order: 10
title: 介绍
type: Basic
i18n: need-update
---

## 什么是NG-ALAIN

NG-ALAIN 是一个企业级中后台前端/设计解决方案脚手架，我们秉承 [Ant Design](https://ant.design/) 的设计价值观，目标也非常简单，希望在Angular上面开发企业后台更简单、更快速。随着『设计者』的不断反馈，将持续迭代，逐步沉淀和总结出更多设计模式和相应的代码实现，阐述中后台产品模板/组件/业务场景的最佳实践，也十分期待你的参与和共建。

## 环境搭建

Angular 开发环境至少需要安装 [Node.js](https://nodejs.org/en/download/)(Node.js 内置了 [npm](https://www.npmjs.com/get-npm) 无须单独安装，但**推荐使用** [Yarn](https://yarnpkg.com/) 但你需要单独额外安装）、[VSCode编辑器](https://code.visualstudio.com/)，其中 Node.js 建议安装 **LTS** 版本，安装完成后可以通过终端窗口中运行：

```bash
node -v # 查看 Node.js 当前版本
yarn -v # 查看 Yarn 当前版本
```

Yarn 默认从国外源来下载包信息，鉴于国内环境因素，在开始下一步前先设定淘宝提供镜像：

```bash
yarn config set registry https://registry.npmmirror.com
yarn config set sass_binary_site https://npmmirror.com/mirrors/node-sass
# restore
yarn config delete registry
yarn config delete sass_binary_site
```

> 也可以使用 [nrm](https://www.npmjs.com/package/nrm) 包，可以快速切换不同国内镜像源。

## 安装

### 全局 Angular Cli

安装之前请先确保本地已经安装全局 Angular Cli，只有这样才能随时随地在终端使用 `ng` 命令，可以通过终端窗口中运行：

```bash
yarn global add @angular/cli
```

### 创建NG-ALAIN项目

NG-ALAIN 必须先创建一个全新的 Angular 项目，可以通过终端窗口中运行：

```bash
ng new my-project --style less --routing --package-manager yarn
```

> 如果你想了解 `--style`、`--routing` 参数，请参考 [ng new](https://angular.io/cli/new#options) 文档。

接下来只需要将 NG-ALAIN 添加到 `my-project` 项目中即可，在 `my-project` 目录下通过终端窗口中运行：

```bash
cd my-project
ng add ng-alain
```

NG-ALAIN 会询问是否需要一些额外的插件，一开始完全可以一路回车，这些插件都是可插拔，后期可以自行添加与移除。

> 以上只会生成干净的项目，可以直接用于生产环境中。你可能在[预览](https://ng-alain.gitee.io/)上看到许多示例页，它们全都可以在 [Github](https://github.com/ng-alain/ng-alain) 查看到源代码，当然也可以通过 Git 克隆代码的形式获得：
> ```bash
> git clone --depth=1 https://github.com/ng-alain/ng-alain.git my-project
> cd my-project
> yarn install
> ```

### 运行

```bash
yarn start
```

启动完成后会打开浏览器访问 [http://localhost:4200](http://localhost:4200)，若你看到如下页面则代表成功了。

![](./assets/screenshot/start.png | width=700)

恭喜你，你已经成功部署一个 NG-ALAIN 项目。

## 支持环境

- **受限于 Angular，不再支持 IE**
- 现代浏览器，[浏览器支持](https://angular.io/guide/browser-support)
- 支持服务端渲染
- [Electron](https://electron.atom.io/)

| [<img src="https://img.alicdn.com/tfs/TB1G5ewZuL2gK0jSZPhXXahvXXa-48-48.png" alt="IE / Edge" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges//)<br>IE / Edge | [<img src="https://img.alicdn.com/tfs/TB1Dx73o79l0K4jSZFKXXXFjpXa-48-48.png" alt="Firefox" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://img.alicdn.com/tfs/TB1mY9FZrr1gK0jSZFDXXb9yVXa-48-48.png" alt="Chrome" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://img.alicdn.com/tfs/TB1Vas5o79l0K4jSZFKXXXFjpXa-48-48.png" alt="Safari" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://img.alicdn.com/tfs/TB12EmNZET1gK0jSZFrXXcNCXXa-48-48.png" alt="Opera" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)<br>Opera | [<img src="https://img.alicdn.com/tfs/TB1TMW8paNj0u4jSZFyXXXgMVXa-48-48.png" alt="Electron" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)<br>Electron |
| --- | --- | --- | --- | --- | --- |
| Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

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
