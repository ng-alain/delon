---
title: format
subtitle: 格式化，含货币
type: Type
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
