---
title: other
subtitle: 深获取、拷贝、合并、延迟、断言
type: Tools
---

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

## assert

断言表达式是否符合预期，并在开发模式下会在控制台抛出一个错误。

- `assert` 断言表达式是否符合预期
- `assertEmpty` 断言是否空值（`null` 或 `undefined`）
- `assertNumber` 断言是否 `number` 类型
- `assertString` 断言是否 `string` 类型
- `assertArray` 断言是否 `array` 类型
- `assertObservable` 断言是否 `Observable` 类型
