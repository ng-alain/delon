---
title: transfer
subtitle: Transfer
type: Non-built-in widgets
---

Double column transfer choice box.

## How to use

Non-built-in modules need to additionally register `withTransferWidget` in [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9).

## Note

- `default` value `direction: 'right'` indicates right column.

## API

### schema

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[enum]` | Data source | `SFSchemaEnumType[]` | - |

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[asyncData]` | Asynchronous data | `() => Observable<SFSchemaEnumType[]>` | - |
| `[titles]` | Title list, the order is from left to right | `string[]` | `['', '']` |
| `[operations]` | Operation list, the order is from top to buttom | `string[]` | `['', '']` |
| `[listStyle]` | A custom CSS style used for rendering the transfer columns. equals to `ngStyle` | `object` | - |
| `[itemUnit]` | single unit | `string` | `item` |
| `[itemsUnit]` | multiple unit | `string` | `items` |
| `[showSearch]` | If included, a search box is shown on each column | `boolean` | `false` |
| `[filterOption]` | Accept `inputValueoption` two parameters, return `true` when `option` matches, otherwise, return `false` | - | - |
| `[searchPlaceholder]` | Placeholder of search box | `string` | - |
| `[notFoundContent]` | Text to display when a column is empty | `string` | - |
| `[canMove]` | Second verification when transfer choice box | `function` | - |
| `[oneWay]` | Display as single direction | `boolean` | `false` |
| `(change)` | Callback function when the transfer between columns is complete | `(options: TransferChange) => void` | - |
| `(searchChange)` | Callback function when search field is changed | `(options: TransferSearchChange) => void` | - |
| `(selectChange)` | Callback function when selected items are changed | `(options: TransferSelectChange) => void` | - |

---

## Examples

### Basic Usage

Simplest of usage.

```typescript
import { Component, inject } from '@angular/core';
import { of, delay } from 'rxjs';

import { DelonFormModule, SFSchema } from '@delon/form';
import { SFTransferWidgetSchema } from '@delon/form/widgets/transfer';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-transfer-simple',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)" /> `,
  imports: [DelonFormModule]
})
export class FormTransferSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      roles: {
        type: 'number',
        title: '角色',
        enum: [
          { title: 'DNS管理', value: 10 },
          { title: 'ECS管理', value: 11 },
          { title: 'OSS管理', value: 12 },
          { title: 'RDS管理', value: 13 }
        ],
        ui: {
          widget: 'transfer',
          titles: ['未拥有', '已拥有']
        } as SFTransferWidgetSchema,
        default: [11, 12]
      },
      roles2: {
        type: 'number',
        title: '角色',
        ui: {
          widget: 'transfer',
          titles: ['未拥有', '已拥有'],
          asyncData: () =>
            of([
              { title: 'DNS管理', value: 10 },
              { title: 'ECS管理', value: 11 },
              { title: 'OSS管理', value: 12 },
              { title: 'RDS管理', value: 13 }
            ]).pipe(delay(10))
        } as SFTransferWidgetSchema,
        default: [11, 12]
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
