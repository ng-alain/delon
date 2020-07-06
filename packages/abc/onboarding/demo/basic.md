---
title:
  zh-CN: 基础样例
  en-US: Basic Usage
order: 0
---

## zh-CN

最简单的用法。

## en-US

Simplest of usage.

```ts
import { Component } from '@angular/core';
import { OnboardingService } from '@delon/abc/onboarding';

@Component({
  selector: 'demo',
  template: `
    <div class="mb-md">
      <button class="test1-1" nz-button nzType="primary">First Button</button>
      <button class="test1-2" nz-button nzType="link">Second Button</button>
      <button class="test1-3" nz-button nzType="dashed">Third Button</button>
    </div>
    <button nz-button (click)="start()">Start</button>
  `,
})
export class DemoComponent {
  constructor(private srv: OnboardingService) {}

  start(): void {
    this.srv.start({
      items: [
        { selectors: '.test1-1', content: 'The user guidance is to help users better understand and use the product', width: 300 },
        { selectors: '.test1-2', title: 'Test2', content: 'The user guidance is to help users better understand and use the product' },
        { selectors: '.test1-3', title: 'Test3', content: 'The user guidance is to help users better understand and use the product' },
      ],
    });
  }
}
```
