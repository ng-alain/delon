---
order: 1
title: _currency
subtitle: 货币
type: Pipe
deprecated: 13.0.0
---

**将会在 13.0.0 时被移除，请使用 [currencyCNY](/util/pipes-currency/zh) 管道替代。**

`_currency` 货币格式化，简化原 `currency` 针对**中文货币**格式化问题，使用方式同 `currency` 一样。

```html
{{data.price | _currency}}
```

输出：

```
￥4,035,173.71
```
