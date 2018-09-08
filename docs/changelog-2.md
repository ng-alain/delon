---
order: 15
title: 2.0升级指引
type: Basic
---

现如今中后台不再受限于电脑端的使用，越来越多使用大屏移动端来访问。所以 ng-alain 2.0 针对两个核心点重新定义部分组件：

- 使CURD操作更“自然”开发体验
- 更容易响应式开发

原 `simpel-table`、`sf` 是受大家喜欢的组件之一，因此 ng-alain 2.0 为此重构并增加三个 Simple 序列组件：

- [st](/components/table) 原 `simple-table`
  - 输入属性的变更，若你之前**通用配置优先**来使用的话，这些改变会少非常多
  - 列描述所有的变更都做兼容处理
- [sf](/form) 动态表单
- [sv](/components/view) 查看
- [se](/components/edit) 编辑
- [sg](/components/grid) 栅格布局

此文档是为了更好将你的项目迁移至 2.0，当前版本还是 Beta 版本，会在正式版后发布部分组件变更的 `ng update` 支持，有关支持细节会在下列中明确指出。

## 类库变更

| 原所在库          | 新库    | 描述    |
| ----------------- | ------- | ------- |
| `abc/chart`       | `chart` | G2 图表 |
| `abc/number-info` | `chart` | -       |
| `abc/trend`       | `chart` | -       |

## @delon/abc

### 组件名变更

| 原组件名            | 新组件名 | ng update | 描述 |
| ------------------- | -------- | --------- | ---- |
| `simple-table`      | `st`     | -         | -    |
| `desc-list`         | `sv`     | -         | -    |
| `simple-html-form`  | `se`     | -         | -    |
| `standard-form-row` | `se`     | -         | -    |

### 组件属性名变更

| 所属组件         | 原属性名     | 新属性名   | ng update | 描述                             |
| ---------------- | ------------ | ---------- | --------- | -------------------------------- |
| `na-page-header` | `home_link`  | `homeLink` | -         | -                                |
| `na-page-header` | `home_i18n`  | `homeI18n` | -         | -                                |
| `st`             | `sortReName` | 移除       | ×         | 仅使用 `STColumn.sort.reName` 值 |

### 组件配置变更

| Injection Token  | 新方式       | ng update | 描述 |
| ---------------- | ------------ | --------- | ---- |
| `DA_XLSX_CONFIG` | `XlsxConfig` | ×         | -    |
| `DA_ZIP_CONFIG`  | `ZipConfig`  | ×         | -    |

### simple-table

`simple-table` 组件变更为 `st`，其中包括属性、列描述变更。

#### 属性

| 原属性名              | 新属性名   | 子参数            | ng update | 兼容处理 | 描述 |
| --------------------- | ---------- | ----------------- | --------- | -------- | ---- |
| `[extraParams]`       | `req`      | `params`          | -         | -        | -    |
| `[reqReName]`         | `req`      | `reName`          | -         | -        | -    |
| `[reqMethod]`         | `req`      | `method`          | -         | -        | -    |
| `[reqHeader]`         | `req`      | `header`          | -         | -        | -    |
| `[reqBody]`           | `req`      | `body`            | -         | -        | -    |
| `[resReName]`         | `res`      | `reName`          | -         | -        | -    |
| `[preDataChange]`     | `res`      | `process`         | -         | -        | -    |
| `[frontPagination]`   | `page`     | `front`           | -         | -        | -    |
| `[zeroIndexedOnPage]` | `page`     | `zeroIndexed`     | -         | -        | -    |
| `[pagePlacement]`     | `page`     | `placement`       | -         | -        | -    |
| `[showPagination]`    | `page`     | `show`            | -         | -        | -    |
| `[showSizeChanger]`   | `page`     | `showSize`        | -         | -        | -    |
| `[pageSizeOptions]`   | `page`     | `pageSizes`       | -         | -        | -    |
| `[showQuickJumper]`   | `page`     | `showQuickJumper` | -         | -        | -    |
| `[showTotal]`         | `page`     | `total`           | -         | -        | -    |
| `[isPageIndexReset]`  | `page`     | `indexReset`      | -         | -        | -    |
| `[toTopInChange]`     | `page`     | `toTop`           | -         | -        | -    |
| `[toTopOffset]`       | `page`     | `toTopOffset`     | -         | -        | -    |
| `(checkboxChange)`    | `(change)` | -                 | ×         | √        | -    |
| `(radioChange)`       | `(change)` | -                 | ×         | √        | -    |
| `(sortChange)`        | `(change)` | -                 | ×         | √        | -    |
| `(filterChange)`      | `(change)` | -                 | ×         | √        | -    |
| `(rowClick)`          | `(change)` | -                 | ×         | √        | -    |
| `(rowDblClick)`       | `(change)` | -                 | ×         | √        | -    |

#### 列描述

将所有 `type` 所对应的属性重新定义为独立子属性使其列描述的定义更内聚。

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

## Theme 变更

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

| 原属性名        | 新属性名       | ng update | 兼容处理 | 描述 |
| --------------- | -------------- | --------- | -------- | ---- |
| `badge_dot`     | `badgeDot`     | ×         | ×        | -    |
| `badge_status`  | `badgeStatus`  | ×         | ×        | -    |
| `shortcut_root` | `shortcutRoot` | ×         | ×        | -    |
