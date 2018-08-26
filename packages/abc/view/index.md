---
type: CURD
title: view
subtitle: 查看
cols: 1
order: 2
module: NaViewModule
config: NaViewConfig
---

查看栅格系统是在原 [Grid 栅格](https://ng.ant.design/components/grid/zh) 基础上对查看页布局进一步优化的系列组件。

## API

### na-view-wrap

| 参数           | 说明                 | 类型                    | 默认值       |
| -------------- | -------------------- | ----------------------- | ------------ |
| `[size]`       | 大小                 | `small | large`         | `large`      |
| `[layout]`     | 布局                 | `horizontal | vertical` | `horizontal` |
| `[gutter]`     | 间距                 | `number`                | `32`         |
| `[col]`        | 默认列数             | `number`                | `3`          |
| `[labelWidth]` | 默认标签文本宽度     | `number`                | `null`       |
| `[default]`    | 默认是否显示默认文本 | `boolean`               | `true`       |

### na-view

| 参数           | 类型                                  | 说明                                   |
| -------------- | ------------------------------------- | -------------------------------------- |
| `[label]`      | 标签                                  | `string | TemplateRef<any>`            | - |
| `[col]`        | 列数，继承 `na-view-wrap`             | `number`                               | - |
| `[labelWidth]` | 标签文本宽度，继承 `na-view-wrap`     | `number`                               | - |
| `[default]`    | 是否显示默认文本，继承 `na-view-wrap` | `boolean`                              | - |
| `[type]`       | 默认是否显示默认文本                  | `primary | success | danger | warning` | - |

### na-view-title

用于展示标题，单独一行。

## 常见问题

### 响应式规则

假如指定 `col: 6` 时，按以下规则显示列数：

| 窗口宽度  | 展示列数 |
| --------- | -------- |
| `≥1600px` | `12`     |
| `≥1200px` | `6`      |
| `≥992px`  | `4`      |
| `≥768px`  | `3`      |
| `≥576px`  | `2`      |
| `<576px`  | `1`      |
