---
type: Basic
title: count-down
subtitle: Count down
cols: 3
module: import { CountDownModule } from '@delon/abc/count-down';
---

The countdown component depends on [ngx-countdown](https://github.com/cipchk/ngx-countdown).

## Dependencies

```
npm i -S ngx-countdown
```

## API

### count-down

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[target]` | Target time, `number` means seconds | `number | Date` | - |
| `[config]` | [Config](https://github.com/cipchk/ngx-countdown#countdownconfig) paraments | `CountdownConfig` | - |
| `(event)` | Event notification | `EventEmitter<CountdownEvent>` | - |

---

## Examples

### Basic

The simplest usage.

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

### Accuracy

The `0.1s` accuracy usage.

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
