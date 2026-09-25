---
order: 0
title:
  zh-CN: 基础
  en-US: Basic
---

## zh-CN

基础用法。

## en-US

Basic usage.

```ts
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

import { G2GaugeModule } from '@delon/chart/gauge';

@Component({
  selector: 'app-demo',
  template: `
    @let title = '核销率';
    @let size = 164;
    <g2-gauge [title]="title" [height]="size" [width]="size" [percent]="percent()" [color]="color()" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [G2GaugeModule]
})
export class DemoComponent {
  readonly percent = signal(36);
  readonly color = signal('#2f9cff');

  constructor() {
    interval(1000)
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        const percent = parseInt((Math.random() * 100).toString(), 10);
        this.percent.set(percent);
        this.color.set(percent > 50 ? '#f50' : '#2f9cff');
      });
  }
}
```
