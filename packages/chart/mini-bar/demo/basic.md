---
order: 0
title:
  zh-CN: 基础
  en-US: Basic
---

基础用法。

```ts
import { Component, inject } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniAreaClickItem, G2MiniAreaData } from '@delon/chart/mini-area';
import { G2MiniBarModule } from '@delon/chart/mini-bar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-mini-bar height="45" [data]="visitData" (clickItem)="handleClick($event)" />
  `,
  imports: [NzButtonModule, G2MiniBarModule]
})
export class DemoComponent {
  private readonly msg = inject(NzMessageService);
  visitData = this.genData();

  private genData(): G2MiniAreaData[] {
    const beginDay = new Date().getTime();
    const res: G2MiniAreaData[] = [];
    for (let i = 0; i < 20; i += 1) {
      res.push({
        x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10
      });
    }
    return res;
  }

  refresh(): void {
    this.visitData = this.genData();
  }

  handleClick(data: G2MiniAreaClickItem): void {
    this.msg.info(`${data.item.x} - ${data.item.y}`);
  }
}
```
