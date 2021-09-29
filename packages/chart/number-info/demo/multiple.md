---
order: 2
title:
  zh-CN: 多列
  en-US: Multiple
---

## zh-CN

多个`number-info`组件在一起时增加分隔符。

## en-US

Should be show a separator when multiple `number-info` components.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <number-info subTitle="今日访问" total="12,321"></number-info>
    <number-info subTitle="本周访问" total="12,32100"></number-info>
    <number-info subTitle="本月访问" total="12,32100000"></number-info>
  `,
})
export class DemoComponent {}
```
