---
order: 1
title: 颜色反转
---

在数值背后添加一个小图标来标识涨跌情况。

```ts
import { Component } from '@angular/core';

import { TrendModule } from '@delon/chart/trend';

@Component({
  selector: 'app-demo',
  template: `
    <trend flag="up" reverseColor>12%</trend>
    <trend flag="down" reverseColor class="ml-sm">11%</trend>
  `,
  standalone: true,
  imports: [TrendModule]
})
export class DemoComponent {}
```
