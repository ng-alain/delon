---
title: g2-tag-cloud
subtitle: 标签云
cols: 1
type: G2
module: import { G2TagCloudModule } from '@delon/chart/tag-cloud';
---

标签云是一套相关的标签以及与此相应的权重展示方式，一般典型的标签云有 30 至 150 个标签，而权重影响使用的字体大小或其他视觉效果。

## API

### g2-tag-cloud

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[repaint]` | 数据再次变更时是否重绘 | `boolean` | `true` |
| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `200` |
| `[height]` | 高度值 | `number` | `200` |
| `[width]` | 宽度值，若不指定自动按宿主元素的宽度 | `number` | `0` |
| `[data]` | 数据 | `G2TagCloudData[]` | `[]` |
| `[theme]` | 定制图表主题 | `string | LooseObject` | - |
| `(clickItem)` | 点击项回调 | `EventEmitter<G2TagCloudClickItem>` | - |
| `(ready)` | 当G2完成初始化后调用 | `EventEmitter<Chart>` | - |

### G2TagCloudData

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[name]` | 名称 | `string` | - |
| `[value]` | 值 | `number` | - |

---

## 代码示例

### 基础

基础用法。

```typescript
import { Component } from '@angular/core';

import { G2TagCloudClickItem, G2TagCloudData, G2TagCloudModule } from '@delon/chart/tag-cloud';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-tag-cloud-basic',
  template: `
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-tag-cloud [data]="tags" height="400" (clickItem)="handleClick($event)" />
  `,
  imports: [NzButtonModule, G2TagCloudModule]
})
export class ChartTagCloudBasic {
  tags: G2TagCloudData[] = [];

  constructor(private msg: NzMessageService) {
    this.refresh();
  }

  refresh(): void {
    const rv = (min: number = 1, max: number = 10): number => Math.floor(Math.random() * (max - min + 1) + min);

    this.tags = [
      { value: rv(), name: 'NG-ALAIN' },
      { value: rv(), name: 'AntV' },
      { value: rv(), name: 'F2' },
      { value: rv(), name: 'G2' },
      { value: rv(), name: 'G6' },
      { value: rv(), name: 'DataSet' },
      { value: rv(), name: '墨者学院' },
      { value: rv(), name: 'Analysis' },
      { value: rv(), name: 'Data Mining' },
      { value: rv(), name: 'Data Vis' },
      { value: rv(), name: 'Design' },
      { value: rv(), name: 'Grammar' },
      { value: rv(), name: 'Graphics' },
      { value: rv(), name: 'Graph' },
      { value: rv(), name: 'Hierarchy' },
      { value: rv(), name: 'Labeling' },
      { value: rv(), name: 'Layout' },
      { value: rv(), name: 'Quantitative' },
      { value: rv(), name: 'Relation' },
      { value: rv(), name: 'Statistics' },
      { value: rv(), name: '可视化' },
      { value: rv(), name: '数据' },
      { value: rv(), name: '数据可视化' },
      { value: rv(), name: 'Arc Diagram' },
      { value: rv(), name: 'Bar Chart' },
      { value: rv(), name: 'Canvas' },
      { value: rv(), name: 'Chart' },
      { value: rv(), name: 'DAG' },
      { value: rv(), name: 'DG' },
      { value: rv(), name: 'Facet' },
      { value: rv(), name: 'Geo' },
      { value: rv(), name: 'Line' },
      { value: rv(), name: 'MindMap' },
      { value: rv(), name: 'Pie' },
      { value: rv(), name: 'Pizza Chart' },
      { value: rv(), name: 'Punch Card' },
      { value: rv(), name: 'SVG' },
      { value: rv(), name: 'Sunburst' },
      { value: rv(), name: 'Tree' },
      { value: rv(), name: 'UML' },
      { value: rv(), name: 'Chart' },
      { value: rv(), name: 'View' },
      { value: rv(), name: 'Geom' },
      { value: rv(), name: 'Shape' },
      { value: rv(), name: 'Scale' },
      { value: rv(), name: 'Animate' },
      { value: rv(), name: 'Global' },
      { value: rv(), name: 'Slider' },
      { value: rv(), name: 'Connector' },
      { value: rv(), name: 'Transform' },
      { value: rv(), name: 'Util' },
      { value: rv(), name: 'DomUtil' },
      { value: rv(), name: 'MatrixUtil' },
      { value: rv(), name: 'PathUtil' },
      { value: rv(), name: 'G' },
      { value: rv(), name: '2D' },
      { value: rv(), name: '3D' },
      { value: rv(), name: 'Line' },
      { value: rv(), name: 'Area' },
      { value: rv(), name: 'Interval' },
      { value: rv(), name: 'Schema' },
      { value: rv(), name: 'Edge' },
      { value: rv(), name: 'Polygon' },
      { value: rv(), name: 'Heatmap' },
      { value: rv(), name: 'Render' },
      { value: rv(), name: 'Tooltip' },
      { value: rv(), name: 'Axis' },
      { value: rv(), name: 'Guide' },
      { value: rv(), name: 'Coord' },
      { value: rv(), name: 'Legend' },
      { value: rv(), name: 'Path' },
      { value: rv(), name: 'Helix' },
      { value: rv(), name: 'Theta' },
      { value: rv(), name: 'Rect' },
      { value: rv(), name: 'Polar' },
      { value: rv(), name: 'Dsv' },
      { value: rv(), name: 'Csv' },
      { value: rv(), name: 'Tsv' },
      { value: rv(), name: 'GeoJSON' },
      { value: rv(), name: 'TopoJSON' },
      { value: rv(), name: 'Filter' },
      { value: rv(), name: 'Map' },
      { value: rv(), name: 'Pick' },
      { value: rv(), name: 'Rename' },
      { value: rv(), name: 'Filter' },
      { value: rv(), name: 'Map' },
      { value: rv(), name: 'Pick' },
      { value: rv(), name: 'Rename' },
      { value: rv(), name: 'Reverse' },
      { value: rv(), name: 'sort' },
      { value: rv(), name: 'Subset' },
      { value: rv(), name: 'Partition' },
      { value: rv(), name: 'Imputation' },
      { value: rv(), name: 'Fold' },
      { value: rv(), name: 'Aggregate' },
      { value: rv(), name: 'Proportion' },
      { value: rv(), name: 'Histogram' },
      { value: rv(), name: 'Quantile' },
      { value: rv(), name: 'Treemap' },
      { value: rv(), name: 'Hexagon' },
      { value: rv(), name: 'Binning' },
      { value: rv(), name: 'kernel' },
      { value: rv(), name: 'Regression' },
      { value: rv(), name: 'Density' },
      { value: rv(), name: 'Sankey' },
      { value: rv(), name: 'Voronoi' },
      { value: rv(), name: 'Projection' },
      { value: rv(), name: 'Centroid' },
      { value: rv(), name: 'H5' },
      { value: rv(), name: 'Mobile' },
      { value: rv(), name: 'K线图' },
      { value: rv(), name: '关系图' },
      { value: rv(), name: '烛形图' },
      { value: rv(), name: '股票图' },
      { value: rv(), name: '直方图' },
      { value: rv(), name: '金字塔图' },
      { value: rv(), name: '分面' },
      { value: rv(), name: '南丁格尔玫瑰图' },
      { value: rv(), name: '饼图' },
      { value: rv(), name: '线图' },
      { value: rv(), name: '点图' },
      { value: rv(), name: '散点图' },
      { value: rv(), name: '子弹图' },
      { value: rv(), name: '柱状图' },
      { value: rv(), name: '仪表盘' },
      { value: rv(), name: '气泡图' },
      { value: rv(), name: '漏斗图' },
      { value: rv(), name: '热力图' },
      { value: rv(), name: '玉玦图' },
      { value: rv(), name: '直方图' },
      { value: rv(), name: '矩形树图' },
      { value: rv(), name: '箱形图' },
      { value: rv(), name: '色块图' },
      { value: rv(), name: '螺旋图' },
      { value: rv(), name: '词云' },
      { value: rv(), name: '词云图' },
      { value: rv(), name: '雷达图' },
      { value: rv(), name: '面积图' },
      { value: rv(), name: '马赛克图' },
      { value: rv(), name: '盒须图' },
      { value: rv(), name: '坐标轴' },
      { value: rv(), name: '' },
      { value: rv(), name: 'Jacques Bertin' },
      { value: rv(), name: 'Leland Wilkinson' },
      { value: rv(), name: 'William Playfair' },
      { value: rv(), name: '关联' },
      { value: rv(), name: '分布' },
      { value: rv(), name: '区间' },
      { value: rv(), name: '占比' },
      { value: rv(), name: '地图' },
      { value: rv(), name: '时间' },
      { value: rv(), name: '比较' },
      { value: rv(), name: '流程' },
      { value: rv(), name: '趋势' },
      { value: rv(), name: '亦叶' },
      { value: rv(), name: '再飞' },
      { value: rv(), name: '完白' },
      { value: rv(), name: '巴思' },
      { value: rv(), name: '张初尘' },
      { value: rv(), name: '御术' },
      { value: rv(), name: '有田' },
      { value: rv(), name: '沉鱼' },
      { value: rv(), name: '玉伯' },
      { value: rv(), name: '画康' },
      { value: rv(), name: '祯逸' },
      { value: rv(), name: '绝云' },
      { value: rv(), name: '罗宪' },
      { value: rv(), name: '萧庆' },
      { value: rv(), name: '董珊珊' },
      { value: rv(), name: '陆沉' },
      { value: rv(), name: '顾倾' },
      { value: rv(), name: 'Domo' },
      { value: rv(), name: 'GPL' },
      { value: rv(), name: 'PAI' },
      { value: rv(), name: 'SPSS' },
      { value: rv(), name: 'SYSTAT' },
      { value: rv(), name: 'Tableau' },
      { value: rv(), name: 'D3' },
      { value: rv(), name: 'Vega' },
      { value: rv(), name: '统计图表' }
    ];
  }

  handleClick(data: G2TagCloudClickItem): void {
    this.msg.info(`${data.item.name} - ${data.item.value}`);
  }
}
```
