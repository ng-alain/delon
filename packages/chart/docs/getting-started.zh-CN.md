---
order: 1
title: 开始使用
type: Documents
---

图表是基于 [G2](https://antv.alipay.com/zh-cn/g2/3.x/index.html) (3.0) 的基础上二次封装，提供了业务中常用的图表套件，可以单独使用，也可以组合起来实现复杂的展示效果。

> 图表的作用，是帮助我们更好地看懂数据。选择什么图表，需要回答的首要问题是『我有什么数据，需要用图表做什么』，而不是 『图表长成什么样』 。

| 分类名 | 组件清单 | 描述
| ----- | ------- | ---
| 比较类 | 迷你柱状图：`g2-mini-bar`<br>单一柱状图：`g2-single-bar`<br>柱状图：`g2-bar`<br>雷达图：`g2-radar`<br>迷你区域图：`g2-mini-area`<br>迷你进度条：`g2-mini-progress` | -
| 分布类 | 折线图：`g2-timeline` | -
| 占比类 | 饼图：`g2-pie`<br>水波图：`g2-water-wave`<br>迷你进度条：`g2-mini-progress`<br>迷你区域图：`g2-mini-area` | -
| 区间类 | 仪表盘：`g2-gauge`<br>迷你区域图：`g2-mini-area` | -
| 趋势类 | 折线图：`g2-timeline`<br>迷你区域图：`g2-mini-area` | -
| 时间类 | 折线图：`g2-timeline`<br>迷你区域图：`g2-mini-area` | -
| 其它 | 标签云：`g2-tag-cloud`<br>图表卡片：`g2-chart-card`<br>自定义图表：`g2-chart` | -

## 如何使用

### 安装依赖

```bash
# add
ng g ng-alain:plugin g2
# remove
ng g ng-alain:plugin g2 -t=remove
```

### 导入模块

```ts
// shared.module.ts
import { DelonChartModule } from '@delon/chart';
// 支持次级导入，例如只使用 `g2-bar` 组件，可以减少包体大小
// import { G2BarModule } from '@delon/chart/bar';

@NgModule({
  imports: [ DelonChartModule ],
  exports: [ DelonChartModule ]
})
```

## 自定义 G2 组件

使用 [g2-chart](/chart/custom) 组件快速自定义一个图表，可以减少不必要的组件渲染过程中所产生的奇怪问题。
