---
title: chart-echarts
subtitle: ECharts
cols: 1
type: ECharts
module: import { ChartEChartsModule } from '@delon/chart/chart-echarts';
---

[ECharts](https://echarts.apache.org/zh/index.html) 一个基于 JavaScript 的开源可视化图表库。使用懒加载 ECharts 脚本，开箱启用。

## API

### chart-echarts

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[width]` | 图表宽度 | `number, string` | `100%`|
| `[height]` | 图表高度 | `number, string` | `400px`|
| `[option]` | [配置项](https://echarts.apache.org/zh/option.html#title) | `ChartEChartsOption` | - |
| `[theme]` | [主题](https://echarts.apache.org/zh/theme-builder.html)配置 | `string, object` | - |
| `[on]` | 等同于 ECharts [on](https://echarts.apache.org/zh/api.html#echartsInstance.on) | `ChartEChartsOn[]` | - |
| `(events)` | 事件回调 | `EventEmitter<ChartEChartsEvent>` | - |

---

## 代码示例

### 基本

最简单的用法。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ChartEChartsEvent, ChartEChartsModule, ChartEChartsOption } from '@delon/chart/chart-echarts';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'chart-chart-echarts-basic',
  template: `
    <div class="mb-md">
      <nz-switch [(ngModel)]="dark" /> Dark
      <button nz-button (click)="two = !two" nzType="primary">Change Option</button>
    </div>
    <chart-echarts [option]="two ? option1 : option2" [theme]="dark ? 'dark' : null" (events)="handleEvents($event)" />
  `,
  imports: [FormsModule, NzSwitchModule, NzButtonModule, ChartEChartsModule]
})
export class ChartChartEchartsBasic {
  dark = false;
  two = false;

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

### 绑定事件

使用 `on` 属性，等同于 ECharts [on](https://echarts.apache.org/zh/api.html#echartsInstance.on)。

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
