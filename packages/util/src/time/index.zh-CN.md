---
title: time
subtitle: 日期
type: Type
---

## getTimeDistance

获取时间范围，返回 `[ Date, Date]` 表示开始与结束日期，例如：获取本周时间：

```ts
getTimeDistance('week')
```

**参数**

- `type` 快捷类型，带 `-` 表示过去一个时间，若指定 `number` 表示天数
  - `today`、`-today` 今天或昨天
  - `week`、`-week` 本周或上周
  - `month`、`-month` 本周或上月
  - `year`、`-year` 今年或去年
- `time` 指定开始时间，默认为：`now`
