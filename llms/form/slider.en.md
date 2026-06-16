---
title: slider
subtitle: Slider
type: Non-built-in widgets
---

A Slider component for displaying current value and intervals in range.

## How to use

Non-built-in modules need to additionally register `withSliderWidget` in [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9).

## Notice

- Ingored `exclusiveMinimum`, `exclusiveMaximum`

## API

### schema

Property | Description | Type | Default
-------- | ----------- | ---- | -------
`[minimum]` | The minimum value the slider can slide to	| `number` | `0`
`[maximum]` | The maximum value the slider can slide to | `number` | `100`
`[multipleOf]` | The granularity the slider can step through values. Must greater than 0, and be divided by (max - min). When `ui.marks` no null, `step` can be null. | `number` | `1`

### ui

Property | Description | Type | Default
-------- | ----------- | ---- | -------
`[range]` | dual thumb mode | `Boolean` | -
`[marks]` | Tick mark of Slider, type of key must be `number`, and must in closed interval `[min, max]` ，each mark can declare its own style. | `NzMarks` | -
`[dots]` | Whether the thumb can drag over tick only | `Boolean` | `false`
`[included]` | Make effect when `marks` not null，`true` means containment and `false` means coordinative | `Boolean` | `true`
`[vertical]` | If true, the slider will be vertical | `boolean` | `false`
`[afterChange]` | Fire when `onmouseup` is fired. | `(value: NzSliderValue) => void` | -
`[formatter]` | Slider will pass its value to `nzTipFormatter`, and display its value in Tooltip, and hide Tooltip when return value is null | `(value: number) => string` | -

---

## Examples

### Basic Usage

Simplest of usage.

```typescript
import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';
import type { SFSliderWidgetSchema } from '@delon/form/widgets/slider';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-slider-simple',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)" /> `,
  imports: [DelonFormModule]
})
export class FormSliderSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      count: {
        type: 'number',
        title: '数量',
        ui: {
          widget: 'slider'
        } as SFSliderWidgetSchema,
        default: 10
      },
      // 双滑块模式
      range: {
        type: 'number',
        title: '范围',
        ui: {
          widget: 'slider',
          range: true
        } as SFSliderWidgetSchema,
        default: [10, 20]
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
