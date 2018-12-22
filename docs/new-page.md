---
order: 10
title:
  en-US: New Page
  zh-CN: 新增页面
type: Dev
---

Angular 虽然是以组件树来渲染一个页面，然后实际开发是以一种模块树来组织代码，使其能更好地**代码复用**。而对于**模块粒度**取决于需求，ng-alain的定位在于中台前端，因此，比较建议从业务角度出发组织你的代码结构。

ng-alain 提供一套非常丰富的 Schematics 模板，可以快速创建符合 ng-alain 特点的模板和页面。

> 另：ng-alain 是一个标准的 Angular CLI 项目，你依然可以利用它快速的创建相关文件。

## 一、模块

要创建一个页面需要先创建一个模块开始，假如需要一个系统设置相关的模块，执行命令：

```bash
ng g ng-alain:module sys
```

CLI 会自动在 `src/app/routes/sys` 下创建 `sys.module.ts` 和 `sys-routing.module.ts` 文件，前者是系统设置模块组件定义文件；后者是系统设置模块路由配置文件。当然为了使模块跟主模块产生联系，还需要至 `src/app/routes/routes-routing.module.ts` 文件内注册新建的业务模块：

```ts
{
  path: '',
  component: LayoutDefaultComponent,
  children: [
    { path: 'sys', loadChildren: './sys/sys.module#SysModule' }
  ]
}
```

这样，你可以放心在 `sys` 目录中开始开发像菜单管理、日志、系统配置等业务页面。

## 二、页面

利用 `ng generate` 命令在 `sys` 目录下创建一个日志列表页：

```bash
ng g ng-alain:list log -m=sys
```

> 了解更多请参考[命令行工具](/cli)。

最终，你可以访问 [日志](//localhost:4200/#/sys/log) 页面。

当然日志可能是一个非常丰富的信息，可以增加一个以模态框打开的查看页来显示更多详情。

```bash
ng g ng-alain:view view -m=sys -t=log
```

`-t=log` 表示希望把创建的文件放进至 `sys/log/view` 下面。

## 三、IDE

除了 ng-alain 提供的 cli 命令行以外，推荐使用 [Visual Studio Code](https://code.visualstudio.com/) IDE，因为 ng-alain 针对 VSCode 增加一些额外的特性，可以更好的帮助你开发。

### 代码片断

- [ng-zorro snippets](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-zorro-vscode)
- [ng-alain snippets](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode)

### 代码风格

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

### 代码注释

- [Document This](https://marketplace.visualstudio.com/items?itemName=joelday.docthis)

### Class样式智能提醒

ng-alain 内置了大量的工具集样式（[API](/theme/tools)），安装以下插件可以直接在HTML模板里直接访问到它们。

- [ng-alain snippets](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode)

### 其它

- [Path Autocomplete](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete)
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
