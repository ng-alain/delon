---
title: format
subtitle: Format, Currency
type: Type
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
