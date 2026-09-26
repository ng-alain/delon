---
title: chart-echarts
subtitle: ECharts
cols: 1
type: ECharts
module: import { ChartEChartsModule } from '@delon/chart/chart-echarts';
---

[ECharts](https://echarts.apache.org/en/index.html) is an open-source JavaScript visualization library. The ECharts script is lazy-loaded and works out of the box.

## API

### chart-echarts

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[width]` | Width of the chart | `number, string` | `100%` |
| `[height]` | Height of the chart | `number, string` | `400px` |
| `[option]` | [Options](https://echarts.apache.org/en/option.html#title) | `ChartEChartsOption` | - |
| `[theme]` | [Theme](https://echarts.apache.org/en/theme-builder.html) configuration | `string, object` | - |
| `[initOpt]` | [init](https://echarts.apache.org/en/api.html#echarts.init) options (such as `renderer`, `devicePixelRatio`); changing it recreates the instance | `object` | - |
| `[on]` | Equivalent to the ECharts [on](https://echarts.apache.org/en/api.html#echartsInstance.on) | `ChartEChartsOn[]` | - |
| `(events)` | Event callback | `output<ChartEChartsEvent>` | - |

---

## Examples

### Basic

Simplest of usage.

```typescript
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ChartEChartsEvent, ChartEChartsModule, ChartEChartsOption } from '@delon/chart/chart-echarts';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'chart-chart-echarts-basic',
  template: `
    <div class="mb-md">
      <nz-switch [(ngModel)]="dark" /> Dark
      <button nz-button (click)="two.set(!two())" nzType="primary">Change Option</button>
    </div>
    <chart-echarts [option]="two() ? option1 : option2" [theme]="dark() ? 'dark' : null" (events)="handleEvents($event)" />
  `,
  imports: [FormsModule, NzSwitchModule, NzButtonModule, ChartEChartsModule]
})
export class ChartChartEchartsBasic {
  readonly dark = signal(false);
  readonly two = signal(false);

  option1: ChartEChartsOption = {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
      {
        name: 'Pressure',
        type: 'gauge',
        detail: {
          formatter: '{value}'
        },
        data: [
          {
            value: 50,
            name: 'SCORE'
          }
        ]
      }
    ]
  };

  option2: ChartEChartsOption = {
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  };

  handleEvents(ev: ChartEChartsEvent): void {
    console.log(ev);
  }
}
```

### Bind event

Using the `on` attribute is equivalent to ECharts [on](https://echarts.apache.org/zh/api.html#echartsInstance.on).

```typescript
import { Component, inject } from '@angular/core';

import { ChartEChartsModule, ChartEChartsOn, ChartEChartsOption } from '@delon/chart/chart-echarts';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-chart-echarts-on',
  template: ` <chart-echarts [option]="option" [on]="on" /> `,
  imports: [ChartEChartsModule]
})
export class ChartChartEchartsOn {
  private readonly msg = inject(NzMessageService);
  dark = false;
  two = false;

  on: ChartEChartsOn[] = [
    {
      eventName: 'click',
      handler: ({ event, chart }) => {
        this.msg.info(`${event.type}: ${event.name} - ${event.value} (${chart.id})`);
      }
    }
  ];

  option: ChartEChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  };
}
```
