---
order: 1
title: 开始使用
type: Documents
---

图表是基于 [G2](https://g2.antv.antgroup.com/) (5.x) 的基础上二次封装，提供了业务中常用的图表套件，可以单独使用，也可以组合起来实现复杂的展示效果。

## v4 → v5 升级须知

`@antv/g2` 已由 v4 升级到 **v5**（`^5.4.8`）。组件公开 API（`[data]`、`[height]`、`[padding]`、`[theme]`、`(ready)`、`(clickItem)` 等）**名称与类型不变**（唯一例外：`g2-water-wave` 的 `[height]` 重命名为 `[size]`），但底层渲染模型改为**异步 spec**：

- **渲染是异步的**：`ready` 事件在**首个 `AFTER_RENDER`（首帧真正画完）**时触发，且**只触发一次**；`loaded`（模板据此收起骨架屏）同时置为 `true`。要拿到图表实例，请订阅 `(ready)`：
  ```html
  <g2-bar [data]="data()" (ready)="onReady($event)" (error)="onError($event)" />
  ```
- **失败与 `ready` 是两层**：G2 类库未加载、渲染失败都会走 **`(error)`** 事件（同时 `console.error`），`ready` 不会触发、骨架屏不收起。
- **不再有 `install()` 公开方法**：组件扩展点用受保护的 `afterCreate(chart)` / `onRendered()`；数据变更用 `changeData()`（内部走串行链，不会与首帧竞态）。
- **交互降级**：v4 的 `active-region`、`drag-move` 在 v5 无等价实现，`[interaction]` 传入时会降级为无交互；其余交互映射见各组件文档。
- **tooltip 限制**：`domStyles`、`itemTpl` 不再可用（v5 由内置 tooltip 渲染）；视图级 `tooltip` **不会传给子 mark**，需要在 mark 级设置。
- **点击事件载荷类型**：`Event` → `G2Event`（`ev.data?.data` 为命中数据项）。
- **`g2-tag-cloud`**：不再把 `x/y/size/rotate/font` 写回数据行（布局改用 v5 内置 `wordCloud` mark 完成，另需 `@antv/data-set` 已从依赖中移除）。
- **`g2-water-wave`**：v4 的手写 canvas 换成 v5 的 [`liquid`](https://g2.antv.antgroup.com/examples/general/Liquid) mark（中心百分比由 G2 内置文本绘制）；**`[height]` 重命名为 `[size]`**（正方形边长）；`[animate]` **只控制进场动画**（水波自身的流动由 G2 内置、始终运行），尺寸自适应交给 `autoFit`。
- **转置图表的固定柱厚**：v5 里转置（`coordinate.transform: [{ type: 'transpose' }]`）时，interval 的**屏幕厚度由 `style.minWidth`/`maxWidth` 夹取**（像素），`style.minHeight` 夹的是屏幕宽 —— 因此 v4 的 `.size(30)` 不能只靠 `encode.size` 复现，需同时写 `style: { minWidth: 30, maxWidth: 30 }`。


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
      'https://gw.alipayobjects.com/os/lib/antv/g2/5.4.8/dist/g2.min.js',
    ],
  },
};

export class DelonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [
        provideAlainConfig(alainConfig)
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

也可以在 `angular.json` 配置 `assets` 选项（有关 [assets](https://angular.cn/guide/workspace-config#assets-configuration) 文档），从 `node_modules` 来获得G2类库，例如：

```json
"assets": [
  {
    "glob": "**/*",
    "input": "./node_modules/@antv/g2/dist",
    "output": "/@antv/g2/"
  }
]
```

最后修改全局配置的 `libs` 参数为：

```ts
// global-config.module.ts
const alainConfig: AlainConfig = {
  chart: { 
    libs: ['./assets/@antv/g2/g2.min.js'],
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
        provideAlainConfig(alainConfig)
      ]
    };
  }
}
```
