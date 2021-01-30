---
title: format
subtitle: 格式化，含货币
type: Tools
---

## format

字符串格式化。

```ts
format('this is ${name}', { name: 'asdf' })
// output: this is asdf
format('this is ${user.name}', { user: { name: 'asdf' } }, true)
// output: this is asdf
```

**参数**

- `str: string` 模板
- `obj: {}` 数据对象
- `needDeepGet = false` 是否需要深度获取，支持 `${user.address.city}` 写法。

## commasNumber

用逗号将数字格式化为千位分隔符。

```ts
10000 => `10,000`
```

## megaNumber

大数据格式化。

```ts
1000 => { value: '1', unit: 'K', unitI18n: '千' }
12456 => { value: '12.46', unit: 'K', unitI18n: '千' }
```

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
