---
title: cascader
subtitle: Cascader
type: Widgets
---

Usually, it's used in province/city/district, company hierarchy, category of things, etc.

## Note

- Value of `default` or `formData` should always be an array, for example, city cascade may only save leaf node `value`, but you need to manually provide the whole data chain `value` array

## Data Source

**Static**

One time fetching data, data source is from `asyncData`, `enum`.

**Realtime**

Every select triggers a HTTP request, data source is from `asyncData`; includes three parameters `(node: NzCascaderOption, index: number, me: CascaderWidget) => PromiseLike<any>`, `me` indicates instance of the current widget.

## API

### schema

Property     | Description        | Type                 | Default
-------------|--------------------|----------------------|--------
`[enum]`     | Static data source | `SFSchemaEnumType[]` | -
`[readOnly]` | Read only          | `boolean`            | -

### ui

Property            | Description                                                                                                                          | Type                                                                              | Default
--------------------|--------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|------------
`[asyncData]`       | Asynchronous static data source                                                                                                      | `(node: NzCascaderOption, index: number, me: CascaderWidget) => PromiseLike<any>` | -
`[size]`            | Size, equals to `nzSize`                                                                                                             | `string`                                                                          | -
`[placeholder]`     | Placeholder                                                                                                                          | `string`                                                                          | -
`[showSearch]`      | Whether support search                                                                                                               | `bool`                                                                            | `false`
`[allowClear]`      | Whether show clear button                                                                                                            | `bool`                                                                            | `true`
`[clearText]`       | Title of clear button                                                                                                                | `string`                                                                          | `清除`
`[showArrow]`       | Whether show arrow                                                                                                                   | `bool`                                                                            | `true`
`[showInput]`       | Whether show input                                                                                                                   | `bool`                                                                            | `true`
`[menuClassName]`   | Custom floating layer class name                                                                                                     | `string`                                                                          | -
`[menuStyle]`       | Custom floating layer style                                                                                                          | `string`                                                                          | -
`[columnClassName]` | Custom style of data column in popup menu                                                                                            | `string`                                                                          | -
`[notFoundContent]` | Content when dropdown list is empty                                                                                                  | `string`                                                                          | -
`[data]`            | Initial data, is used in first column data, sub column is loaded by `children` option, or loaded by `load` asynchronous event        | `Array`                                                                           | -
`[enableCache]`     | Whether cache asynchronous loaded data, should set it to false if data is changed in every asynchronous load                         | `bool`                                                                            | `true`
`[expandTrigger]`   | How is sub menu expanded, options: 'click' or 'hover'                                                                                | `string`                                                                          | `click`
`[changeOnSelect]`  | When it is set to true, the value is changed when each level of menu option is selected, see details from above demo                 | `bool`                                                                            | `false`
`[changeOn]`        | Custom function to determine if it should have a change when a menu option is selected, will have a change when return value is true | `(option: NzCascaderOption, level: number) => boolean`                            | -
`[triggerAction]`   | Trigger action to show menu                                                                                                          | `('click', 'hover')[]`                                                            | `['click']`
`[valueProperty]`   | Property of `value`                                                                                                                  | `string`                                                                          | `value`
`[labelProperty]`   | Property of `label`                                                                                                                  | `string`                                                                          | `label`
`[visibleChange]`   | Asynchronous load event                                                                                                              | `(value: boolean) => void`                                                        | -
`[change]`          | Selected value changed event                                                                                                         | `(values: any[]) => void`                                                         | -
`[selectionChange]` | Select option changed event                                                                                                          | `(values: NzCascaderOption[]) => void`                                            | -
`[clear]`           | Content clear event                                                                                                                  | `() => void`                                                                      | -
