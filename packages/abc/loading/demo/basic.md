---
order: 1
title:
  zh-CN: 基础
  en-US: Basic
---

## zh-CN

最简单的用法。

## en-US

Simplest of usage.

```ts
import { Component } from '@angular/core';
import { LoadingService, LoadingType } from '@delon/abc/loading';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button (click)="show('icon')">Icon</button>
    <button nz-button (click)="show('spin')">Spin</button>
    <button nz-button (click)="show('text')">Only Text</button>
  `,
})
export class DemoComponent {
  constructor(private loadingSrv: LoadingService) {}

  show(type: LoadingType): void {
    this.loadingSrv.open({ type });

    setTimeout(() => this.loadingSrv.close(), 1000 * 3);
  }
}
```
