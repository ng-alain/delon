---
order: 0
title:
  zh-CN: 基础
  en-US: Basic
---

基础用法。

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'chart-water-wave-basic',
  template: `
    <g2-water-wave title="补贴资金剩余" [percent]="34" [height]="161"></g2-water-wave>
  `,
  host: {
    '[class.d-block]': 'true'
  }
})
export class ChartWaterWaveBasicComponent {}
```
