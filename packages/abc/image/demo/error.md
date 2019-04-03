---
order: 2
title:
  zh-CN: 无法加载图像
  en-US: Fail load
---

## zh-CN

自动替换加载失败图像。

## en-US

Automatically replaces the failed image.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'components-image-error',
  template: `
  <button nz-button (click)="src='//a.com/1.png'">Load an error image</button>
  <div style="margin-top: 8px;">
    <img [_src]="src" error="./assets/img/logo-color.svg">
  </div>
  `
})
export class ComponentsImageErrorComponent {
  src = './assets/img/avatar.jpg';
}
```
