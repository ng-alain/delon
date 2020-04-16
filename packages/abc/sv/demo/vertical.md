---
order: 4
title:
  zh-CN: 垂直布局
  en-US: Vertical
---

## zh-CN

垂直布局。

## en-US

Vertical layout.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <sv-container layout="vertical">
    <sv-title>title</sv-title>
    <sv label="Firefox">A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of volunteers.</sv>
    <sv label="Firefox">A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of volunteers.</sv>
    <sv label="Firefox">A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of volunteers.</sv>
  </sv-container>
  `,
})
export class DemoComponent {
}
```
