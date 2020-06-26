---
order: 0
title:
  zh-CN: 基础
  en-US: Basic
---

基础用法。

```ts
import { Component, OnInit } from '@angular/core';
import { G2RadarClickItem, G2RadarData } from '@delon/chart/radar';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-radar-basic',
  template: ` <g2-radar [hasLegend]="true" [data]="radarData" height="286" (clickItem)="handleClick($event)"></g2-radar>`,
})
export class DemoComponent implements OnInit {
  radarData: G2RadarData[] = [];

  constructor(private msg: NzMessageService) {}

  ngOnInit(): void {
    const radarOriginData = [
      {
        name: '个人',
        ref: 10,
        koubei: 8,
        output: 4,
        contribute: 5,
        hot: 7,
      },
      {
        name: '团队',
        ref: 3,
        koubei: 9,
        output: 6,
        contribute: 3,
        hot: 1,
      },
      {
        name: '部门',
        ref: 4,
        koubei: 1,
        output: 6,
        contribute: 5,
        hot: 7,
      },
    ];
    const radarTitleMap: { [key: string]: string } = {
      ref: '引用',
      koubei: '口碑',
      output: '产量',
      contribute: '贡献',
      hot: '热度',
    };
    radarOriginData.forEach((item: { [key: string]: any }) => {
      Object.keys(item).forEach(key => {
        if (key !== 'name') {
          this.radarData.push({
            name: item.name,
            label: radarTitleMap[key],
            value: item[key],
          });
        }
      });
    });
  }

  handleClick(data: G2RadarClickItem): void {
    this.msg.info(`${data.item.label} - ${data.item.name} - ${data.item.value}`);
  }
}
```
