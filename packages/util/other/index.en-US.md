---
title: other
subtitle: Other
type: Type
---

## toBoolean, @InputBoolean

Convert to `boolean`, `@InputBoolean()` can enhance the experience of binding number attributes, for example:

```ts
@Input() @InputBoolean() disabled = false;
```

The following calling methods will all be considered effective:

```html
<test disabled></test> // true
<test disabled="true"></test> // true
<test [disabled]="true"></test> // true
<test disabled="false"></test> // false
<test [disabled]="false"></test> // false
```

## toNumber, @InputNumber

Convert to `number`, `@InputNumber()` can enhance the experience of binding number attributes, for example:

```ts
@Input() @InputNumber() count = 10;
```

The following calling methods will all be considered effective:

```html
<test count="1"></test> // 1
<test [count]="1"></test> // 1
```

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

## copy

Copy text to clipboard.

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
