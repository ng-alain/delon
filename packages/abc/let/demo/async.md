---
title:
  zh-CN: 异步
  en-US: async
order: 2
---

## zh-CN

一次订阅多次使用。

## en-US

One subscription and multiple use.

```ts
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval } from 'rxjs';
import { startWith } from 'rxjs/operators';

import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'app-demo',
  template: `
    <ng-container *ngIf="timer$ !== null">
      <ng-container *let="timer$ | async as time">
        <p>Timer value: {{ time }}</p>
        <p>Timer value: {{ time }}</p>
        <p>Timer value: {{ time }}</p>
      </ng-container>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoComponent {
  timer$: NzSafeAny | null = null;

  constructor(platform: Platform) {
    if (!platform.isBrowser) return;

    this.timer$ = interval(1000).pipe(startWith(0));
  }
}
```
