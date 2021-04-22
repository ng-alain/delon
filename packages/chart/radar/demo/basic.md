---
order: 0
title:
  zh-CN: 基础
  en-US: Basic
---

基础用法。

```ts
import { Component } from '@angular/core';
import { G2RadarClickItem, G2RadarData } from '@delon/chart/radar';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-radar [hasLegend]="true" [data]="radarData" height="286" (clickItem)="handleClick($event)"></g2-radar>
  `,
})
export class DemoComponent {
  radarData: G2RadarData[] = [];

  constructor(private msg: NzMessageService) {
    this.refresh();
  }

  refresh(): void {
    const rv = (min: number = 1, max: number = 10) => Math.floor(Math.random() * (max - min + 1) + min);
    const radarOriginData = ['个人', '团队', '部门'].map(name => ({
      name,
      ref: rv(),
      koubei: rv(),
      output: rv(),
      contribute: rv(),
      hot: rv(),
    }));
    const radarTitleMap: { [key: string]: string } = {
      ref: '引用',
      koubei: '口碑',
      output: '产量',
      contribute: '贡献',
      hot: '热度',
    };
    if (Math.random() > 0.5) {
      delete radarTitleMap.hot;
    }
    const res: G2RadarData[] = [];
    radarOriginData.forEach((item: { [key: string]: any }) => {
      Object.keys(item).forEach(key => {
        if (key !== 'name') {
          res.push({
            name: item.name,
            label: radarTitleMap[key],
            value: item[key],
          });
        }
      });
    });
    this.radarData = res;
  }

  handleClick(data: G2RadarClickItem): void {
    this.msg.info(`${data.item.label} - ${data.item.name} - ${data.item.value}`);
  }
}
```
