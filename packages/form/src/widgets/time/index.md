---
title: time
subtitle: 时间
type: Widgets
---

输入或选择时间的控件；`ng-zorro-antd` 未提供日期时间类组件，暂时以原生替代。

## 注意事项

- 格式化分为：**数据格式化**表示表单数据和**显示格式化**显示数据
- 所有格式化单位，参考 [date-fns format](https://date-fns.org/v1.29.0/docs/format)（国内镜像：[moment format](http://momentjs.cn/docs/#/displaying/format/)）
- 部分格式化单位需要依赖国际化，则**务必**使用指定 `window.__locale__` 表示当前 Date fns 使用的国际化数据，更多细节见[国际化](/docs/i18n)
- 始终给出一个完整的日期时间格式，日期统一使用 `1970-01-01`
- 指定 `schema.format` 则必须遵守 [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6) 时间格式，否则都视为格式错误，默认的数据格式化：
    - `time`、`full-time` 默认 `HH:mm:ss`
- 不指定 `schema.format` 根据 `schema.type` 值按以下规则处理（允许通过 `DelonFormConfig` 替换）数据格式化：
    - `string` 默认 `HH:mm:ss`
    - `number` 默认 `x` 13位Unix Timestamp

## API

### schema 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
readOnly | 禁用状态  | `boolean` | -
format | 数据格式类型  | `string` | -

### ui 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
size | 大小，等同 `nzSize` | `string` | -
placeholder | 在文字框中显示提示讯息 | `string` | -
format | 数据格式化 | `string` | -
displayFormat | 显示格式化，默认：`YYYY-MM-DD HH:mm:ss` | `string` | -
