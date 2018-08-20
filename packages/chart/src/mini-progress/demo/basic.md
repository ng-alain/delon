---
order: 0
title:
  zh-CN: 基础
  en-US: Basic
---

基础用法。

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <g2-mini-progress percent="78" strokeWidth="8" target="80"></g2-mini-progress>
  `
})
export class DemoComponent {
}
```
