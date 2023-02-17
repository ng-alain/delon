---
title: date
subtitle: 日期
type: Widgets
---

输入或选择日期的控件。

## 注意事项

- 格式化分为：**数据格式化**表示表单数据和**显示格式化**显示数据（等同 [nzFormat](https://ng.ant.design/components/date-picker/zh#api) 值）
- 所有 **数据格式化** 单位，参考 [date-fns format](https://date-fns.org/v1.29.0/docs/format)（国内镜像：[moment format](http://momentjs.cn/docs/#/displaying/format/)）
- 指定 `schema.format` 则必须遵守 [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6) 时间格式，否则都视为格式错误，默认的数据格式化规则：
  - `date-time` 默认 `yyyy-MM-DDTHH:mm:ssZ`，注意这里采用的是 `type="datetime-local"` 因此会涉及到**时区问题**
  - `date`、`full-date` 默认 `yyyy-MM-dd`
  - `time`、`full-time` 默认 `HH:mm:ss`
  - 非标准：`week` 默认 `yyyy-ww`
  - 非标准：`month` 默认 `yyyy-MM`
- 不指定 `schema.format` 根据 `schema.type` 值按以下规则处理（允许通过[全局配置](/docs/global-config)替换）数据格式化：
  - `string` 默认 `yyyy-MM-dd HH:mm:ss`
  - `number` 默认 `T` 13位Unix Timestamp

## API

### schema 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[readOnly]` | 禁用状态 | `boolean` | - |
| `[format]` | 数据格式类型 | `string` | - |

### ui 属性

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[mode]` | 渲染模式 | `date,week,month,year` | `date` |
| `[rangeMode]` | 范围选择器的选择模式 | `date,week,month,year` | `date` |
| `[size]` | 大小，等同 `nzSize` | `default,large,small` | - |
| `[placeholder]` | 在文字框中显示提示讯息 | `string` | - |
| `[format]` | 数据格式化 | `string` | - |
| `[displayFormat]` | 显示格式化，（等同 [nzFormat](https://ng.ant.design/components/date-picker/zh#api) 值） | `string` | `yyyy-MM-dd HH:mm:ss` |
| `[end]` | 日期范围所对应的结束值 `key` | `string` | - |
| `[allowClear]` | 是否显示清除按钮 | `boolean` | `true` |
| `[className]` | 选择器 className | `string` | - |
| `[locale]` | 国际化配置 | `object` | - |
| `[popupStyle]` | 额外的弹出日历样式 | `object` | - |
| `[dropdownClassName]` | 额外的弹出日历 className | `string` | - |
| `[onOpenChange]` | 弹出日历和关闭日历的回调 | `(status: boolean) => void` | - |
| `[disabledDate]` | 不可选择的日期 | `(current: Date) => boolean` | - |
| `[disabledTime]` | 不可选择的时间 | `(current: Date) => { nzDisabledHours, nzDisabledMinutes, nzDisabledSeconds }` | - |
| `[renderExtraFooter]` | 在面板中添加额外的页脚 | `string` | - |
| `[showTime]` | 增加时间选择功能，`object` 类型为 [TimePickerOptions](https://ng.ant.design/components/time-picker/en#api) | `object,boolean` | `true` |
| `[showToday]` | 是否展示“今天”按钮 | `boolean` | `true` |
| `[inputReadOnly]` | 为 input 标签设置只读属性（避免在移动设备上触发小键盘） | `boolean` | `false` |
| `[inline]` | 内联模式 | `boolean` | `false` |
| `[separator]` | 分隔符 | `string, TemplateRef` | `'~'` |
| `[showWeekNumber]` | 是否在每一行显示周数（仅日期选择器支持。周选择器始终显示周数） | `boolean` | `false` |
| `[onOk]` | 点击确定按钮的回调 | `(data: Date | Date[]) => void` | - |
| `[change]` | 时间发生变化的回调 | `(data: Date | Date[]) => void` | - |
