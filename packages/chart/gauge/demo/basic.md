---
order: 0
title:
  zh-CN: 基础
  en-US: Basic
---

基础用法。

```ts
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

import { G2GaugeModule } from '@delon/chart/gauge';

@Component({
  selector: 'app-demo',
  template: ` <g2-gauge [title]="'核销率'" height="164" [percent]="percent()" [color]="color()" /> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [G2GaugeModule]
})
export class DemoComponent {
  readonly percent = signal(36);
  readonly color = signal('#2f9cff');

  constructor(platform: Platform) {
    if (!platform.isBrowser) return;

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
