---
title: number
subtitle: Input Number
type: Widgets
---

Enter a number within certain range with the mouse or keyboard.

## API

### schema

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[minimum]` | min value | `number` | - |
| `[exclusiveMinimum]` | Indicate whether minimum are exclusive of the value | `boolean` | - |
| `[maximum]` | max value | `number` | - |
| `[exclusiveMaximum]` | Indicate whether maximum are exclusive of the value | `boolean` | - |
| `[multipleOf]` | Restricted to a multiple of a given number, | `number` | `1` |

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[prefix]` | Prefix, simplifying the use of `nzFormatter`, `nzParser` | - | - |
| `[unit]` | Unit, simplifying the use of `nzFormatter`, `nzParser` | - | - |
| `[formatter]` | Specifies the format of the value presented | - | - |
| `[parser]` | Specifies the value extracted from nzFormatter | - | - |
| `[precision]` | precision of input value | - | - |
| `[widgetWidth]` | Specify `nz-number` width | `number` | `90` |
| `[hideStep]` | Hide step icon | `boolean` | `false` |
