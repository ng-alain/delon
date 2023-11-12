---
title: number
subtitle: Input Number
type: Widgets
order: 5
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
| `[change]` | Change event for the number | `(val?: number) => void` | - |

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[prefix]` | Prefix, simplifying the use of `nzFormatter`, `nzParser` | - | - |
| `[unit]` | Unit, simplifying the use of `nzFormatter`, `nzParser` | - | - |
| `[formatter]` | Specifies the format of the value presented | - | - |
| `[parser]` | Specifies the value extracted from nzFormatter | - | - |
| `[precision]` | precision of input value | - | - |
| `[widgetWidth]` | Specify `nz-number` width | `number, string` | `90` |
| `[hideStep]` | Hide step icon | `boolean` | `false` |

## QA

### Why can't modify `unit`

All components of NG-ZORRO are in OnPush mode. A special case is that when the `unit` needs to be dynamically modified, it will only take effect when the `ngModel` change needs to be triggered once, so it's value needs to be changed, for example:

```ts
const ageProperty = this.sf.getProperty('/age')!;
ageProperty.widget.ui.unit ='c';
ageProperty.widget.setValue(null);
ageProperty.widget.setValue(statusProperty.value);
```
