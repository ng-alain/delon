---
title: number
subtitle: 数字
type: Widgets
order: 5
---

通过鼠标或键盘，输入范围内的数值

## 注意事项

- 若 `type="integer"` 会**强制**移除 `minimum`、`maximum`、`multipleOf` 参数的小数部分。

## API

### schema 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[minimum]` | 最小值 | `number` | - |
| `[exclusiveMinimum]` | 约束是否包括 `minimum` 值，`true` 表示排除 `minimum` 值 | `boolean` | - |
| `[maximum]` | 最大值 | `number` | - |
| `[exclusiveMaximum]` | 约束是否包括 `maximum` 值，`true` 表示排除 `maximum` 值 | `boolean` | - |
| `[multipleOf]` | 倍数 | `number` | `1` |

### ui 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[prefix]` | 前缀，简化 `nzFormatter`、`nzParser` 的使用 | - | - |
| `[unit]` | 单位，简化 `nzFormatter`、`nzParser` 的使用 | - | - |
| `[formatter]` | 等同 `nzFormatter` | - | - |
| `[parser]` | 等同 `nzParser` | - | - |
| `[precision]` | 等同 `nzPrecision` | - | - |
| `[widgetWidth]` | 指定 `nz-number` 宽度 | `number, string` | `90` |
| `[hideStep]` | 隐藏步数操作区 | `boolean` | `false` |
| `[change]` | 变更事件 | `(val?: number) => void` | - |

## QA

### 为什么 `unit` 无法变更

NG-ZORRO 所有组件都是 OnPush 模式，一种特殊情况是当需要动态修改 `unit` 时，由于需要触发一次 `ngModel` 变更时才会生效，因此需要使其值发生变更，例如：

```ts
const ageProperty = this.sf.getProperty('/age')!;
ageProperty.widget.ui.unit = 'c';
ageProperty.widget.setValue(null);
ageProperty.widget.setValue(statusProperty.value);
```
