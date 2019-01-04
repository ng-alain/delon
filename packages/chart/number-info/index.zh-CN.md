---
type: Components
title: number-info
subtitle: 数据文本
cols: 2
module: NumberInfoModule
---

常用在数据卡片中，用于突出展示某个业务数据。

## API

### number-info

| 参数         | 说明                             | 类型               | 默认值  |
| ------------ | -------------------------------- | ------------------ | ------- |
| `[title]`    | 标题                             | `TemplateRef<void>` | -       |
| `[subTitle]` | 子标题                           | `TemplateRef<void>` | -       |
| `[total]`    | 总量                             | `string`           | -       |
| `[suffix]`   | 总量后缀                         | `string`           | -       |
| `[subTotal]` | 子总量                           | `string`           | -       |
| `[status]`   | 增加状态                         | `'up','down'`       | -       |
| `[theme]`    | 状态样式                         | `'light','default'`    | `'light'` |
| `[gap]`      | 设置数字和描述直接的间距（像素） | `number`           | 8       |
