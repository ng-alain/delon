---
order: 10
title:
  en-US: Cli
  zh-CN: 命令行工具
type: Other
---

## 如何使用

`ng-alain` 脚手架实现了 `ng add` 来构建 ng-alain 项目，使得构建一个空 ng-alain 只需要简单几个动作：

1、创建一个空 angular 项目

```bash
ng new demo --style less
```

2、添加 ng-alain 脚手架

```bash
ng add ng-alain
```

> 默认情况下会执行依赖包的安装，但可能会受限于使用 npm、yarn 等的关系，会有部分包降级时依然无法生效（例如：`less` [#10430](https://github.com/angular/angular-cli/issues/10430)，绝大多数可能会收到 `.bezierEasingMixin();` 异常信息），此时可能需要删除 `node_modules` 再 `npm i` 或 `yarn` 来解决。

3、运行项目

```bash
ng serve
```

## 如何升级？

除DEMO示例页以外，会有一些影响比较严重的，依然会提供 `ng update` 来解决升级问题，对于其他情况的升级请参考 [升级脚手架](/docs/upgrade)。

## ng add

额外参数：

Arguments | Default | Summary
--------- | ------- | -------
`--codeStyle` | `true` | 是否需要代码风格
`--form` | `true` | 是否需要动态表单
`--mock` | `true` | 是否需要 mock 功能
`--i18n` | `false` | 是否需要国际化支持
`--g2` | `false` | 是否需要 G2 图表

例如生成一个带有国际化的项目：

```bash
ng add ng-alain --i18n
```

## ng generate

### 业务页模板

`ng generate` 用于生成业务组件页，包括：

- `list` 列表页
- `edit` 编辑页
- `view` 查看页

当你需要一个列表页时：

```bash
ng generate ng-alain:list <page name>
```

对于 `edit`、`view` 默认是以模态框展示来生成，你可以改用页面展示则：

```bash
ng generate ng-alain:edit <page name> --modal=false
```

> 这些命令类似 `ng generate component`，因此允许你依然可以使用所有对应参数，你可通过：

```bash
ng generate ng-alain:list --help
```

了解参数细节。

### 插件管理

ng-alain 脚手架提供非常丰富的基建，但并非所有都是你希望的；这些基建你可以在 `ng add` 构建新项目得到它们。但有此时候希望可插拔部分基建时，例如把 G2 从项目中移除：

```bash
ng generate ng-alain:plugin g2 -t=remove
```

或者添加G2：

```bash
ng generate ng-alain:plugin g2
```

`ng-alain:plugin` 目前只支持 g2，未来会持续增加更多类型的支持。
