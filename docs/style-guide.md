---
order: 90
title:
  en-US: Style Guide
  zh-CN: 编码规范建议
type: Advance
---

Angular CLI 构建的项目就其目录结构而言已经非常棒了，同时官网也有一份 [Angular Style Guide](https://angular.io/guide/styleguide)（[中文版](https://angular.cn/guide/styleguide)）风格指南，建议好好阅读几遍。除此之外，ng-alain 也有一部分编码风格，如下说明可能对于你阅读代码时有用。

## 风格指南

### 区域

将一组相同属性使用 `// #region ` & `// #endregion` 自由折叠代码预处理指令（限VSCODE），以 `shared.module.ts` 文件为例：

```ts
// #region third libs
import { NzSchemaFormModule } from 'nz-schema-form';
const THIRDMODULES = [ NzSchemaFormModule ];
// #endregion
```

将所有第三方模块放在 `third libs` 区域当中，并统一将注册模块放进 `THIRDMODULES` 变量中。你无须再关心导入和导出的问题，因为 `THIRDMODULES` 数组默认加入导入和导出行列中。

当我们在阅读一个比较长文件时，可以在VSCODE里折叠部分代码，更有助于阅读。

### API文档

应用总是免不了业务组件的开发，我们无法保证若干时间之后你还能记得这些，因此务必在每一个业务组件附带 `README.md` 文档，并描述API、DEMO等信息，例如：

```markdown
## 何时使用？

略

## DEMO

略

## API

参数 | 说明 | 类型 | 默认值
----|------|-----|------
src | 图片地址  | `string` | -
```

### 模块注册

请参数[模块注册指导原则](/docs/module)。

## 辅助项

ng-alain 配置了一些针对 CLI 选项，以便更好进行编码工作。

### CLI

vscode 是编写 Angular 最佳的选择，你可以在项目的任何目录里输入：`ng g c list` 生成组件的相应的文件。

ng-alain 默认配置了不生成样式文件&单元测试，因此，你会看到生成的只有 `.ts`、`.html`。这是因为 ng-alain 提供了非常丰富的样式API，在大多数页面中自定义样式并不是刚需的；同时，单元测试也是如此。

当然，你可以很容易在 `angular.json` 中调整默认配置。

### vscode snippets

vscode 是编写 Angular 最佳的选择，自然 ng-alain 也制作了相应 snippets 扩展插件：[ng-zorro-vscode](//marketplace.visualstudio.com/items?itemName=cipchk.ng-zorro-vscode) 和 [ng-alain-vscode](//marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode)。

## 一致的代码风格

ng-alain 使用 [Prettier](https://prettier.io/) 来优化代码风格，并且使其结果符合 `tslint.json`。

推荐安装几个插件在 vscode 中更友好的开发：

- [ng-zorro snippets](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-zorro-vscode)
- [ng-alain snippets](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Document This](https://marketplace.visualstudio.com/items?itemName=joelday.docthis)

> 可以通过配置 `.vscode/settings.json` 的 `formatOnSave` 在文件保存时自动修复代码风格。

## Git

### pre commit

`lint` 可以非常有效的帮助我们更早发现bug、更高的可读性；如果我们能够保证团队开发过程中每一次 commit 前都自动做一次 staged 中文件的 lint 的话，那不是非常酷吗？

ng-alain 配置了每次对 staged 进行 commit 时会预先做 lint，若发现错误则无法提交。

默认开启了 `*.ts`、`*.less` 的提交过程中强制对代码进行格式化，你可以通过修改 `package.json` 的 `lint-staged` 节点来改变些规则（例如：`prettier --write`）。
