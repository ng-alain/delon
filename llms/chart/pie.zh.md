---
title: g2-pie
subtitle: 饼状图
cols: 1
type: G2
module: import { G2PieModule } from '@delon/chart/pie';
---

用于显示跟速度相关图形再适合不过。

## API

### g2-pie

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[repaint]` | 数据再次变更时是否重绘 | `boolean` | `true` |
| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |
| `[animate]` | 是否显示动画 | `boolean` | `true` |
| `[color]` | 图表颜色 | `string` | `rgba(24, 144, 255, 0.85)` |
| `[height]` | 图表高度 | `number` | - |
| `[fontSize]` | 图表文字基准字号（图例继承该字号，中心数值按 `em` 缩放） | `number` | `14` |
| `[hasLegend]` | 是否显示 legend | `boolean` | `false` |
| `[padding]` | 图表内部间距 | `number[]` | `[12, 0, 12, 0]` |
| `[percent]` | 占比 | `number` | - |
| `[select]` | 是否支持分片选中（**当前版本未实现，为兼容保留的空转输入**） | `boolean` | `true` |
| `[lineWidth]` | 边框粗细 | `number` | `0` |
| `[inner]` | 内部极坐标系的半径 | `number` | `0.75` |
| `[blockMaxWidth]` | 多少宽度为块显示 | `number` | `380` |
| `[tooltip]` | 是否显示 tooltip | `boolean` | `true` |
| `[subTitle]` | 图表子标题 | `string,TemplateRef<void>` | - |
| `[total]` | 总量 | `string,number,TemplateRef<void>` | - |
| `[valueFormat]` | y轴格式化 | `(y: number) => string` | - |
| `[data]` | 数据 | `G2PieData[]` | - |
| `[colors]` | 颜色列表 | `string[]` | - |
| `[interaction]` | 交互类型，none 无 element-active 图形元素，active-region 图表组件，brush 框选，drag-move 移动 | `InteractionType` | `none` |
| `[ratio]` | 百分比配置项 | `G2PieRatio` | `{ text: '占比', inverse: '反比', color: '', inverseColor: '#F0F2F5' }` |
| `[theme]` | 定制图表主题 | `string \| LooseObject` | - |
| `(clickItem)` | 点击项回调 | `output<G2PieClickItem>` | - |
| `(ready)` | 当G2完成初始化后调用 | `output<Chart>` | - |
| `(error)` | 当渲染失败时调用（G2 未加载或渲染抛错），此时 `(ready)` 不会触发 | `output<unknown>` | - |

### G2PieData

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[x]` | x轴 | `any` | - |
| `[y]` | y轴 | `number` | - |

---

## 代码示例

### 基础

基础用法。默认情况下丝滑更新数据的判断标准是以只更新 `data` 为准，这里利用 `repaint` 进行手动调用 `changeData` 改变数据达到丝滑更新的效果。

```typescript
import { Component, signal, viewChild } from '@angular/core';

import { G2PieClickItem, G2PieComponent, G2PieData, G2PieModule } from '@delon/chart/pie';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { timer } from 'rxjs';

@Component({
  selector: 'chart-pie-basic',
  template: `
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-pie
      #pie
      [hasLegend]="true"
      title="销售额"
      subTitle="销售额"
      [total]="total()"
      [valueFormat]="format"
      [data]="salesPieData()"
      height="294"
      repaint="false"
      (clickItem)="handleClick($event)"
    />
  `,
  imports: [NzButtonModule, G2PieModule]
})
export class ChartPieBasic {
  readonly pie = viewChild<G2PieComponent>('pie');
  readonly salesPieData = signal<G2PieData[]>([]);
  readonly total = signal('');

  constructor(private msg: NzMessageService) {
    this.refresh();
  }

  refresh(): void {
    const rv = (min: number = 0, max: number = 5000): number => Math.floor(Math.random() * (max - min + 1) + min);
    const salesPieData: G2PieData[] = [
      {
        x: '家用电器',
        y: rv()
      },
      {
        x: '食用酒水',
        y: rv()
      },
      {
        x: '个护健康',
        y: rv()
      },
      {
        x: '服饰箱包',
        y: rv()
      },
      {
        x: '母婴产品',
        y: rv()
      }
    ];
    if (Math.random() > 0.5) {
      salesPieData.push({
        x: '其他',
        y: rv()
      });
    }
    this.salesPieData.set(salesPieData);
    this.total.set(`&yen ${salesPieData.reduce((pre, now) => now.y + pre, 0).toFixed(2)}`);
    const pie = this.pie();
    if (pie) {
      // 等待组件完成本次渲染后再手动更新数据
      timer(0).subscribe(() => pie.changeData());
    }
  }

  format(val: number): string {
    return `&yen ${val.toFixed(2)}`;
  }

  handleClick(data: G2PieClickItem): void {
    this.msg.info(`${data.item.x} - ${data.item.y}`);
  }
}
```

### 迷你型

通过简化 `pie` 属性的设置，可以快速的实现极简的饼状图，可配合 `chart-card` 组合展现更多业务场景。

```typescript
import { Component } from '@angular/core';

import { G2PieModule } from '@delon/chart/pie';

@Component({
  selector: 'chart-pie-mini',
  template: `<g2-pie percent="28" subTitle="中式快餐" total="28%" height="130" padding="auto" style="width: 130px" />`,
  imports: [G2PieModule]
})
export class ChartPieMini {}
```
