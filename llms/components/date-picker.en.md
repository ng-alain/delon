---
type: Form
title: range-picker
subtitle: Data Range
cols: 1
module: import { DatePickerModule } from '@delon/abc/date-picker';
---

Based on the `nz-range-picker` further optimization, better service to start and end dates.

## API

### [extend]

It needs to be used with [nz-range-picker](https://ng.ant.design/components/date-picker/zh#nz-range-picker), for example:

```html
<nz-range-picker [(ngModel)]="i.start" extend [(ngModelEnd)]="i.end"></nz-range-picker>
```

| Property | Description | Type | Default | Global Config |
|----------|-------------|------|---------|---------------|
| `[(ngModelEnd)]` | End date, start and end values at the same time | `Date` | - |  |
| `[shortcut]` | Set shortcuts | `boolean | DateRangePickerShortcut` | `false` | ✅ |

#### DateRangePickerShortcut

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[enabled]` | Whether to enable | `boolean` | `false` |
| `[closed]` | Whether to close the panel after clicking | `boolean` | `true` |
| `[list]` | Shortcut list, supports using `['today', 'yesterday', '-3', '-7', 'week', 'lastWeek', 'month', 'lastMonth', 'year']` to represent... | `DateRangePickerShortcutItem[]` | `今天,昨天,近3天,近7天,本周,本月,全年` |

---

## Examples

### Basic

Start and end values with `ngModel`, `ngModelEnd`.

```typescript
import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RangePickerDirective } from '@delon/abc/date-picker';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'components-date-picker-basic',
  template: `
    result: {{ i | json }}<br />
    <nz-range-picker [(ngModel)]="i.start" extend [(ngModelEnd)]="i.end" />
  `,
  imports: [JsonPipe, FormsModule, NzDatePickerModule, RangePickerDirective]
})
export class ComponentsDatePickerBasic {
  i: { start?: Date; end?: Date } = {};
}
```

### Shortcut

Use `shortcuts` to customize the shortcut panel (supports global configuration).

```typescript
import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RangePickerDirective } from '@delon/abc/date-picker';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'components-date-picker-shortcut',
  template: `
    result: {{ i | json }}<br />
    <nz-range-picker [(ngModel)]="i.start" extend [(ngModelEnd)]="i.end" shortcut />
  `,
  imports: [JsonPipe, FormsModule, NzDatePickerModule, RangePickerDirective]
})
export class ComponentsDatePickerShortcut {
  i: { start?: Date; end?: Date } = {};
}
```
