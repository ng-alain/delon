---
title: array
subtitle: Array
type: Widgets
order: 2
---

Create array object, it's only valid when `schema.type="array"`.

## Layout

Array layout is divided into array itself and array element layout, `arraySpan` determines the number of grid of each array element.

UI embed in Schema:

```ts
const schema: SFSchema = {
  properties: {
    list: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          a: { type: 'string' },
          b: { type: 'number', ui: { spanLabel: 10 } }
        }
      },
      ui: { spanLabel: 5, grid: { arraySpan: 12 } }
    }
  }
};
```

**Note：** All attributes in `items` are inherited from `list.ui`, eventually, `items.a` has `5` units, `items.b` has `10` units.

Schema and UI are separated, above UI configuration will be converted to:

```ts
const ui = {
  $list: {
    $items: {
      $b: { spanLabel: 10 }
    },
    spanLabel: 5,
    grid: { arraySpan: 12 }
  }
};
```

## API

### schema

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[items]` | Description of array element | `SFSchema` | - |
| `[minItems]` | Minimum number of array element | `number` | - |
| `[maxItems]` | Maximum number of array element | `number` | - |
| `[uniqueItems]` | Element in array is unique | `boolean` | - |

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[addTitle]` | Add button title | `string` | `add` |
| `[addType]` | Add button type, equals to `nzType` | `string` | `dashed` |
| `[removable]` | Whether includes remove button | `boolean` | `true` |
| `[removeTitle]` | Remove button title | `string` | `remove` |
| `[required]` | Add required style to current item	 | `boolean` | - |
| `[$items]` | UI description of array element | `SFUISchema` | - |
| `(add)` | Add callback，`property` indicates form property after add | `(property: FormProperty) => void` | - |
| `(remove)` | Remove callback | `(index: number) => void` | - |

---

## Examples

### Basic Usage

Simplest of usage.

```typescript
import { Component, inject } from '@angular/core';

import { DelonFormModule, SFArrayWidgetSchema, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-array-simple',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)" /> `,
  imports: [DelonFormModule]
})
export class FormArraySimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      product: {
        type: 'array',
        title: '产品清单',
        maxItems: 4,
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              title: '名称'
            },
            price: {
              type: 'number',
              title: '单价',
              minimum: 1
            }
          },
          required: ['name', 'price']
        },
        ui: { grid: { arraySpan: 12 } } as SFArrayWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```

### Irregular Layout

Flexible use of `ui` for complex and irregular layouts.

```typescript
import { Component, inject } from '@angular/core';

import { DelonFormModule, SFArrayWidgetSchema, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-array-irregular',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)" /> `,
  imports: [DelonFormModule]
})
export class FormArrayIrregular {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      title: { type: 'string' },
      market: { type: 'number' },
      price: { type: 'number' },
      skus: {
        type: 'array',
        title: 'Skus',
        maxItems: 4,
        default: [{}],
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              title: '名称'
            },
            price: {
              type: 'number',
              title: '单价',
              minimum: 1
            },
            stock: {
              type: 'number',
              minimum: 1
            },
            desc: {
              type: 'string',
              ui: {
                grid: { span: 24 } // 单独设置desc元素在当前数组表单所占格数，24表示整行
              }
            }
          },
          required: ['name', 'price', 'stock'],
          ui: {
            grid: { span: 12 } // 针对数组内部表单统一设置，12表示一行两个
          }
        },
        ui: {
          grid: {
            span: 24, // 单独设置Sku元素在整个表单所占格数，24表示整行
            arraySpan: 12 // 设置数组每个索引所占格数，12表示一行两个
          }
        } as SFArrayWidgetSchema
      },
      desc: {
        type: 'string',
        ui: { grid: { span: 24 } }
      }
    },
    required: ['title', 'market', 'price'],
    ui: {
      spanLabelFixed: 100,
      grid: { span: 8 }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
