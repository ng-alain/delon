---
title: string
subtitle: 文本框
type: Widgets
---

默认小部件，一般用于字符串元素。

## schema 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
maxLength | 表单最大长度  | `number` | -
readOnly | 禁用状态  | `boolean` | -

## ui 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
type | 等同 input 的 `type` 值，例如：`password` | `string` | -
placeholder | 在文字框中显示提示讯息 | `string` | -
autocomplete | 自动完成功能的表单 | `HTML Attribute` | -
autofocus | 当页面加载时获得焦点 | `HTML Attribute` | -
addOnBefore | 前置标签，等同 `nzAddOnBefore` | `string` | -
addOnAfter | 后置标签，等同 `nzAddOnAfter` | `string` | -
addOnBeforeIcon | 前置Icon，等同 `nzAddOnBeforeIcon` | `string` | -
addOnAfterIcon | 后置Icon，等同 `nzAddOnAfterIcon` | `string` | -
prefix | 带有前缀图标的 input，等同 `nzPrefix` | `string` | -
prefixIcon | 前缀图标，等同 `nzPrefixIcon` | `string` | -
suffix | 带有后缀图标的 input，等同 `nzSuffix` | `string` | -
suffixIcon | 后缀图标，等同 `nzSuffixIcon` | `string` | -

## Demo

```ts
schema = {
    properties: {
        name: {
            type: 'string',
            title: 'Name',
            ui: {
                addOnAfter: 'RMB'
            }
        }
    }
}
```
