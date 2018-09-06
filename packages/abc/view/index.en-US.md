---
type: CURD
title: sv
subtitle: View
cols: 1
order: 2
module: SVModule
config: SVConfig
---

Viewing grid system is a higher-order components based on the original [Grid System] (https://ng.ant.design/components/grid/zh) that server for view pages.

## API

### sv-container

| Property           | Description                 | Type                    | Default       |
| -------------- | -------------------- | ----------------------- | ------------ |
| `[size]`       | size of view         | `small | large`         | `large`      |
| `[layout]`     | type of layout       | `horizontal | vertical` | `horizontal` |
| `[gutter]`     | specify the distance between two items, unit is `px`  | `number`                | `32`         |
| `[col]`        | specify the maximum number of columns to display, the final columns number is determined by col setting combined with [Responsive Rules](#Responsive Rules)   | `number(0 < col <= 6)`                | `3`          |
| `[labelWidth]` | label text of width  | `number`                | `null`       |
| `[default]`    | whether default text | `boolean`               | `true`       |
| `[title]`      | Display title        | `string | TemplateRef<any>`            | - |

### sv

| Property       | Description                           | Type             | Default |
| -------------- | ------------------------------------- | -------------------------------------- |
| `[col]`        | specify the maximum number of columns to display, the final columns number is determined by col setting combined with [Responsive Rules](#Responsive Rules) | - |
| `[label]`      | label of view                                  | `string | TemplateRef<any>`            | - |
| `[labelWidth]` | label text of width, inherit `sv-container`     | `number`                               | - |
| `[default]`    | whether default text, inherit `sv-container` | `boolean`                              | - |
| `[type]`       | type of view                  | `primary | success | danger | warning` | - |

### sv-title

Display title.

## Responsive Rules

| `col` | `<576px` | `≥576px` | `≥768px` | `≥992px` | `≥1200px` | `≥1600px` |
| ----- | -------- | -------- | -------- | -------- | --------- | --------- |
| `1`   | 1        | 1        | 1        | 1        | 1         | 1         |
| `2`   | 1        | 2        | 2        | 2        | 2         | 2         |
| `3`   | 1        | 2        | 3        | 3        | 3         | 3         |
| `4`   | 1        | 2        | 3        | 4        | 4         | 4         |
| `5`   | 1        | 2        | 3        | 4        | 6         | 6         |
| `6`   | 1        | 2        | 3        | 4        | 6         | 12        |
