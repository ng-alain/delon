---
title: format
subtitle: Format, Currency
type: Tools
---

## format

String formatting.

```ts
format('this is ${name}', { name: 'asdf' })
// output: this is asdf
format('this is ${user.name}', { user: { name: 'asdf' } }, true)
// output: this is asdf
```

**Parameters**

- `str: string` Template
- `obj: {}` Data Object
- `needDeepGet = false` Whether deep get item, like this: `${user.address.city}`.

## commasNumber

Format a number with commas as thousands separators.

```ts
10000 => `10,000`
```

## megaNumber

Large number format filter.

```ts
1000 => { value: '1', unit: 'K', unitI18n: '千' }
12456 => { value: '12.46', unit: 'K', unitI18n: '千' }
```

## REGEX

A set of common regular expressions.

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
