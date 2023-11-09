---
title: date-time
subtitle: 日期时间转换
type: Tools
---

## toDate

转换成 `Date` 格式，支持 `Date, number, string` 类型，如果是 `number` 表示 Unix timestamp。

* `formatString` 如果转换失败尝试根据 `formatString` 格式来转换
* `defaultValue` 无效日期应返回的默认值，默认：`new Date(NaN)`
* `timestampSecond` 传入值是否秒级

## formatDate

格式化日期，支持 `Date, number, string` 类型，如果是 `number` 表示 Unix timestamp)。

* 字符串格式请参考 [date-fnd format](https://date-fns.org/v2.30.0/docs/format)
* `dateLocale` 建议通过使用 `inject(NZ_DATE_LOCALE)` 与 NG-ZORRO 保持一致

## dateTimePickerUtil

一组针对 [DatePicker](https://ng.ant.design/components/date-picker/en) 的工具类。

- `now` 当前本地时间
- `date` 当前本地日期（不包含时间部分）
- `removeTime` 移除日期的时间部分
- `format` 格式化日期
- `getDiffDays` 计算两个日期相差天数，`0` 表示同一天
- `disabledBeforeDate` 禁用之前日期（默认：今天），一般服务于 `nzDisabledDate`
- `disabledAfterDate` 禁用之后日期（默认：今天），一般服务于 `nzDisabledDate`
- `disabledBeforeTime` 禁用之前时间（默认：现在），一般服务于 `nzDisabledTime`
- `disabledAfterTime` 禁用之后时间（默认：现在），一般服务于 `nzDisabledTime`

```ts
disabledDate = dateTimePickerUtil.disabledBeforeDate();
disabledDateTime = dateTimePickerUtil.disabledBeforeTime({ offsetSeconds: 60 * 5 });
```

## getTimeDistance

获取时间范围，返回 `[ Date, Date]` 表示开始与结束日期，例如：获取本周时间：

```ts
getTimeDistance('week')
```

**参数**

- `type` 快捷类型，带 `-` 表示过去一个时间，若指定 `number` 表示天数
  - `today`、`-today`、`yesterday` 今天或昨天
  - `week`、`-week` 本周或上周
  - `month`、`-month` 本月或上月
  - `year`、`-year` 今年或去年
- `time` 指定开始时间，默认为：`now`
