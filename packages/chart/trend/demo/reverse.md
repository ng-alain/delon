---
order: 1
title:
  zh-CN: 颜色反转
  en-US: Color reverse
---

## zh-CN

在数值背后添加一个小图标来标识涨跌情况。

## en-US

Add a small icon behind the value to indicate the rise and fall.

```ts
import { Component } from '@angular/core';

import { TrendModule } from '@delon/chart/trend';

@Component({
  selector: 'app-demo',
  template: `
    <trend flag="up" reverseColor>12%</trend>
    <trend flag="down" reverseColor class="ml-sm">11%</trend>
  `,
  imports: [TrendModule]
})
export class DemoComponent {}
```
