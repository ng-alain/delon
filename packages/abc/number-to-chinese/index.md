---
type: Basic
order: 5
title: number-to-chinese
subtitle: 人民币大写
cols: 1
module: NumberToChineseModule
---

常用在数值转化为人民币大写。

## API

### numberToChinese

转化方法，包括三个参数：

参数      | 说明        | 类型                     | 默认值
----------|------------|--------------------------|-------
`value`   | 值          | `number | string`        | -
`rmb`     | 是否RMB格式 | `boolean`                | `true`
`options` | 额外选项    | `NumberToChineseOptions` | -

### NumberToChineseOptions

参数          | 说明                       | 类型      | 默认值
--------------|--------------------------|-----------|--------
`minusSymbol` | 指定负数符号               | `string`  | `负`
`validThrow`  | 当传递值无法数值时抛出异常 | `boolean` | `false`

## Pipe管道

使用 `n2c` 便于直接在模板中渲染，例如：

```html
{{ 100.12 | n2c }}
// Output: 壹佰元壹角贰分
```

更多格式请参数示例。
