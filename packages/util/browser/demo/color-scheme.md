---
title:
  zh-CN: 系统颜色方案
  en-US: System Color Scheme
type: example
---

## zh-CN

跟随系统的颜色方案，当系统切换深色模式时实时更新。

## en-US

Follows the system color scheme, and updates in real time when the system switches to dark mode.

```ts
import { Component } from '@angular/core';

import { colorScheme } from '@delon/util';

@Component({
  selector: 'app-demo',
  template: `<p>Color scheme: <strong>{{ scheme() }}</strong></p>`
})
export class DemoComponent {
  readonly scheme = colorScheme();
}
```
