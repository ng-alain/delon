---
title: format
subtitle: String,Check,Currency,Mask
type: Tools
---

## CurrencyService

> You can override [ArrayService] to set the `startingUnit`, `megaUnit` through [Global Configuration](/docs/global-config).

### format

Format a number with commas as thousands separators.

```ts
10000 => `10,000`
10000.567 => `10,000.57`
```

### mega

Large number format filter.

```ts
1000 => { value: '1', unit: 'K', unitI18n: '千' }
12456 => { value: '12.46', unit: 'K', unitI18n: '千' }
```

### cny

Converted into RMB notation.

```ts
1 => 壹元整
1.34 => 壹元叁角肆分
```

## format

String formatting.

```ts
format('this is ${name}', { name: 'asdf' })
// output: this is asdf
format('this is ${user.name}', { user: { name: 'asdf' } }, true)
// output: this is asdf
```

### formatMask

Format mask.

```ts
formatMask('123', '(###)') => (123)
```

## REGEX

A set of common regular expressions. You can also get their regular string format through `REGEX_STR`, and cooperate with `new RegExp` to complete some additional processing.

## num

Wheter is number.

## int

Wheter is integer.

## decimal

Wheter is decimal.

## idCard

Wheter is People's Republic of China identity card.

## isMobile

Wheter is mobile (China).

## isUrl

Wheter is url address.

## isIp

Wheter is IP address (Support v4, v6).

## isColor

Wheter is color.

## isChinese

Wheter is chinese.
