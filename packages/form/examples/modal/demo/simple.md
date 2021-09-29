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
import { ModalHelper } from '@delon/theme';
import { DemoSfComponent } from '@shared';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button type="button" (click)="open()">Open</button>
  `,
})
export class DemoComponent {
  constructor(private mh: ModalHelper) {}

  open(): void {
    this.mh.create(DemoSfComponent).subscribe(console.log);
  }
}
```
