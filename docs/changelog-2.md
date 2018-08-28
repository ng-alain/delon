---
order: 1001
title: 2.x升级指引
type: Other
---

## 写在前面

v2 的主要升级是 `@delon/*` 系列组件，以中后台最基础操作重新定义组件。

## 约定

- 除组件名、指令名以后，所有属性、数据定义都采用驼峰式命令规则

## 类库变更

| 原所在库 | 新库    | 描述    |
| -------- | ------- | ------- |
| `abc`    | `chart` | G2 图表 |

## 组件变更

### 规则

- 所有组件名增加 `na-` 前缀，属性名依然保持不变。

### 组件名变更细节

| 原组件名            | 新组件名   | 描述 |
| ------------------- | ---------- | ---- |
| `simple-table`      | `na-table` | -    |
| `desc-list`         | `na-view`  | -    |
| `simple-html-form`  | `na-edit`  | -    |
| `standard-form-row` | `na-edit`  | -    |

### 组件属性名变更

| 所属组件         | 原属性名     | 新属性名   | 描述 |
| ---------------- | ------------ | ---------- | ---- |
| `na-page-header` | `home_link`  | `homeLink` | -    |
| `na-page-header` | `home_i18n`  | `homeI18n` | -    |
| `na-table`       | `sortReName` | 移除       | -    |

## simple-table 变更

`simple-table` 组件变更为 `na-table`，其中包括属性、列描述变更。

### 属性

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

### 列描述

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
