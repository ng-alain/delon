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

import { DemoSfComponent } from '@shared';

import { ModalHelper } from '@delon/theme';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: ` <button nz-button type="button" (click)="open()">Open</button> `,
  standalone: true,
  imports: [NzButtonModule]
})
export class DemoComponent {
  private readonly mh = inject(ModalHelper);
  private readonly msg = inject(NzMessageService);

  open(): void {
    this.mh.create(DemoSfComponent).subscribe(res => this.msg.success(JSON.stringify(res)));
  }
}
```
