---
title: other
subtitle: 其他
type: Type
---

## toBoolean, @InputBoolean

转换 `boolean` 属性，其中 `@InputBoolean()` 可以强化布尔属性绑定的体验，例如：

```ts
@Input() @InputBoolean() disabled = false;
```

以下调用方法都会认为是有效：

```html
<test disabled></test> // true
<test disabled="true"></test> // true
<test [disabled]="true"></test> // true
<test disabled="false"></test> // false
<test [disabled]="false"></test> // false
```

## toNumber, @InputNumber

转换 `number` 属性，其中 `@InputNumber()` 可以强化数字属性绑定的体验，例如：

```ts
@Input() @InputNumber() count = 10;
```

以下调用方法都会认为是有效：

```html
<test count="1"></test> // 1
<test [count]="1"></test> // 1
```

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

基于 [extend](https://github.com/justmoon/node-extend) 的深度拷贝。

```ts
const source = { a: 1, user: { name: 'cipchk' } };
const obj = deepCopy(source);
```

## deepMerge

深度合并。

```ts
let original = { a: 1, b: { c: 'c' } };
deepMerge(original, { b: { d: 'd' }, arr: [ 1 ] });
// output: { a: 1, b: { c: 'c', d: 'd' }, arr: [ 1 ] }
```

## copy

复制字符串文档至剪贴板。

## LazyService

`LazyService` 用于延迟加载 JS 或 CSS 文件，对于无须被打包 script.js 且又是第三方类库比较大时，非常有用，一个简单的用法，例如：

```ts
import { LazyService } from '@delon/util/other';

export class AppComponent {
  constructor(private lazy: LazyService) {}

  ngOnInit() {
    this.lazy.load([ `//cdn.bootcss.com/xlsx/0.11.17/xlsx.full.min.js` ]).then(() => {
      // do something
    });
  }
}
```
