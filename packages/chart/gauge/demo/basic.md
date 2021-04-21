---
order: 0
title:
  zh-CN: 基础
  en-US: Basic
---

基础用法。

```ts
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: ` <g2-gauge [title]="'核销率'" height="164" [percent]="percent" [color]="color"></g2-gauge> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent implements OnDestroy {
  percent = 36;
  color = '#2f9cff';
  private time$: any;

  constructor(cdr: ChangeDetectorRef) {
    this.time$ = setInterval(() => {
      this.percent = parseInt((Math.random() * 100).toString(), 10);
      this.color = this.percent > 50 ? '#f50' : '#2f9cff';
      cdr.detectChanges();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.time$);
  }
}
```
