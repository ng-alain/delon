---
order: 1
title: _currency
subtitle: Currenty
type: Pipe
deprecated: 12.0.0
---

**Will be removed in 12.0.0, please use [currencyCNY](/util/pipes-currency/en) pipeline instead.**

`_currency` currency formatting, simplifying the original `currency` for **Chinese currency**, the same way as `currency`.

```html
{{data.price | _currency}}
```

Output:

```
￥4,035,173.71
```
