---
order: 1
title:
  zh-CN: 延迟
  en-US: Delay
---

## zh-CN

延迟显示 loading 效果。当调用 `open()` 后 `delay` 时间内调用 `close()`，则不显示 loading 状态。

## en-US

Specifies a delay for loading state. If call `open()` ends during delay, loading status won't appear.

```ts
import { Component } from '@angular/core';
import { LoadingService } from '@delon/abc/loading';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button (click)="show()">Display after 1 seconds</button>
    <button nz-button (click)="close()">Close</button>
  `,
})
export class DemoComponent {
  constructor(private loadingSrv: LoadingService) {}

  show(): void {
    this.loadingSrv.open({ delay: 1000 });

    setTimeout(() => this.loadingSrv.close(), 1000 * 5);
  }

  close(): void {
    this.loadingSrv.close();
  }
}
```
