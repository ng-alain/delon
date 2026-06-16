---
title: textarea
subtitle: Textarea
type: Widgets
---

Textarea.

## API

### schema

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[maxLength]` | Maximum length of the input | `number` | - |
| `[readOnly]` | Whether to disable the state | `boolean` | - |

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[size]` | Size of the `nz-input` | `string` | - |
| `[placeholder]` | placeholder of the input | `string` | - |
| `[autosize]` | height autosize feature, can be set object `{ minRows: 2, maxRows: 6 }` | `{ minRows?: number; maxRows?: number }` | `{ minRows: 1, maxRows: 0 }` |
| `[variant]` | Variant | `outlined,borderless,filled,underlined` | `outlined` |
| `[maxCharacterCount]` | `textarea` maximum character count displayed | `number` | - |
| `[computeCharacterCount]` | customized `characterCount` computation function | `(v: string) => number` | `v => v.length` |
| `[change]` | The content event for the Input. | `(val: string) => void` | - |
| `[focus]` | The focus event for the Input. | `(e: FocusEvent) => void` | - |
| `[blur]` | The blur event for the Input. | `(e: FocusEvent) => void` | - |

---

## Examples

### Basic Usage

Simplest of usage.

```typescript
import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema, SFTextareaWidgetSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-textarea-simple',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)" /> `,
  imports: [DelonFormModule]
})
export class FormTextareaSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      remark: {
        type: 'string',
        title: '描述',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 2, maxRows: 6 },
          change: val => console.log('change', val),
          focus: ev => console.log('focus', ev),
          blur: ev => console.log('blur', ev)
        } as SFTextareaWidgetSchema
      },
      max: {
        type: 'string',
        title: 'Max',
        ui: {
          widget: 'textarea',
          maxCharacterCount: 100
        } as SFTextareaWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
