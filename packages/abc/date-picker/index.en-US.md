---
type: Form
title: range-picker
subtitle: Data Range
cols: 1
module: import { DataRangeModule } from '@delon/abc/date-picker';
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
| `[enabled]` | Shortcut list | `DateRangePickerShortcutItem[]` | `今天,昨天,近3天,近7天,本周,本月,全年` |

### range-picker

**Deprecated** Use `nz-range-picker` and `extend` directive to replace `range-picker`, will remove `range-picker` at `12.0.0`.

```html
<range-picker [(ngModel)]="i.start" [(ngModelEnd)]="i.end"></range-picker>
```

Changed to:

```html
<nz-range-picker [(ngModel)]="i.start" extend [(ngModelEnd)]="i.end"></nz-range-picker>
```
