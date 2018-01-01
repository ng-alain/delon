---
order: 0
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

@Component({
  selector: 'app-demo',
  template: `<count-down [config]="config"></count-down>`
})
export class DemoComponent {
    config: any = {
        template: `$!s-ext!秒`,
        leftTime: 30
    };
}
```
