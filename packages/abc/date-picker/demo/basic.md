---
order: 0
title:
  zh-CN: 基础
  en-US: Basic
---

## zh-CN

使用 `ngModel`、`ngModelEnd` 来表示开始与结束值。

## en-US

Start and end values with `ngModel`, `ngModelEnd`.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    result: {{ i | json }}<br />
    <nz-range-picker [(ngModel)]="i.start" extend [(ngModelEnd)]="i.end"></nz-range-picker>
  `,
})
export class DemoComponent {
  i: { start?: Date; end?: Date } = {};
}
```
