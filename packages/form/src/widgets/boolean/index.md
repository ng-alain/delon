---
title: boolean
subtitle: 开关
type: Widgets
---

开关选择器

## schema 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
readOnly | 禁用状态  | `boolean` | -

## ui 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
size | 大小，等同 `nzSize` | `string` | -
checkedChildren | 选中时的内容  | `string` | -
unCheckedChildren | 非选中时的内容  | `string` | -

## Demo

```ts
schema = {
    properties: {
        enabled: {
            type: 'boolean',
            title: '是否启用'
        },
        // 指定内容文本
        enabled: {
            type: 'boolean',
            title: '是否启用',
            ui: {
                checkedChildren: '开',
                unCheckedChildren: '关'
            }
        }
    }
}
```
