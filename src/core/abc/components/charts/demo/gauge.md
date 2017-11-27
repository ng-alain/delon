---
order: 7
title: 仪表盘
---

仪表盘是一种进度展示方式，可以更直观的展示当前的进展情况，通常也可表示占比。

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <gauge title="核销率" height="164" percent="87"></gauge>
  `
})
export class DemoComponent {
}
```
