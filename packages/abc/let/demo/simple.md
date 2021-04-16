---
title:
  zh-CN: 基础样例
  en-US: Basic Usage
order: 1
---

## zh-CN

最简单的用法。

## en-US

Simplest of usage.

```ts
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <p>v1 (use *let directive) called count: {{ v1Count }}; v2 called count: {{ v2Count }};</p>
    <div *let="value1 as v">
      <p>{{ v }}</p>
      <p>{{ v }}</p>
    </div>
    <p>{{ value2 }}</p>
    <p>{{ value2 }}</p>
    <button nz-button (click)="update()">Random Value</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent {
  v1Count = 0;
  v2Count = 0;
  v1 = 'v1';
  v2 = 'v2';

  get value1(): string {
    ++this.v1Count;
    return this.v1;
  }

  get value2(): string {
    ++this.v2Count;
    return this.v2;
  }

  update(): void {
    this.v1 = `v1-${Math.random()}`;
    this.v2 = `v2-${Math.random()}`;
  }
}
```
