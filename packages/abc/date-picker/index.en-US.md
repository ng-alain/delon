---
type: Form
title: range-picker
subtitle: Data Range
cols: 1
module: DataRangeModule
config: DateRangePickerConfig
---

Based on the `nz-range-picker` further optimization, better service to start and end dates.

## API

| Property         | Description                          | Type   | Default |
| ---------------- | ------------------------------------ | ------ | ------- |
| `[(ngModel)]`    | Start date, start and end values at the same time | `Date` | -       |
| `[(ngModelEnd)]` | End date, start and end values at the same time | `Date` | -       |

> Support for all attributes of [nz-range-picker](https://ng.ant.design/components/date-picker/zh#nz-range-picker).
