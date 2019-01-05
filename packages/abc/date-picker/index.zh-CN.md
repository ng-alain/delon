---
type: Form
title: range-picker
subtitle: 日期范围
cols: 1
module: DataRangeModule
config: DateRangePickerConfig
---

基于 `nz-range-picker` 进一步优化，更好的服务于开始与结束日期。

## API

### range-picker

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[(ngModel)]` | 开始日期，开始与结束同时有值才会生效 | `Date` | -
`[(ngModelEnd)]` | 结束日期，开始与结束同时有值才会生效 | `Date` | -
`[nzAllowClear]` | 是否显示清除按钮 | `boolean` | `true`
`[nzAutoFocus]` | 自动获取焦点 | `boolean` | `false`
`[nzClassName]` | 选择器 className | `string` | `''`
`[nzDateRender]` | 自定义日期单元格的内容（month-picker/year-picker不支持） | `TemplateRef<Date>｜string｜((d: Date) => TemplateRef<Date>｜string)` | -
`[nzDisabled]` | 禁用 | `boolean` | `false`
`[nzDisabledDate]` | 不可选择的日期（year-picker不支持） | `(current: Date) => boolean` | -
`[nzLocale]` | 国际化配置 | `object` | [默认配置](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json)
`[nzOpen]` | 控制弹层是否展开 | `boolean` | -
`[nzPopupStyle]` | 额外的弹出日历样式 | `object` | `{}`
`[nzDropdownClassName]` | 额外的弹出日历 className | `string` | -
`[nzSize]` | 输入框大小，`large` 高度为 40px，`small` 为 24px，默认是 32px | `'large'｜'small'` | -
`[nzStyle]` | 自定义输入框样式 | `object` | `{}`
`[nzDisabledTime]` | 不可选择的时间 | `(current: Date, partial: 'start'｜'end') => { nzDisabledHours, nzDisabledMinutes, nzDisabledSeconds }` | -
`[nzFormat]` | 展示的日期格式 | `string` | `"yyyy-MM-dd"`
`[nzRanges]`       | 预设时间范围快捷选择 | `{ [ key: string ]: Date[] }` | -
`[nzRenderExtraFooter]` | 在面板中添加额外的页脚 | `TemplateRef｜string｜(() => TemplateRef｜string)` | -
`[nzShowTime]` | 增加时间选择功能 | `object｜boolean` | [TimePicker Options](/components/time-picker/zh#api)
`[nzPlaceHolder]` | 输入框提示文字 | `string[]` | -
`(nzOnOk)` | 点击确定按钮的回调 | `EventEmitter<Date[]>` | -
`(nzOnOpenChange)` | 弹出和关闭的回调 | `EventEmitter<boolean>` | -

> 支持 [nz-range-picker](https://ng.ant.design/components/date-picker/zh#nz-range-picker) 的所有属性。
