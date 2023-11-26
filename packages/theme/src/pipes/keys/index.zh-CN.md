---
order: 1
title: keys
subtitle: 可迭代对象
type: Pipe
---

`keys` 将对象数组化。

例如：

```typescript
const data = { name: 'cipchk', address: { city: 'shanghai', district: 'changning' } };
```

变成可迭代对象：

```html
@for (item of data | keys; track $index) {
  <div >{{item.key}} {{item.value | json}}</div>
}
```

**字典可迭代**

```typescript
const data = { 1: '正常', 2: '删除' };
```

若希望保持键名为 `number` 数字型：

```
@for (item of data | keys: true; track $index) {
  <div >{{item.key}} {{item.value | json}}</div>
}
```

> Angular `6.1.0` 以后原生支持 [KeyValuePipe](https://angular.io/api/common/KeyValuePipe)，用法有点类似。
