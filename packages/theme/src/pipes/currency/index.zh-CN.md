---
order: 1
title: _currency
subtitle: 货币
type: Pipe
---

`_currency` 货币格式化，简化原 `currency` 针对**中文货币**格式化问题，使用方式同 `currency` 一样。

```html
{{data.price | _currency}}
```

输出：

```
￥4,035,173.71
```
