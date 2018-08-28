---
type: CURD
title: view
subtitle: View
cols: 1
order: 2
module: NaViewModule
config: NaViewConfig
---

Viewing grid system is a higher-order components based on the original [Grid System] (https://ng.ant.design/components/grid/zh) that server for view pages.

## API

### na-view-wrap

| Property           | Description                 | Type                    | Default       |
| -------------- | -------------------- | ----------------------- | ------------ |
| `[size]`       | size of view         | `small | large`         | `large`      |
| `[layout]`     | type of layout       | `horizontal | vertical` | `horizontal` |
| `[gutter]`     | specify the distance between two items, unit is `px`  | `number`                | `32`         |
| `[col]`        | specify the maximum number of columns to display, the final columns number is determined by col setting combined with [Responsive Rules](#Responsive Rules)   | `number(0 < col <= 6)`                | `3`          |
| `[labelWidth]` | label text of width  | `number`                | `null`       |
| `[default]`    | whether default text | `boolean`               | `true`       |

### na-view

| Property       | Description                           | Type             | Default |
| -------------- | ------------------------------------- | -------------------------------------- |
| `[col]`        | specify the maximum number of columns to display, the final columns number is determined by col setting combined with [Responsive Rules](#Responsive Rules) | - |
| `[label]`      | label of view                                  | `string | TemplateRef<any>`            | - |
| `[labelWidth]` | label text of width, inherit `na-view-wrap`     | `number`                               | - |
| `[default]`    | whether default text, inherit `na-view-wrap` | `boolean`                              | - |
| `[type]`       | type of view                  | `primary | success | danger | warning` | - |

### na-view-title

Display title.

## Responsive Rules

If `col: 6` the number of columns is displayed as follows:

| Window Width  | Columns Number |
| --------- | -------- |
| `≥1600px` | `12`     |
| `≥1200px` | `6`      |
| `≥992px`  | `4`      |
| `≥768px`  | `3`      |
| `≥576px`  | `2`      |
| `<576px`  | `1`      |
