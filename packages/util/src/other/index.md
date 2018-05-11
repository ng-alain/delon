---
title: other
subtitle: 其他
type: Type
---

## isEmpty

用于校验 `<ng-content></ng-content>` 是否为空，自定义组件时蛮有用。

## deepGet

类似 `_.get`，根据 `path` 获取安全值。

```ts
const obj = {
  id: 1,
  user: {
    name: 'cipchk',
    age: 18
  }
};

deepGet(obj, 'id'); // 1
deepGet(obj, 'user.age'); // 18
```

## deepCopy

深度复制。

```ts
const source = { a: 1, user: { name: 'cipchk' } };
const obj = deepCopy(source);
```

## copy

复制内容至剪贴板。
