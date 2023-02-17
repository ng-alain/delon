---
title: textarea
subtitle: 多行文本框
type: Widgets
---

一般用于多行字符串。

## API

### schema 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[maxLength]` | 表单最大长度 | `number` | - |
| `[readOnly]` | 禁用状态 | `boolean` | - |

### ui 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[size]` | 大小，等同 `nzSize` | `string` | - |
| `[placeholder]` | 在文字框中显示提示讯息 | `string` | - |
| `[autosize]` | 自适应内容高度，可设置为 `true|false` 或对象：`{ minRows: 2, maxRows: 6 }` | `Boolean|Object` | `true` |
| `[borderless]` | 是否隐藏边框 | `boolean` | `false` |
| `[maxCharacterCount]` | `textarea` 数字提示显示的最大值 | `number` | - |
| `[computeCharacterCount]` | 自定义计算 `characterCount` 的函数 | `(v: string) => number` | `v => v.length` |
| `[change]` | 内容变更事件 | `(val: string) => void` | - |
| `[focus]` | 焦点事件 | `(e: FocusEvent) => void` | - |
| `[blur]` | 失焦事件 | `(e: FocusEvent) => void` | - |
