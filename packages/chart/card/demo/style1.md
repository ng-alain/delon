---
order: 0
title:
  zh-CN: 风格一
  en-US: Style 1
---

风格一用法。

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <g2-card [title]="'销售额'" [bordered]="true" [total]="'¥ 126,560.00'" footer="日访问量 12,423" contentHeight="46" [action]="action">
    <ng-template #action>
      <nz-tooltip [nzTitle]="'指标说明'">
        <i nz-tooltip nz-icon nzType="info-circle"></i>
      </nz-tooltip>
    </ng-template>
    周同比<trend flag="up" style="margin: 0 16px 0 8px; color: rgba(0,0,0,.85)">12%</trend>
    日环比<trend flag="down" style="margin: 0 0 0 8px; color: rgba(0,0,0,.85)">11%</trend>
  </g2-card>
  `
})
export class DemoComponent {
}
```
