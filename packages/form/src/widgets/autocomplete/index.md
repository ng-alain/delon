---
title: autocomplete
subtitle: 自动完成
type: Widgets
---

输入框自动完成功能。

## 数据源说明

**静态**

指获取后每一次筛选是通过 `filterOption` 过滤，数据来源于 `asyncData`。

**实时**

指每一次筛选都会触发一个HTTP请求，数据来源于 `asyncData`。

## API

### schema 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
enum | 静态数据源 | `SFSchemaEnumType[]` | -
readOnly | 禁用状态  | `boolean` | -

### ui 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
asyncData | 实时数据源 | `(input: string) => Observable<SFSchemaEnumType[]>` | -
size | 大小，等同 `nzSize` | `string` | -
placeholder | 在文字框中显示提示讯息 | `string` | -
filterOption | 是否根据输入项进行筛选，默认只对 `label` 属性执行不区分大小定 `indexOf` 过滤。当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 `true`，反之则返回 `false`。 | `boolean or (inputValue: string, option: SFSchemaEnum) => boolean` | `true`
type | 模式，自动完成常见邮箱后缀，可以重新使用 `enum` 来指定新后缀 | `email` | -
debounceTime | 去抖时间，当实时数据源时默认最少 `50`，单位：毫秒 | `number` | `0`
