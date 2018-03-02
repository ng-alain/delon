---
order: 2
title: 无法加载图像
---

自动替换无法加载图像。

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'demo',
    template: `
    <button nz-button (click)="src='//a.com/1.png'">Load an error image</button>
    <div style="margin-top: 8px">
        <img [_src]="src" error="./assets/img/logo-color.svg"
            style="max-height: 32px">
    </div>
    `
})
export class DemoComponent {
    src = './assets/img/avatar.jpg';
}
```
