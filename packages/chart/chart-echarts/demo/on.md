---
order: 0
title:
  zh-CN: 绑定事件
  en-US: Bind event
---

## zh-CN

使用 `on` 属性，等同于 ECharts [on](https://echarts.apache.org/zh/api.html#echartsInstance.on)。

## en-US

Using the `on` attribute is equivalent to ECharts [on](https://echarts.apache.org/zh/api.html#echartsInstance.on).

```ts
import { Component } from '@angular/core';

import { ChartEChartsOn, ChartEChartsOption } from '@delon/chart/chart-echarts';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: ` <chart-echarts [option]="option" [on]="on"></chart-echarts> `
})
export class DemoComponent {
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

  constructor(private msg: NzMessageService) {}
}
```
