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
import { Component, inject } from '@angular/core';

import { DemoModalComponent } from '@shared';

import { ModalHelper } from '@delon/theme';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button (click)="open()">Open</button>
    <button nz-button (click)="static()">Static</button>
  `,
  imports: [NzButtonModule]
})
export class DemoComponent {
  private modalHelper = inject(ModalHelper);
  private msg = inject(NzMessageService);

  open(): void {
    this.modalHelper.create(DemoModalComponent, { record: { a: 1, b: '2', c: new Date() } }).subscribe(res => {
      this.msg.info(res);
    });
  }

  static(): void {
    this.modalHelper.createStatic(DemoModalComponent, { record: { a: 1, b: '2', c: new Date() } }).subscribe(res => {
      this.msg.info(res);
    });
  }
}
```
