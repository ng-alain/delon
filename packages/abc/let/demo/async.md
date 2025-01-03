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
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval, startWith } from 'rxjs';

import { LetDirective } from '@delon/abc/let';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'app-demo',
  template: `
    @if (timer$ !== null) {
      <ng-container *let="timer$ | async as time">
        <p>Timer value: {{ time }}</p>
        <p>Timer value: {{ time }}</p>
        <p>Timer value: {{ time }}</p>
      </ng-container>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [LetDirective, AsyncPipe]
})
export class DemoComponent {
  timer$: NzSafeAny | null = null;

  constructor(platform: Platform) {
    if (!platform.isBrowser) return;

    this.timer$ = interval(1000).pipe(startWith(0));
  }
}
```
