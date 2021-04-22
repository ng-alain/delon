---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法。

## en-US

Simplest of usage.

```ts
import { Component } from '@angular/core';
import { ChartEChartsEvent, ChartEChartsOption } from '@delon/chart/chart-echarts';

@Component({
  selector: 'app-demo',
  template: `
    <div class="mb-md">
      <nz-switch [(ngModel)]="dark"></nz-switch> Dark
      <button nz-button (click)="two = !two" nzType="primary">Change Option</button>
    </div>
    <chart-echarts [option]="two ? option1 : option2" [theme]="dark ? 'dark' : null" (events)="handleEvents($event)"></chart-echarts>
  `,
})
export class DemoComponent {
  dark = false;
  two = false;

  option1: ChartEChartsOption = {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%',
    },
    series: [
      {
        name: 'Pressure',
        type: 'gauge',
        detail: {
          formatter: '{value}',
        },
        data: [
          {
            value: 50,
            name: 'SCORE',
          },
        ],
      },
    ],
  };

  option2: ChartEChartsOption = {
    title: {
      text: 'ECharts 入门示例',
    },
    tooltip: {},
    legend: {
      data: ['销量'],
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };

  handleEvents(ev: ChartEChartsEvent): void {
    console.log(ev);
  }
}
```
