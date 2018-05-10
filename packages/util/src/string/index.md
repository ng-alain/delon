---
title: string
subtitle: 字符串
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

## yuan

转化成RMB元字符串。

```ts
yuan(100)
// output: &yen 100
```

> 返回一个HTML字符集的 `&yen`，因此需要配合 `[innerHTML]` 才会正常解析。
