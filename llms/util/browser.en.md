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

---

## Examples

### System Color Scheme

Follows the system color scheme, and updates in real time when the system switches to dark mode.

```typescript
import { Component } from '@angular/core';

import { colorScheme } from '@delon/util';

@Component({
  selector: 'util-browser-color-scheme',
  template: `<p>Color scheme: <strong>{{ scheme() }}</strong></p>`
})
export class UtilBrowserColorScheme {
  readonly scheme = colorScheme();
}
```

### undefined

```typescript
import { Component } from '@angular/core';

import { CookieOptions, CookieService } from '@delon/util/browser';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'util-browser-cookie',
  template: `
    <p classs="mb-md">Result: {{ value ?? 'NULL' }}</p>
    <button nz-button (click)="get()">Get</button>
    <button nz-button (click)="set()">Set</button>
    <button nz-button (click)="set({ expires: 10 })">Set 10s expired</button>
    <button nz-button (click)="remove()">Remove</button>
  `,
  imports: [NzButtonModule]
})
export class UtilBrowserCookie {
  key = 'test-key';
  value?: string;

  constructor(
    private cookieSrv: CookieService,
    private msg: NzMessageService
  ) {
    this.get();
  }

  get(): void {
    this.value = this.cookieSrv.get(this.key)!;
  }

  set(options?: CookieOptions): void {
    this.cookieSrv.put(this.key, (+new Date()).toString(), options);
    this.msg.success(`Success`);
  }

  remove(): void {
    this.cookieSrv.remove(this.key);
  }
}
```
