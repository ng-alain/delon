---
title: math
subtitle: 范围、四舍五入
type: Tools
---

## inRange

检查 `value` 是否在 `start` 与 `end` 之间，但不包括 `end`。 如果 `end` 没有指定，那么 `start` 设置为 `0`。 如果 `start` 大于 `end`，那么参数会交换以便支持负范围。

```ts
inRange(3, 2, 4); // true
inRange(4, 8); // true
inRange(4, 2); // false
inRange(2, 2); // false
inRange(1.2, 2); // true
inRange(-3, -2, -6); // true
```

## ceil

根据 `precision`（精度） 向上舍入 `number`。

```ts
ceil(4.006); // 5
ceil(6.004, 2); // 6.01
ceil(6040, -2); // 6100
```

## floor

根据 `precision`（精度） 向下舍入 `number`。

```ts
floor(4.006); // 4
floor(0.046, 2); // 0.04
floor(4060, -2); // 4000
```

## round

根据 `precision`（精度） 四舍五入 `number`。

```ts
round(4.006); // 4
round(4.006, 2); // 4.01
round(4060, -2); // 4100
```
