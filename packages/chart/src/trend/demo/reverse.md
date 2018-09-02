---
order: 1
title: 颜色反转
---

在数值背后添加一个小图标来标识涨跌情况。

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <na-trend flag="up" reverseColor>12%</na-trend>
  <na-trend flag="down" reverseColor class="ml-sm">11%</na-trend>
  `
})
export class DemoComponent {
}
```
