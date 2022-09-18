---
type: CURD
title: cell
subtitle: Cell Data
cols: 1
order: 4
module: import { CellModule } from '@delon/abc/cell';
---

Cell formatting is supported for multiple data types.

## API

### cell

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[value]` | Value of the cell | `unknown` | - |
| `[options]` | Option of the cell | `CellOptions` | - |
| `[unit]` | Unit, can also be specified by `value: {text: 100, unit: 'RMB'}` | `string` | `-` |
| `[default]` | Default value of the cell | `string` | `-` |
| `[defaultCondition]` | Default value condition | `unknown` | `null` |
| `[truncate]` | Whether truncate text | `boolean` | `false` |
| `[loading]` | Whether loading | `boolean` | `false` |
| `[type]` | Type of the cell | `primary,success,danger,warning` | - |
| `[size]` | Size of the cell | `large,small` | - |
| `[currency]` | Currency shortcut | `number` | - |
| `[date]` | Date shortcut | `number, string, Date` | - |

### CellOptions

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[type]` | Render type of the cell | - | - |
| `[tooltip]` | Text popup tip  | `string` | - |
| `[mask]` | Format mask, [Document](https://ng-alain.com/util/format/en#formatMask) | `string, FormatMaskOption` | - |
| `[widget]` | Widget config | `{key?: string, data?: string}` | - |
| `[date]` | Date config, supports `minutes ago` formatting | `{format?: string}` | - |
| `[mega]` | Large number format filter, [Document](https://ng-alain.com/util/format/en#mega) | `CurrencyMegaOptions` | - |
| `[currency]` | Currency config | `CurrencyFormatOptions` | - |
| `[boolean]` | Boolean config | `YNOptions` | - |
| `[img]` | Image config, support large image preview | `{ size?: number; big?: boolean }` | - |
| `[link]` | Link config | `{ url?: string; target?: string }` | - |
| `[html]` | HTML config | `{ safe?: string }` | - |
| `[badge]` | Badge config | `{ data?: CellBadge }` | - |
| `[tag]` | Tag config | `{ data?: CellTag }` | - |

**Type**

- `string` String
- `number` Number
- `mega` Large number format filter, [Document](https://ng-alain.com/util/format/en#mega)
- `currency` Currency
- `cny` Converted into RMB notation
- `boolean` Boolean
- `date` Date
- `img` Image, support large image preview
- `link` Link
- `html` HTML
- `badge` Badge
- `tag` Tag
- `widget` Custom widget
