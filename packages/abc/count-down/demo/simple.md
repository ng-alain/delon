---
order: 1
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

简单的倒计时组件使用。

## en-US

The simplest usage.

```ts
import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { CountdownEvent } from 'ngx-countdown';

@Component({
  selector: 'app-demo',
  template: `
    <div>
      <count-down #cd [target]="10" (event)="handleEvent($event)" style="font-size: 20px;"></count-down>
    </div>
    <button nz-button (click)="cd.instance.pause()">Pause</button>
    <button nz-button (click)="cd.instance.resume()">Resume</button>
  `,
})
export class DemoComponent {
  constructor(private msg: NzMessageService) {}

  handleEvent(e: CountdownEvent) {
    if (e.action === 'done') {
      this.msg.success('finised');
    }
  }
}
```
