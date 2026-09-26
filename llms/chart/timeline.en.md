---
title: g2-timeline
subtitle: Timeline
cols: 1
type: G2
module: import { G2TimelineModule } from '@delon/chart/timeline';
---

The `timeline` component renders a bar chart with a time axis, where `x` points to the time value. By default it displays up to two indicators at the same time, `y1` and `y2`.

## API

### g2-timeline

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[repaint]` | Whether to repaint when the data changes again | `boolean` | `true` |
| `[delay]` | Delayed rendering, unit: ms | `number` | `0` |
| `[title]` | Title of the chart | `string,TemplateRef<void>` | - |
| `[maxAxis]` | Maximum number of indicators | `number` | `2` |
| `[data]` | Data; note that the indicator data passed depends on `maxAxis` | `G2TimelineData[]` | - |
| `[titleMap]` | Alias of the indicator | `G2TimelineMap` | - |
| `[colorMap]` | Color of the indicator | `G2TimelineMap` | `{ y1: '#5B8FF9', y2: '#5AD8A6', y3: '#5D7092', y4: '#F6BD16', y5: '#E86452' }` |
| `[height]` | Height | `number` | `450` |
| `[padding]` | Padding of the chart | `number[]` | `[40, 8, 64, 40]` |
| `[borderWidth]` | Line width | `number` | `2` |
| `[mask]` | Date format, using the [G2 mask date format](https://g2.antv.vision/zh/docs/manual/tutorial/scale#time) | `string` | `HH:mm` |
| `[maskSlider]` | Slider date format, using the [date-fns date format](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table) | `string` | `HH:mm` |
| `[position]` | Position of the title | `'top','right','bottom','left'` | `'top'` |
| `[slider]` | Whether the slider is required | `boolean` | `true` |
| `[theme]` | Custom chart theme | `string \| LooseObject` | - |
| `(clickItem)` | Callback when clicking an item | `output<G2TimelineClickItem>` | - |
| `(ready)` | Callback when G2 is initialized | `output<Chart>` | - |
| `(error)` | Callback when rendering fails (G2 not loaded or render throws); `(ready)` will not fire | `output<unknown>` | - |

### G2TimelineData

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[time]` | Date format | `Date \| number` | - |
| `[y1]` | Data of indicator 1 | `number` | - |
| `[y2]` | Data of indicator 2 | `number` | - |
| `[y3]` | Data of indicator 3 | `number` | - |
| `[y4]` | Data of indicator 4 | `number` | - |
| `[y5]` | Data of indicator 5 | `number` | - |

### G2TimelineMap

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[y1]` | Indicator 1 | `string` | - |
| `[y2]` | Indicator 2 | `string` | - |
| `[y3]` | Indicator 3 | `string` | - |
| `[y4]` | Indicator 4 | `string` | - |
| `[y5]` | Indicator 5 | `string` | - |

---

## Examples

### Basic

A chart with a time axis.

```typescript
import { Component, OnInit, inject, signal } from '@angular/core';

import { G2TimelineClickItem, G2TimelineData, G2TimelineModule } from '@delon/chart/timeline';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-timeline-basic',
  template: ` <g2-timeline
    [data]="chartData()"
    [titleMap]="{ y1: '客流量', y2: '支付笔数' }"
    [height]="200"
    (clickItem)="handleClick($event)"
  />`,
  imports: [G2TimelineModule]
})
export class ChartTimelineBasic implements OnInit {
  private readonly msg = inject(NzMessageService);
  readonly chartData = signal<G2TimelineData[]>([]);

  ngOnInit(): void {
    const chartData: G2TimelineData[] = [];
    for (let i = 0; i < 20; i += 1) {
      chartData.push({
        time: new Date().getTime() + 1000 * 60 * 30 * i,
        y1: Math.floor(Math.random() * 100) + 1000,
        y2: Math.floor(Math.random() * 100) + 10
      });
    }
    this.chartData.set(chartData);
  }

  handleClick(data: G2TimelineClickItem): void {
    this.msg.info(`客流量: ${data.item.y1}, 支付笔数: ${data.item.y2}`);
  }
}
```

### Multiple indicators

Use `maxAxis` to adjust multiple indicators; up to `5` indicator values are supported.

```typescript
import { Component, signal } from '@angular/core';

import { G2TimelineData, G2TimelineMap, G2TimelineModule } from '@delon/chart/timeline';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'chart-timeline-max-axis',
  template: `
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    @for (i of axisList; track $index) {
      <button nz-button (click)="refresh(i)" nzType="primary">{{ i }} axis</button>
    }
    <g2-timeline [maxAxis]="maxAxis()" [data]="chartData()" [titleMap]="titleMap()" [height]="300" />
  `,
  imports: [G2TimelineModule, NzButtonModule]
})
export class ChartTimelineMaxAxis {
  readonly chartData = signal<G2TimelineData[]>([]);
  readonly titleMap = signal<G2TimelineMap>({ y1: '指标1', y2: '指标2' });
  readonly maxAxis = signal(2);
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
    this.maxAxis.set(max ?? this.maxAxis());
    const { titleMap, data } = this.genData(this.maxAxis());
    this.chartData.set(data);
    this.titleMap.set(titleMap);
  }
}
```

### Time mask format

Use `mask` and `maskSlider` to change the time format.

```typescript
import { Component, OnInit, inject, signal } from '@angular/core';

import { G2TimelineClickItem, G2TimelineData, G2TimelineModule } from '@delon/chart/timeline';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-timeline-mask',
  template: ` <g2-timeline
    [data]="chartData()"
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
  readonly chartData = signal<G2TimelineData[]>([]);

  ngOnInit(): void {
    const chartData: G2TimelineData[] = [];
    for (let i = 0; i < 20; i += 1) {
      chartData.push({
        time: new Date().getTime() + 1000 * 60 * 60 * 24 * i,
        y1: Math.floor(Math.random() * 100) + 1000,
        y2: Math.floor(Math.random() * 100) + 10
      });
    }
    this.chartData.set(chartData);
  }

  handleClick(data: G2TimelineClickItem): void {
    this.msg.info(`客流量: ${data.item.y1}, 支付笔数: ${data.item.y2}`);
  }
}
```
