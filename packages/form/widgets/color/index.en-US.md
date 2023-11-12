---
title: color
subtitle: Color
type: Non-built-in widgets
---

Used when the user needs to customize the color selection.

## How to Use

**Installation dependencies**  

`yarn add ng-antd-color-picker`

**Import Module**

Non-built-in modules, Should be import `ColorWidgetModule` in [json-schema.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11).

## API

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[format]`       | Format of color       | `rgb`｜`hex`｜`hsb`                 | `hex`     |
| `[defaultValue]` | Default value of color     | `string`｜`NzColor`                  | `false`   |
| `[allowClear]`   | Allow clearing color selected  | `boolean`                         | `false`   |
| `[trigger]`      | ColorPicker trigger mode | `hover`｜`click`                   | `click`   |
| `[showText]`      | Show color text     | `boolean`                         | `false`   |
| `[title]`      | Setting the title of the color picker | `TemplateRef<void>`｜`string`      | -         |
| `(change)`     | Callback when value is changed    | `EventEmitter<{ color: NzColor; format: string }>`            | -         |
| `(formatChange)`      | Callback when `format` is changed      | `EventEmitter<'rgb'｜'hex'｜'hsb'>` | -         |
| `[block]`   | Color Block  | `boolean`                         | `false`  |
