---
order: 1
title:
  zh-CN: 垂直布局
  en-US: Vertical
---

垂直布局。

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <na-view-wrap layout="vertical">
    <na-view-title>title</na-view-title>
    <na-view label="Firefox">A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of volunteers.</na-view>
    <na-view label="Firefox">A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of volunteers.</na-view>
    <na-view label="Firefox">A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of volunteers.</na-view>
  </na-view-wrap>
  `,
})
export class DemoComponent {
}
```
