---
order: 0
title:
  zh-CN: 迷你型
  en-US: Mini
---

通过简化 `pie` 属性的设置，可以快速的实现极简的饼状图，可配合 `chart-card` 组合展现更多业务场景。

```ts
import { Component } from '@angular/core';

import { G2PieModule } from '@delon/chart/pie';

@Component({
  selector: 'app-demo',
  template: `
    <div style="width: 200px; display: inline-block">
      <g2-pie percent="28" subTitle="中式快餐" total="28%" height="130" />
    </div>
  `,
  imports: [G2PieModule]
})
export class DemoComponent {}
```
