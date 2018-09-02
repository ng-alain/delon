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
  <na-number-info subTitle="本周访问" total="12,321" subTotal="17.1" status="up"></na-number-info>
  `
})
export class DemoComponent {
}
```
