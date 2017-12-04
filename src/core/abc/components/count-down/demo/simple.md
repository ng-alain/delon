---
order: 0
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
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-demo',
  template: `
  <p class="mb-sm">10s: <count-down [target]="10" (end)="onEnd()" style="font-size: 20px"></count-down></p>
  <p>10m: <count-down [target]="target"></count-down></p>
  `
})
export class DemoComponent {
    target = moment().add(10, 'm');
    constructor(private msg: NzMessageService) {}

    onEnd() {
        this.msg.success('finised');
    }
}
```
