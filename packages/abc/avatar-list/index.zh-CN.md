---
type: Basic
title: avatar-list
subtitle: 用户头像列表
cols: 1
module: AvatarListModule
---

一组用户头像，常用在项目/团队成员列表。可通过设置 `size` 属性来指定头像大小。

## API

### avatar-list

| 参数                 | 说明             | 类型                               | 默认值      |
|----------------------|----------------|------------------------------------|-------------|
| `[size]`             | 头像大小         | `'large','small','mini','default'` | `'default'` |
| `[maxLength]`        | 要显示的最大项目 | `number`                           | -           |
| `[excessItemsStyle]` | 多余的项目风格   | `{ [key: string]: string }`        | -           |

### avatar-list-item

| 参数     | 说明         | 类型     | 默认值 |
| -------- | ------------ | -------- | ------ |
| `[tips]` | 头像展示文案 | `string` | -      |
| `[src]`  | 头像图片连接 | `string` | -      |
| `[text]` | 文本类头像   | `string` | -      |
| `[icon]` | 图标类型     | `string` | -      |
