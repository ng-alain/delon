---
title: checkbox
subtitle: Checkbox
type: Widgets
---

Checkbox.

## API

### schema

Property        | Description                                 | Type                 | Default
----------------|---------------------------------------------|----------------------|--------
`[readOnly]`    | Whether to disable the state                | `boolean`            | -
`[enum]`        | Render checkbox group when the value exists | `SFSchemaEnumType[]` | -
`[title]`       | Text of the single checkbox                 | `string`             | -
`[description]` | Help text of the single checkbox            | `string`             | -

### ui

Property | Description | Type | Default
-------- | ----------- | ---- | -------
`[asyncData]` | Async data source, render checkbox group when the value exists  | `() => Observable<SFSchemaEnumType[]>` | -
`[span]` | Raster number of cells to occupy, refer to [layout](https://ng.ant.design/components/checkbox/en#components-checkbox-demo-layout) | `number` | -
`[styleType]` | Style of the `nz-checkbox` | `default, button` | `default`
`[checkAll]` | Whether to select all  | `boolean` | -
`[checkAllText]` | Select all button text  | `string` | `全选`
`[change]` | Changed event, Parameter: single checkbox is `boolean`, otherwise `SFSchemaEnum[]` | `(res: boolean | SFSchemaEnum[]) => void` | -
