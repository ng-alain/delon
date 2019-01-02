---
type: Layout
title: global-footer
subtitle: 全局页脚
cols: 1
module: GlobalFooterModule
---

页脚属于全局导航的一部分，作为对顶部导航的补充，通过传递数据控制展示内容。

## API

### global-footer

| 参数          | 说明     | 类型               | 默认值 |
| ------------- | -------- | ------------------ | ------ |
| `[links]`     | 链接数据 | `GlobalFooterLink` | -      |
| `[copyright]` | 版权信息 | `TemplateRef`      | -      |

### global-footer-item

| 参数            | 说明           | 类型      | 默认值  |
| --------------- | -------------- | --------- | ------- |
| `ng-content`    | 标题           | `string`  | -       |
| `[href]`        | 路由链接       | `string`  | -       |
| `[blankTarget]` | 是否打开新窗口 | `boolean` | `false` |

### GlobalFooterLink

| 参数            | 说明           | 类型      | 默认值  |
| --------------- | -------------- | --------- | ------- |
| `[title]`       | 标题           | `string`  | -       |
| `[href]`        | 路由链接       | `string`  | -       |
| `[blankTarget]` | 是否打开新窗口 | `boolean` | `false` |
