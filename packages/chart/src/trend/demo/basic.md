---
order: 0
title: 演示
---

在数值背后添加一个小图标来标识涨跌情况。

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <na-trend flag="up">12%</na-trend>
  <na-trend flag="down" class="ml-sm">11%</na-trend>
  `
})
export class DemoComponent {
}
```
