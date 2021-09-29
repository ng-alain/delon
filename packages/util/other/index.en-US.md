---
title: other
subtitle: Deep get,copy,merge,lazy,assert
type: Tools
---

## deepGet

Gets the value at `path` of `object`, like `_.get` in lodash.

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

Base on [extend](https://github.com/justmoon/node-extend) deep copy.

```ts
const source = { a: 1, user: { name: 'cipchk' } };
const obj = deepCopy(source);
```

## deepMerge

Deep merge object.

```ts
let original = { a: 1, b: { c: 'c' } };
deepMerge(original, { b: { d: 'd' }, arr: [ 1 ] });
// output: { a: 1, b: { c: 'c', d: 'd' }, arr: [ 1 ] }
```

## LazyService

`LazyService` delay loading JS or CSS files.

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

Assert whether the expression and throw an error into console in dev mode.

- `assert` Assert whether the expression
- `assertEmpty` Assert whether empty (`null` or `undefined`)
- `assertNumber` Assert whether `number` type
- `assertString` Assert whether `string` type
- `assertArray` Assert whether `array` type
- `assertObservable` Assert whether `Observable` type
