---
order: 15
title: 升级到 2.0 版本
type: Basic
hot: true
---

ng-alain 2.0 变更主要从两个方面：

- 使 CURD 操作更“自然”开发体验（[#588](https://github.com/ng-alain/ng-alain/issues/588)）
- 更友好响应式开发

原 `simple-table`、`sf` 是受大家喜欢的组件之一，因此 ng-alain 2.0 重构并增加三个 Simple 系列组件：

- [st](/components/table) 原 `simple-table`
  - 输入属性的变更，若你之前**通用配置优先**来使用的话，这些改变会少非常多
  - 列描述所有的变更都做兼容处理
- [sf](/form) 动态表单
- [sv](/components/view) 查看
- [se](/components/edit) 编辑
- [sg](/components/grid) 栅格布局

ng-alain 2.0 启用全新的 [ng-alain 组织](https://github.com/ng-alain/)，并已经将相关的类库代码迁移至该组织下，因此部分示例链接也做改变：

- [DEMO](https://ng-alain.github.io/ng-alain/)
- 原 1.x [文档站](https://ng-alain.github.io/1.x-doc/)

此文档是为了更好将你的项目迁移至 2.0，当前版本还是 Beta 版本，会在正式版后发布部分组件变更的 `ng update` 支持，变更分为两个大部分：脚手架和 `@delon/*` 类库，以下是针对两个部分的细节说明。

## 脚手架

脚手架的变更带有一些破坏性，主要是重构布局样式采用 BEM 命名，所有变更都在 [#673](https://github.com/ng-alain/ng-alain/pull/673/files) 内（建议在 Github 上安装 [octotree](https://github.com/buunguyen/octotree) 可以更好的了解变更细节），所有 **#diff** 和有效链接都可以直接打开定位到变更具体细节。

### 1、依赖包

升级 `@angular` 和 `@delon` 依赖包至最新版本

+ 取消降级 less [#diff](https://github.com/ng-alain/ng-alain/pull/673/files#diff-b9cfc7f2cdf78a7f4b91a753d10865a2)

### 2、布局

由于重新采用 BEM 来命名默认布局，这倒置所有 `src/app/layout/default` 需要修改相应样式名称。

#### 修改部分

**默认布局**

1. `default.component.html` 移除 `wrapper`，并对所有样式增加 `alain-default__` 前缀 [#diff](https://github.com/ng-alain/ng-alain/pull/673/files#diff-9612c23254b7dc14e5c53e51b1bca111)
2. `default.component.ts` 增加 `alain-default` 样式 [#diff](https://github.com/ng-alain/ng-alain/pull/673/files#diff-22fe6ac5f1a555ff396d16fabf60a675R25)
3. 其他 [header](https://github.com/ng-alain/ng-alain/pull/673/files#diff-1f3f3064a6d8f8166fcc1942f89ff05f) [sidebar](https://github.com/ng-alain/ng-alain/pull/673/files#diff-769b589ea25ae4b5a6f1cce29a2ce63d) 细节
4. 标题 `content__title` 变成 `alain-default__content-title`，可以直接搜索替换。

**全屏布局**

1. `fullscreen.component.ts` 增加 `alain-fullscreen` 样式 [#diff](https://github.com/ng-alain/ng-alain/pull/673/files#diff-d8f5e3ca4fcf1fd0a9b262a0bb0ceefa)

#### 新增功能

- 增加 [SettingDrawer](https://github.com/ng-alain/ng-alain/pull/673/files#diff-eb34ac4377d878ea489b5c2c9f498f03R17) 面板
  - 只对开发模式有效
  - 需要依赖 [src/assets/alain-default.less](https://github.com/ng-alain/ng-alain/blob/4cd7fac7c83f7ee9907c94819087bce347726cc7/src/assets/alain-default.less)
- 增加色弱模式 [#diff](https://github.com/ng-alain/ng-alain/pull/673/files#diff-5c26d2c8f8838f32ace87fdecd6344eaR31)
- 增加切换路由时强制关掉所有已打开 `NzModel` [#diff](https://github.com/ng-alain/ng-alain/pull/673/files#diff-5c26d2c8f8838f32ace87fdecd6344eaR61)

## delon 类库

### 新类库

| 原所在库          | 新库    | 描述                                                                                                                       |
| ----------------- | ------- | -------------------------------------------------------------------------------------------------------------------------- |
| `abc/chart`       | `chart` | G2 图表，需要重新引入 [#diff](https://github.com/ng-alain/ng-alain/pull/673/files#diff-6c960904023c582a766661950a35b283R8) |
| `abc/number-info` | `chart` | -                                                                                                                          |
| `abc/trend`       | `chart` | -                                                                                                                          |

### abc 类库组件名变更

| 原组件名            | 新组件名 | ng update | 描述 |
| ------------------- | -------- | --------- | ---- |
| `simple-table`      | `st`     | √         | -    |
| `desc-list`         | `sv`     | √         | -    |
| `simple-html-form`  | `se`     | √         | -    |
| `standard-form-row` | `se`     | √         | 过期提醒    |

例如：

```diff
- <simple-table></simple-table>
+ <st></st>
```

### 使用 `Input` 替代 `ContentChild`

| 所属组件         | 原ContentChild | 新属性名     | ng update | 描述 |
|------------------|----------------|--------------|-----------|------|
| `st`             | `body`         | `body`       | √         | -    |
| `st`             | `expand`       | `expand`     | √         | -    |
| `footer-toolbar` | `extra`        | `extra`      | √         | -    |
| `page-header`    | `breadcrumb`   | `breadcrumb` | √         | -    |
| `page-header`    | `logo`         | `logo`       | √         | -    |
| `page-header`    | `action`       | `action`     | √         | -    |
| `page-header`    | `content`      | `content`    | √         | -    |
| `page-header`    | `extra`        | `extra`      | √         | -    |
| `page-header`    | `tab`          | `tab`        | √         | -    |

例如：

```diff
- <page-header>
+ <page-header [action]="action">
-   <ng-template #action></ng-template>
- </page-header>
```

### abc 类库组件属性名变更

| 所属组件      | 原属性名     | 新属性名   | ng update | 描述                             |
|---------------|--------------|------------|-----------|----------------------------------|
| `page-header` | `home_link`  | `homeLink` | √         | -                                |
| `page-header` | `home_i18n`  | `homeI18n` | √         | -                                |
| `st`          | `sortReName` | 移除       | √         | 过期提醒，仅使用 `STColumn.sort.reName` 值 |

例如：

```diff
- <page-header home_link="/">
+ <page-header homeLink="/">
```

### abc 类库组件配置变更

| Injection Token  | 新方式       | ng update | 描述 |
| ---------------- | ------------ | --------- | ---- |
| `DA_XLSX_CONFIG` | `XlsxConfig` | ×         | -    |
| `DA_ZIP_CONFIG`  | `ZipConfig`  | ×         | -    |

### simple-table

`simple-table` 组件变更为 `st`，其中包括属性、列描述变更。

#### 属性

| 原属性名              | 新属性名   | 子参数            | ng update | 兼容处理 | 描述 |
| --------------------- | ---------- | ----------------- | --------- | -------- | ---- |
| `[extraParams]`       | `req`      | `params`          | √         | -        | -    |
| `[reqReName]`         | `req`      | `reName`          | √         | -        | -    |
| `[reqMethod]`         | `req`      | `method`          | √         | -        | -    |
| `[reqHeader]`         | `req`      | `header`          | √         | -        | -    |
| `[reqBody]`           | `req`      | `body`            | √         | -        | -    |
| `[resReName]`         | `res`      | `reName`          | √         | -        | -    |
| `[preDataChange]`     | `res`      | `process`         | √         | -        | -    |
| `[frontPagination]`   | `page`     | `front`           | √         | -        | -    |
| `[zeroIndexedOnPage]` | `page`     | `zeroIndexed`     | √         | -        | -    |
| `[pagePlacement]`     | `page`     | `placement`       | √         | -        | -    |
| `[showPagination]`    | `page`     | `show`            | √         | -        | -    |
| `[showSizeChanger]`   | `page`     | `showSize`        | √         | -        | -    |
| `[pageSizeOptions]`   | `page`     | `pageSizes`       | √         | -        | -    |
| `[showQuickJumper]`   | `page`     | `showQuickJumper` | √         | -        | -    |
| `[showTotal]`         | `page`     | `total`           | √         | -        | -    |
| `[isPageIndexReset]`  | `page`     | `indexReset`      | √         | -        | -    |
| `[toTopInChange]`     | `page`     | `toTop`           | √         | -        | -    |
| `[toTopOffset]`       | `page`     | `toTopOffset`     | √         | -        | -    |
| `(checkboxChange)`    | `(change)` | -                 | √         | ×        | 过期提醒    |
| `(radioChange)`       | `(change)` | -                 | √         | ×        | 过期提醒    |
| `(sortChange)`        | `(change)` | -                 | √         | ×        | 过期提醒    |
| `(filterChange)`      | `(change)` | -                 | √         | ×        | 过期提醒    |
| `(rowClick)`          | `(change)` | -                 | √         | ×        | 过期提醒    |
| `(rowDblClick)`       | `(change)` | -                 | √         | ×        | 过期提醒    |

> 一个示例说明 [#diff](https://github.com/ng-alain/ng-alain/pull/673/files#diff-f573fc0900f21b377dac432f1668c584L164)

例如：

```diff
- <simple-table [extraParams]="params" [reqReName]="reqReName">
+ <st [req]="{params: params, reName: reqReName}">
```

#### 列描述

将所有 `type` 所对应的属性重新定义为独立子属性使其列描述的定义更内聚，原 `SimpleTableColumn` 替换 `STColumn`。

> 同时保持 `simple-table` 列描述的兼容性，且兼容会在 `3.x` 时被移除。

| 原属性名               | 新属性名                     | ng update | 兼容处理 | 描述 |
| ---------------------- | ---------------------------- | --------- | -------- | ---- |
| `sort`                 | `sort.default`               | ×         | √        | -    |
| `sorter`               | `sort.compare`               | ×         | √        | -    |
| `sortKey`              | `sort.key`                   | ×         | √        | -    |
| `sortReName`           | `sort.reName`                | ×         | √        | -    |
| `filter`               | `fitler`                     | ×         | √        | -    |
| `filters`              | `fitler.menus`               | ×         | √        | -    |
| `filtered`             | `fitler.default`             | ×         | √        | -    |
| `filterIcon`           | `fitler.icon`                | ×         | √        | -    |
| `filterConfirmText`    | `fitler.confirmText`         | ×         | √        | -    |
| `filterClearText`      | `fitler.clearText`           | ×         | √        | -    |
| `filterMultiple`       | `fitler.multiple`            | ×         | √        | -    |
| `filterKey`            | `fitler.key`                 | ×         | √        | -    |
| `filterReName`         | `fitler.reName`              | ×         | √        | -    |
| `ynTruth`              | `yn.truth`                   | ×         | √        | -    |
| `ynYes`                | `yn.yes`                     | ×         | √        | -    |
| `ynNo`                 | `yn.no`                      | ×         | √        | -    |
| `buttons.component`    | `buttons.modal.component`    | ×         | √        | -    |
| `buttons.params`       | `buttons.modal.params`       | ×         | √        | -    |
| `buttons.paramName`    | `buttons.modal.paramsName`   | ×         | √        | -    |
| `buttons.size`         | `buttons.modal.size`         | ×         | √        | -    |
| `buttons.modalOptions` | `buttons.modal.modalOptions` | ×         | √        | -    |

#### SimpleTableMultiSort

| 原属性名         | 新属性名        | ng update | 兼容处理 | 描述 |
| ---------------- | --------------- | --------- | -------- | ---- |
| `name_separator` | `nameSeparator` | ×         | ×        | -    |

### chart 类库组件名变更

| 原组件名   | 新组件名    | ng update | 描述 |
| ---------- | ----------- | --------- | ---- |
| `g2-chart` | `g2-custom` | √         | -    |

## theme 类库变更

### 布局

[默认布局](/theme/default)和[全屏布局](/theme/fullscreen)样式命名重新采用 BEM 形式，这倒置布局的样式名都被改变，但很容易升级，有关细节参考 [commit](https://github.com/ng-alain/ng-alain/pull/673/files)。

抽离这两种布局样式成独立的形式存在，因此需要在 `src/styles.less` 单独独立对应布局的样式：

```less
@import '~@delon/theme/styles/index';
// 默认布局
@import '~@delon/theme/styles/layout/default/index';
// 全屏布局
@import '~@delon/theme/styles/layout/fullscreen/index';
// @delon/abc 业务组件库
@import '~@delon/abc/index';
// @delon/chart G2图表组件库
@import '~@delon/chart/index';
```

### Menu

| 原属性名        | 新属性名       | ng update | 兼容处理 | 描述 |
| --------------- | -------------- | --------- | -------- | ---- |
| `badge_dot`     | `badgeDot`     | ×         | ×        | -    |
| `badge_status`  | `badgeStatus`  | ×         | ×        | -    |
| `shortcut_root` | `shortcutRoot` | ×         | ×        | -    |

## ng update

2.0 提供的 `ng update` 升级是基于 [1.x](https://github.com/ng-alain/ng-alain/tree/1.x) 分支模板，事实上，多多少少已经会有一些变更，因此，`ng update` 命令是无法保证脚手架这一部分的准确性，因此在升级之前请**确保签入所有代码**，以便更好的观察变更纪录。

**注意：**

- 受项目大小执行时间会越长，但由于无法（受限Angular Cli）报告通知，会看起来像是假死状态
- 不要手动变更 `package.json` 任何 `@delon/*`、`ng-alain` 版本信息至 `2.x`，命令行会自行完成所有的一切
- 升级之前可以尝试运行 `ng update` 了解当前项目是否支持
- 当HTML文件被变更后，会自动HTML格式化，因此可能会更多 Git Diff 信息
- 日志说明
  - `Fixed 1 error(s) in` 表示正确修复了几项错误
  - `ERROR:` 表示需要手动处理该错误（例如已移除组件｀standard-form-row｀）

```bash
# 1、删除 node_modules、package-lock.json 或 yarn.lock
yarn
# 2、强制指定 `parse5` 版本
yarn add parse5@^5.0.0 -D
# 3、执行安装
ng update ng-alain --next
```

**未覆盖部分**

- 上述文档所有在 ng update 列标识为 `×` 都需要手动处理
- 若使用 `g2`，需要导入 `DelonChartModule` 至 `shared.module.ts`
- 顶部右边部分业务菜单组件 `header/components` 下需要将 `item` 样式名变更为 `alain-default__nav-item`
- 部分示例页相对应的样式变更自行参考 [ng-alain](https://github.com/ng-alain/ng-alain) 仓库
