---
order: 2
title:
  zh-CN: 精度
  en-US: Accuracy
---

## zh-CN

0.1s精度使用方式。

## en-US

The `0.1s` accuracy usage.

```ts
import { Component } from '@angular/core';
import { CountdownConfig } from 'ngx-countdown';

@Component({
  selector: 'app-demo',
  template: ` <count-down [config]="config"></count-down> `,
})
export class DemoComponent {
  config: CountdownConfig = {
    format: `s.S`,
    leftTime: 30,
  };
}
```
