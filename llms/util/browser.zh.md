---
title: browser
subtitle: Cookie、Copy、DOM 等
type: Tools
---

## CookieService

一组简单的 Cookie 操作类。

- `cookie` 原始Cookie值
- `getAll` 获取所有Cookie键值对
- `get` 获取指定 `key` 的值
- `put` 设置指定 Cookie 键的值

[comment]: <demo(cookie)>

## isEmpty

用于校验 `<ng-content />` 是否为空，自定义组件时蛮有用。

## colorScheme

获取系统颜色方案（`light` / `dark`），并跟随 `prefers-color-scheme` 实时更新。

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

| 参数 | 类型 | 默认值 | 描述 |
|-----|----|----|----|
| `fallback` | `'light' \| 'dark'` | `'light'` | 运行环境不支持 `matchMedia`（如 SSR）时使用的兜底值 |

全局单例，`fallback` 仅在首次调用时生效。

[comment]: <demo(color-scheme)>

## updateHostClass

更新宿主组件样式 `class`，例如：

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

复制字符串文档至剪贴板。

## ScrollService

滚动条控制，允许滚动至指定元素所处位置。

| 接口名 | 参数 | 描述 |
|-----|----|----|
| `getScrollPosition` | `element?: Element` | 获取滚动条位置 |
| `scrollToPosition` | `element: Element | Window, position: [number, number]` | 设置滚动条位置 |
| `scrollToElement` | `element?: Element, topOffset = 0` | 设置滚动条至指定元素 |
| `scrollToTop` | `topOffset = 0` | 滚动至顶部 |

---

## 代码示例

### 系统颜色方案

跟随系统的颜色方案，当系统切换深色模式时实时更新。

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
