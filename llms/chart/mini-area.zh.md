---
title: g2-mini-area
subtitle: 迷你区域图
cols: 2
type: G2
module: import { G2MiniAreaModule } from '@delon/chart/mini-area';
---

面积图又叫区域图。 它是在折线图的基础之上形成的, 它将折线图中折线与自变量坐标轴之间的区域使用颜色或者纹理填充，这样一个填充区域我们叫做面积，颜色的填充可以更好的突出趋势信息。

## API

### g2-mini-area

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[repaint]` | 数据再次变更时是否重绘 | `boolean` | `true` |
| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |
| `[color]` | 图表颜色 | `string` | `rgba(24, 144, 255, 0.2)` |
| `[borderColor]` | 图表边颜色 | `string` | `#1890FF` |
| `[borderWidth]` | 图表边粗细 | `number` | `2` |
| `[fit]` | 是否自适应容器尺寸（`autoFit`） | `boolean` | `true` |
| `[height]` | 图表高度 | `number` | `56` |
| `[line]` | 是否显示描边 | `boolean` | `false` |
| `[animate]` | 是否显示动画 | `boolean` | `true` |
| `[padding]` | 图表内部间距 | `array` | `[8, 8, 8, 8]` |
| `[xAxis]` | x 轴配置（按 v5 AxisComponent 传参） | `object` | - |
| `[yAxis]` | y 轴配置（按 v5 AxisComponent 传参） | `object` | - |
| `[yTooltipSuffix]` | y 轴Tooltip后缀，一般指定单位 | `string` | - |
| `[tooltipType]` | Tooltip显示类型 | `'mini','default'` | `'default'` |
| `[data]` | 数据 | `G2MiniAreaData[]` | - |
| `[theme]` | 定制图表主题 | `string \| LooseObject` | - |
| `(clickItem)` | 点击项回调 | `output<G2MiniAreaClickItem>` | - |
| `(ready)` | 当G2完成初始化后调用 | `output<Chart>` | - |
| `(error)` | 当渲染失败时调用（G2 未加载或渲染抛错），此时 `(ready)` 不会触发 | `output<unknown>` | - |

### G2MiniAreaData

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[x]` | x轴 | `any` | - |
| `[y]` | y轴 | `any` | - |

---

## 代码示例

### 基础

基础用法。

```typescript
import { Component, inject, signal } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniAreaClickItem, G2MiniAreaData, G2MiniAreaModule } from '@delon/chart/mini-area';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-mini-area-basic',
  template: `
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-mini-area line color="#cceafe" height="45" [data]="visitData()" (clickItem)="handleClick($event)" />
  `,
  imports: [NzButtonModule, G2MiniAreaModule]
})
export class ChartMiniAreaBasic {
  private readonly msg = inject(NzMessageService);
  readonly visitData = signal(this.genData());

  private genData(): G2MiniAreaData[] {
    const beginDay = new Date().getTime();
    const res: G2MiniAreaData[] = [];
    for (let i = 0; i < 20; i += 1) {
      res.push({
        x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10
      });
    }
    return res;
  }

  refresh(): void {
    this.visitData.set(this.genData());
  }

  handleClick(data: G2MiniAreaClickItem): void {
    this.msg.info(`${data.item.x} - ${data.item.y}`);
  }
}
```

### Tooltip

指定 `yTooltipSuffix` 值来表示单位。

```typescript
import { Component, OnInit, signal } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniAreaData, G2MiniAreaModule } from '@delon/chart/mini-area';

@Component({
  selector: 'chart-mini-area-tooltip',
  template: ` <g2-mini-area line color="#cceafe" height="45" [data]="visitData()" yTooltipSuffix="%" /> `,
  imports: [G2MiniAreaModule]
})
export class ChartMiniAreaTooltip implements OnInit {
  readonly visitData = signal<G2MiniAreaData[]>([]);

  ngOnInit(): void {
    const beginDay = new Date().getTime();
    const visitData: G2MiniAreaData[] = [];
    for (let i = 0; i < 20; i += 1) {
      visitData.push({
        x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10
      });
    }
    this.visitData.set(visitData);
  }
}
```

### Mini tooltip

指定 `tooltipType` 值来表示简化tooltip，可以更好的运用于表格。

```typescript
import { Component, OnInit, signal } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniAreaData, G2MiniAreaModule } from '@delon/chart/mini-area';

@Component({
  selector: 'chart-mini-area-mini',
  template: ` <g2-mini-area line color="#cceafe" height="45" [data]="visitData()" tooltipType="mini" /> `,
  imports: [G2MiniAreaModule]
})
export class ChartMiniAreaMini implements OnInit {
  readonly visitData = signal<G2MiniAreaData[]>([]);

  ngOnInit(): void {
    const beginDay = new Date().getTime();
    const visitData: G2MiniAreaData[] = [];
    for (let i = 0; i < 20; i += 1) {
      visitData.push({
        x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10
      });
    }
    this.visitData.set(visitData);
  }
}
```
