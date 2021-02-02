---
title: math
subtitle: Math, Rounding
type: Tools
---

## inRange

Checks if `value` is between `start` and `end` to, but not including `end`. If `end` is not specified, it's set to start with `start` then set to `0`. If `start` is greater than `end` the params are swapped to support negative ranges.

```ts
inRange(3, 2, 4); // true
inRange(4, 8); // true
inRange(4, 2); // false
inRange(2, 2); // false
inRange(1.2, 2); // true
inRange(-3, -2, -6); // true
```

## ceil

Computes `number` rounded up to `precision`.

```ts
ceil(4.006); // 5
ceil(6.004, 2); // 6.01
ceil(6040, -2); // 6100
```

## floor

Computes `number` rounded down to `precision`.

```ts
floor(4.006); // 4
floor(0.046, 2); // 0.04
floor(4060, -2); // 4000
```

## round

Computes `number` rounded to `precision`.

```ts
round(4.006); // 4
round(4.006, 2); // 4.01
round(4060, -2); // 4100
```
