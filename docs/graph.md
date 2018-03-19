---
order: 20
title:
  en-US: Charts
  zh-CN: 图表
type: Advance
---

图表是基于 G2 (3.0) 的基础上二次封装，提供了业务中常用的图表套件，可以单独使用，也可以组合起来实现复杂的展示效果。

> 图表的作用，是帮助我们更好地看懂数据。选择什么图表，需要回答的首要问题是『我有什么数据，需要用图表做什么』，而不是 『图表长成什么样』 。

| 分类名 | 组件清单 | 描述
| ----- | ------- | ---
| 比较类 | 迷你柱状图：`mini-bar`<br>柱状图：`bar`<br>雷达图：`radar`<br>迷你区域图：`mini-area`<br>迷你进度条：`mini-progress` | -
| 分布类 | 折线图：`timeline` | -
| 流程类 | - | -
| 占比类 | 饼图：`pie`<br>水波图：`water-wave`<br>迷你进度条：`mini-progress`<br>迷你区域图：`mini-area` | -
| 区间类 | 仪表盘：`gauge`<br>迷你区域图：`mini-area` | -
| 关系类 | - | -
| 趋势类 | 折线图：`timeline`<br>迷你区域图：`mini-area` | -
| 时间类 | 折线图：`timeline`<br>迷你区域图：`mini-area` | -
| 地图类 | - | -
| 其它 | 标签云：`tag-cloud`<br>图表卡片：`chart-card`<br>自定义图表：`chart` | -

[查看图表组件API文档](http://ng-alain.com/components/charts)

## 如何使用？

> 如果上面组件不能满足你的业务需求，可以直接试用 [G2](//antv.alipay.com/zh-cn/g2/3.x/index.html) 封装自己的图表组件。

### 引入 G2

通过 npm 安装 g2 包

```
npm install @antv/g2 @antv/data-set @antv/g2-plugin-slider --save
```

在 `.angular-cli.json` 引用G2文件

```json
"scripts": [
    "../node_modules/@antv/g2/dist/g2.min.js",
    "../node_modules/@antv/data-set/dist/data-set.min.js",
    "../node_modules/@antv/g2-plugin-slider/dist/g-2.0.0.min.js"
]
```

## 自定义 G2 组件

`@delon/abc` 提供了一个自定义G2组件的容器，可以减少不必要的组件渲染过程中所产生的奇怪问题。

一个完整的示例见 [chart.md](//github.com/cipchk/delon/blob/master/src/core/abc/components/charts/demo/chart.md)。

## 为什么会有 `kcart.alipay.com` 请求？

为了更好服务用户，G2 会将 URL 和版本信息发送回 AntV 服务器。你可以通过以下代码关闭：

```ts
if (typeof G2 !== 'undefined') G2.track(false);
```
