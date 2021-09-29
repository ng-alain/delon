---
title: time
subtitle: 时间
type: Widgets
---

输入或选择时间的控件。

## 注意事项

- 格式化分为：**数据格式化**表示表单数据和**显示格式化**显示数据（等同 [nzFormat](https://ng.ant.design/components/time-picker/zh#api) 值）
- 所有 **数据格式化** 单位，参考 [date-fns format](https://date-fns.org/v1.29.0/docs/format)（国内镜像：[moment format](http://momentjs.cn/docs/#/displaying/format/)）
- 指定 `schema.format` 则必须遵守 [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6) 时间格式，否则都视为格式错误，默认的数据格式化：
  - `time`、`full-time` 默认 `HH:mm:ss`
- 不指定 `schema.format` 根据 `schema.type` 值按以下规则处理（允许通过[全局配置](/docs/global-config)替换）数据格式化：
  - `string` 默认 `HH:mm:ss`
  - `number` 默认 `T` 13位 Unix Timestamp
- 由于 `disabledHours`、`disabledMinutes`、`disabledSeconds` 组合导致时间格式被破坏，可能会导致无法正常显示或显示不正确时可以指定一个完整的 `Date` 对象给默认值（`schema.default` 或 `formData`）

## API

### schema 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[readOnly]` | 禁用状态 | `boolean` | - |
| `[format]` | 数据格式类型 | `string` | - |

### ui 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[size]` | 大小，等同 `nzSize` | `string` | - |
| `[placeholder]` | 在文字框中显示提示讯息 | `string` | - |
| `[format]` | 数据格式化 | `string` | `HH:mm:ss` |
| `[displayFormat]` | 显示格式化，（等同 [nzFormat](https://ng.ant.design/components/time-picker/zh#api) 值） | `string` | `HH:mm:ss` |
| `[utcEpoch]` | 是否UTC新纪元（表示从 `1970` 开始计毫秒数），当 `type='number'` 时有效 | `boolean` | `false` |
| `[allowEmpty]` | 是否展示清除按钮 | `boolean` | `true` |
| `[clearText]` | 清除按钮的提示文案 | `string` | `清除` |
| `[defaultOpenValue]` | 设置面板打开时默认选中的值 | `Date` | `new Date()` |
| `[disabledHours]` | 禁止选择部分小时选项 | `() => number[]` | - |
| `[disabledMinutes]` | 禁止选择部分分钟选项 | `(hour: number) => number[]` | - |
| `[disabledSeconds]` | 禁止选择部分秒选项 | `(hour: number, minute: number) => number[]` | - |
| `[hideDisabledOptions]` | 隐藏禁止选择的选项 | `boolean` | `false` |
| `[hourStep]` | 小时选项间隔 | `number` | `1` |
| `[minuteStep]` | 分钟选项间隔 | `number` | `1` |
| `[secondStep]` | 秒选项间隔 | `number` | `1` |
| `[popupClassName]` | 弹出层类名 | `string` | - |
| `[change]` | 时间发生变化的回调 | `(value: Date) => void` | - |
| `[openChange]` | 面板打开/关闭时的回调 | `(status: boolean) => void` | - |
| `[nowText]` | 此刻按钮文本 | `string` | - |
| `[okText]` | 确认按钮文本 | `string` | - |
