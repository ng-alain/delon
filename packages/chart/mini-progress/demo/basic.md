---
order: 0
title:
  zh-CN: 基础
  en-US: Basic
---

基础用法。

```ts
import { Component } from '@angular/core';

import { G2MiniProgressModule } from '@delon/chart/mini-progress';

@Component({
  selector: 'app-demo',
  template: ` <g2-mini-progress percent="78" strokeWidth="8" target="80" /> `,
  imports: [G2MiniProgressModule]
})
export class DemoComponent {}
```
