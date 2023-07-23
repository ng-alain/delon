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
import { Component } from '@angular/core';
import { ModalHelper } from '@delon/theme';
import { DemoModalComponent } from '@shared';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button (click)="open()">Open</button>
  `,
})
export class DemoComponent {
  constructor(private modalHelper: ModalHelper, private msg: NzMessageService) {}

  open(): void {
    this.modalHelper.create(DemoModalComponent, { record: { a: 1, b: '2', c: new Date() } }, { drag: true }).subscribe(res => {
      this.msg.info(res);
    });
  }
}
```
