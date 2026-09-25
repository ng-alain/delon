---
order: 0
title:
  zh-CN: 迷你型
  en-US: Mini
---

## zh-CN

通过简化 `pie` 属性的设置，可以快速的实现极简的饼状图，可配合 `chart-card` 组合展现更多业务场景。

## en-US

By simplifying the `pie` options you can quickly build a minimal pie chart, and combine it with `chart-card` to cover more business scenarios.

```ts
import { Component } from '@angular/core';

import { G2PieModule } from '@delon/chart/pie';

@Component({
  selector: 'app-demo',
  template: `<g2-pie percent="28" subTitle="中式快餐" total="28%" height="130" padding="auto" style="width: 130px" />`,
  imports: [G2PieModule]
})
export class DemoComponent {}
```
