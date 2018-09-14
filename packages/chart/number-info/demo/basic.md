---
order: 0
title: 演示
---

各种数据文案的展现方式。

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <number-info subTitle="本周访问" total="12,321" subTotal="17.1" status="up"></number-info>
  `
})
export class DemoComponent {
}
```
