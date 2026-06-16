---
type: Basic
title: count-down
subtitle: 倒计时
cols: 3
module: import { CountDownModule } from '@delon/abc/count-down';
---

倒计时组件，依赖 [ngx-countdown](https://github.com/cipchk/ngx-countdown)。

## 依赖

```
npm i -S ngx-countdown
```

## API

### count-down

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[target]` | 目标时间，`number` 表示秒 | `number | Date` | - |
| `[config]` | 完整 [Config](https://github.com/cipchk/ngx-countdown#countdownconfig) 参数 | `CountdownConfig` | - |
| `(event)` | 事件通知 | `EventEmitter<CountdownEvent>` | - |

---

## 代码示例

### 基本

简单的倒计时组件使用。

```typescript
import { Component, inject } from '@angular/core';

import { CountdownEvent } from 'ngx-countdown';

import { CountDownComponent } from '@delon/abc/count-down';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'components-count-down-simple',
  template: `
    <div>
      <count-down #cd [target]="10" (event)="handleEvent($event)" style="font-size: 20px;" />
    </div>
    <button nz-button (click)="cd.instance.pause()">Pause</button>
    <button nz-button (click)="cd.instance.resume()">Resume</button>
  `,
  imports: [CountDownComponent, NzButtonModule]
})
export class ComponentsCountDownSimple {
  private readonly msg = inject(NzMessageService);

  handleEvent(e: CountdownEvent): void {
    if (e.action === 'done') {
      this.msg.success('finised');
    }
  }
}
```

### 精度

0.1s精度使用方式。

```typescript
import { Component } from '@angular/core';

import { CountdownConfig } from 'ngx-countdown';

import { CountDownComponent } from '@delon/abc/count-down';

@Component({
  selector: 'components-count-down-accuracy',
  template: ` <count-down [config]="config" /> `,
  imports: [CountDownComponent]
})
export class ComponentsCountDownAccuracy {
  config: CountdownConfig = {
    format: `s.S`,
    leftTime: 30
  };
}
```
