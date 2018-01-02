---
title: Charts
subtitle: 图表
order: 20
cols: 2
module: AdChartsModule
---

ng-alain 提供的业务中常用的图表类型，都是基于 [G2](https://antv.alipay.com/g2/doc/index.html) 按照 Ant Design 图表规范封装，需要注意的是 ng-alain 的图表组件以套件形式提供，可以任意组合实现复杂的业务需求。

因为结合了 Ant Design 的标准设计，本着极简的设计思想以及开箱即用的理念，简化了大量 API 配置，所以如果需要灵活定制图表，可以参考 ng-alain 图表实现，自行基于 [G2](https://antv.alipay.com/g2/doc/index.html) 封装图表组件使用。

## API

### chart-card 图表卡片

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| title | 卡片标题 | `string` \| `TemplateRef<any>` | - |
| avatar | 头像 | `string` \| `TemplateRef<any>` | - |
| action | 卡片操作 | `string` \| `TemplateRef<any>` | - |
| total | 数据总量（支持HTML） | `string` | - |
| footer | 卡片底部 | `string` \| `TemplateRef<any>` | - |
| contentHeight | 内容区域高度（单位：`px`） | `string` | - |
| bordered | 是否显示边框 | `boolean` | `false` |

### chart 自定义图表

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| height | 图表高度 | `number` | - |
| resizeTime | window `resize` 事件去抖时长（单位：ms） | `number` | - |
| render | 容器渲染后回调，参数为容器元素 | `EventEmitter<ElementRef>` | - |
| resize | `resize` 事件触发时回调，`resizeTime>0` 时才有效 | `EventEmitter<ElementRef>` | - |
| destroy | 容器调用 `ngOnDestroy` 前回调 | `EventEmitter<ElementRef>` | - |

### mini-bar 迷你柱状图

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| color | 图表颜色 | `string` | `#1890FF` |
| height | 图表高度 | `number` | - |
| data | 数据 | `Array<{ x: number, y: number, [key: string]: any }>` | - |
| borderWidth | 线条粗细 | `number` | `5` |
| padding | 图表内部间距 | `array` | `[8, 8, 8, 8]` |

### mini-area 迷你区域图

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| color | 图表颜色 | `string` | `rgba(24, 144, 255, 0.2)` |
| borderColor | 图表边颜色 | `string` | `#1890FF` |
| height | 图表高度 | `number` | - |
| line | 是否显示描边 | `boolean` | false |
| animate | 是否显示动画 | `boolean` | true |
| padding | 图表内部间距 | `array` | `[8, 8, 8, 8]` |
| xAxis | [x 轴配置](https://antv.alipay.com/g2/doc/tutorial/start/axis.html) | object | - |
| yAxis | [y 轴配置](https://antv.alipay.com/g2/doc/tutorial/start/axis.html) | object | - |
| data | 数据 | `Array<{ x: number, y: number, [key: string]: any }>` | - |

### mini-progress 迷你进度条

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| target | 目标比例 | `number` | - |
| color | 进度条颜色 | `string` | - |
| strokeWidth | 进度条高度 | `number` | - |
| percent | 进度比例 | `number` | - |

### bar 柱状图

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| title | 图表标题 | `string` \| `TemplateRef<any>` | - |
| color | 图表颜色 | `string` | `rgba(24, 144, 255, 0.85)` |
| padding | 图表内部间距 | `array` | \[32, 0, 32, 40\] |
| height | 图表高度 | `number` | - |
| data | 数据 | `Array<{ x: any, y: any, [key: string]: any }>` | - |
| autoLabel | 在宽度不足时，自动隐藏 x 轴的 label | `boolean` | `true` |

### pie 饼图

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| animate | 是否显示动画 | `boolean` | `true` |
| color | 图表颜色 | `string` | `rgba(24, 144, 255, 0.85)` |
| height | 图表高度 | `number` | - |
| hasLegend | 是否显示 legend | `boolean` | `false` |
| padding | 图表内部间距 | `number[]` | `[12, 0, 12, 0]` |
| percent | 占比 | `number` | - |
| lineWidth | 边框粗细 | `number` | `0` |
| inner | 内部极坐标系的半径 | `number` | `0.75` |
| tooltip | 是否显示 tooltip | `boolean` | true |
| select | 几何标记的选中模式 | `boolean` | true |
| subTitle | 图表子标题 | `string` | - |
| total | 总量 | `string` | - |
| data | 数据 | `Array<{ x: number, y: number, [key: string]: any }>` | - |

### timeline 折线图

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| title | 图表标题 | `string` \| `TemplateRef<any>` | - |
| data | 数据 | `Array<{ x: Date, y1: number , y2: number, [key: string]: any }>` | - |
| titleMap | 指标别名 | `{ y1: string , y2: string }` | - |
| colorMap | 颜色 | `{ y1: string , y2: string }` | `{ y1: '#1890FF', y2: '#2FC25B' }` |
| height | 高度值 | `number` | `400` |
| padding | 图表内部间距 | `number[]` | `[60, 20, 40, 40]` |
| borderWidth | 线条 | `number` | `2` |

### gauge 仪表盘

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| title | 图表标题 | `string` | - |
| height | 图表高度 | `number` | - |
| color | 图表颜色 | `string` | `#2F9CFF` |
| bgColor | 图表北京颜色 | `string` | `#F0F2F5` |
| percent | 进度比例 | `number` | - |
| format | 坐标轴格式 | `Function` | - |

### tag-cloud 标签云

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| tags | 标题 | `Array<{ name: string, value: number, [key: string]: any }>` | - |
| height | 高度值 | `number` | - |

### water-wave 水波图

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| title | 图表标题 | `string` \| `TemplateRef<any>` | - |
| height | 图表高度 | `number` | `160` |
| color | 图表颜色 | `string` | `#1890FF` |
| percent | 进度比例 | `number` | - |

### radar 雷达图

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| title | 图表标题 | `string` \| `TemplateRef<any>` | - |
| height | 图表高度 | `number` | - |
| hasLegend | 是否显示 legend | `boolean` | `false` |
| padding | 图表内部间距 | `array` | `[24, 30, 16, 30]` |
| data | 数据 | `Array<{ name: string, label: string, value: number, [key: string]: any }>` | - |
