---
order: 1
title: 开始使用
type: Documents
---

## 写在前面

使用 ng-alain 脚手架应尽可能的使用 Angular CLI 所提供的 `ng` 命令组，来构建、升级等，ng-alain 也实现了一些比较酷的事：

- 使用 [ng add](/cli/add) 构建空脚手架
- 使用 [ng g](/cli/generate) 来构建模块、业务页
- 可插拔 [插件](/cli/plugin)

## 如何使用

我们不建议直接克隆 Github 源代码，而应该使用 `ng add` 来构建 ng-alain 项目，而构建一个空 ng-alain 只需要简单几个动作：

1、创建一个空 angular 项目

```bash
# 确保使用的是最新版本 Angular cli
ng new demo --style less
```

2、添加 ng-alain 脚手架

```bash
ng add ng-alain@next
```

> 遇到问题请阅读 [常见问题](/docs/faq)

3、运行项目

```bash
ng serve
```

## 如何升级

建议 Start 或 Watch [源代码](https://github.com/ng-alain/ng-alain)仓库，有助于你更好的在第一时间了解变更细节。

除DEMO示例页以外，会有一些影响外，对于大版本会提供 `ng update` 来解决破坏性变更，对于其他情况的升级请参考 [升级脚手架](/docs/upgrade)。
