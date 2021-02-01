---
title: format
subtitle: 格式化，含货币
type: Tools
---

## CurrencyService

> 可以通过[全局配置](/docs/global-config)覆盖 `startingUnit`、`megaUnit` 等参数。

### format

格式化货币，用逗号将数字格式化为千位分隔符。

```ts
10000 => `10,000`
10000.567 => `10,000.57`
```

### mega

大数据格式化。

```ts
1000 => { value: '1', unit: 'K', unitI18n: '千' }
12456 => { value: '12.46', unit: 'K', unitI18n: '千' }
```

### cny

转化成人民币表示法。

```ts
1 => 壹元整
1.34 => 壹元叁角肆分
```

## format

字符串格式化。

```ts
format('this is ${name}', { name: 'asdf' })
// output: this is asdf
format('this is ${user.name}', { user: { name: 'asdf' } }, true)
// output: this is asdf
```

## REGEX

一组常见的正则表达式。也可以通过 `REGEX_STR` 来获取它们的正则字符串格式，配合 `new RegExp` 完成一些额外的处理。

## num

是否为数字。

## int

是否为整数。

## decimal

是否为小数点数值。

## idCard

是否为中华人民共和国居民身份证。

## isMobile

是否为手机号（中国）。

## isUrl

是否URL地址。

## isIp

是否IP地址（支持v4、v6）。

## isColor

是否颜色代码值。

## isChinese

是否中文。
