---
order: 0
title:
  zh-CN: 演示
  en-US: Demo
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
    <trend flag="up">12%</trend>
    <trend flag="down" class="ml-sm">11%</trend>
  `,
  imports: [TrendModule]
})
export class DemoComponent {}
```
