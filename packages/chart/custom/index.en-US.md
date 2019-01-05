---
title: g2-chart
subtitle: Custom Chart
cols: 1
module: G2CustomModule
type: Components
---

Use `g2-custom` component to package your G2 chart.

## How to use

A simple example template:

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
    // Coding G2 code
  }
}
```

### How to develop G2

If throw error `G2` not found, please refer to [Frequently Asked Questions](/chart/faq).

## Links

- [G2 Document](https://www.yuque.com/antv/g2-docs-en)
- [G2 Demo](https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html)

## API

### g2-custom

| Property       | Description                | Type                       | Default |
| -------------- | -------------------------- | -------------------------- | ------- |
| `[height]`     | Height of chart container  | `number`                   | -       |
| `[resizeTime]` | Resize event debounce time | `number`                   | `200`   |
| `(render)`     | Render event               | `EventEmitter<ElementRef>` | -       |
| `(resize)`     | Resize event               | `EventEmitter<ElementRef>` | -       |
| `(destroy)`    | Destroy event              | `EventEmitter<ElementRef>` | -       |
