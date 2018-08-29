---
type: Form
title: range-picker
subtitle: 日期范围
cols: 1
module: NaDataRangeModule
config: DatePickerConfig
---

在原 `nz-range-picker` 的基础改进，使开始与结束日期扁平化。

## API

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[(ngModel)]` | 开始日期，开始与结束同时有值才会生效 | `Date` | -
`[(ngModelEnd)]` | 结束日期，开始与结束同时有值才会生效 | `Date` | -

> 支持 [nz-range-picker](https://ng.ant.design/components/date-picker/zh#nz-range-picker) 的所有属性。
