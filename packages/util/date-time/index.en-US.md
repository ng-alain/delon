---
title: date-time
subtitle: Date Time Conversion
type: Tools
---

## toDate

Convert to `Date` format, support `Date, number, string` types, If the argument is a number, it is treated as a timestamp.

* `formatString` If parsing fails try to parse the date by pressing `formatString`
* `defaultValue` If parsing fails returned default value, default: `new Date(NaN)`
* `timestampSecond` Whether the incoming value is in seconds

## formatDate

Format date, supports `Date, number, string` types, If the argument is a number, it is treated as a timestamp.

* Please refer to [date-fnd format](https://date-fns.org/v2.30.0/docs/format) for string format
* `dateLocale` Recommended to be consistent with NG-ZORRO by using `inject(NZ_DATE_LOCALE)`

## dateTimePickerUtil

一组针对 [DatePicker](https://ng.ant.design/components/date-picker/en) 的工具类。

- `now` Current local time
- `date` Current local date (not including time part)
- `removeTime` Remove the time part of the date
- `format` Format date-time
- `getDiffDays` Calculate the number of days between two dates, `0` means the same day
- `disabledBeforeDate` Disabled Before date (Default: today), Generally serves `nzDisabledDate`
- `disabledAfterDate` Disabled After date (Default: today), Generally serves `nzDisabledDate`
- `disabledBeforeTime` Disabled Before time (Default: now), Generally serves `nzDisabledTime`
- `disabledAfterTime` Disabled After time (Default: now), Generally serves `nzDisabledTime`

```ts
disabledDate = dateTimePickerUtil.disabledBeforeDate();
disabledDateTime = dateTimePickerUtil.disabledBeforeTime({ offsetSeconds: 60 * 5 });
```

## getTimeDistance

Get the time range, return `[ Date, Date]` for the start and end dates, for example: Get this week time:

```ts
getTimeDistance('week')
```

**Parameters**

- `type` Shortcut type, with `-` for last time, if specified `number` type for days
  - `today`, `-today`, `yesterday` Today or yesterday
  - `week`, `-week` This week or last week
  - `month`, `-month` This month or last month
  - `year`, `-year` This year or last year
- `time` Specify start time, default is `now`
