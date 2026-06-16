---
title: text
subtitle: Text
type: Widgets
---

Text in form.

## Rules

- Forced remove of the `required` effect
- Auto render `-` if the `defaultText` value does not exist

## API

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[defaultText]` | Default text of this item | `string` | `-` |
| `[html]` | Whether to support HTML | `boolean` | `true` |

---

## Examples

### Basic Usage

Simplest of usage.

```typescript
import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema, SFStringWidgetSchema, SFTextWidgetSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-text-simple',
  template: ` <sf [schema]="schema" [loading]="loading" (formSubmit)="submit($event)" /> `,
  imports: [DelonFormModule]
})
export class FormTextSimple {
  private readonly msg = inject(NzMessageService);
  loading = false;
  schema: SFSchema = {
    properties: {
      id1: { type: 'number', ui: { widget: 'text' } as SFTextWidgetSchema },
      id2: { type: 'number', ui: { widget: 'text', defaultText: 'default text' } as SFTextWidgetSchema },
      name: {
        type: 'string',
        title: 'Name',
        ui: {
          addOnAfter: 'RMB',
          placeholder: 'RMB结算'
        } as SFStringWidgetSchema
      }
    },
    required: ['name']
  };

  submit(value: {}): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.msg.success(JSON.stringify(value));
    }, 1000);
  }
}
```
