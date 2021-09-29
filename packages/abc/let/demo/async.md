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
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-demo',
  template: `
    <ng-container *let="timer$ | async as time">
      <p>Timer value: {{ time }}</p>
      <p>Timer value: {{ time }}</p>
      <p>Timer value: {{ time }}</p>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent {
  timer$ = interval(1000).pipe(startWith(0));
}
```
