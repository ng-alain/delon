---
order: 10
title:
  en-US: Cli
  zh-CN: 命令行工具
type: Other
---

# 如何使用

`@delon/cli` 是基于 Angular Cli 向上构建的针对 ng-alain 脚手架的命令行工具，因此在安装之前要先确保以下类库应该安装：

**先决条件**

```bash
npm install -g @angular-devkit/core @angular-devkit/schematics @schematics/schematics rxjs
npm install -g @angular/cli
```

`@delon/cli` 允许你全局安装或只针对本地项目，对于全局后期所有命令都无需填写 `--collection` 选项。

## 安装&配置

### 全局

```bash
npm install -g @delon/cli
```

> 你可以进一步替换将 ng-alain 脚手架设置为默认项目模板：
>
> `ng set defaults.schematics.collection @delon/cli --global`
>
> 或者还原为 Angular Cli 默认的：
>
> `ng set defaults.schematics.collection @schematics/angular --global`

**注意：** 由于受限于 `require.resolve()`，需要将 `@delon/cli` 的相关文件复制至 Angular Cli 目录中，若出现下列异常几乎都是这个原因引起：

- `Error: Collection "@delon/cli" cannot be resolved`
- `Error: Path "/package.json" does not exist.`

```bash
# linux
cd /usr/local/lib/node_modules/@angular/cli/node_modules
mkdir @delon
cp -R /usr/local/lib/node_modules/@delon/* @delon/

# window（提醒：注意 `asdf` 替换成你的用户名）
cd C:\Users\asdf\AppData\Roaming\npm\node_modules
xcopy "@delon" "@angular\cli\node_modules\@delon" /s /e /y
```

### 本地项目

这里是指已经通过 Angular Cli 生成项目后，若你希望使用 `@delon/cli` 的话，则：

```bash
npm install @delon/cli --save-dev
```

设置 `.angular-cli.json` 的默认 `collection`：

```json
"defaults": {
  "schematics": {
    "collection": "@delon/cli"
  }
}
```

### 如何升级？

**全局**

必须先卸载：

```bash
npm uninstall -g @delon/cli
```

重新安装，同时需要将 `@delon/cli` 的相关文件复制至 Angular Cli 目录中：

> 如收到 `Error: Collection "@delon/cli" cannot be resolved` 则需要以下设置。

```bash
# linux
cd /usr/local/lib/node_modules/@angular/cli/node_modules
mkdir @delon
cp -R /usr/local/lib/node_modules/@delon/* @delon/

# window(tips: replace your name)
cd C:\Users\asdf\AppData\Roaming\npm\node_modules
xcopy "@delon" "@angular\cli\node_modules\@delon" /s /e /y
```

**本地项目**

修复版本号重新安装亦可。

## 如何生成项目

现在你可以直接使用 `ng new` 命令来创建 ng-alain 项目：

```bash
ng new -c=@delon/cli my-app
cd my-app
ng serve
```

当然，若你设置了 `defaults.schematics.collection` 则：

```bash
ng new my-app
cd my-app
ng serve
```

### 额外参数

在 `ng new` 基础上，新增几个针对脚手架参数：

| Alias | Arguments | Default | Summary |
| --------- | --------- | ------- | ------- |
| `-dv` | `--delon-version` | `next` | 指定 `@delon/*` 版本，值包括：`laster`、`next` |
| `-di` | `--delon-i18n` | `false` | 是否需要国际化支持 |
| `-dm` | `--delon-mock` | `true` | 是否需要 mock 功能 |
| `-g2` | `--delon-g2` | `false` | Support G2 chart. 是否需要 G2 图表 |
| `-df` | `--delon-form` | `true` | 是否需要 `@delon/form` 动态表单 |
| - | `--delon-electron` | `false` | 是否需要 electron 打包 |

例如生成一个带有国际化的项目：

```bash
ng new -c=@delon/cli my-app -di
# OR
ng new my-app -di
```

## Electron

当采用 Electron 打包跨平台应用时，可采用以下命令构建Angular项目：

```bash
ng new -c=@delon/cli my-app -di --delon-electron
```

ng-alain 脚手架只提供一个 electron 最基础的配置项，你可以通过 `package.json` 提供的命令快速的构建应用：

```bash
npm run el:bundle.windows
```

可将 Angular 打包成一个 Exe 应用程序。

> 脚手架对 Electron 的实现来自 [angular-electron-seed](https://github.com/sean-perkins/angular-electron-seed)；有关更多细节可参考。

## [page] 命令

@delon/cli 扩展了 `ng generate page` （简化：`ng g page`） 命令用于生成业务组件页。

### 参数

`page` 命令是由 `ng g component` 基础向下构建。

**命令格式**

```bash
ng g page [page name]
```

| Alias | Arguments | Default | Summary |
| --------- | --------- | ------- | ------- |
| `-t` | `--type` | `list` | 指定页面类型，值包括：`list`、`view (not yet)`、`edit (not yet)` |
| - | `--modal` | `true` | 是否模态框，限：`view`、`edit` 时有效 |

例如：

```bash
# 生成日志列表页
ng g page log

cd log

# 生成日志详情页
# ng g page view -t=view
```
