---
order: 0
title:
  zh-CN: 风格二
  en-US: Style 2
---

风格二用法。

```ts
import { Component } from '@angular/core';

import { G2CardModule } from '@delon/chart/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'app-demo',
  template: `
    <g2-card
      [title]="'移动指标'"
      [bordered]="true"
      [total]="'¥ 126,560.00'"
      footer="日访问量 12,423"
      [avatar]="avatar"
      [action]="action"
    >
      <ng-template #avatar><img style="width:56px; height: 56px" src="./assets/img/logo-color.svg" /></ng-template>
      <ng-template #action>
        <nz-icon nz-tooltip nzTooltipTitle="指标说明" nzType="info-circle" />
      </ng-template>
    </g2-card>
  `,
  imports: [G2CardModule, NzToolTipModule, NzIconModule]
})
export class DemoComponent {}
```
