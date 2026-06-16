---
title: rate
subtitle: Rate
type: Non-built-in widgets
---

A quick rating operation on something.

## How to use

Non-built-in modules need to additionally register `withRateWidget` in [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9).

## API

### schema

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[maximum]` | star count | `number` | `5` |
| `[multipleOf]` | `0.5` indicates allow semi selection | `number` | `0.5` |

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[allowClear]` | whether to allow clear when click again | `boolean` | `true` |
| `[autoFocus]` | get focus when component mounted | `boolean` | `false` |
| `[text]` | Reminder text template, `{{value}}` indicates the current value | `string` | - |
| `[tooltips]` | Customize tooltip by each character | `string[]` | `[]` |

---

## Examples

### Basic Usage

Simplest of usage.

```typescript
import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';
import type { SFRateWidgetSchema } from '@delon/form/widgets/rate';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-rate-simple',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)" /> `,
  imports: [DelonFormModule]
})
export class FormRateSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      rate: {
        type: 'number',
        title: '评级',
        default: 4.5,
        ui: {
          widget: 'rate'
        } as SFRateWidgetSchema
      },
      // 允许半选
      rate2: {
        type: 'number',
        title: '评级',
        maximum: 5,
        multipleOf: 0.5,
        default: 4.5,
        ui: {
          widget: 'rate',
          text: '{{value}} starts'
        } as SFRateWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
