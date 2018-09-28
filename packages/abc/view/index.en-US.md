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
| `[size]`       | size of view         | `small,large`         | `large`      |
| `[layout]`     | type of layout       | `horizontal,vertical` | `horizontal` |
| `[gutter]`     | specify the distance between two items, unit is `px`  | `number`                | `32`         |
| `[col]`        | specify the maximum number of columns to display, the final columns number is determined by col setting combined with [Responsive Rules](/theme/responsive) | `number(0 < col <= 6)`                | `3`          |
| `[labelWidth]` | label text of width  | `number`                | `null`       |
| `[default]`    | whether default text | `boolean`               | `true`       |
| `[title]`      | Display title        | `string,TemplateRef<any>`            | - |

### sv

| Property       | Description                           | Type             | Default |
| -------------- | ------------------------------------- | -------------------------------------- |
| `[col]`        | specify the maximum number of columns to display, the final columns number is determined by col setting combined with [Responsive Rules](/theme/responsive) | - |
| `[label]`      | label of view                                  | `string,TemplateRef<any>`            | - |
| `[labelWidth]` | label text of width, inherit `sv-container`     | `number`                               | - |
| `[default]`    | whether default text, inherit `sv-container` | `boolean`                              | - |
| `[type]`       | type of view                  | `primary | success | danger | warning` | - |

### sv-title

Display title.
