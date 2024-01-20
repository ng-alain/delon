---
type: CURD
title: cell
subtitle: Cell Data
cols: 1
order: 4
module: import { CellModule } from '@delon/abc/cell';
---

Cell formatting is supported for multiple data types, and supports widget mode.

## API

### cell:standalone

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[value]` | Value of the cell | `unknown` | - |
| `[options]` | Option of the cell | `CellOptions` | - |
| `[loading]` | Whether loading | `boolean` | `false` |

### CellOptions

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[type]` | Render type of the cell | - | - |
| `[tooltip]` | Text popup tip  | `string` | - |
| `[renderType]` | Render type of the cell | `primary,success,danger,warning` | - |
| `[size]` | Size of the cell | `large,small` | - |
| `[unit]` | Unit, can also be specified by `value: {text: 100, unit: 'RMB'}` | `string` | `-` |
| `[default]` | Default text | `string | CellDefaultText` | - |
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
| `[checkbox]` | Checkbox config | `{ label?: string }` | - |
| `[radio]` | Radio config | `{ label?: string }` | - |

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
- `checkbox` Checkbox (Support `disabled`)
- `radio` Radio (Support `disabled`)
- `enum` Enum
- `widget` Custom widget

## Custom widget

Just implement the `CellWidgetInstance` interface, for example:

```ts
import { ChangeDetectionStrategy, Component } from '@angular/core';

import type { CellWidgetData, CellWidgetInstance } from '@delon/abc/cell';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'cell-widget-test',
  template: ` <img nz-tooltip nzTooltipTitle="Client it" [src]="data.value" class="img" style="cursor: pointer" /> `,
  host: {
    '(click)': 'show()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellTestWidget implements CellWidgetInstance {
  static readonly KEY = 'test';

  readonly data!: CellWidgetData;

  constructor(private msg: NzMessageService) {}

  show(): void {
    this.msg.info(`click`);
  }
}
```

`data` is a fixed parameter, including `value`, `options` configuration items.

Finally, register the widget through `provideCellWidgets` under `app.config.ts`, for example:

```ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideCellWidgets(
      { KEY: CellTestWidget.KEY, type: CellTestWidget }
    ),
  ]
}
```
