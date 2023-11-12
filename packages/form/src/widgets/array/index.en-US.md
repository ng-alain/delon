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
const schema = {
  list: {
    type: 'array',
    items: {
      a: { type: 'string' },
      b: { type: 'number', ui: { spanLabel: 10 } }
    },
    ui: { spanLabel: 5, grid: { arraySpan: 12 } }
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
