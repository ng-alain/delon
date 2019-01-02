---
title: g2-chart
subtitle: 自定义图表
cols: 1
module: G2CustomModule
type: Components
---

使用 `g2-custom` 组件可以更快速的封装自己的图表组件。

## 如何使用

一个简单示例模板：

```ts
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <g2-custom (render)="render($event)"></g2-custom>
  `,
})
export class DemoComponent {
  render(el: ElementRef) {
    // 开始编写 G2 代码
  }
}
```

### 如何开发 G2

可能你会遇到未找到 `G2`，请参考[常见问题](/chart/faq)。

## 链接

- [G2 文档](https://www.yuque.com/antv/g2-docs)
- [G2 示例](https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html)

## API

### g2-custom

| 参数           | 说明                | 类型                       | 默认值 |
| -------------- | ------------------- | -------------------------- | ------ |
| `[height]`     | 高                  | `number`                   | -      |
| `[resizeTime]` | resize 事件去抖时长 | `number`                   | `200`  |
| `(render)`     | 渲染事件            | `EventEmitter<ElementRef>` | -      |
| `(resize)`     | resize 事件         | `EventEmitter<ElementRef>` | -      |
| `(destroy)`    | 销毁事件            | `EventEmitter<ElementRef>` | -      |
