---
title: boolean
subtitle: Switch
type: Widgets
order: 4
---

Switching Selector.

## API

### schema

| Property     | Description                  | Type      | Default |
| ------------ | ---------------------------- | --------- | ------- |
| `[readOnly]` | Whether to disable the state | `boolean` | -       |

### ui

| Property              | Description                                     | Type            | Default   |
| --------------------- | ----------------------------------------------- | --------------- | --------- |
| `[size]`              | Size of the `nz-switch`                         | `default,small` | `default` |
| `[checkedChildren]`   | Content to be shown when the state is checked   | `string`        | -         |
| `[unCheckedChildren]` | Content to be shown when the state is unchecked | `string`        | -         |
| `[loading]` | Loading state of switch | `boolean` | `false` |

---

## Examples

### Basic Usage

Simplest of usage.

```typescript
import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-boolean-simple',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)" /> `,
  imports: [DelonFormModule]
})
export class FormBooleanSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      status: {
        type: 'boolean',
        title: '是否启用'
      },
      // 指定内容文本
      enabled: {
        type: 'boolean',
        title: '是否启用',
        ui: {
          checkedChildren: '开',
          unCheckedChildren: '关'
        }
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
