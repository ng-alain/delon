---
title: segmented
subtitle: Segmented
type: Non-built-in widgets
---

- When displaying multiple options and user can select a single option;
- When switching the selected option, the content of the associated area changes.

## How to use

Non-built-in modules need to additionally register `withSegmentedWidget` in [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9).

## API

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[block]` | Option to fit width to its parent\'s width | `boolean` | false |  |
| `[asyncData]` |  Set children optional | `() => Observable<NzSegmentedOptions>` | - |  |
| `(valueChange)` | Emits when index of the currently selected option changes | `(data: { index: number; item: SFValue }) => void` | - |  |

---

## Examples

### Basic Usage

Simplest of usage.

```typescript
import { Component, inject } from '@angular/core';
import { delay, of } from 'rxjs';

import { DelonFormModule, SFSchema } from '@delon/form';
import { SFSegmentedWidgetSchema, SegmentedWidget } from '@delon/form/widgets/segmented';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSegmentedOptions } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'form-segmented-simple',
  template: `<sf [schema]="schema" (formSubmit)="submit($event)" />`,
  imports: [DelonFormModule]
})
export class FormSegmentedSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      base: {
        type: 'string',
        title: 'Base',
        default: 2,
        enum: ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'],
        ui: {
          widget: SegmentedWidget.KEY,
          valueChange: console.log
        } as SFSegmentedWidgetSchema
      },
      asyncData: {
        type: 'string',
        title: 'Async Data',
        ui: {
          widget: SegmentedWidget.KEY,
          asyncData: () =>
            of([
              { label: 'Label1', value: 'a' },
              { label: 'Label2', value: 'b' },
              { label: 'Label3', value: 'c', disabled: true }
            ] as NzSegmentedOptions).pipe(delay(1000)),
          valueChange: console.log
        } as SFSegmentedWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
