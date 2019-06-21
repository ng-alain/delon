---
title: time
subtitle: Time
type: Widgets
---

To select/input a time.

## Notice

- Format is divided into two types: **Data format** means form data, **Display format** means display data ([nzFormat](https://ng.ant.design/components/time-picker/en#api))
- All **Data format** units, reference [date-fns format](https://date-fns.org/v1.29.0/docs/format) (China mirror: [moment format](http://Momentjs.cn/docs/#/displaying/format/))
- Specify `schema.format` must follow [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6) time format, otherwise considered as a format error, default rules:
  - `time`、`full-time` default is `HH:mm:ss`
- When `schema.format` is not specified, the data formatting (Allows you to reassign default values via `DelonFormConfig`) is determined by the `schema.type` type:
  - `string` default is `HH:mm:ss`
  - `number` default is `x` 13-bit Unix Timestamp
- Since `disabledHours`, `disabledMinutes`, `disabledSeconds` will cause the time format to be corrupted, it may cause the display format error. The solution is specify a complete `Date` object in the default value (`schema.default` or `formData`)

## API

### schema

Property     | Description                  | Type      | Default
-------------|------------------------------|-----------|--------
`[readOnly]` | Whether to disable the state | `boolean` | -
`[format]`   | Data format type             | `string`  | -

### ui

Property     | Description                  | Type      | Default
-------------|------------------------------|-----------|--------
`[size]`        | Size of the `nz-date-picker`  | `string` | -
`[placeholder]` | Placeholder of date input | `string` | -
`[displayFormat]` | Display format([nzFormat](https://ng.ant.design/components/date-picker/en#api)) | `string` | `yyyy-MM-dd HH:mm:ss`
`[utcEpoch]` |Whether UTC (represents the number of milliseconds from `1970`) | `boolean` | `false`
`[allowEmpty]` | allow clearing text | `boolean` | `true`
`[clearText]` | clear tooltip of icon | `string` | `清除`
`[defaultOpenValue]` | default open panel value | `Date` | `new Date()`
`[disabledHours]` | to specify the hours that cannot be selected | `() => number[]` | -
`[disabledMinutes]` | to specify the minutes that cannot be selected | `(hour: number) => number[]` | -
`[disabledSeconds]` | to specify the seconds that cannot be selected | `(hour: number, minute: number) => number[]` | -
`[hideDisabledOptions]` | hide the options that can not be selected | `boolean` | `false`
`[hourStep]` | interval between hours in picker | `number` | `1`
`[minuteStep]` | interval between minutes in picker | `number` | `1`
`[secondStep]` | interval between seconds in picker | `number` | `1`
`[popupClassName]` | className of panel | `string` | -
