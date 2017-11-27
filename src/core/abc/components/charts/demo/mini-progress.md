---
order: 3
title: 迷你进度条
---

用于显示跟速度相关图形再适合不过。

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <mini-progress percent="78" strokeWidth="8" target="80"></mini-progress>
  `
})
export class DemoComponent {
}
```
