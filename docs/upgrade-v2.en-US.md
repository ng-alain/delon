---
order: 15
title: Upgrade to V2
type: Basic
hot: true
---

The ng-alain 2.0 changed is mainly demonstrated from two aspects:

- Make CURD operations more "natural" development experience([#588](https://github.com/ng-alain/ng-alain/issues/588))
- More friendly responsive development

Original `simpel-table`, `sf` is popular with developer, so ng-alain 2.0 refactors and new three Simple series components:

- [st](/components/table) <= `simple-table`
  - Input attribute changes, if you use **general configuration priority**, that changes will be much less
  - Column define is compatibled
- [sf](/form) Dynamic form
- [sv](/components/view) View
- [se](/components/edit) Edit
- [sg](/components/grid) Grid Layout

Ng-alain 2.0 enabled new [ng-alain organization] (https://github.com/ng-alain/) and has migrated to the organization, so some links have changed:

- [DEMO](https://ng-alain.github.io/ng-alain/)
- 1.x [Document](https://ng-alain.github.io/1.x-doc/)

Note: This migration guide is based on the latest v1 version, Current beta version, the `ng update` will be supported after release. Changes scaffolding and `@delon/*` class library, The following is a detailed description of the two parts.

## Scaffold

Scaffolding has some **BREAKING CHANGES**, We refactoring layout styles using BEM naming, All changes in pull [#673](https://github.com/ng-alain/ng-alain/pull/673/files), All **#diff** and links can be opened directly to the specific details of the change.

### 1. Dependency package

Upgrade `@angular` and `@delon` dependencies to the latest version.

1. Cancel downgrade less [#diff](https://github.com/ng-alain/ng-alain/pull/673/files#diff-b9cfc7f2cdf78a7f4b91a753d10865a2)
2. Use `targets` instead of `architect` [#diff](https://github.com/ng-alain/ng-alain/pull/673/files#diff-24e9645f54bc8704f0daa8780c492a3f)

### 2. Layout

Because of the BEM style naming, you need to modify style name of `src/app/layout/default`.

#### BREAKING CHANGES

**Default Layout**

1. `default.component.html` remove `wrapper`, And add `alain-default__` prefix to all styles [#diff](https://github.com/ng-alain/ng-alain/pull/673/files#diff-9612c23254b7dc14e5c53e51b1bca111)
2. `default.component.ts` add `alain-default` class name [#diff](https://github.com/ng-alain/ng-alain/pull/673/files#diff-22fe6ac5f1a555ff396d16fabf60a675R25)
3. Other [header](https://github.com/ng-alain/ng-alain/pull/673/files#diff-1f3f3064a6d8f8166fcc1942f89ff05f) and [sidebar](https://github.com/ng-alain/ng-alain/pull/673/files#diff-769b589ea25ae4b5a6f1cce29a2ce63d)
4. Use `alain-default__content-title` instead of `content__title`, can be searched for and replaced it.

**Fullscreen Layout**

1. `fullscreen.component.ts` add `alain-fullscreen` class name [#diff](https://github.com/ng-alain/ng-alain/pull/673/files#diff-d8f5e3ca4fcf1fd0a9b262a0bb0ceefa)

#### New features

- Add [SettingDrawer](https://github.com/ng-alain/ng-alain/pull/673/files#diff-eb34ac4377d878ea489b5c2c9f498f03R17) panel
  - Only for development mode
  - Dependent on [src/assets/alain-default.less](https://github.com/ng-alain/ng-alain/blob/4cd7fac7c83f7ee9907c94819087bce347726cc7/src/assets/alain-default.less)
- Add color-weak [#diff](https://github.com/ng-alain/ng-alain/pull/673/files#diff-5c26d2c8f8838f32ace87fdecd6344eaR31)
- Force close all `NzModel` when switching routes [#diff](https://github.com/ng-alain/ng-alain/pull/673/files#diff-5c26d2c8f8838f32ace87fdecd6344eaR61)

## delon library

### New library

| Old               | New     | Description |
|-------------------|---------|-------------|
| `abc/chart`       | `chart` | G2 chart [#diff](https://github.com/ng-alain/ng-alain/pull/673/files#diff-6c960904023c582a766661950a35b283R8)    |
| `abc/number-info` | `chart` | -           |
| `abc/trend`       | `chart` | -           |

### Component name of abc

| Old                 | New  | ng update | Description |
|---------------------|------|-----------|-------------|
| `simple-table`      | `st` | -         | -           |
| `desc-list`         | `sv` | -         | -           |
| `simple-html-form`  | `se` | -         | -           |
| `standard-form-row` | `se` | -         | -           |

e.g:

```diff
- <simple-table></simple-table>
+ <st></st>
```

### Use input instead of ContentChild

| Component        | Old ContentChild | New Property | ng update | Description |
|------------------|------------------|--------------|-----------|-------------|
| `st`             | `body`           | `body`       | ×         | -           |
| `st`             | `expand`         | `expand`     | ×         | -           |
| `footer-toolbar` | `extra`          | `extra`      | ×         | -           |
| `page-header`    | `breadcrumb`     | `breadcrumb` | ×         | -           |
| `page-header`    | `logo`           | `logo`       | ×         | -           |
| `page-header`    | `action`         | `action`     | ×         | -           |
| `page-header`    | `content`        | `content`    | ×         | -           |
| `page-header`    | `extra`          | `extra`      | ×         | -           |
| `page-header`    | `tab`            | `tab`        | ×         | -           |

e.g:

```diff
- <page-header>
+ <page-header [body]="body">
-   <ng-template #action></ng-template>
- </page-header>
```

### Component property of abc

| Component     | Old          | New        | ng update | Description                          |
|---------------|--------------|------------|-----------|--------------------------------------|
| `page-header` | `home_link`  | `homeLink` | -         | -                                    |
| `page-header` | `home_i18n`  | `homeI18n` | -         | -                                    |
| `st`          | `sortReName` | removed    | ×         | Just only via `STColumn.sort.reName` |

e.g:

```diff
- <page-header home_link="/">
+ <page-header homeLink="/">
```

### Configuration of abc

| Injection Token  | New          | ng update | Description |
|------------------|--------------|-----------|-------------|
| `DA_XLSX_CONFIG` | `XlsxConfig` | ×         | -           |
| `DA_ZIP_CONFIG`  | `ZipConfig`  | ×         | -           |

### simple-table

`simple-table` component changed to `st`, includes attributes and column changes.

#### Attributes

| Old Property          | New Property | Sub Property      | ng update | Compatible 1.x | Description |
|-----------------------|--------------|-------------------|-----------|----------------|-------------|
| `[extraParams]`       | `req`        | `params`          | -         | -              | -           |
| `[reqReName]`         | `req`        | `reName`          | -         | -              | -           |
| `[reqMethod]`         | `req`        | `method`          | -         | -              | -           |
| `[reqHeader]`         | `req`        | `header`          | -         | -              | -           |
| `[reqBody]`           | `req`        | `body`            | -         | -              | -           |
| `[resReName]`         | `res`        | `reName`          | -         | -              | -           |
| `[preDataChange]`     | `res`        | `process`         | -         | -              | -           |
| `[frontPagination]`   | `page`       | `front`           | -         | -              | -           |
| `[zeroIndexedOnPage]` | `page`       | `zeroIndexed`     | -         | -              | -           |
| `[pagePlacement]`     | `page`       | `placement`       | -         | -              | -           |
| `[showPagination]`    | `page`       | `show`            | -         | -              | -           |
| `[showSizeChanger]`   | `page`       | `showSize`        | -         | -              | -           |
| `[pageSizeOptions]`   | `page`       | `pageSizes`       | -         | -              | -           |
| `[showQuickJumper]`   | `page`       | `showQuickJumper` | -         | -              | -           |
| `[showTotal]`         | `page`       | `total`           | -         | -              | -           |
| `[isPageIndexReset]`  | `page`       | `indexReset`      | -         | -              | -           |
| `[toTopInChange]`     | `page`       | `toTop`           | -         | -              | -           |
| `[toTopOffset]`       | `page`       | `toTopOffset`     | -         | -              | -           |
| `(checkboxChange)`    | `(change)`   | -                 | ×         | √              | -           |
| `(radioChange)`       | `(change)`   | -                 | ×         | √              | -           |
| `(sortChange)`        | `(change)`   | -                 | ×         | √              | -           |
| `(filterChange)`      | `(change)`   | -                 | ×         | √              | -           |
| `(rowClick)`          | `(change)`   | -                 | ×         | √              | -           |
| `(rowDblClick)`       | `(change)`   | -                 | ×         | √              | -           |

> A demo [#diff](https://github.com/ng-alain/ng-alain/pull/673/files#diff-f573fc0900f21b377dac432f1668c584L164)

e.g:

```diff
- <simple-table [extraParams]="params" [reqReName]="reqReName">
+ <st [req]="{params: params, reName: reqReName}">
```

#### Column

将所有 `type` 所对应的属性重新定义为独立子属性使其列描述的定义更内聚，原 `SimpleTableColumn` 替换 `STColumn`。

> 同时保持 `simple-table` 列描述的兼容性，且兼容会在 `3.x` 时被移除。

| Old Property           | New Property                 | ng update | Compatible 1.x | Description |
|------------------------|------------------------------|-----------|----------------|-------------|
| `sort`                 | `sort.default`               | ×         | √              | -           |
| `sorter`               | `sort.compare`               | ×         | √              | -           |
| `sortKey`              | `sort.key`                   | ×         | √              | -           |
| `sortReName`           | `sort.reName`                | ×         | √              | -           |
| `filter`               | `fitler`                     | ×         | √              | -           |
| `filters`              | `fitler.menus`               | ×         | √              | -           |
| `filtered`             | `fitler.default`             | ×         | √              | -           |
| `filterIcon`           | `fitler.icon`                | ×         | √              | -           |
| `filterConfirmText`    | `fitler.confirmText`         | ×         | √              | -           |
| `filterClearText`      | `fitler.clearText`           | ×         | √              | -           |
| `filterMultiple`       | `fitler.multiple`            | ×         | √              | -           |
| `filterKey`            | `fitler.key`                 | ×         | √              | -           |
| `filterReName`         | `fitler.reName`              | ×         | √              | -           |
| `ynTruth`              | `yn.truth`                   | ×         | √              | -           |
| `ynYes`                | `yn.yes`                     | ×         | √              | -           |
| `ynNo`                 | `yn.no`                      | ×         | √              | -           |
| `buttons.component`    | `buttons.modal.component`    | ×         | √              | -           |
| `buttons.params`       | `buttons.modal.params`       | ×         | √              | -           |
| `buttons.paramName`    | `buttons.modal.paramsName`   | ×         | √              | -           |
| `buttons.size`         | `buttons.modal.size`         | ×         | √              | -           |
| `buttons.modalOptions` | `buttons.modal.modalOptions` | ×         | √              | -           |

#### SimpleTableMultiSort

| Old Property     | New Property    | ng update | Compatible 1.x | Description |
|------------------|-----------------|-----------|----------------|-------------|
| `name_separator` | `nameSeparator` | ×         | ×              | -           |

### chart 类库组件名变更

| Old Name   | New Name    | ng update | Description |
|------------|-------------|-----------|-------------|
| `g2-chart` | `g2-custom` | -         | -           |

## theme类库变更

### 布局

[默认布局](/theme/default)和[全屏布局](/theme/fullscreen)样式命名重新采用 BEM 形式，这倒置布局的样式名都被改变，但很容易升级，有关细节参考 [commit]()。

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

| Old Property    | New Property   | ng update | Compatible 1.x | Description |
|-----------------|----------------|-----------|----------------|-------------|
| `badge_dot`     | `badgeDot`     | ×         | ×              | -           |
| `badge_status`  | `badgeStatus`  | ×         | ×              | -           |
| `shortcut_root` | `shortcutRoot` | ×         | ×              | -           |
