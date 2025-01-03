---
order: 0
title: 演示
---

在数值背后添加一个小图标来标识涨跌情况。

```ts
import { Component } from '@angular/core';

import { TrendModule } from '@delon/chart/trend';

@Component({
  selector: 'app-demo',
  template: `
    <trend flag="up">12%</trend>
    <trend flag="down" class="ml-sm">11%</trend>
  `,
  imports: [TrendModule]
})
export class DemoComponent {}
```
