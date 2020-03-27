---
order: 1
title: Getting Started
type: Documents
---

Chart provides the well-designed abstract chart components based on the [G2](https://antv.alipay.com/zh-cn/g2/3.x/index.html). These components provide the ability to use with complex mixed view or just use along for common business usage.

## Usage

### Import module

```ts
// shared.module.ts
import { G2BarModule } from '@delon/chart/bar';

@NgModule({
  imports: [ G2BarModule ],
  exports: [ G2BarModule ]
})
```

## Custom G2 components

Use the [g2-chart](/chart/custom) component to better implement custom charts.