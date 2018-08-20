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
  <g2-gauge [title]="'核销率'" height="164" [percent]="percent"></g2-gauge>
  `
})
export class DemoComponent {
    percent = 87;
    constructor() {
        setInterval(() => this.percent = parseInt((Math.random() * 100).toString(), 10), 1000);
    }
}
```
