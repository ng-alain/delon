---
title:
  zh-CN: 拖动
  en-US: Drag
order: 1
---

## zh-CN

支持拖动对话框。

## en-US

Support for dragging dialogs.

```ts
import { Component, inject } from '@angular/core';

import { DemoModalComponent } from '@shared';

import { ModalHelper } from '@delon/theme';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: ` <button nz-button (click)="open()">Open</button> `,
  imports: [NzButtonModule]
})
export class DemoComponent {
  private modalHelper = inject(ModalHelper);
  private msg = inject(NzMessageService);

  open(): void {
    this.modalHelper
      .create(DemoModalComponent, { record: { a: 1, b: '2', c: new Date() } }, { drag: true })
      .subscribe(res => {
        this.msg.info(res);
      });
  }
}
```
