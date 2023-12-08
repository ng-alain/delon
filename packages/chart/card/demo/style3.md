---
order: 0
title:
  zh-CN: 风格三
  en-US: Style 3
---

风格三用法。

```ts
import { Component } from '@angular/core';

import { G2CardModule } from '@delon/chart/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'app-demo',
  template: `
    <g2-card [title]="'移动指标'" [bordered]="true" [total]="'¥ 126,560.00'" [avatar]="avatar" [action]="action">
      <ng-template #avatar><img style="width:56px; height: 56px" src="./assets/img/logo-color.svg" /></ng-template>
      <ng-template #action>
        <i nz-tooltip nzTooltipTitle="指标说明" nz-icon nzType="info-circle"></i>
      </ng-template>
    </g2-card>
  `,
  standalone: true,
  imports: [G2CardModule, NzToolTipModule, NzIconModule]
})
export class DemoComponent {}
```
