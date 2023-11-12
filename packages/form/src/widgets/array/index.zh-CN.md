---
title: array
subtitle: 数组
type: Widgets
order: 2
---

创建对象数组，只对 `schema.type="array"` 时有效。

## 关于布局

数组的布局分为数组本身以及数组元素布局，`arraySpan` 决定每个数组元素占栅格数值。

Schema 内嵌 UI 风格：

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

**注意：** `items` 下所有属性都继承于 `list.ui`，最终 `items.a` 为 `5` 个单位、`items.b` 为 `10` 个单位。

Schema 与 UI 分开风格，假如上述 Schema 转化成 UI 写法：

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

### schema 属性

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[items]` | 数组元素类型描述 | `SFSchema` | - |
| `[minItems]` | 约束数组最小的元素个数 | `number` | - |
| `[maxItems]` | 约束数组最大的元素个数 | `number` | - |
| `[uniqueItems]` | 约束数组每个元素都不相同 | `boolean` | - |

### ui 属性

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[addTitle]` | 添加按钮文本 | `string` | `添加` |
| `[addType]` | 添加按钮类型，等同 `nzType` | `string` | `dashed` |
| `[removable]` | 是否包含移除按钮 | `boolean` | `true` |
| `[removeTitle]` | 移除按钮文本 | `string` | `移除` |
| `[required]` | 当前项是否为必填，仅影响样式 | `boolean` | - |
| `[$items]` | 数组元素类型UI描述 | `SFUISchema` | - |
| `(add)` | 添加回调，`property` 表示添加后的表单属性 | `(property: FormProperty) => void` | - |
| `(remove)` | 移除回调 | `(index: number) => void` | - |
