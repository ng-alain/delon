---
title: g2-timeline
subtitle: 折线图
cols: 1
type: G2
module: import { G2TimelineModule } from '@delon/chart/timeline';
---

使用 `timeline` 组件可以实现带有时间轴的柱状图展现，而其中的 `x` 属性，则是时间值的指向，默认最多支持同时展现两个指标，分别是 `y1` 和 `y2`。

## API

### g2-timeline

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[repaint]` | 数据再次变更时是否重绘 | `boolean` | `true` |
| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |
| `[title]` | 图表标题 | `string,TemplateRef<void>` | - |
| `[maxAxis]` | 最大指标数量 | `number` | `2` |
| `[data]` | 数据，注：根据 `maxAxis` 值传递指标数据 | `G2TimelineData[]` | - |
| `[titleMap]` | 指标别名 | `G2TimelineMap` | - |
| `[colorMap]` | 颜色 | `G2TimelineMap` | `{ y1: '#5B8FF9', y2: '#5AD8A6', y3: '#5D7092', y4: '#F6BD16', y5: '#E86452' }` |
| `[height]` | 高度值 | `number` | `400` |
| `[padding]` | 图表内部间距 | `number[]` | `[40, 8, 64, 40]` |
| `[borderWidth]` | 线条 | `number` | `2` |
| `[mask]` | 日期格式，使用 [G2 Mask日期格式](https://g2.antv.vision/zh/docs/manual/tutorial/scale#time) | `string` | `HH:mm` |
| `[maskSlider]` | 滑动条日期格式，使用 [date-fns 日期格式](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table) | `string` | `HH:mm` |
| `[position]` | 标题位置 | `'top','right','bottom','left'` | `'top'` |
| `[slider]` | 是否需要滑动条 | `boolean` | `true` |
| `[theme]` | 定制图表主题 | `string | LooseObject` | - |
| `(clickItem)` | 点击项回调 | `EventEmitter<G2TimelineClickItem>` | - |
| `(ready)` | 当G2完成初始化后调用 | `EventEmitter<Chart>` | - |

### G2TimelineData

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[time]` | 日期格式 | `Date | number` | - |
| `[y1]` | 指标1数据 | `number` | - |
| `[y2]` | 指标2数据 | `number` | - |
| `[y3]` | 指标3数据 | `number` | - |
| `[y4]` | 指标4数据 | `number` | - |
| `[y5]` | 指标5数据 | `number` | - |

### G2TimelineMap

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[y1]` | 指标1 | `string` | - |
| `[y2]` | 指标2 | `string` | - |
| `[y3]` | 指标3 | `string` | - |
| `[y4]` | 指标4 | `string` | - |
| `[y5]` | 指标5 | `string` | - |

---

## 代码示例

### 基础

带有时间轴的图表。

```typescript
import { Component, OnInit, inject } from '@angular/core';

import { G2TimelineClickItem, G2TimelineData, G2TimelineModule } from '@delon/chart/timeline';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-timeline-basic',
  template: ` <g2-timeline
    [data]="chartData"
    [titleMap]="{ y1: '客流量', y2: '支付笔数' }"
    [height]="200"
    (clickItem)="handleClick($event)"
  />`,
  imports: [G2TimelineModule]
})
export class ChartTimelineBasic implements OnInit {
  private readonly msg = inject(NzMessageService);
  chartData: G2TimelineData[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 20; i += 1) {
      this.chartData.push({
        time: new Date().getTime() + 1000 * 60 * 30 * i,
        y1: Math.floor(Math.random() * 100) + 1000,
        y2: Math.floor(Math.random() * 100) + 10
      });
    }
  }

  handleClick(data: G2TimelineClickItem): void {
    this.msg.info(`客流量: ${data.item.y1}, 支付笔数: ${data.item.y2}`);
  }
}
```

### 多指标

利用 `maxAxis` 属性来调整多个指标，最多支持 `5` 个指标值。

```typescript
import { Component } from '@angular/core';

import { G2TimelineData, G2TimelineMap, G2TimelineModule } from '@delon/chart/timeline';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'chart-timeline-max-axis',
  template: `
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    @for (i of axisList; track $index) {
      <button nz-button (click)="refresh(i)" nzType="primary">{{ i }} axis</button>
    }
    <g2-timeline [maxAxis]="maxAxis" [data]="chartData" [titleMap]="titleMap" [height]="300" />
  `,
  imports: [G2TimelineModule, NzButtonModule]
})
export class ChartTimelineMaxAxis {
  chartData: G2TimelineData[] = [];
  titleMap: G2TimelineMap = { y1: '指标1', y2: '指标2' };
  maxAxis = 2;
  axisList = new Array(5).fill(0).map((_, idx) => idx + 1);

  constructor() {
    this.refresh();
  }

  private genData(max: number): { titleMap: G2TimelineMap; data: G2TimelineData[] } {
    const titleMap: G2TimelineMap = { y1: '' };
    for (let i = 1; i <= max; i++) {
      titleMap[`y${i}`] = `指标${i}`;
    }

    const data: G2TimelineData[] = [];
    for (let i = 0; i < 20; i += 1) {
      const item: G2TimelineData = {
        time: new Date().getTime() + 1000 * 60 * 30 * i,
        y1: 0
      };
      for (let i = 1; i <= max; i++) {
        item[`y${i}`] = Math.floor(Math.random() * 100) + 500 * i;
      }
      data.push(item);
    }
    return { titleMap, data };
  }

  refresh(max?: number): void {
    this.maxAxis = max ?? this.maxAxis;
    const { titleMap, data } = this.genData(this.maxAxis);
    this.chartData = data;
    this.titleMap = titleMap;
  }
}
```

### 时间格式化

利用 `mask` 和 `maskSlider` 来改变时间格式。

```typescript
import { Component, OnInit, inject } from '@angular/core';

import { G2TimelineClickItem, G2TimelineData, G2TimelineModule } from '@delon/chart/timeline';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-timeline-mask',
  template: ` <g2-timeline
    [data]="chartData"
    [titleMap]="{ y1: '客流量', y2: '支付笔数' }"
    [height]="200"
    mask="MM月DD日"
    maskSlider="MM月dd日"
    (clickItem)="handleClick($event)"
  />`,
  imports: [G2TimelineModule]
})
export class ChartTimelineMask implements OnInit {
  private readonly msg = inject(NzMessageService);
  chartData: G2TimelineData[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 20; i += 1) {
      this.chartData.push({
        time: new Date().getTime() + 1000 * 60 * 60 * 24 * i,
        y1: Math.floor(Math.random() * 100) + 1000,
        y2: Math.floor(Math.random() * 100) + 10
      });
    }
  }

  handleClick(data: G2TimelineClickItem): void {
    this.msg.info(`客流量: ${data.item.y1}, 支付笔数: ${data.item.y2}`);
  }
}
```
