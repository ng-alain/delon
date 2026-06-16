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
