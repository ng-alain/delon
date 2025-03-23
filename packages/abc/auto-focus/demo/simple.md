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
import { Component, signal } from '@angular/core';

import { AutoFocusDirective } from '@delon/abc/auto-focus';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button (click)="showInput.set(!showInput())">Toggle Input</button>
    @if (showInput()) {
      <div class="mt-md">
        <input nz-input auto-focus />
      </div>
    }
  `,
  imports: [NzButtonModule, NzInputModule, AutoFocusDirective]
})
export class DemoComponent {
  showInput = signal(false);
}
```
