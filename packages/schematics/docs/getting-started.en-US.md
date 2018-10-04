---
order: 1
title: Getting Started
type: Documents
---

## Foreword

Using ng-alain scaffolding should as use as possible the `ng` command set provided by the Angular CLI to build, upgrade, etc., ng-alain also implemented some cool things:

- Build empty scaffolding with [ng add](/cli/add)
- Use [ng g](/cli/generate) to build modules, business pages
- Pluggable [plugin](/cli/plugin)

## Installation

我们不建议直接克隆 Github 源代码，而应该使用 `ng add` 来构建 ng-alain 项目，而构建一个空 ng-alain 只需要简单几个动作：

We don't recommend directly cloning the git repository, but instead using `ng add` to build the ng-alain project, there are a few simple steps:

1. Create an empty angular project

```bash
# Make sure you are using the latest version of Angular cli
ng new demo --style less
```

2, add ng-alain scaffolding

```bash
ng add ng-alain@next
```

> If you any querstion, please refer to [FAQ](/docs/faq)

3, running

```bash
ng serve
```

## How to upgrade

Suggest Star or Watch [source code](https://github.com/ng-alain/ng-alain) repository to help you better understand change log.

please refer to [upgrade](/docs/upgrade).
