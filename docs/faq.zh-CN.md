---
order: 20
title:
  en-US: FAQ
  zh-CN: 常见问题
type: Other
---

提问之前，请先查阅下面的常见问题。

## 基础

### Expression Changed After It Has Been Checked Error 错误

Angular 下常见错误，[这篇文章](https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4) 会帮助你理解原因。

### Can't bind to 'formGroup' since it isn't a known property of 'form'

Angular 下常见错误，使用 Reactive Forms 需要额外引入 `ReactiveFormsModule`，可以参考[官方文档](https://angular.io/guide/reactive-forms)。

### 数据修改后页面为什么没有更新

NG-ZORRO 及 @delon/* 组件默认在 OnPush 模式下工作，mutate 对象或者数组不会触发 Angular 的变更检测，请使用 immutable 方式。

### 如何使用@delon每日构建版本

NG-ALAIN 提供一个 [delon-builds](https://github.com/ng-alain/delon-builds.git) 仓储作为每日构建版本，它并不是最终稳定版本，但包含最新已修复BUG、最新功能，要使用可以在根目录创建 `delon.sh`：

```bash
#!/usr/bin/env bash
set -e
echo "Download latest @delon version"
rm -rf delon-builds
git clone --depth 1 https://github.com/ng-alain/delon-builds.git
rm -rf node_modules/@delon
rm -rf node_modules/ng-alain
rsync -am delon-builds/ node_modules/
NG_ALAIN_VERSION=$(node -p "require('./node_modules/ng-alain/package.json').version")
rm -rf delon-builds
echo "Using ng-alain version: ${NG_ALAIN_VERSION}"
```

当需要使用@delon的每日构建版本，只需要在运行：

```bash
bash delon.sh
```

> 如果是 Windows 环境，请使用 [WSL](https://docs.microsoft.com/en-us/windows/wsl/install) 来执行 Bash 脚本。

## 安装

### 为什么找不到 ng-zorro-antd/src/*.less 样式？

两种情况：

- 使用 `cnpm` 安装依赖包，会遇到无法找到样式文件。这是由于 `cnpm` 采用的是软链接路径形式，导致 `ng-zorro-antd` 文件夹名有所变动，因此建议改用 `yarn` 安装依赖包，如果是网络因素，请参考下方的如何正确使用淘宝源。
- `ng-zorro-antd` 版本过旧导致部分组件无法加载到相应样式

### 如何使用其他镜像源？

安装 [nnrm](https://github.com/YunYouJun/nnrm/blob/main/README.zh-CN.md) 插件。

```bash
# 安装 nnrm
npm install -g nnrm
# 将Npm切换至淘宝源（不同 npm 源管理器命令有点不一样，更多细节请参考 nnrm 文档）
nnrm use taobao
```

## 配置

### 如何本地部署 antd 图标？

首先，最新的 iconfont 文件可以到 [此链接](https://ant.design/docs/spec/download-cn)（[镜像](http://ant-design.gitee.io/docs/spec/download-cn)） 下载。

最后，在 `src/styles/theme.less` 重新定义新的路径：

```less
@icon-url: "/assets/iconfont";
```

> 使用绝对路径或CDN地址。

### Missing locale data for the locale "zh-cn"

缺少语言导入，参考[app.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/app.module.ts#L6-L25)。

### 如何本地部署ng-alain.com文档

线上文档将只保留最近三个主版本号的数据，若是低版本可以通过本地部署来查看：

```bash
git clone --depth 1 -b full https://github.com/ng-alain/archive-docs.git ng-alain-doc
cd ng-alain-doc
npm install
npm start
```

### 修复360浏览器下部分显示异常

部分360浏览器内置的 Chrome 核心过低，导致部分 CSS3 未支持，可以手动增加 `.browserslistrc` 更多细节参考  [#2310](https://github.com/ng-alain/ng-alain/issues/2310#issuecomment-1299460266)。
