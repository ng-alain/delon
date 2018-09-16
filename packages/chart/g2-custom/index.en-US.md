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

G2 built-in TypeScript definition file, in fact, G2 can't be used alone in Angular. Most of G2 needs to depend on `@antv/data-set` or other plugins, and these not definition files. In other words, using TypeScript import modules is not most friendly way ([#679](https://github.com/ng-alain/ng-alain/issues/679)). So `@delon/chart` use most primitive method, but there are still some details to be note:

- Import all G2 related dependencies in the `scripts` node of `angular.json`
- Define G2 related type definitions in `src/typings.d.ts`

Of course, the above [g2 plugin](/cli/plugin#g2) can be used in one step.

## API

| Property       | Description                | Type                       | Default |
| -------------- | -------------------------- | -------------------------- | ------- |
| `[height]`     | Height of chart container  | `number`                   | -       |
| `[resizeTime]` | Resize event debounce time | `number`                   | `200`   |
| `(render)`     | Render event               | `EventEmitter<ElementRef>` | -       |
| `(resize)`     | Resize event               | `EventEmitter<ElementRef>` | -       |
| `(destroy)`    | Destroy event              | `EventEmitter<ElementRef>` | -       |
