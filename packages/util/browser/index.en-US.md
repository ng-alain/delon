---
title: browser
subtitle: Cookie, Copy, DOM etc
type: Tools
---

## CookieService

A set of simple Cookie manipulation classes.

- `cookie` Original cookie value
- `getAll` Get all cookie key-value pairs
- `get` Get the value of given cookie `key`
- `put` Sets a value for given cookie key

[comment]: <demo(cookie)>

## isEmpty

Used to verify `<ng-content />` is empty, useful for custom components.

## colorScheme

Returns the system color scheme (`light` / `dark`) and follows the `prefers-color-scheme` changes.

```ts
import { Component } from '@angular/core';
import { colorScheme } from '@delon/util';

@Component({
  selector: 'app-root',
  template: `{{ scheme() }}`
})
export class AppComponent {
  readonly scheme = colorScheme();
}
```

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `fallback` | `'light' \| 'dark'` | `'light'` | Fallback value when the environment does not support `matchMedia`, e.g. SSR |

It is a global singleton, so `fallback` only takes effect on the first call.

[comment]: <demo(color-scheme)>

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

## copy

Copy text to clipboard.

## ScrollService

Scrollbar control allows scrolling to where the specified element.

| Method | Property | Description |
|--------|----------|-------------|
| `getScrollPosition` | `element?: Element` | Retrieves the current scroll position |
| `scrollToPosition` | `element: Element | Window, position: [number, number]` | Sets the scroll position |
| `scrollToElement` | `element?: Element, topOffset = 0` | Scroll to element |
| `scrollToTop` | `topOffset = 0` | Scroll to top |
