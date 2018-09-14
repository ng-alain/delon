---
title: g2-chart
subtitle: 自定义图表
cols: 1
module: G2ChartModule
type: Components
---

使用 `g2-chart` 组件可以更快速的封装自己的图表组件。

## 如何使用

一个简单示例模板：

```ts
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <g2-chart (render)="render($event)"></g2-chart>
  `,
})
export class DemoComponent {
  render(el: ElementRef) {
    // 开始编写 G2 代码
  }
}
```

### 如何开发 G2

G2 虽然内置 TypeScript 定义文件，事实上 G2 并无法单独使用，它需要依赖像 `@antv/data-set` 或其他插件，而这些并没有对应的定义文件。换句话说，对于使用 TypeScript 导入模块的方式并不是最友好的方式（[#679](https://github.com/ng-alain/ng-alain/issues/679)）。故而整个 `@delon/chart` 采用最原始的办法，但仍然有一些细节值得注意：

- 在 `angular.json` 的 `scripts` 节点导入所有 G2 相关依赖包
- 在 `src/typings.d.ts` 定义 G2 相关的类型定义

当然，以上使用 [g2 插件](/cli/plugin#g2) 可以一步到位。

## API

| 参数           | 说明                | 类型                       | 默认值 |
| -------------- | ------------------- | -------------------------- | ------ |
| `[height]`     | 高                  | `number`                   | -      |
| `[resizeTime]` | resize 事件去抖时长 | `number`                   | `200`  |
| `(render)`     | 渲染事件            | `EventEmitter<ElementRef>` | -      |
| `(resize)`     | resize 事件         | `EventEmitter<ElementRef>` | -      |
| `(destroy)`    | 销毁事件            | `EventEmitter<ElementRef>` | -      |
