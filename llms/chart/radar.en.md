---
title: g2-radar
subtitle: Radar
cols: 1
type: G2
module: import { G2RadarModule } from '@delon/chart/radar';
---

A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point. The relative position and angle of the axes are usually uninformative.

## API

### g2-radar

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[repaint]` | Whether to repaint when the data changes again | `boolean` | `true` |
| `[delay]` | Delayed rendering, unit: ms | `number` | `0` |
| `[title]` | Title of the chart | `string,TemplateRef<void>` | - |
| `[height]` | Height of the chart | `number` | - |
| `[hasLegend]` | Whether to display the legend | `boolean` | `true` |
| `[padding]` | Padding of the chart | `array` | `[44, 30, 16, 30]` |
| `[tickCount]` | Number of y-axis ticks | `number` | `4` |
| `[colors]` | Color list | `string[]` | `['#1890FF', '#FACC14', '#2FC25B', '#8543E0', '#F04864', '#13C2C2', '#fa8c16', '#a0d911']` |
| `[data]` | Data | `G2RadarData[]` | - |
| `[theme]` | Custom chart theme | `string \| LooseObject` | - |
| `(clickItem)` | Callback when clicking an item | `output<G2RadarClickItem>` | - |
| `(ready)` | Callback when G2 is initialized | `output<Chart>` | - |
| `(error)` | Callback when rendering fails (G2 not loaded or render throws); `(ready)` will not fire | `output<unknown>` | - |

### G2RadarData

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[name]` | Name | `string` | - |
| `[label]` | Label | `string` | - |
| `[value]` | Value | `number` | - |

---

## Examples

### Basic

Basic usage.

```typescript
import { Component, signal } from '@angular/core';

import { G2RadarClickItem, G2RadarData, G2RadarModule } from '@delon/chart/radar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-radar-basic',
  template: `
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-radar [hasLegend]="true" [data]="radarData()" height="286" (clickItem)="handleClick($event)" />
  `,
  imports: [NzButtonModule, G2RadarModule]
})
export class ChartRadarBasic {
  readonly radarData = signal<G2RadarData[]>([]);

  constructor(private msg: NzMessageService) {
    this.refresh();
  }

  refresh(): void {
    const rv = (min: number = 1, max: number = 10): number => Math.floor(Math.random() * (max - min + 1) + min);
    const radarOriginData = ['个人', '团队', '部门'].map(name => ({
      name,
      ref: rv(),
      koubei: rv(),
      output: rv(),
      contribute: rv(),
      hot: rv()
    }));
    const radarTitleMap: { [key: string]: string } = {
      ref: '引用',
      koubei: '口碑',
      output: '产量',
      contribute: '贡献',
      hot: '热度'
    };
    if (Math.random() > 0.5) {
      delete radarTitleMap.hot;
    }
    const res: G2RadarData[] = [];
    radarOriginData.forEach((item: { [key: string]: NzSafeAny }) => {
      Object.keys(item).forEach(key => {
        if (key !== 'name') {
          res.push({
            name: item.name,
            label: radarTitleMap[key],
            value: item[key]
          });
        }
      });
    });
    this.radarData.set(res);
  }

  handleClick(data: G2RadarClickItem): void {
    this.msg.info(`${data.item.label} - ${data.item.name} - ${data.item.value}`);
  }
}
```
