---
title:
  zh-CN: 基础样例
  en-US: Basic Usage
order: 0
---

## zh-CN

最简单的用法。

## en-US

Simplest of usage.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button (click)="showInput = !showInput">Show Input</button>
    <div *ngIf="showInput" class="mt-md">
      <input nz-input auto-focus />
    </div>
  `,
})
export class DemoComponent {
  showInput = false;
}
```
