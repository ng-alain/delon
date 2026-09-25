---
title: g2-chart
subtitle: Custom Chart
cols: 1
type: G2
module: import { G2CustomModule } from '@delon/chart/custom';
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

- [G2 Documents](https://g2.antv.antgroup.com/en/)
- [G2 Examples](https://g2.antv.antgroup.com/examples)

## API

### g2-custom

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[repaint]` | Whether to repaint when the data changes again | `boolean` | `true` |
| `[delay]` | Delayed rendering, unit: ms | `number` | `0` |
| `[height]` | Height of chart container | `number` | - |
| `[resizeTime]` | Resize event debounce time (`0` disables the resize listener) | `number` | `0` |
| `(render)` | Render event | `output<ElementRef>` | - |
| `(resize)` | Resize event | `output<ElementRef>` | - |
| `(destroy)` | Destroy event (**not emitted in the current version, kept for compatibility**) | `output<ElementRef>` | - |
| `(ready)` | Callback when G2 is initialized | `output<Chart>` | - |
| `(error)` | Callback when rendering fails (G2 not loaded or render throws); `(ready)` will not fire | `output<unknown>` | - |
| `[theme]` | Custom chart theme | `string \| LooseObject` | - |
