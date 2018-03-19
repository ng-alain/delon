---
order: 1
title: 基础
---

设置 `size` 自动对微信图像加载缩略图。

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'demo',
    template: `
    <img [_src]="src" size="46">
    <img [_src]="src" size="64">
    <img [_src]="src" size="96">
    `
})
export class DemoComponent {
    src = '//wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLL1byctY955Htv9ztzVlIzY9buI9zRLg5QrkpOynrmObArKicy9icIX7aVgv3UqIbeIEo2xuUtsqYw/0';
}
```
