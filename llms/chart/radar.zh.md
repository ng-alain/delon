---
title: g2-radar
subtitle: 雷达图
cols: 1
type: G2
module: import { G2RadarModule } from '@delon/chart/radar';
---

雷达图是以相同点开始的轴上表示的三个或更多个定量变量的二维图形的形式显示多变量数据的图形方法。轴的相对位置和角度通常是不知情的。

## API

### g2-radar

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[repaint]` | 数据再次变更时是否重绘 | `boolean` | `true` |
| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |
| `[title]` | 图表标题 | `string,TemplateRef<void>` | - |
| `[height]` | 图表高度 | `number` | - |
| `[hasLegend]` | 是否显示 legend | `boolean` | `true` |
| `[padding]` | 图表内部间距 | `array` | `[44, 30, 16, 30]` |
| `[tickCount]` | y 轴刻度数量 | `number` | `4` |
| `[colors]` | 颜色列表 | `string[]` | `['#1890FF', '#FACC14', '#2FC25B', '#8543E0', '#F04864', '#13C2C2', '#fa8c16', '#a0d911']` |
| `[data]` | 数据 | `G2RadarData[]` | - |
| `[theme]` | 定制图表主题 | `string \| LooseObject` | - |
| `(clickItem)` | 点击项回调 | `output<G2RadarClickItem>` | - |
| `(ready)` | 当G2完成初始化后调用 | `output<Chart>` | - |
| `(error)` | 当渲染失败时调用（G2 未加载或渲染抛错），此时 `(ready)` 不会触发 | `output<unknown>` | - |

### G2RadarData

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[name]` | 名称 | `string` | - |
| `[label]` | 标签 | `string` | - |
| `[value]` | 值 | `number` | - |

---

## 代码示例

### 基础

基础用法。

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
