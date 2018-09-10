---
order: 1
title: 开始使用
type: Documents
---

## 写在前面

使用 ng-alain 脚手架应尽可能的使用 Angular CLI 所提供的 `ng` 命令组，来构建、升级等，ng-alain 也实现了一些比较酷的事：

- 使用 [ng add](/cli/add) 构建空脚手架
- 使用 [ng g](/cli/generate) 来构建模块、业务页
- 可插拔 [插件](/cli/plugin) 等

## 如何使用

我们不建议直接克隆 Github 源代码，而应该使用 `ng add` 来构建 ng-alain 项目，而构建一个空 ng-alain 只需要简单几个动作：

1、创建一个空 angular 项目

```bash
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

除DEMO示例页以外，会有一些影响比较严重的，依然会提供 `ng update` 来解决升级问题，对于其他情况的升级请参考 [升级脚手架](/docs/upgrade)。
