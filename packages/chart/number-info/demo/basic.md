---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

各种数据文案的展现方式。

## en-US

Different ways to present number info.

```ts
import { Component } from '@angular/core';

import { NumberInfoModule } from '@delon/chart/number-info';

@Component({
  selector: 'app-demo',
  template: ` <number-info subTitle="本周访问" total="12,321" subTotal="17.1" status="up" /> `,
  imports: [NumberInfoModule]
})
export class DemoComponent {}
```
