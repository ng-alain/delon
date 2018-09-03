---
order: 0
title: 基础
---

使用 `ngModel`、`ngModelEnd` 来表示开始与结束值。

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  result: {{i | json}}<br>
  <range-picker [(ngModel)]="i.start" [(ngModelEnd)]="i.end"></range-picker>
  `,
})
export class DemoComponent {
  i: any = {};
}
```
