---
order: 0
title:
  zh-CN: 基础
  en-US: Basic
---

基础用法。

```ts
import { Component, OnInit } from '@angular/core';
import format from 'date-fns/format';

@Component({
  selector: 'app-demo',
  template: `
  <g2-mini-bar height="45" [data]="visitData"></g2-mini-bar>
  `
})
export class DemoComponent implements OnInit {
  visitData: any[] = [];
  ngOnInit(): void {
    const beginDay = new Date().getTime();
    for (let i = 0; i < 20; i += 1) {
      this.visitData.push({
        x: format(new Date(beginDay + (1000 * 60 * 60 * 24 * i)), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10,
      });
    }
  }
}
```
