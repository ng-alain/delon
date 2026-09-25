---
order: 0
title:
  zh-CN: 基础
  en-US: Basic
---

## zh-CN

基础用法。

## en-US

Basic usage.

```ts
import { Component } from '@angular/core';

import { G2WaterWaveModule } from '@delon/chart/water-wave';

@Component({
  selector: 'chart-water-wave-basic',
  template: `<g2-water-wave [title]="'补贴资金剩余'" [percent]="34" [size]="161" />`,
  imports: [G2WaterWaveModule]
})
export class DemoComponent {}
```
