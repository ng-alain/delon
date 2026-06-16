---
title: g2-gauge
subtitle: 仪表盘
cols: 1
type: G2
module: import { G2GaugeModule } from '@delon/chart/gauge';
---

一种进度展示方式，可以更直观的展示当前的进展情况，通常也可表示占比。

## API

### g2-gauge

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[repaint]` | 数据再次变更时是否重绘 | `boolean` | `true` |
| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |
| `[title]` | 图表标题 | `string` | - |
| `[height]` | 图表高度 | `number` | - |
| `[color]` | 图表颜色 | `string` | `#2F9CFF` |
| `[bgColor]` | 图表背景色 | `string` | `#F0F2F5` |
| `[percent]` | 进度比例 | `number` | - |
| `[padding]` | 内边距 | `Array<number | string>` | `[10, 10, 30, 10]` |
| `[format]` | 坐标轴格式 | `(text: string, item: {}, index: number) => string` | - |
| `[theme]` | 定制图表主题 | `string | LooseObject` | - |
| `(ready)` | 当G2完成初始化后调用 | `EventEmitter<Chart>` | - |

---

## 代码示例

### 基础

基础用法。

```typescript
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

import { G2GaugeModule } from '@delon/chart/gauge';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'chart-gauge-basic',
  template: ` <g2-gauge [title]="'核销率'" height="164" [percent]="percent" [color]="color" /> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [G2GaugeModule]
})
export class ChartGaugeBasic implements OnDestroy {
  percent = 36;
  color = '#2f9cff';
  private time$: NzSafeAny;

  constructor(platform: Platform, cdr: ChangeDetectorRef) {
    if (!platform.isBrowser) return;

    this.time$ = setInterval(() => {
      this.percent = parseInt((Math.random() * 100).toString(), 10);
      this.color = this.percent > 50 ? '#f50' : '#2f9cff';
      cdr.detectChanges();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.time$);
  }
}
```
