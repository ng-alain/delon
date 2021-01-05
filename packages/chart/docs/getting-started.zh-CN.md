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

### G2类库加载

默认情况下，在[全局配置](/docs/global-config)已经指定类库 CDN 地址：

```ts
// global-config.module.ts
const alainConfig: AlainConfig = {
  chart: { 
    // 以下是默认配置，如果项目无法外网访问，可以根据 `angular.json` 配置将依赖包直接使用 `./assets***` 路径
    libs: [
      'https://gw.alipayobjects.com/os/lib/antv/g2/4.1.4/dist/g2.min.js',
      'https://gw.alipayobjects.com/os/lib/antv/data-set/0.11.7/dist/data-set.js',
    ],
  },
};

export class DelonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [
        { provide: ALAIN_CONFIG, useValue: alainConfig }
      ]
    };
  }
}
```

当然也可以在 `index.html` 直接引入 CDN 地址，例如：

```html
<!-- 引入在线资源，选择你需要的 g2 版本以替换 version 变量 -->
<script src="https://gw.alipayobjects.com/os/lib/antv/g2/{{version}}/dist/g2.min.js"></script>
```

也可以在 `angular.json` 配置 `assets` 选项，从 `node_modules` 来获得G2类库，例如：

```json
"assets": [
  {
    "glob": "**/*",
    "input": "./node_modules/@antv/g2/dist",
    "output": "/@antv/g2/"
  },
  {
    "glob": "**/*",
    "input": "./node_modules/@antv/data-set/dist",
    "output": "/@antv/data-set/"
  }
]
```

最后修改全局配置的 `libs` 参数为：

```ts
// global-config.module.ts
const alainConfig: AlainConfig = {
  chart: { 
    libs: [
      './assets/@antv/g2/g2.min.js',
      './assets/@antv/data-set/data-set.js',
    ],
  },
};
```

### 导入模块

```ts
// shared.module.ts
import { G2BarModule } from '@delon/chart/bar';

@NgModule({
  imports: [ G2BarModule ],
  exports: [ G2BarModule ]
})
```

## 自定义 G2 组件

使用 [g2-chart](/chart/custom) 组件快速自定义一个图表，可以减少不必要的组件渲染过程中所产生的奇怪问题。

## 配置图表主题

对所有 G2 进行配置图表主题，但只提供接口，有关配置图表主题参数，请参考[G2官网](https://g2.antv.vision/zh/docs/manual/tutorial/theme)。

```ts
// global-config.module.ts
const alainConfig: AlainConfig = {
  chart: { theme: 'dark' },
};

export class DelonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [
        { provide: ALAIN_CONFIG, useValue: alainConfig }
      ]
    };
  }
}
```
