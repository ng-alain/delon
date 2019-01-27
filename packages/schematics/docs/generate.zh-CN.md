---
order: 20
title: ng g
subtitle: 业务页
type: Documents
---

## 写在前面

`ng generate`（简写：`ng g`）用于生成业务组件页，默认 Angular 所提供的模板跟 ng-alain 所需要的会有一些不同，例如我们希望生成一个模块时应该包括导入 `SharedModule`。

ng-alain 在此基础上增加了很多很酷的骚操作。

## 命令格式

```bash
ng g ng-alain:[command name] [name] [options]
```

> ng-alain 有自己的一套文件组织结构，当你破坏这些结构时，可能会导致下列指令产生异常。

## Module 模块

生成一个 `trade` 模块：

```bash
ng g ng-alain:module trade
```

会在 `routes/trade` 生成两个文件 `trade.module.ts`、`trade-routing.module.ts`，你无法指定不生成 `*-routing.module.ts` 因为这是 ng-alain 的任性。

模块内容包括了导入 `SharedModule` 以及一些统一性导入与导出的方式，并且你不可能破坏这些变量名（例如：`COMPONENTS`、`COMPONENTS_NOROUNT`、`routes`）。

## 业务页

目前包含的业务组件页，包括：

- `empty` 空白页
- `list` 列表页
- `edit` 编辑页
- `view` 查看页
- `curd` 列表、编辑、查看

在 `trade` 下生成 `list` 列表页：

```bash
ng g ng-alain:list list -m=trade
```

**注意：** `-m` 是必须指定的，因为 ng-alain 认为页面应该在某个具体的模块里，而不是幽灵。

### 骚操作

一般而言，一个模块可能会包含相同类型的业务页，而我们产生的文件结构可能希望是：

```
sys
  log
    view
      view.component.ts
    log.component.ts
  sys.module.ts
```

因此，当你希望生成的查看应该是在 `log` 组件（支持 `log/list` 多级写法）下面时，你可以这样子：

```bash
ng g ng-alain:view view -m=sys -t=log
```

### edit & view 页

对于 `edit`、`view` 默认是以模态框展示来生成，你可以改用页面展示则：

```bash
ng g ng-alain:edit [page name] --modal=false
```

> 如果你不小心将收到【No provider for NzModalRef! 】表明你把一个需要使用 `nzModalService` 打开的模态框组件，用了路由注册的方式。打开模态框组件无须注册路由，但需要注册至 `entryComponents`。

## 自定义页

除上述默认业务页以外，也可以自定义属于项目级别业务页，例如我们创建一个自己的编辑页模板，则只需要在项目的根目录创建以下目录结构：

```
└── _cli-tpl
│   └── edit                                              // 模板名称
│       └── __path__                                      // （名称固定值）
│           └── __name@dasherize@if-flat__                // （名称固定值）
│               ├── __name@dasherize__.component.ts       // 组件类文件（名称固定值）
│               ├── __name@dasherize__.component.html     // 组件模板文件（名称固定值）
│               └── __name@dasherize__.component.spec.ts  // 组件测试文件（名称固定值）
└── src
```

之后，只需要运行：

```bash
ng g ng-alain:tpl [your template name] [name] -m=trade
```

> 自定义页参数同业务页一致。

### 如何编写模板文件

在自定义页的目录结构里我们看到文件名以 `__` 前缀开头，事实上他们是一些变量占位符，Cli 默认传递一些参数及方法：

| 类型 | 参数名          | 默认      | 描述                                     |
| ---- | --------------- | --------- | ---------------------------------------- |
| 变量 | project         | -         | 项目名                                   |
| 变量 | name            | -         | 名称，相当于命令行的 `<name>`            |
| 变量 | path            | -         | 目标路径                                 |
| 变量 | flat            | `false`   | 文件是否扁平结构                         |
| 变量 | inlineTemplate  | `false`   | 是否内联模板（固定值：`false`）          |
| 变量 | selector        | -         | 组件 `selector`                          |
| 变量 | componentName   | -         | 组件名称                                 |
| 变量 | changeDetection | `Default` | 组件 `changeDetection` 值                |
| 变量 | modal           | -         | 是否使用 Modal 展示                      |
| 方法 | decamelize      | -         | 将字母串转换为由下划线分隔的所有小写字母 |
| 方法 | dasherize       | -         | 将空格或下划线用破折号替换               |
| 方法 | camelize        | -         | 返回字符串的小骆驼拼写法形式             |
| 方法 | classify        | -         | 返回字符串的大骆驼拼写法形式             |
| 方法 | underscore      | -         | 将字母串转换为由下划线分隔的所有小写字母 |
| 方法 | capitalize      | -         | 返回字符串首字母大写                     |

这些变量或方法可以在模板中使用，例如：`<%=componentName%>` 表示组件名，任何使用 `<% %>` 内可以使用 JavaScript 代码。有关模板编写可以参考：

- [delon](https://github.com/ng-alain/delon/blob/master/packages/schematics/edit/files/__path__/__name%40dasherize%40if-flat__/__name%40dasherize__.component.html)
- [material2](https://github.com/angular/material2/blob/master/src/lib/schematics/dashboard/files/__path__/__name%40dasherize%40if-flat__/__name%40dasherize__.component.html)

### 自定义数据

`tpl` 命令在生成文件之前允许你进一步处理数据，命令在执行过程中会检查是否存在 `_cli-tpl/_fix.js` 文件，并调用 `fix` 方法，方法必须返回一个 `Promise` 对象，例如：

> **注：** CLI 是一个 Node JS 程序，因此语法以 Node JS 为准。

```js
function fix(options) {
  return new Promise((resolve) => {
    resolve();
  });
}

module.exports = {
  fix
};
```

`fix` 只有一个 `options` 参数，它包含 CLI 产生所有参数数据，哪怕是一些未定义参数，例如：

```bash
ng g ng-alain:tpl list -m=setting --import-type=UserDto
```

其中 `import-type` 并不是命令自身的定义参数，但 `options` 会将这些未定义参数转换成 `extraArgs` 对象，因此你接收到的 `options` 会是:

```json
{
  "tplName": "test",
  "modal": true,
  ...
  "extraArgs": {
    "import-type": "UserDto"
  }
}
```

`options` 对象会传递给模板引擎，由此你可以附加一些处理后的数据给 `options`，并在模板文件内使用它们，例如：

```json
{
  "tplName": "test",
  "modal": true,
  ...
  "extraArgs": {
    "import-type": "UserDto",
    "newData": "asdf"
  }
}
```

你可以将 `newData` 应用到模板当中，例如 `__name@dasherize__.component.html`：

```html
<page-header></page-header>
<%= extraArgs.newData %>
```

结果为：

```html
<page-header></page-header>
asdf
```
