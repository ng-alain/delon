---
title: other
subtitle: Other
type: Type
---

## isEmpty

Used to verify `<ng-content></ng-content>` is empty, useful for custom components.

## toBoolean

Convert to `boolean`.

## toNumber

Convert to `number`.

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

Deep copy.

```ts
const source = { a: 1, user: { name: 'cipchk' } };
const obj = deepCopy(source);
```

## copy

Copy text to clipboard.

## updateHostClass

Update host component style `class`, for example:

```ts
updateHostClass(
  this.el.nativeElement,
  this.renderer,
  {
    [ 'classname' ]: true,
    [ 'classname' ]: this.type === '1',
    [ this.cls ]: true,
    [ `a-${this.cls}` ]: true
  }
)
```
