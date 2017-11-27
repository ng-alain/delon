---
order: 10
title:
  en-US: Charts
  zh-CN: 图表
type: Advance
---

图表是基于 G2 的基础上二次封装，提供了业务中常用的图表套件，可以单独使用，也可以组合起来实现复杂的展示效果。

目前一共包涵 9 个图表类型，以及 2 个图表套件：

- 饼状图（pie）
- 柱状图（bar）
- 仪表盘（gauge）
- 雷达图（radar）
- 标签云（tag-cloud）
- 水波图（water-wave）
- 迷你柱状图（mini-bar）
- 迷你区域图（mini-area）
- 迷你进度条（mini-progress）
- 带有时间轴的折线图（timeline）
- 图表卡片（chart-card）

[查看图表组件API文档](//ng-alain.com/#/components/charts)

## 如何使用？

> 如果上面组件不能满足你的业务需求，可以直接试用 [G2](https://antv.alipay.com/zh-cn/g2/3.x/index.html) 封装自己的图表组件。

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

### 自定义 G2 组件

你可以参考 [bar.component.ts](https://github.com/cipchk/delon/blob/master/src/core/abc/components/charts/bar/bar.component.ts)。
