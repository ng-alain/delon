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

### range-picker

| Property         | Description                          | Type   | Default |
| ---------------- | ------------------------------------ | ------ | ------- |
| `[(ngModel)]`    | Start date, start and end values at the same time | `Date` | -       |
| `[(ngModelEnd)]` | End date, start and end values at the same time | `Date` | -       |
| `[shortcut]` | Set shortcuts | `boolean | DateRangePickerShortcut` | `false` |
| `[nzAllowClear]` | Whether to show clear button | `boolean` | `true` |
| `[nzAutoFocus]` | get focus when component mounted | `boolean` | `false` |
| `[nzClassName]` | picker className | `string` | `''` |
| `[nzDateRender]` | custom rendering function for date cells (Not support by month-picker/year-picker) | `TemplateRef<Date>｜string｜((d: Date) => TemplateRef<Date>｜string)` | - |
| `[nzDisabled]` | determine whether the nz-date-picker is disabled | `boolean` | `false` |
| `[nzDisabledDate]` | specify the date that cannot be selected (Not support by year-picker) | `(current: Date) => boolean` | - |
| `[nzLocale]` | localization configuration | `object` | [default](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json) |
| `[nzOpen]` | open state of picker | `boolean` | - |
| `[nzPopupStyle]` | to customize the style of the popup calendar | `object` | `{}` |
| `[nzDropdownClassName]` | to customize the className of the popup calendar  | `string` | - |
| `[nzSize]` | determine the size of the input box, the height of `large` and `small`, are 40px and 24px respectively, while default size is 32px | `'large'｜'small'` | - |
| `[nzStyle]` | to customize the style of the input box | `object` | `{}` |
| `[nzDisabledTime]` | to specify the time that cannot be selected | `(current: Date, partial: 'start'｜'end') => { nzDisabledHours, nzDisabledMinutes, nzDisabledSeconds }` | - |
| `[nzFormat]` | to set the date format | `string` | `"yyyy-MM-dd"` |
| `[nzRanges]` | preseted ranges for quick selection | `{ [ key: string ]: Date[] }` | - |
| `[nzRenderExtraFooter]` | render extra footer in panel | `TemplateRef｜string｜(() => TemplateRef｜string)` | - |
| `[nzShowTime]` | to provide an additional time selection | `object｜boolean` | [TimePicker Options](/components/time-picker/en#api) |
| `[nzPlaceHolder]` | placeholder of date input | `string[]` | - |
| `(nzOnOk)` | click ok callback | `EventEmitter<Date[]>` | - |
| `(ngModelChange)` | Date change callback | `EventEmitter<Date[]>` | - |
| `(nzOnOpenChange)` | a callback emitter, can be executed whether the popup calendar is popped up or closed | `EventEmitter<boolean>` | - |

> Support for all attributes of [nz-range-picker](https://ng.ant.design/components/date-picker/zh#nz-range-picker).

### DateRangePickerShortcut

| Property         | Description                          | Type   | Default |
| ---------------- | ------------------------------------ | ------ | ------- |
| `[enabled]` | Whether to enable | `boolean` | `false` |
| `[closed]` | Whether to close the panel after clicking | `boolean` | `true` |
| `[enabled]` | Shortcut list | `DateRangePickerShortcutItem[]` | `今天,昨天,近3天,近7天,本周,本月,全年` |
